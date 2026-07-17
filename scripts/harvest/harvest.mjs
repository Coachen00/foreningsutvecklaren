#!/usr/bin/env node
/**
 * Skördare för "Uppdateringar från rutiner".
 *
 * Hämtar poster från utvalda källor (RSS, SvFF-sajternas sitemaps,
 * RF-SISU:s nyhetsarkiv) — rubrik + länk + kort sammanfattning — och
 * skriver rader med status = 'pending' till Supabase-tabellen harvest_items.
 * Granskning sker manuellt i Supabase Dashboard innan något blir publikt.
 *
 * KÖR: node scripts/harvest/harvest.mjs
 * KRÄVER env: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY  (sätts som GitHub secrets)
 *
 * --dry-run: kör hela kedjan men skriver inte till Supabase, skriver ut
 * posterna som JSON till stdout. Kräver inte SUPABASE-env.
 *
 * Vi lagrar ALDRIG kopierad fulltext — bara rubrik, kort sammanfattning och
 * länk. Respektera varje källas robots.txt och användarvillkor (sources.json).
 * `/api/`-vägar på gbgfotboll.se och svenskfotboll.se är Disallow i robots.txt
 * — därför används sitemap + artikelsidor för de källorna, aldrig news-API:t.
 */
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { createClient } from "@supabase/supabase-js";
import Anthropic from "@anthropic-ai/sdk";

const __dirname = dirname(fileURLToPath(import.meta.url));

const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const anthropic = process.env.ANTHROPIC_API_KEY ? new Anthropic() : null;

const USER_AGENT = "foreningsutvecklaren-harvester/1.0";
const FETCH_TIMEOUT_MS = 15000;

/** Normalisera URL till stabil dedupe-nyckel (utan query/hash/trailing slash). */
export function dedupeKey(url) {
  try {
    const u = new URL(url);
    return (u.origin + u.pathname).replace(/\/$/, "").toLowerCase();
  } catch {
    return url.trim().toLowerCase();
  }
}

/** Avkodar de vanligaste namngivna entiteterna samt numeriska (&#NN; / &#xHH;). */
export function decodeHtmlEntities(s) {
  const named = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };
  return s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, ent) => {
    if (ent[0] === "#") {
      const codePoint =
        ent[1].toLowerCase() === "x"
          ? parseInt(ent.slice(2), 16)
          : parseInt(ent.slice(1), 10);
      return Number.isNaN(codePoint) ? match : String.fromCodePoint(codePoint);
    }
    return named[ent.toLowerCase()] ?? match;
  });
}

export function stripHtml(s) {
  return decodeHtmlEntities(
    s.replace(/<!\[CDATA\[|\]\]>/g, "").replace(/<[^>]+>/g, " "),
  )
    .replace(/\s+/g, " ")
    .trim();
}

/** Sammanfattning via trunkering till en mening/~220 tecken. Synkron fallback när Claude inte är tillgängligt. */
function truncateSummary(rawDescription, title) {
  const text = stripHtml(rawDescription || "") || title;
  if (text.length <= 220) return text;
  const cut = text.slice(0, 220);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 120 ? cut.slice(0, lastSpace) : cut).trim() + "…";
}

/**
 * Sammanfattning på svenska via Claude. Faller tillbaka till truncateSummary
 * om ANTHROPIC_API_KEY saknas, svaret är tomt/för långt, eller anropet misslyckas.
 */
async function summarize(rawDescription, title) {
  if (!anthropic) return truncateSummary(rawDescription, title);

  const sourceText = stripHtml(rawDescription || "").slice(0, 2000) || title;

  try {
    const response = await anthropic.messages.create({
      model: "claude-opus-4-8",
      max_tokens: 300,
      output_config: { effort: "low" },
      messages: [
        {
          role: "user",
          content:
            `Skriv en saklig sammanfattning på svenska av nyheten nedan, för ett nyhetsflöde riktat till fotbollsföreningar. ` +
            `1–2 meningar, max 220 tecken. Svara med ENBART sammanfattningen, ingen inledning.\n\n` +
            `Titel: ${title}\n\nKälltext: ${sourceText}`,
        },
      ],
    });

    const textBlock = response.content.find((block) => block.type === "text");
    const summary = textBlock?.text.trim();
    if (!summary || summary.length > 300) {
      return truncateSummary(rawDescription, title);
    }
    return summary;
  } catch (err) {
    console.warn(`  Claude-sammanfattning misslyckades: ${err.message}`);
    return truncateSummary(rawDescription, title);
  }
}

function tag(block, name) {
  const m = block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, "i"));
  return m ? m[1].trim() : "";
}

async function fetchWithTimeout(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": USER_AGENT },
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

/** Skiljer bort URL:er som redan finns i harvest_items (dedupe_key) innan dyra fetch/summarize-anrop görs. */
async function filterUnseenUrls(supabase, urls) {
  if (!supabase || urls.length === 0) return urls;
  const keys = urls.map(dedupeKey);
  const { data, error } = await supabase
    .from("harvest_items")
    .select("dedupe_key")
    .in("dedupe_key", keys);
  if (error) {
    console.warn(`  Kunde inte kontrollera dubbletter: ${error.message}`);
    return urls;
  }
  const seen = new Set((data || []).map((r) => r.dedupe_key));
  return urls.filter((u) => !seen.has(dedupeKey(u)));
}

// --- RSS -----------------------------------------------------------------

export function parseRssEntries(xml, maxItems) {
  const blocks = xml.match(/<item[\s\S]*?<\/item>/gi) || [];
  const entries = [];
  for (const block of blocks.slice(0, maxItems)) {
    const title = stripHtml(tag(block, "title"));
    const link = stripHtml(tag(block, "link"));
    if (!title || !link || !link.startsWith("https://")) continue;
    const pub = tag(block, "pubDate");
    const published = pub ? new Date(pub) : null;
    entries.push({
      title,
      link,
      description: tag(block, "description"),
      publishedAt:
        published && !Number.isNaN(published.getTime())
          ? published.toISOString()
          : null,
    });
  }
  return entries;
}

async function fetchRss(source, max, supabase) {
  const xml = await fetchWithTimeout(source.feedUrl);
  const entries = parseRssEntries(xml, max);
  const unseen = new Set(await filterUnseenUrls(supabase, entries.map((e) => e.link)));
  const items = [];
  for (const e of entries) {
    if (!unseen.has(e.link)) continue;
    items.push({
      title: e.title,
      summary: await summarize(e.description, e.title),
      source_name: source.name,
      source_url: e.link,
      published_at: e.publishedAt,
      dedupe_key: dedupeKey(e.link),
      status: "pending",
    });
  }
  return items;
}

// --- SvFF-sajterna (sitemap + artikelsida) --------------------------------

export function parseSitemapEntries(xml, pathFilter) {
  const blocks = xml.match(/<url>[\s\S]*?<\/url>/gi) || [];
  const entries = [];
  for (const block of blocks) {
    const loc = tag(block, "loc").trim();
    if (!loc || !loc.includes(pathFilter)) continue;
    entries.push({ loc, lastmod: tag(block, "lastmod").trim() });
  }
  entries.sort((a, b) => new Date(b.lastmod || 0) - new Date(a.lastmod || 0));
  return entries;
}

export function parseSvffArticle(html) {
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const title = h1Match ? stripHtml(h1Match[1]) : "";

  const preambleMatch = html.match(
    /<([a-z0-9]+)[^>]*class="[^"]*\bpreamble\b[^"]*"[^>]*>([\s\S]*?)<\/\1>/i,
  );
  const description = preambleMatch ? stripHtml(preambleMatch[2]) : "";

  const timeMatch = html.match(/<time\b[^>]*\bdatetime="([^"]+)"/i);
  let publishedAt = null;
  if (timeMatch) {
    const d = new Date(decodeHtmlEntities(timeMatch[1]));
    if (!Number.isNaN(d.getTime())) publishedAt = d.toISOString();
  }

  return { title, description, publishedAt };
}

async function fetchSvffSitemap(source, max, supabase) {
  const xml = await fetchWithTimeout(source.sitemapUrl);
  const entries = parseSitemapEntries(xml, source.newsPathFilter).slice(0, max);
  const unseenLocs = new Set(
    await filterUnseenUrls(supabase, entries.map((e) => e.loc)),
  );
  const items = [];
  for (const entry of entries) {
    if (!unseenLocs.has(entry.loc)) continue;
    try {
      const html = await fetchWithTimeout(entry.loc);
      const { title, description, publishedAt } = parseSvffArticle(html);
      if (!title) continue;
      items.push({
        title,
        summary: await summarize(description, title),
        source_name: source.name,
        source_url: entry.loc,
        published_at: publishedAt,
        dedupe_key: dedupeKey(entry.loc),
        status: "pending",
      });
    } catch (err) {
      console.warn(`  ${source.name}: artikel ${entry.loc} misslyckades (${err.message}) — hoppar över.`);
    }
  }
  return items;
}

// --- RF-SISU nyhetsarkiv ---------------------------------------------------
//
// ponytail: arkivsidans HTML har inga <a href>-länkar i den rå (osrenderade)
// HTML:en — sidan är en React-app som hydrerar länkarna client-side. Datan
// finns redan komplett (titel, ingress, url, datum) som JSON i en inline
// <script>AppRegistry.registerInitialState(...)</script>-tagg. Vi läser den
// JSON:en direkt istället för att hämta varje artikelsida separat — färre
// requests, ingen sköra HTML-parsning av artikelsidan behövs.

/** Plockar ut ett balanserat JSON-värde (array/objekt) med start vid `startIdx`. */
function extractBalancedJson(text, startIdx) {
  let depth = 0;
  let inString = false;
  let escape = false;
  for (let i = startIdx; i < text.length; i++) {
    const ch = text[i];
    if (escape) {
      escape = false;
      continue;
    }
    if (ch === "\\") {
      escape = true;
      continue;
    }
    if (ch === '"') {
      inString = !inString;
      continue;
    }
    if (inString) continue;
    if (ch === "[" || ch === "{") depth++;
    else if (ch === "]" || ch === "}") {
      depth--;
      if (depth === 0) return text.slice(startIdx, i + 1);
    }
  }
  return null;
}

export function parseRfsisuArchiveArticles(html, baseUrl) {
  const marker = '"articles":';
  const idx = html.indexOf(marker);
  if (idx === -1) return [];
  const jsonText = extractBalancedJson(html, idx + marker.length);
  if (!jsonText) return [];

  let articles;
  try {
    articles = JSON.parse(jsonText);
  } catch {
    return [];
  }

  return articles
    .map((a) => {
      const dateMatch = (a.uri || "").match(/\/nyheter\/(\d{4}-\d{2}-\d{2})-/);
      return {
        title: (a.title || "").trim(),
        description: (a.preamble || "").trim(),
        url: a.uri ? new URL(a.uri, baseUrl).toString() : "",
        date: dateMatch ? dateMatch[1] : null,
      };
    })
    .filter((a) => a.title && a.url && a.date);
}

async function fetchRfsisuArchive(source, max, supabase) {
  const html = await fetchWithTimeout(source.archiveUrl);
  const articles = parseRfsisuArchiveArticles(html, source.archiveUrl).slice(0, max);
  const unseenUrls = new Set(
    await filterUnseenUrls(supabase, articles.map((a) => a.url)),
  );
  const items = [];
  for (const a of articles) {
    if (!unseenUrls.has(a.url)) continue;
    const d = new Date(`${a.date}T00:00:00Z`);
    items.push({
      title: a.title,
      summary: await summarize(a.description, a.title),
      source_name: source.name,
      source_url: a.url,
      published_at: Number.isNaN(d.getTime()) ? null : d.toISOString(),
      dedupe_key: dedupeKey(a.url),
      status: "pending",
    });
  }
  return items;
}

// ---------------------------------------------------------------------------

const fetchers = {
  rss: fetchRss,
  "svff-sitemap": fetchSvffSitemap,
  "rfsisu-archive": fetchRfsisuArchive,
};

async function main() {
  const dryRun = process.argv.includes("--dry-run");

  if (!dryRun && (!SUPABASE_URL || !SERVICE_KEY)) {
    console.error("Saknar SUPABASE_URL eller SUPABASE_SERVICE_ROLE_KEY.");
    process.exit(1);
  }

  const config = JSON.parse(
    await readFile(join(__dirname, "sources.json"), "utf8"),
  );
  const max = config.maxItemsPerSource ?? 10;
  const enabled = (config.sources || []).filter((s) => s.enabled);

  if (enabled.length === 0) {
    console.log("Inga aktiverade källor i sources.json — inget att skörda.");
    return;
  }

  const supabase = dryRun
    ? null
    : createClient(SUPABASE_URL, SERVICE_KEY, { auth: { persistSession: false } });

  let collected = [];
  for (const source of enabled) {
    const fetcher = fetchers[source.type ?? "rss"];
    if (!fetcher) {
      console.warn(`  ${source.name}: okänd källtyp "${source.type}" — hoppar över.`);
      continue;
    }
    try {
      const items = await fetcher(source, max, supabase);
      console.log(`  ${source.name}: ${items.length} poster.`);
      collected = collected.concat(items);
    } catch (err) {
      console.warn(`  ${source.name}: ${err.message} — hoppar över.`);
    }
  }

  if (collected.length === 0) {
    console.log("Inget skördat.");
    return;
  }

  // Dedup inom körningen.
  const seen = new Set();
  const unique = collected.filter((i) =>
    seen.has(i.dedupe_key) ? false : (seen.add(i.dedupe_key), true),
  );

  if (dryRun) {
    console.log(JSON.stringify(unique, null, 2));
    console.log(`Dry-run klar. ${unique.length} unika poster (ej skrivna till Supabase).`);
    return;
  }

  // Upsert: dubbletter mot tidigare körningar ignoreras via unik dedupe_key.
  const { error } = await supabase
    .from("harvest_items")
    .upsert(unique, { onConflict: "dedupe_key", ignoreDuplicates: true });

  if (error) {
    console.error("Fel vid skrivning till Supabase:", error.message);
    process.exit(1);
  }

  console.log(
    `Klart. ${unique.length} unika poster skickade till granskningskön (status=pending).`,
  );
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

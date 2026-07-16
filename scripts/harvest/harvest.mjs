#!/usr/bin/env node
/**
 * Skördare för "Uppdateringar från rutiner".
 *
 * Hämtar utvalda RSS-flöden, plockar rubrik + länk + kort sammanfattning, och
 * skriver rader med status = 'pending' till Supabase-tabellen harvest_items.
 * Granskning sker manuellt i Supabase Dashboard innan något blir publikt.
 *
 * KÖR: node scripts/harvest/harvest.mjs
 * KRÄVER env: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY  (sätts som GitHub secrets)
 *
 * Vi lagrar ALDRIG kopierad fulltext — bara rubrik, kort sammanfattning och
 * länk. Respektera varje källas robots.txt och användarvillkor (sources.json).
 */
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { createClient } from "@supabase/supabase-js";
import Anthropic from "@anthropic-ai/sdk";

const __dirname = dirname(fileURLToPath(import.meta.url));

const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error("Saknar SUPABASE_URL eller SUPABASE_SERVICE_ROLE_KEY.");
  process.exit(1);
}

const anthropic = process.env.ANTHROPIC_API_KEY ? new Anthropic() : null;

/** Normalisera URL till stabil dedupe-nyckel (utan query/hash/trailing slash). */
function dedupeKey(url) {
  try {
    const u = new URL(url);
    return (u.origin + u.pathname).replace(/\/$/, "").toLowerCase();
  } catch {
    return url.trim().toLowerCase();
  }
}

function stripHtml(s) {
  return s
    .replace(/<!\[CDATA\[|\]\]>/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/gi, " ")
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

/** Minimal RSS-parser — räcker för placeholder. Byt mot riktig parser vid behov. */
async function parseRss(xml, sourceName, maxItems) {
  const items = [];
  const blocks = xml.match(/<item[\s\S]*?<\/item>/gi) || [];
  for (const block of blocks.slice(0, maxItems)) {
    const title = stripHtml(tag(block, "title"));
    const link = stripHtml(tag(block, "link"));
    if (!title || !link || !link.startsWith("https://")) continue;
    const pub = tag(block, "pubDate");
    const published = pub ? new Date(pub) : null;
    items.push({
      title,
      summary: await summarize(tag(block, "description"), title),
      source_name: sourceName,
      source_url: link,
      published_at:
        published && !Number.isNaN(published.getTime())
          ? published.toISOString()
          : null,
      dedupe_key: dedupeKey(link),
      status: "pending",
    });
  }
  return items;
}

async function main() {
  const config = JSON.parse(
    await readFile(join(__dirname, "sources.json"), "utf8"),
  );
  const max = config.maxItemsPerSource ?? 10;
  const enabled = (config.sources || []).filter((s) => s.enabled);

  if (enabled.length === 0) {
    console.log("Inga aktiverade källor i sources.json — inget att skörda.");
    return;
  }

  const supabase = createClient(SUPABASE_URL, SERVICE_KEY, {
    auth: { persistSession: false },
  });

  let collected = [];
  for (const source of enabled) {
    try {
      const res = await fetch(source.feedUrl, {
        headers: { "User-Agent": "foreningsutvecklaren-harvester/1.0" },
      });
      if (!res.ok) {
        console.warn(`  ${source.name}: HTTP ${res.status} — hoppar över.`);
        continue;
      }
      const xml = await res.text();
      const items = await parseRss(xml, source.name, max);
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

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

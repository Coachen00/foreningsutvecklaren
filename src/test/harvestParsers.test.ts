import { describe, it, expect } from "vitest";
import {
  decodeHtmlEntities,
  stripHtml,
  parseSitemapEntries,
  parseSvffArticle,
  parseRfsisuArchiveArticles,
  // @ts-expect-error — .mjs har ingen typdeklaration, testas som ren JS
} from "../../scripts/harvest/harvest.mjs";

describe("decodeHtmlEntities / stripHtml", () => {
  it("avkodar namngivna och numeriska (hex/decimal) entities", () => {
    expect(decodeHtmlEntities("Fotboll &amp; H&#xE4;lsa &#x2B; mer")).toBe(
      "Fotboll & Hälsa + mer",
    );
    expect(stripHtml("<p>Fotboll &amp; H&#xE4;lsa &#43; mer</p>")).toBe(
      "Fotboll & Hälsa + mer",
    );
  });
});

describe("parseSitemapEntries", () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url><loc>https://www.gbgfotboll.se/om-oss/</loc><lastmod>2026-07-01T10:00:00+02:00</lastmod></url>
      <url><loc>https://www.gbgfotboll.se/nyheter/artikel-a/</loc><lastmod>2026-06-20T10:00:00+02:00</lastmod></url>
      <url><loc>https://www.gbgfotboll.se/nyheter/artikel-b/</loc><lastmod>2026-06-25T10:00:00+02:00</lastmod></url>
    </urlset>`;

  it("filtrerar på path och sorterar nyast (lastmod) först", () => {
    const entries = parseSitemapEntries(xml, "/nyheter/");
    expect(entries.map((e: { loc: string }) => e.loc)).toEqual([
      "https://www.gbgfotboll.se/nyheter/artikel-b/",
      "https://www.gbgfotboll.se/nyheter/artikel-a/",
    ]);
  });
});

describe("parseSvffArticle", () => {
  const html = `<html><body>
    <h1>Ny satsning p&#xE5; f&#xF6;reningsutveckling</h1>
    <div class="preamble">Kort ingress om satsningen.</div>
    <time datetime="2026-06-22T10:24&#x2B;02:00">22 juni</time>
  </body></html>`;

  it("extraherar titel (h1, entity-avkodad), ingress (preamble) och datum (time)", () => {
    const { title, description, publishedAt } = parseSvffArticle(html);
    expect(title).toBe("Ny satsning på föreningsutveckling");
    expect(description).toBe("Kort ingress om satsningen.");
    expect(publishedAt).toBe(new Date("2026-06-22T10:24+02:00").toISOString());
  });
});

describe("parseRfsisuArchiveArticles", () => {
  // Arkivsidans rå HTML har inga <a href>-länkar (React-appen hydrerar dem
  // client-side) — datan finns istället som JSON i en inline <script>.
  const baseUrl = "https://www.rfsisu.se/distrikt/vastra-gotaland/nyhetsarkiv";
  const html = `<html><body>
    <script>AppRegistry.registerInitialState('x',{"articles":[
      {"title":"Ansök om LOK-stöd för hösten","preamble":"Föreningar kan nu ansöka om LOK-stöd.","uri":"/distrikt/vastra-gotaland/nyhetsarkiv/nyheter/2026-05-10-ansok-om-lok-stod","date":"10 maj 2026 09:00","image":"/x.jpg"},
      {"title":"Annan artikel","preamble":"En annan ingress.","uri":"/distrikt/vastra-gotaland/nyhetsarkiv/nyheter/2026-04-01-annan-artikel","date":"1 apr 2026 12:00"}
    ],"page":1});</script>
  </body></html>`;

  it("plockar titel, ingress, absolut url och datum (ur URL:en) ur inbäddad JSON", () => {
    const articles = parseRfsisuArchiveArticles(html, baseUrl);
    expect(articles).toEqual([
      {
        title: "Ansök om LOK-stöd för hösten",
        description: "Föreningar kan nu ansöka om LOK-stöd.",
        url: "https://www.rfsisu.se/distrikt/vastra-gotaland/nyhetsarkiv/nyheter/2026-05-10-ansok-om-lok-stod",
        date: "2026-05-10",
      },
      {
        title: "Annan artikel",
        description: "En annan ingress.",
        url: "https://www.rfsisu.se/distrikt/vastra-gotaland/nyhetsarkiv/nyheter/2026-04-01-annan-artikel",
        date: "2026-04-01",
      },
    ]);
  });

  it("returnerar tom lista om ingen articles-JSON hittas", () => {
    expect(parseRfsisuArchiveArticles("<html></html>", baseUrl)).toEqual([]);
  });
});

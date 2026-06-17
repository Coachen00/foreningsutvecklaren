import { describe, it, expect } from "vitest";
import { isHttpsUrl, sanitizeItems, formatUpdateDate } from "@/lib/harvest";

describe("isHttpsUrl", () => {
  it("godkänner https, avvisar http och skräp", () => {
    expect(isHttpsUrl("https://example.se/artikel")).toBe(true);
    expect(isHttpsUrl("http://example.se")).toBe(false);
    expect(isHttpsUrl("inte-en-url")).toBe(false);
    expect(isHttpsUrl("")).toBe(false);
  });
});

describe("sanitizeItems", () => {
  const valid = {
    id: "1",
    title: "Titel",
    summary: "Sammanfattning",
    source_name: "Källa",
    source_url: "https://example.se/a",
    published_at: "2026-01-01T00:00:00Z",
  };

  it("släpper igenom giltiga rader och mappar till camelCase", () => {
    const [item] = sanitizeItems([valid]);
    expect(item).toEqual({
      id: "1",
      title: "Titel",
      summary: "Sammanfattning",
      sourceName: "Källa",
      sourceUrl: "https://example.se/a",
      publishedAt: "2026-01-01T00:00:00Z",
    });
  });

  it("filtrerar bort rader med saknad data eller osäker länk", () => {
    expect(sanitizeItems([{ ...valid, title: null }])).toHaveLength(0);
    expect(sanitizeItems([{ ...valid, summary: null }])).toHaveLength(0);
    expect(sanitizeItems([{ ...valid, source_url: "http://example.se" }])).toHaveLength(0);
    expect(sanitizeItems([{ ...valid, source_url: "javascript:alert(1)" }])).toHaveLength(0);
  });
});

describe("formatUpdateDate", () => {
  it("formaterar giltigt ISO-datum på svenska", () => {
    expect(formatUpdateDate("2026-06-16T00:00:00Z")).toMatch(/2026/);
  });

  it("ger tom sträng för null eller ogiltigt datum", () => {
    expect(formatUpdateDate(null)).toBe("");
    expect(formatUpdateDate("inte-ett-datum")).toBe("");
  });
});

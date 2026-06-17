import { describe, it, expect } from "vitest";
import { CASES, getCase } from "@/content/cases";

describe("CASES", () => {
  it("har minst ett case", () => {
    expect(CASES.length).toBeGreaterThanOrEqual(1);
  });

  it("har unika slugs utan svenska tecken eller versaler", () => {
    const slugs = CASES.map((c) => c.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) {
      expect(slug).toMatch(/^[a-z0-9-]+$/);
    }
  });

  it("alla case har titel, ingress, sammanfattning och brödtext", () => {
    for (const c of CASES) {
      expect(c.title.length).toBeGreaterThan(0);
      expect(c.intro.length).toBeGreaterThan(0);
      expect(c.summary.length).toBeGreaterThan(0);
      expect(c.body.length).toBeGreaterThanOrEqual(1);
      expect(c.body.every((p) => p.length > 0)).toBe(true);
    }
  });

  it("video-url är mp4/webm och aldrig osäker http://", () => {
    for (const c of CASES) {
      expect(c.videoUrl).toMatch(/\.(mp4|webm)$/);
      expect(c.videoUrl).not.toMatch(/^http:\/\//);
      if (c.posterUrl) {
        expect(c.posterUrl).not.toMatch(/^http:\/\//);
      }
    }
  });

  it("getCase hittar på slug och returnerar undefined för okänd", () => {
    expect(getCase(CASES[0].slug)?.slug).toBe(CASES[0].slug);
    expect(getCase("finns-inte-xyz")).toBeUndefined();
  });
});

describe("CASE quiz", () => {
  it("varje case har minst en fråga", () => {
    for (const c of CASES) {
      expect(c.quiz.length).toBeGreaterThanOrEqual(1);
    }
  });

  it("varje fråga har unikt id, minst två svar och en giltig facit", () => {
    for (const c of CASES) {
      const qIds = c.quiz.map((q) => q.id);
      expect(new Set(qIds).size).toBe(qIds.length);

      for (const q of c.quiz) {
        expect(q.prompt.length).toBeGreaterThan(0);
        expect(q.explanation.length).toBeGreaterThan(0);
        expect(q.options.length).toBeGreaterThanOrEqual(2);

        const optIds = q.options.map((o) => o.id);
        expect(new Set(optIds).size).toBe(optIds.length);
        expect(optIds).toContain(q.correctOptionId);
      }
    }
  });
});

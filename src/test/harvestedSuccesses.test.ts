import { describe, it, expect } from "vitest";
import {
  HARVESTED_SUCCESSES,
  SUCCESS_VIDEO,
  EFFECT_LOGIC,
} from "@/content/harvestedSuccesses";

describe("HARVESTED_SUCCESSES", () => {
  it("har minst 3 och max 6 kort", () => {
    expect(HARVESTED_SUCCESSES.length).toBeGreaterThanOrEqual(3);
    expect(HARVESTED_SUCCESSES.length).toBeLessThanOrEqual(6);
  });

  it("har unika ID:n", () => {
    const ids = HARVESTED_SUCCESSES.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("alla kort har titel, beskrivning och metric", () => {
    for (const s of HARVESTED_SUCCESSES) {
      expect(s.title.length).toBeGreaterThan(0);
      expect(s.description.length).toBeGreaterThan(0);
      expect(s.metric.length).toBeGreaterThan(0);
    }
  });
});

describe("SUCCESS_VIDEO", () => {
  it("har en video-url", () => {
    expect(SUCCESS_VIDEO.videoUrl).toMatch(/\.(mp4|webm)$/);
  });

  it("video-url och poster-url är 'self' eller HTTPS (aldrig http://)", () => {
    expect(SUCCESS_VIDEO.videoUrl).not.toMatch(/^http:\/\//);
    if (SUCCESS_VIDEO.posterUrl) {
      expect(SUCCESS_VIDEO.posterUrl).not.toMatch(/^http:\/\//);
    }
  });
});

describe("EFFECT_LOGIC", () => {
  it("har exakt fyra steg: resurser -> aktiviteter -> mål -> effekt", () => {
    expect(EFFECT_LOGIC).toHaveLength(4);
    expect(EFFECT_LOGIC.map((e) => e.label)).toEqual([
      "Resurser",
      "Aktiviteter",
      "Mål",
      "Effekt",
    ]);
  });
});

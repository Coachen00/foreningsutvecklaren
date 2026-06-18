import { describe, it, expect } from "vitest";
import { PRIMARY_ASSIGNMENTS } from "@/content/primaryAssignments";
import { AREAS } from "@/content/areas";

/**
 * Guard mot hierarkisk inkoherens (se docs/site-positioning.md, nivåmodellen).
 * Bryts någon regel ska CI bli rött innan det når produktion.
 */

describe("Kanonisk prioritetsordning (L1)", () => {
  it("PRIMARY_ASSIGNMENTS följer En bättre väg → FU Skola → Föreningslyftet", () => {
    expect(PRIMARY_ASSIGNMENTS.map((p) => p.id)).toEqual([
      "en-battre-vag",
      "fu-skola",
      "foreningslyftet",
    ]);
  });
});

describe("Kicker-grammatik (Kategori · kvalificerare)", () => {
  it("alla L1-kickers börjar med 'Huvuduppdrag · '", () => {
    for (const p of PRIMARY_ASSIGNMENTS) {
      expect(p.kicker).toMatch(/^Huvuduppdrag · .+/);
    }
  });

  it("alla L2-kickers (AREAS) börjar med 'Stöd · '", () => {
    for (const a of AREAS) {
      expect(a.kicker).toMatch(/^Stöd · .+/);
    }
  });

  it("ingen kicker saknar punkt-separatorn", () => {
    for (const k of [
      ...PRIMARY_ASSIGNMENTS.map((p) => p.kicker),
      ...AREAS.map((a) => a.kicker),
    ]) {
      expect(k).toContain(" · ");
    }
  });
});

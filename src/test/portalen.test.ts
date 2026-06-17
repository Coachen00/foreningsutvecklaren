import { describe, it, expect } from "vitest";
import { PORTAL_GROUPS } from "@/content/portalen";

const allLinks = PORTAL_GROUPS.flatMap((g) => g.links);

describe("PORTAL_GROUPS", () => {
  it("har minst en grupp och varje grupp minst en länk", () => {
    expect(PORTAL_GROUPS.length).toBeGreaterThanOrEqual(1);
    for (const g of PORTAL_GROUPS) {
      expect(g.links.length).toBeGreaterThanOrEqual(1);
    }
  });

  it("har unika grupp-ID:n", () => {
    const ids = PORTAL_GROUPS.map((g) => g.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("har unika länk-ID:n över alla grupper", () => {
    const ids = allLinks.map((l) => l.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("alla länkar har label, eyebrow, beskrivning och href", () => {
    for (const l of allLinks) {
      expect(l.label.length).toBeGreaterThan(0);
      expect(l.eyebrow.length).toBeGreaterThan(0);
      expect(l.description.length).toBeGreaterThan(0);
      expect(l.href.length).toBeGreaterThan(0);
    }
  });

  it("externa länkar är absoluta (https/mailto/tel), interna börjar med /", () => {
    for (const l of allLinks) {
      if (l.external) {
        expect(l.href).toMatch(/^(https:\/\/|mailto:|tel:)/);
      } else {
        expect(l.href).toMatch(/^\//);
      }
    }
  });

  it("inga osäkra http://-länkar", () => {
    for (const l of allLinks) {
      expect(l.href).not.toMatch(/^http:\/\//);
    }
  });
});

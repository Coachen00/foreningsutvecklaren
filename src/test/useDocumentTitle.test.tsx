import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const BASE = "Föreningsutvecklaren";

const cleanupMeta = () => {
  for (const key of [
    "description",
    "twitter:title",
    "twitter:description",
  ]) {
    document.head
      .querySelectorAll(`meta[name="${key}"]`)
      .forEach((el) => el.remove());
  }
  for (const key of ["og:title", "og:description"]) {
    document.head
      .querySelectorAll(`meta[property="${key}"]`)
      .forEach((el) => el.remove());
  }
};

describe("useDocumentTitle", () => {
  beforeEach(() => {
    document.title = "";
    cleanupMeta();
  });
  afterEach(cleanupMeta);

  it("sätter BASE som titel när title saknas", () => {
    renderHook(() => useDocumentTitle());
    expect(document.title).toBe(BASE);
  });

  it("kombinerar title med BASE", () => {
    renderHook(() => useDocumentTitle("Logga in"));
    expect(document.title).toBe(`Logga in – ${BASE}`);
  });

  it("synkar og:title och twitter:title", () => {
    renderHook(() => useDocumentTitle("Uppdrag"));
    const og = document.head.querySelector('meta[property="og:title"]');
    const tw = document.head.querySelector('meta[name="twitter:title"]');
    expect(og?.getAttribute("content")).toBe(`Uppdrag – ${BASE}`);
    expect(tw?.getAttribute("content")).toBe(`Uppdrag – ${BASE}`);
  });

  it("synkar description, og:description och twitter:description när description ges", () => {
    renderHook(() => useDocumentTitle("Sida", "En kort beskrivning"));
    const desc = document.head.querySelector('meta[name="description"]');
    const og = document.head.querySelector('meta[property="og:description"]');
    const tw = document.head.querySelector(
      'meta[name="twitter:description"]',
    );
    expect(desc?.getAttribute("content")).toBe("En kort beskrivning");
    expect(og?.getAttribute("content")).toBe("En kort beskrivning");
    expect(tw?.getAttribute("content")).toBe("En kort beskrivning");
  });
});

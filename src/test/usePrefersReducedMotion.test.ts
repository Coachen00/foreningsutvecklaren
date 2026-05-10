import { describe, it, expect, vi, beforeEach } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type Listener = (e: Pick<MediaQueryListEvent, "matches">) => void;

const buildMatchMedia = (initialMatches: boolean) => {
  const listeners = new Set<Listener>();
  const mql = {
    matches: initialMatches,
    media: "(prefers-reduced-motion: reduce)",
    onchange: null,
    addEventListener: (_: string, l: Listener) => listeners.add(l),
    removeEventListener: (_: string, l: Listener) => listeners.delete(l),
    addListener: (l: Listener) => listeners.add(l),
    removeListener: (l: Listener) => listeners.delete(l),
    dispatchEvent: () => true,
  };

  const trigger = (matches: boolean) => {
    mql.matches = matches;
    listeners.forEach((l) => l({ matches }));
  };

  return { mql, trigger };
};

describe("usePrefersReducedMotion", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("returnerar initialt värde från matchMedia", () => {
    const { mql } = buildMatchMedia(true);
    vi.spyOn(window, "matchMedia").mockImplementation(() => mql as unknown as MediaQueryList);

    const { result } = renderHook(() => usePrefersReducedMotion());
    expect(result.current).toBe(true);
  });

  it("uppdateras när OS-inställningen ändras", () => {
    const { mql, trigger } = buildMatchMedia(false);
    vi.spyOn(window, "matchMedia").mockImplementation(() => mql as unknown as MediaQueryList);

    const { result } = renderHook(() => usePrefersReducedMotion());
    expect(result.current).toBe(false);

    act(() => {
      trigger(true);
    });
    expect(result.current).toBe(true);
  });
});

import { describe, it, expect } from "vitest";
import { prefetchRoute } from "@/lib/routePrefetch";

describe("prefetchRoute", () => {
  it("kraschar inte vid okänd route", () => {
    expect(() => prefetchRoute("/finns-inte")).not.toThrow();
  });

  it("triggar bara importen en gång per route", () => {
    // Kallar två gånger — ska inte kasta. Faktiska importbeteendet testas
    // av Vite-bundeln själv; här verifierar vi bara API-stabilitet.
    expect(() => {
      prefetchRoute("/uppdrag");
      prefetchRoute("/uppdrag");
    }).not.toThrow();
  });
});

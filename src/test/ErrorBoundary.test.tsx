import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import ErrorBoundary from "@/components/ErrorBoundary";

const Bomb = ({ throwOn }: { throwOn: boolean }) => {
  if (throwOn) throw new Error("boom");
  return <p>frisk</p>;
};

describe("ErrorBoundary", () => {
  let consoleErrorSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
  });
  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  it("renderar barn när inget kastas", () => {
    render(
      <ErrorBoundary>
        <Bomb throwOn={false} />
      </ErrorBoundary>,
    );
    expect(screen.getByText("frisk")).toBeInTheDocument();
  });

  it("visar fallback-vy när barn kastar", () => {
    render(
      <ErrorBoundary>
        <Bomb throwOn />
      </ErrorBoundary>,
    );
    expect(
      screen.getByRole("heading", { level: 1, name: /något gick fel/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /ladda om sidan/i }),
    ).toBeInTheDocument();
  });

  it("respekterar custom fallback", () => {
    render(
      <ErrorBoundary fallback={<p>egen-fallback</p>}>
        <Bomb throwOn />
      </ErrorBoundary>,
    );
    expect(screen.getByText("egen-fallback")).toBeInTheDocument();
  });
});

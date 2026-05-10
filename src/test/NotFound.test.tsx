import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import NotFound from "@/pages/NotFound";

describe("NotFound", () => {
  it("visar 404-rubrik och länk hem", () => {
    render(
      <MemoryRouter initialEntries={["/finns-inte"]}>
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("heading", { level: 1, name: /sidan finns inte/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/finns-inte/)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /tillbaka till startsidan/i }),
    ).toHaveAttribute("href", "/");
  });
});

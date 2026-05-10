import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

const useAuthMock = vi.fn();

vi.mock("@/contexts/AuthContext", () => ({
  useAuth: () => useAuthMock(),
}));

const renderWithRoute = (initialPath = "/skyddat") =>
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Routes>
        <Route
          path="/skyddat"
          element={
            <ProtectedRoute>
              <p>hemligt-innehall</p>
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<p>logga-in-sida</p>} />
      </Routes>
    </MemoryRouter>,
  );

describe("ProtectedRoute", () => {
  beforeEach(() => {
    useAuthMock.mockReset();
  });

  it("visar loader medan auth laddas", () => {
    useAuthMock.mockReturnValue({ session: null, loading: true });
    renderWithRoute();
    expect(screen.getByLabelText("Laddar")).toBeInTheDocument();
    expect(screen.queryByText("hemligt-innehall")).not.toBeInTheDocument();
  });

  it("redirectar till /login utan session", () => {
    useAuthMock.mockReturnValue({ session: null, loading: false });
    renderWithRoute();
    expect(screen.getByText("logga-in-sida")).toBeInTheDocument();
    expect(screen.queryByText("hemligt-innehall")).not.toBeInTheDocument();
  });

  it("renderar barn med session", () => {
    useAuthMock.mockReturnValue({
      session: { user: { id: "u1" } },
      loading: false,
    });
    renderWithRoute();
    expect(screen.getByText("hemligt-innehall")).toBeInTheDocument();
  });
});

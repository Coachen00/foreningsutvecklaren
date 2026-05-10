import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Login from "@/pages/Login";

const useAuthMock = vi.fn();
vi.mock("@/contexts/AuthContext", () => ({
  useAuth: () => useAuthMock(),
}));

const renderLogin = (state?: { from: { pathname: string } }) =>
  render(
    <MemoryRouter
      initialEntries={[{ pathname: "/login", state: state ?? null }]}
    >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/uppdrag" element={<p>uppdrag-sidan</p>} />
        <Route path="/" element={<p>start</p>} />
      </Routes>
    </MemoryRouter>,
  );

describe("Login — state.from", () => {
  beforeEach(() => {
    useAuthMock.mockReturnValue({
      session: null,
      loading: false,
      signIn: vi.fn(),
      signOut: vi.fn(),
      resetPassword: vi.fn(),
    });
  });

  it("visar info om sidan användaren ville nå", () => {
    renderLogin({ from: { pathname: "/uppdrag" } });
    expect(
      screen.getByText(/sidan kräver inloggning/i),
    ).toBeInTheDocument();
    expect(screen.getByText("/uppdrag")).toBeInTheDocument();
  });

  it("döljer info-bannern när användaren kommit direkt till /login", () => {
    renderLogin();
    expect(
      screen.queryByText(/sidan kräver inloggning/i),
    ).not.toBeInTheDocument();
  });

  it("redirectar redan inloggade användare bort från /login", () => {
    useAuthMock.mockReturnValue({
      session: { user: { id: "u1" } },
      loading: false,
      signIn: vi.fn(),
      signOut: vi.fn(),
      resetPassword: vi.fn(),
    });
    renderLogin({ from: { pathname: "/uppdrag" } });
    // Effekten redirectar — vi förväntar oss att uppdrag-sidans innehåll syns
    expect(screen.getByText("uppdrag-sidan")).toBeInTheDocument();
  });
});

import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ResetPassword from "@/pages/ResetPassword";

// Mocka Supabase (env-hård-fail) och auth-context.
vi.mock("@/lib/supabase", () => ({
  default: { auth: { updateUser: vi.fn() } },
}));
const { mockUseAuth } = vi.hoisted(() => ({ mockUseAuth: vi.fn() }));
vi.mock("@/contexts/AuthContext", () => ({ useAuth: () => mockUseAuth() }));

const renderReset = () =>
  render(
    <MemoryRouter>
      <ResetPassword />
    </MemoryRouter>,
  );

describe("ResetPassword", () => {
  beforeEach(() => mockUseAuth.mockReset());

  it("visar ogiltig-länk-läge när session saknas", () => {
    mockUseAuth.mockReturnValue({ session: null, loading: false });
    renderReset();
    expect(screen.getByText(/Länken är ogiltig/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Till inloggning/i }),
    ).toBeInTheDocument();
  });

  it("visar fält när session finns och validerar lösenordslängd via role=alert", () => {
    mockUseAuth.mockReturnValue({
      session: { user: { id: "u1" } },
      loading: false,
    });
    renderReset();
    fireEvent.change(screen.getByLabelText("Nytt lösenord"), {
      target: { value: "kort" },
    });
    fireEvent.change(screen.getByLabelText("Bekräfta lösenord"), {
      target: { value: "kort" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Spara nytt lösenord/i }));
    const alert = screen.getByRole("alert");
    expect(alert.textContent).toMatch(/minst 8 tecken/i);
  });

  it("flaggar när lösenorden inte matchar", () => {
    mockUseAuth.mockReturnValue({
      session: { user: { id: "u1" } },
      loading: false,
    });
    renderReset();
    fireEvent.change(screen.getByLabelText("Nytt lösenord"), {
      target: { value: "ettlångtlösenord" },
    });
    fireEvent.change(screen.getByLabelText("Bekräfta lösenord"), {
      target: { value: "annatlösenord123" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Spara nytt lösenord/i }));
    expect(screen.getByRole("alert").textContent).toMatch(/matchar inte/i);
  });
});

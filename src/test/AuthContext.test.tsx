import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";

// Mocka Supabase-klienten — annars hård-failar @/lib/supabase på saknad env i test.
const { mockAuth } = vi.hoisted(() => ({
  mockAuth: {
    getSession: vi.fn(),
    onAuthStateChange: vi.fn(() => ({
      data: { subscription: { unsubscribe: vi.fn() } },
    })),
    signInWithPassword: vi.fn(),
    signOut: vi.fn(),
    resetPasswordForEmail: vi.fn(),
  },
}));
vi.mock("@/lib/supabase", () => ({ default: { auth: mockAuth } }));

const Probe = () => {
  const { session, loading } = useAuth();
  return (
    <div>
      <span data-testid="loading">{String(loading)}</span>
      <span data-testid="session">{session ? "in" : "out"}</span>
    </div>
  );
};

describe("AuthContext", () => {
  beforeEach(() => {
    mockAuth.getSession.mockReset();
    mockAuth.signInWithPassword.mockReset();
    mockAuth.onAuthStateChange.mockClear();
  });

  it("sätter session från getSession och avslutar loading", async () => {
    mockAuth.getSession.mockResolvedValue({
      data: { session: { user: { id: "u1" } } },
    });
    render(
      <AuthProvider>
        <Probe />
      </AuthProvider>,
    );
    await waitFor(() =>
      expect(screen.getByTestId("loading").textContent).toBe("false"),
    );
    expect(screen.getByTestId("session").textContent).toBe("in");
    expect(mockAuth.onAuthStateChange).toHaveBeenCalled();
  });

  it("utan session blir loading=false och session=out", async () => {
    mockAuth.getSession.mockResolvedValue({ data: { session: null } });
    render(
      <AuthProvider>
        <Probe />
      </AuthProvider>,
    );
    await waitFor(() =>
      expect(screen.getByTestId("loading").textContent).toBe("false"),
    );
    expect(screen.getByTestId("session").textContent).toBe("out");
  });

  it("signIn anropar signInWithPassword och kastar vid fel", async () => {
    mockAuth.getSession.mockResolvedValue({ data: { session: null } });
    mockAuth.signInWithPassword.mockResolvedValue({
      error: { message: "Invalid login credentials" },
    });
    let auth: ReturnType<typeof useAuth> | undefined;
    const Grab = () => {
      auth = useAuth();
      return null;
    };
    render(
      <AuthProvider>
        <Grab />
      </AuthProvider>,
    );
    await waitFor(() => expect(auth).toBeTruthy());
    await expect(auth!.signIn("a@b.se", "hemlig")).rejects.toBeTruthy();
    expect(mockAuth.signInWithPassword).toHaveBeenCalledWith({
      email: "a@b.se",
      password: "hemlig",
    });
  });
});

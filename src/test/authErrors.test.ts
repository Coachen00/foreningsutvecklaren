import { describe, it, expect } from "vitest";
import { translateAuthError } from "@/lib/authErrors";

describe("translateAuthError", () => {
  it("översätter ogiltig inloggning till svenska", () => {
    expect(translateAuthError("Invalid login credentials")).toBe(
      "Fel e-post eller lösenord.",
    );
  });

  it("känner igen obekräftad e-post", () => {
    expect(translateAuthError("Email not confirmed")).toBe(
      "E-postadressen är inte bekräftad ännu.",
    );
  });

  it("känner igen rate limit (både 'rate limit' och 'too many')", () => {
    const expected = "För många försök. Vänta en stund och försök igen.";
    expect(translateAuthError("Email rate limit exceeded")).toBe(expected);
    expect(translateAuthError("Too many requests")).toBe(expected);
  });

  it("faller tillbaka på ett generiskt meddelande för okänt fel", () => {
    expect(translateAuthError("network glitch 500")).toBe(
      "Det gick inte att logga in. Försök igen.",
    );
  });
});

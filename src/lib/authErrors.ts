/**
 * Översätter Supabase-autentiseringsfel till begripliga svenska meddelanden.
 *
 * Egen modul utan tunga beroenden så den kan enhetstestas isolerat — att
 * importera Login.tsx i ett test skulle annars dra in Supabase-klienten, som
 * hård-failar när VITE_SUPABASE_* saknas i testmiljön.
 */
export const translateAuthError = (message: string) => {
  const m = message.toLowerCase();
  if (m.includes("invalid login")) return "Fel e-post eller lösenord.";
  if (m.includes("email not confirmed"))
    return "E-postadressen är inte bekräftad ännu.";
  if (m.includes("rate limit") || m.includes("too many"))
    return "För många försök. Vänta en stund och försök igen.";
  return "Det gick inte att logga in. Försök igen.";
};

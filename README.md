# Föreningsutvecklaren

Webbplats för rollen *föreningsutvecklare / språkrör* vid Göteborgs Fotbollförbund — de tre huvuduppdragen *En bättre väg*, *FU Skola* och *Föreningslyftet* samt övrigt arbetsmaterial.

Bygget är en Vite + React 18 + TypeScript-app med Tailwind/shadcn-ui och Supabase för autentisering.

## Snabbstart

```bash
bun install
bun run dev          # Vite dev-server, default :8080
bun run test         # Vitest
bun run lint         # ESLint
bun run build        # Produktionsbygge
```

## Miljövariabler

Skapa `.env.local` i projektroten (filen är gitignored):

```
VITE_SUPABASE_URL=https://<projekt>.supabase.co
VITE_SUPABASE_ANON_KEY=<anon-key>
```

`anon`-nyckeln är publik *by design* men ska aldrig commit:as som plain-text-fil. Mall finns i `.env.example`.

## Auth

- Allt utom `/login` och `/reset-password` är skyddat av `<ProtectedRoute>` — vid utgången/saknad session redirectas användaren till `/login`.
- Sessioner hanteras av Supabase med `autoRefreshToken` och `persistSession` på.
- Lösenordsåterställning: e-postlänk → `/reset-password` där sessionen från länken byts mot nytt lösenord.

## Drift / produktion

Sajten **måste** levereras över HTTPS. Webbläsaren markerar annars som *Inte säker* och `Strict-Transport-Security`-headern går inte att tillämpa.

### Säkerhetsheaders

`public/_headers` levereras med plattformar som tolkar Netlify-formatet (Netlify, Cloudflare Pages). För andra plattformar (Vercel, statisk Nginx, IIS) — replikera samma policy via plattformens egen mekanism:

| Header | Värde |
|--------|-------|
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=(), interest-cohort=()` |
| `X-Frame-Options` | `SAMEORIGIN` |
| `Content-Security-Policy` | Se `public/_headers` |

### HTTP → HTTPS redirect

Konfigureras hos hostingen (Netlify/Cloudflare/Vercel gör det automatiskt vid HTTPS-cert). På `foreningsutvecklaren.se`: säkerställ att DNS pekar mot HTTPS-host, att SSL-cert är aktivt och att HTTP-trafik 301-redirectas till HTTPS.

### SPA-routing

`public/_redirects` skickar alla okända paths till `index.html` så client-side-routing fungerar på statisk hosting.

## Struktur

```
src/
  App.tsx                Routing + providers
  main.tsx               React-bootstrap
  contexts/AuthContext.tsx
  components/
    auth/ProtectedRoute.tsx
    blocks/              ~30 layout-byggstenar
    dashboard/           Inloggad startvy (Hero/Countdown, Successes, EffectLogic)
    ui/                  shadcn-primitives (kopierade in)
    GlobalNav.tsx, Footer.tsx
  content/               *.ts — allt innehåll som typade objekt
    campaignTimeline.ts  Datum + video-url:er för nedräkning
    harvestedSuccesses.ts Skördade framgångar
  pages/
    Home.tsx, Login.tsx, ResetPassword.tsx, NotFound.tsx
    areas/               Områdes/uppdragssidor
  hooks/, lib/, assets/, test/
```

## Ändra dashboard-innehåll

| Vad ska ändras? | Fil |
|-----------------|-----|
| Datum för senaste/nästa stora aktivitet | `src/content/campaignTimeline.ts` |
| Video-url:er och poster-bilder | `src/content/campaignTimeline.ts` |
| Skördade framgångar (kort + text + metric) | `src/content/harvestedSuccesses.ts` |
| Effektlogik-text | `src/content/harvestedSuccesses.ts` (`EFFECT_LOGIC`) |

Lägg lokala videos i `public/videos/` (skapas vid behov). Filerna serveras direkt från rooten i produktion.

## Material och strategiskt underlag

Strategiska källor och mötesunderlag ligger utanför webappen i `C:\Scripts\jobb_detektiven\` (`arbetsbeskrivning_*.md`, `Material/`).

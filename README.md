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

Sajten levereras nu live på **`https://foreningsutvecklaren.se`** via GitHub Pages med custom domain. HTTPS är enforced — HTTP-trafik 301-redirectas automatiskt.

### Säkerhetsheaders — vad fungerar var

GitHub Pages **stöder inte** `public/_headers` (Netlify-format). Vi har istället en hybrid:

| Header / direktiv | GitHub Pages (nu) | Netlify / Cloudflare Pages (vid flytt) |
|-------------------|-------------------|---------------------------------------|
| HTTPS + 301 från HTTP | ✅ via `https_enforced=true` på Pages-konfig | ✅ |
| Content-Security-Policy | ✅ via `<meta http-equiv>` (injiceras vid `vite build`) | ✅ via `_headers` |
| Strict-Transport-Security | ❌ (kräver HTTP-header) | ✅ via `_headers` |
| X-Content-Type-Options, X-Frame-Options, Permissions-Policy | ❌ | ✅ via `_headers` |
| Aggressiv cache på `/assets/*` | ❌ (default 600s) | ✅ via `_headers` |
| SPA-fallback `* → /index.html` | ✅ via Pages SPA-stöd / 404.html | ✅ via `_redirects` |

`public/_headers` och `public/_redirects` ligger kvar — det blir noll-arbete vid flytt till Netlify eller Cloudflare Pages och ger då full säkerhets-policy.

### CSP

Policyn injiceras i `index.html` vid `vite build` via en custom plugin i `vite.config.ts`. Direktiven matchar det som finns i `public/_headers`. Källkoden för policyn ligger i `vite.config.ts` (`PROD_CSP`).

### För hårdare säkerhet → flytt till Cloudflare Pages

Snabbsteg om du vill ha HSTS + alla headers:

1. Logga in på Cloudflare Pages, koppla GitHub-repot.
2. Build command: `bun run build`. Output: `dist`. Env: kopiera från `.env.local`.
3. Lägg till custom domain `foreningsutvecklaren.se`.
4. CFP läser `_headers` och `_redirects` automatiskt.

Inget behöver ändras i koden — allt är redan förberett.

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

# Dashboard-konfiguration

Inloggad startsida består av tre sektioner. Alla tre drivs av config-filer i `src/content/`. Inga komponenter behöver röras för att uppdatera innehåll.

## 1. Hero med nedräkning — `src/content/campaignTimeline.ts`

Sektionen visar:

- En **bakgrundsvideo** (autoplay, muted, loop) — fallback till gradient om filen saknas.
- En **hero-rubrik** + lead.
- **Två stora tal**: dagar sedan senaste stora aktivitet · dagar till nästa.
- **Progressbar** mellan dem (uppdateras automatiskt vid focus/visibility).

### Vanliga uppdateringar

| När? | Vad ändras? | Var? |
|------|-------------|------|
| Direkt efter en stor aktivitet genomförts | `latestActivity.date` (ISO `YYYY-MM-DD`) | `CAMPAIGN_TIMELINE.latestActivity` |
| Nästa milstolpe planerad | `nextActivity.date` | `CAMPAIGN_TIMELINE.nextActivity` |
| Aktiviteten döps om | `latestActivity.name` / `nextActivity.name` | Samma |
| Ny copy i hero | `heroEyebrow`, `heroTitle`, `heroLead` | `CAMPAIGN_TIMELINE` |
| Ny video | Ladda upp till `public/videos/`, peka `heroVideoUrl` | `CAMPAIGN_TIMELINE` |
| Poster (statisk bild som visas tills video laddats) | Ladda upp till `public/images/`, peka `heroPosterUrl` | `CAMPAIGN_TIMELINE` |

**Viktigt:** Datum måste vara giltiga `YYYY-MM-DD`. Hooken `computeTimelineProgress()` klampa progress till `[0, 100]` så det är lugnt att lämna gamla värden tillfälligt.

## 2. Skördade framgångar — `src/content/harvestedSuccesses.ts`

Sektionen visar 3–6 kort med titel, beskrivning och en "metric"-etikett (kvalitativ, inte siffra).

### Lägga till ett nytt framgångskort

```ts
HARVESTED_SUCCESSES.push({
  id: "unik-id",                // måste vara unikt
  title: "Kort rubrik",
  description: "1–2 meningar.",
  metric: "Kort effektetikett",
});
```

Test-suiten tvingar 3–6 kort och unika `id`. Bryts den invarianten failar `bun run test`.

### Egen success-video

`SUCCESS_VIDEO` styr video och rubrik på sektionen:

```ts
SUCCESS_VIDEO = {
  eyebrow: "Skördade framgångar",
  title: "Framgångar vi redan har skördat",
  lead: "...",
  videoUrl: "/videos/successes.mp4",
  posterUrl: "/images/video-poster-successes.jpg",
};
```

## 3. Effektlogik — `src/content/harvestedSuccesses.ts` (`EFFECT_LOGIC`)

Fyra exakta steg: `Resurser → Aktiviteter → Mål → Effekt`. Test-suiten tvingar exakt fyra och rätt ordning. Texterna kan ändras fritt:

```ts
EFFECT_LOGIC = [
  { label: "Resurser", body: "..." },
  { label: "Aktiviteter", body: "..." },
  { label: "Mål", body: "..." },
  { label: "Effekt", body: "..." },
];
```

## Mediafilstrategi

| Mapp | Innehåll | Cache |
|------|----------|-------|
| `public/videos/` | `.mp4` (eller `.webm`) — bakgrundsvideor | 7 dagar (`_headers`) |
| `public/images/` | Poster-bilder, OG-image | 7 dagar |
| `public/og-image.svg` | Statisk delningsbild | 7 dagar |

Filer i `public/` serveras från rot-URL i produktion (`/videos/x.mp4`).

## Snabbtest efter ändring

```bash
bun run test    # config-guards (3–6 framgångar, 4 effektsteg, datum-format)
bun run build   # produktionsbygge
bun run dev     # visuell verifiering :8080
```

## Vad händer om en video saknas?

`<video onError>` triggar fallback-gradient. Användaren ser fortfarande all text och nedräkning — bara att bakgrunden blir abstrakt grön/svart.

## Reaktiv uppdatering

Nedräkningen räknar om vid:

- `visibilitychange` (när fliken blir aktiv igen)
- `focus` på fönstret
- En lågpriskontroll var 60:e sekund medan fliken är öppen

Det betyder att en länge öppen flik visar korrekt antal dagar utan reload.

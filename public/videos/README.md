# public/videos/

Här ligger bakgrundsvideor som dashboard-komponenterna refererar.

## Förväntade filer

| Filnamn | Används av | Refereras i |
|---------|-----------|-------------|
| `latest-activity.mp4` | Hero/countdown bakgrund | `src/content/campaignTimeline.ts` (`heroVideoUrl`) |
| `successes.mp4` | Skördade framgångar bakgrund | `src/content/harvestedSuccesses.ts` (`SUCCESS_VIDEO.videoUrl`) |

## Krav

- **Format:** H.264 i `.mp4` (best universellt stöd) eller `.webm` med VP9
- **Storlek:** Max ~6 MB rekommenderat — videon laddas automatiskt
- **Längd:** 8–20 sek loop, ingen ljud (komponenten muter och loopar)
- **Upplösning:** 1920×1080 räcker, 1280×720 gör laddning snabbare
- **Tone:** Mörkt, lugnt — text läggs ovanpå med svart overlay (60–75%)

## Saknas filen?

`<video onError>` triggar fallback-gradient (grön/svart). Sidan fungerar — bara mer abstrakt bakgrund.

## Byta filnamn

Ändra `heroVideoUrl` / `SUCCESS_VIDEO.videoUrl` i `src/content/`-filerna istället för att döpa filen.

# public/images/

Statiska bilder som dashboard-komponenterna refererar.

## Förväntade filer

| Filnamn | Användning | Refereras i |
|---------|-----------|-------------|
| `video-poster.jpg` | Visas tills hero-videon laddats | `src/content/campaignTimeline.ts` (`heroPosterUrl`) |
| `video-poster-successes.jpg` | Visas tills success-videon laddats | `src/content/harvestedSuccesses.ts` (`SUCCESS_VIDEO.posterUrl`) |

## Krav

- **Format:** `.jpg` eller `.webp` (poster-bilder ska inte vara transparenta)
- **Upplösning:** Matcha videons aspect ratio, t.ex. 1920×1080
- **Storlek:** ~50–200 kB optimerat

## OG-image

Delningsbild ligger på rot-nivå: `public/og-image.svg`. Byt vid behov till `og-image.png` eller `og-image.jpg` och uppdatera meta-taggar i `index.html` om format ändras.

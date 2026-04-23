# Sajtlogik – tre huvuduppdrag

## Beslut

Den externa logiken på hemsidan kommuniceras genom **tre huvuduppdrag**:

1. **Föreningslyftet** — `/foreningsutveckling`
2. **En bättre väg** — `/en-battre-vag`
3. **FU Skola** — `/fu-skola`

Tidigare primära ytor ("Uppdrag", "Föreningsutveckling", "Skola & samverkan")
fungerar inte längre som extern navigation. De lever vidare som intern
innehållsmodell och stödsidor.

## Varför

Den tidigare strukturen var semantiskt korrekt som administrativ
områdesindelning, men svag som extern kommunikation. En besökare såg inte
omedelbart vilka de tre stora uppdragen är. Den nya logiken separerar:

- **Intern content model** – `AREAS`, programs, subpages, delade block.
- **Extern användarlogik** – top navigation, startsidans huvudkort,
  hero-budskap, nästa/föregående-flöde.

## Primära sidor

| Uppdrag | Path | Komponent | Källa |
|--------|------|-----------|-------|
| Föreningslyftet | `/foreningsutveckling` | `src/pages/areas/Foreningsutveckling.tsx` | `PRIMARY_ASSIGNMENTS` + programs (`foreningsutveckling`) |
| En bättre väg | `/en-battre-vag` | `src/pages/areas/EnBattreVag.tsx` | `PRIMARY_ASSIGNMENTS` + program `en-battre-vag` |
| FU Skola | `/fu-skola` | `src/pages/areas/FUiSkola.tsx` | `PRIMARY_ASSIGNMENTS` + program `fu-i-skola` |

Alla tre använder `AssignmentShell` (driven av `PrimaryAssignment`, inte
`Area`) för att hålla en jämbördig visuell status.

## Sekundära / stödjande sidor

| Sida | Path | Roll |
|------|------|------|
| Uppdrag | `/uppdrag` | Systemisk översikt av kärnuppdraget och arbetsmetod |
| Arbetsuppgifter | `/uppdrag/arbetsuppgifter` | Fördjupning av operativa aktiviteter |
| Partners | `/uppdrag/partners` | Ansvarskedjan i detalj |
| Kvalitetsklubb | `/foreningsutveckling/kvalitetsklubb` | Djupdyk i ett program inom Föreningslyftet |
| Skola & samverkan | `/skola-samverkan` | Kontextuell hubb som binder ihop *En bättre väg* och *FU Skola* berättelsemässigt – inte primär ingång |

## Komponenter och datafiler

### Styr extern användarlogik
- `src/content/primaryAssignments.ts` – source of truth för de tre uppdragen.
- `src/content/siteStructure.ts` – äldre NAV_ITEMS, används inte längre av
  GlobalNav. Kan tas bort i en framtida städning.
- `src/components/GlobalNav.tsx` – top-nav, driven av `PRIMARY_ASSIGNMENTS`.
- `src/components/home/HomeHero.tsx` – startsidans hero, räknar primary
  assignments.
- `src/components/home/PrimaryAssignmentsGrid.tsx` – startsidans tre kort.
- `src/components/blocks/AssignmentShell.tsx` – hero/breadcrumb för
  primärsidorna.
- `src/components/blocks/NextPageCTA.tsx` – generisk prev/next, accepterar
  både `Area` och `PrimaryAssignment` via `NextPageTarget`-interface.

### Styr intern innehållsmodell
- `src/content/areas.ts` – `AREAS`, används av stödsidorna under `/uppdrag`
  och `/skola-samverkan`, och av `AreaShell`.
- `src/content/programs.ts` – programdefinitioner (Kvalitetsklubb,
  Matchklimat, FU i förening, FU i skola, En bättre väg).
- `src/content/partners.ts` – partners inkl. GIS, visas via `PartnerStrip`
  och `PartnerMapBlock`.
- `src/content/activities.ts` – kärnaktiviteter och fördjupningar.
- `src/content/impact.ts` – effekt-statements kopplade till areaSlug.

## Navigation

### Top nav (desktop)
`Föreningslyftet | En bättre väg | FU Skola · Uppdrag`

"Uppdrag" ligger kvar som sekundär länk, visuellt dämpad, till höger om
primärlänkarna (separerad med vertikal linje). Den är inte längre en av de
tre främsta externa ytorna.

### Mobile nav (Sheet)
Primärlistan: tre huvuduppdrag med ikon, kicker och navLabel.
Sekundärlistan: Uppdrag under rubriken "Stöd & struktur".

## Next/Prev-flöde

Primärflödet mellan de tre uppdragen drivs av
`adjacentPrimaryAssignments()` i `primaryAssignments.ts`:

```
Föreningslyftet → En bättre väg → FU Skola → Föreningslyftet (loop)
```

`Uppdrag`, `Arbetsuppgifter` och `Partners` pekar på första primäruppdraget
(`PRIMARY_ASSIGNMENTS[0]` = Föreningslyftet) via `NextPageCTA`, utan prev –
de är utgångar från stöd/struktur in i primärspåret.

`Kvalitetsklubb` pekar bakåt till Föreningslyftet och framåt till
En bättre väg (via `adjacentPrimaryAssignments("foreningslyftet")`).

## Design

Designsystemet är **oförändrat**:
- serif (Lora) i display-rubriker
- sans (Work Sans) i brödtext
- mono (Inconsolata) i etiketter
- befintlig spacing-rytm, HSL-tokens, block-arkitektur

Förändringen är informationsarkitekturen och copyn – inte formspråket.

## Risker och edge cases

- **Gamla inkommande länkar** till `/skola-samverkan/fu-i-skola` är
  hanterade via en explicit `<Navigate>` i `App.tsx`.
- **Route `/foreningsutveckling` är bibehållen** för att minimera
  brytningar trots att etiketten externt är "Föreningslyftet". Kan
  ev. rebrandas till `/foreningslyftet` som en framtida URL-migration
  med 301-redirect.
- **`AREAS.slug === "foreningsutveckling"`** används fortfarande internt
  som kopplingspunkt mellan programs/impact och pages. Byt inte slug
  utan att uppdatera `programs.ts`, `impact.ts`, `partners.ts`.
- **`siteStructure.NAV_ITEMS`** är kvar men används inte av GlobalNav
  längre. Lämnad för bakåtkompatibilitet med ev. externa referenser.
  Kan tas bort när inga importer finns.

## Kärnformulering

Sajten säger externt:

> "Det här uppdraget bärs av tre stora spår: Föreningslyftet,
> En bättre väg och FU Skola."

Inte:

> "Det här är tre administrativa områden."

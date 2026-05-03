# Obsidian / wiki-llm-integration — fotbollsnyttan

**Datum:** 2026-04-28
**Status:** Implementerad
**Författare:** Joel + Claude

## Bakgrund

Fotbollsnyttan är en publik React/TypeScript-sajt som dokumenterar Joels uppdrag på GFF. Den lever fristående från Joels Obsidian-baserade andrahjärna i Ture_Sventon. Behovet: göra fotbollsnyttan-innehåll **frågbart via wiki-llm** utan att skapa dubbelarbete eller bryta mot vault-arkitekturen.

## Beslut

Lägg in fotbollsnyttan som en **`sajt`-typ** i Ture_Sventons befintliga vault-struktur, parallellt med `project`, `area`, `note` osv. Två rader kod i `wiki_llm.py` + en ny mappkategori + sex schema-konformiga markdown-noter.

## Princip — ett rum, två syften

| Plats | Syfte | Ändras av |
|---|---|---|
| `fotbollsnyttan/src/content/*.ts` | Det sajten faktiskt visar | Kodeditor / Lovable |
| `wiki_vault/wiki/sajter/fotbollsnyttan/` | Kunskap *om* sajten — copy-utkast, beslut, research | Obsidian / wiki-llm |

Filerna dubblerar inte varandra. TypeScript är rendering-sanning. Obsidian är tänkande-yta. Inget löpande synkningsarbete krävs.

## Arkitektur

### Schema-utvidgning (SCHEMA.md)

Tre nya types tillkommer de befintliga 11:

- **`sajt`** — Extern webbsajt eller publikt projekt (fotbollsnyttan, framtida sajter).
- **`intresse`** — Långsiktigt intresseområde (börs, fotboll, spel m.m.).
- **`media`** — Sparad media-snutt (screenshots, citat, Instagram-poster).

Varje type har valfri specifik metadata (`repo`, `url`, `source`, `captured`).

### Mappstruktur

```
wiki_vault/wiki/
├── ... (befintliga 11 kategorier)
├── sajter/
│   └── fotbollsnyttan/
│       ├── oversikt.md
│       ├── uppdragen.md
│       ├── omraden.md
│       ├── program.md
│       ├── partners.md
│       └── aktiviteter.md
├── intressen/
└── media/
```

### Kodändring (`backend/ture_sventon/wiki_llm.py`)

`ARTICLE_FOLDERS` och `ARTICLE_LABELS` utvidgade med `sajter`, `intressen`, `media`. Inga andra ändringar — wiki-llm:s indexering, parsing och frågehantering fungerar oförändrad.

## Granularitet

Sex tematiska noter per sajt (översikt + fem fördjupningar) istället för:

- En enda stor fil → svår att underhålla, sämre länkbarhet
- En fil per program/partner/aktivitet → ~25 filer, fragmenterat

Vald nivå följer mönstret från befintliga `wiki/projects/`-filer (3-5 filer per projekt).

## Frågedrivning

wiki-llm söker hela vault:en automatiskt. Ingen scoping behövs — fotbollsnyttan-innehåll dyker upp i frågor när det är relevant ("Vad är Kvalitetsklubb?", "Vilka partners har FU Skola?"). Gränssnittet existerar via `type:`-fältet om Joel senare vill filtrera.

## Skalbarhet

Mönstret stödjer enkel utvidgning:

- **Ny sajt:** skapa `wiki/sajter/<sajtnamn>/` med samma fil-struktur.
- **Nytt intresse:** skapa fil i `wiki/intressen/` med `type: "intresse"`.
- **Sparad media:** skapa fil i `wiki/media/` med `type: "media"` + `source`.

Inga kodändringar krävs för fler instanser inom befintliga types.

## Audit & spårbarhet

- `_index.md` uppdaterat med Sajter / Intressen / Media-kategorier.
- `_log.md` har tre sessionsrader för 2026-04-28 (schema-utvidgning, integration, index).
- Detta design-dokument committat till fotbollsnyttans repo.

## Risker och edge cases

- **Schema-drift:** om någon lägger till nya types i `wiki_llm.py` utan motsvarande i `SCHEMA.md` (eller tvärtom) skapas inkonsistens. Kärnregel 1 i SCHEMA.md mitigerar — alla framtida ändringar börjar i SCHEMA.md.
- **Manuell sync TS ↔ markdown:** om copy ändras på sajten utan att Obsidian-noten uppdateras driftar de isär. Acceptabelt eftersom syften är olika. Vid behov i framtiden: liten Python-script som regenererar markdown från TS.
- **`rebuild_index()` har en känd WindowsPath-bug** (Etapp 1). Workaround: nästa `/api/wiki/articles`-anrop gör soft-rebuild. Påverkar inte denna integration.

## Referenser

- `wiki_vault/SCHEMA.md` — kanonisk source of truth för types och regler
- `backend/ture_sventon/wiki_llm.py` — indexering och artikelhantering
- `fotbollsnyttan/src/content/` — TypeScript-sanning för sajtens innehåll
- `fotbollsnyttan/docs/site-positioning.md` — extern sajtlogik (tre uppdrag)

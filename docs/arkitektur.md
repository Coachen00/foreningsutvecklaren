# Arkitektur — fotbollsnyttan / Arbetsdetektiven

> Teknisk beskrivning för språkrör/utvecklare som ska lägga till nytt innehåll utan att bryta sajtens kategorisering. Läs detta dokument **innan** du rör en sida — det förklarar var saker hör hemma och varför.

---

## 1. Stack och bygg-grunder

| Lager | Val | Notering |
|-------|-----|----------|
| Bundler | **Vite 5** | `vite.config.ts`, dev-server på port 8080 |
| Runtime | **React 18** + TypeScript (strict) | Funktionskomponenter, hooks |
| Routing | **react-router-dom v6** | `BrowserRouter`, `Route`, `Navigate` — ingen router-loader |
| Datalager | **TanStack Query** (provider mountad i `App.tsx`) | Inga `useEffect + fetch`-mönster |
| Styling | **Tailwind 3** + **shadcn/ui** (kopierad in i `src/components/ui/`) | shadcn-filer får ändras direkt |
| Auth | **Supabase** via `@supabase/supabase-js` | `AuthContext` + `ProtectedRoute` |
| Test | Vitest | Filer i `src/test/` |
| Pakethanterare | **Bun** (`bun install`, `bun run dev`) — `npm` fungerar också |

Build: `bun run build` (eller `npm run build`). Statiska filer hamnar i `dist/`.

---

## 2. Mappstruktur

```
fotbollsnyttan/
├─ docs/
│  ├─ arkitektur.md          ← detta dokument
│  └─ site-positioning.md    ← strategiskt narrativ (tre huvuduppdrag)
├─ src/
│  ├─ App.tsx                ← all routing
│  ├─ main.tsx               ← Vite entry
│  ├─ index.css              ← design-tokens (CSS custom properties)
│  ├─ components/
│  │  ├─ GlobalNav.tsx       ← topp-navigering
│  │  ├─ Footer.tsx
│  │  ├─ auth/               ← ProtectedRoute m.fl.
│  │  ├─ blocks/             ← ★ designsystemet — alla återanvändbara byggstenar
│  │  └─ ui/                 ← shadcn-komponenter (button, sheet, toaster …)
│  ├─ content/               ← ★ all data — typsäker, ingen CMS-sync
│  ├─ contexts/              ← AuthContext
│  ├─ hooks/                 ← useDocumentTitle m.fl.
│  └─ pages/                 ← en fil per route
│     ├─ Home.tsx
│     ├─ Login.tsx, ResetPassword.tsx, NotFound.tsx
│     └─ areas/              ← alla innehållssidor
├─ public/                   ← statiska assets
└─ tailwind.config.ts        ← design-tokens (typskala, färger, fontfamiljer)
```

**Två platser där 95 % av innehållsändringar sker:** `src/content/*.ts` (data) och `src/pages/areas/*.tsx` (komposition).

---

## 3. Det mentala modellen — tre nivåer

Sajten har **två parallella innehållsmodeller** som besökaren möter olika.

### 3.1 PRIMARY ASSIGNMENTS — vad användaren ser
Tre likvärdiga huvuduppdrag i topp-navet och på startsidan. Definierade i `src/content/primaryAssignments.ts`.

| ID | Titel | Route | Kicker |
|----|-------|-------|--------|
| `foreningslyftet` | Föreningslyftet | `/foreningsutveckling` | Långsiktig föreningsförflyttning |
| `en-battre-vag` | En bättre väg | `/en-battre-vag` | Riktad samhällsbärande satsning |
| `fu-skola` | FU Skola | `/fu-skola` | Bron mellan skola och förening |

Detta är **extern användarlogik**. När du lägger till ett nytt huvuduppdrag — vilket är ovanligt — uppdaterar du `PRIMARY_ASSIGNMENTS`-arrayen, lägger till en route i `App.tsx` och bygger en sida som använder `<AssignmentShell>`.

### 3.2 AREAS — intern innehållsmodell
Samma värld men sorterad efter ansvar/tema. Definierade i `src/content/areas.ts`. Tre områden:

| Slug | Path | Huvudtema |
|------|------|-----------|
| `uppdrag` | `/uppdrag` | Kärnuppdraget, styrning, partners |
| `foreningsutveckling` | `/foreningsutveckling` | Kvalitet & kultur — Kvalitetsklubb m.m. |
| `skola-samverkan` | `/skola-samverkan` | Skola, samverkan, sociala satsningar |

AREAS äger **fördjupningssidor och stödsidor**. Notera att `foreningsutveckling`-pathen är delad med Föreningslyftet (primary) — samma URL, men sidan kan visa antingen `AssignmentShell` eller `AreaShell` beroende på kontext. Föreningslyftet-sidan använder primary-shellen.

### 3.3 SUBPAGES — fördjupningar
Sidor under en area eller ett huvuduppdrag. Kan vara av två typer:

1. **Area-subpages** definierade i `AREAS[].subpages` (t.ex. `arbetsuppgifter`, `partners`, `kvalitetsklubb`).
2. **Tematiska subpages** som inte hör till en formell area men ligger under ett uppdrag i URL:en (t.ex. `/foreningslyftet/jamstalldhet-och-trygghet`, `/uppdrag/spelarutbildning`). Dessa använder `<SubpageShell>`.

**Tumregel för var nytt innehåll hör hemma:** se beslutsträdet i § 9.

---

## 4. Innehållsmodellen (`src/content/*.ts`)

**Alla** texter, kort, listor, mätpunkter etc. ligger som typsäkra TypeScript-objekt. Ingen runtime-fetch, ingen markdown, ingen CMS-koppling.

### 4.1 Filtaxonomi

| Fil | Datatyp | Syfte | Konsumeras av |
|-----|---------|-------|---------------|
| `siteStructure.ts` | `NavItem[]`, `AreaSlug` | Topp-nav fallback + slug-typ | `GlobalNav`, alla areas |
| `primaryAssignments.ts` | `PrimaryAssignment[]` | De tre huvuduppdragen | `AssignmentShell`, `GlobalNav`, `CurrentStateBlock`, `MissionPriorityBlock` |
| `areas.ts` | `Area[]` med `subpages[]` | Intern struktur, fördjupningar | `AreaShell`, `Breadcrumb`, sub-sidor |
| `programs.ts` | `Program[]` med `pillars[]` | Program (Kvalitetsklubb, FU i förening osv) | `ProgramBlock`, primary pages |
| `partners.ts` | `Partner[]` | Aktörer i ekosystemet | `PartnerStrip`, `PartnerMapBlock` |
| `impact.ts` | `ImpactStatement[]` per area | "Därför finns arbetet" — kvalitativa effekter | `ImpactBlock` |
| `activities.ts` | `Activity[]` (`core`/`occasional`/`extended`) | Operativa arbetsformer | `ActivityListBlock`, `CoreMissionBlock` |
| `roles.ts` | `AssignmentRole[]`, `DoDontGroup` | Roller + gör/gör inte (En bättre väg) | `RolePair`, `DoDontPair` |
| `goals.ts` | `Goal[]` | Kvantifierade mål med stort numerisk värde | `GoalsBlock` |
| `criteria.ts` | `CriteriaList` | Checklistor för deltagande | `CriteriaList` |
| `metrics.ts` | `MetricList` med `groups[]` | Mätpunkter (KPI:er) grupperade | `MetricListBlock` |
| `priorities.ts` | `PriorityLevel[]` | 5-stegs prioriteringstrappa | `PriorityLadder` |
| `yearWheel.ts` | `YearWheelMonth[]` | 12 månaders cykel + intensitet | `YearWheel` |
| `kvalitetsklubb.ts` | `FocusArea[]`, `ProcessStep[]`, `KlubbRole[]` | Kvalitetsklubbs ramverk | `FocusAreaBlock`, `KvalitetsklubbProcess`, `KlubbRolesBlock` |
| `effectChain.ts` | `EffectStage[]` | Resurser → Aktiviteter → Output → Effekt | `EffectChain` |
| `ecosystem.ts` | `EcosystemNode[]`, `ECOSYSTEM_METAPHOR` | Skarp positionering av varje system | `EcosystemMap` |
| `strategikarta.ts` | `StrategicArea[]`, `MappingRow[]`, `FORENINGSLYFTET_KPI` | SvFF nationellt → GFF lokalt | `StrategiKarta` |
| `planningChain.ts` | `PlanningChainStep[]`, `QualityClubPlanningFocus[]`, `PlanningOutcome[]` | Verksamhetsidé → mål → plan → årshjul | `PlanningChainBlock` |

### 4.2 Konventioner i content-filer

- **Allt innehåll exporteras som `const`-arrays/objekt** med uttrycklig typ. Inga klasser, ingen `any`.
- **JSDoc-block överst** i varje fil förklarar källa (PDF-avsnitt, SvFF-länk osv) och vilka komponenter som konsumerar datan.
- **Ikoner importeras från `lucide-react`** och lagras direkt på objektet (`icon: LucideIcon`). Verifiera att namnet finns i lucide innan du använder (`Whistle` finns t.ex. inte; använd `Flag`).
- **Slug-konvention**: kebab-case, inga svenska tecken (`/foreningsutveckling`, inte `/föreningsutveckling`). URL-segment och content-id är samma sak.
- **Hjälpfunktioner** (`getArea`, `getProgram`, `programsByArea`, `adjacentPrimaryAssignments`) bor i samma fil som datan de slår upp i.

### 4.3 Tilläggsregel
Behöver du ett nytt återanvändbart innehållskoncept (t.ex. en ny lista över "stipendier")?

1. Skapa `src/content/<koncept>.ts` med interface + `const`-array.
2. Skapa motsvarande block i `src/components/blocks/<KonceptBlock>.tsx`.
3. Konsumera på en eller flera sidor.

Lägg **aldrig** in långa textmängder direkt i en sidas JSX. Sidan ska vara komposition, inte innehåll.

---

## 5. Komponenttaxonomi (`src/components/blocks/`)

Tre kategorier — håll dem isär.

### 5.1 SHELLS — sidans yttre ram (precis under `<GlobalNav>`)
| Komponent | Använd när |
|-----------|------------|
| `AssignmentShell` | Sidan är ett av de tre primära huvuduppdragen. Tar `assignment: PrimaryAssignment`. |
| `AreaShell` | Sidan är ett area-toppbar (`Uppdrag`, `Skola & samverkan`) eller en area-subpage (`Arbetsuppgifter`, `Kvalitetsklubb`). Tar `area: Area`, valfri `subtitle`. |
| `SubpageShell` | Sidan hör inte till en formell area men ligger under ett uppdrag i URL:en (t.ex. `/uppdrag/spelarutbildning`). Tar fritt definierade props (`breadcrumbs`, `kicker`, `icon`, `title`, `lead` …). |

Alla shells:
- renderar hero (kicker + serif-titel + lead),
- sätter `<title>` via `useDocumentTitle`,
- exponerar `<main>` som tar children.

### 5.2 LAYOUT-WRAPPERS
| Komponent | Syfte |
|-----------|-------|
| `PageWithDepth` | Tvåkolumnslayout med innehåll + sticky TOC + aside. Används av primary-uppdrag och alla djupare subpages. Innehållskolumnen är `max-w-[64rem]` (för att rymma breda block). |
| `SectionBlock` | "Sekt" på startsidan/area-toppsidor. Header (eyebrow + title + lead), `variant: default \| muted \| accent \| flush`, valfritt `split`/`narrow`. |
| `ExpandableBlock` | Expanderbar sektion på fördjupningssidor. Stöder `wide` (tar bort 80ch-prose-constrainten — krävs för `YearWheel`, `EffectChain`, `PlanningChainBlock`, `StrategiKarta`-tabellen, `GoalsBlock` 4-kol). |

### 5.3 INNEHÅLLSBLOCK — visualiserar data
| Komponent | Datatyp | Visuell idé | Default `wide` krävs |
|-----------|---------|-------------|----------------------|
| `ProgramBlock` | `Program` | Pelare uppdelade i grid | nej |
| `PartnerStrip` | `Partner[]` (filtrerad via `ids`) | Chip-rad | nej |
| `PartnerMapBlock` | `Partner[]` grupperad efter `role` | Roll-grupperad lista | nej |
| `ImpactBlock` | `ImpactStatement` | Numrerad lista i ramad ruta | nej |
| `ActivityListBlock` | `Activity[]` | Grid med titel + cadence-badge | nej |
| `CoreMissionBlock` | `Activity[]` (default = core + occasional) | 4-kol grid med stora numerala markörer | nej |
| `WorkMethodBlock` | `{title, description}[]` | Numrerad processbeskrivning | nej |
| `RolePair` | `AssignmentRole[]` | 2-kolumns rollkort | ja |
| `DoDontPair` | `{do, dont}` | Två-kolumns gör/gör-inte | ja |
| `GoalsBlock` | `Goal[]` | Stora numerala värden i grid (2/3/4 kolumner) | ja vid 4 kol |
| `CriteriaList` | `CriteriaList` | Checklist + valfri kontaktperson | ja |
| `MetricListBlock` | `MetricList` | Numrerad lista grupperad per typ | ja |
| `PriorityLadder` | `PriorityLevel[]` | Kort med avtagande bredd (visuell trappa) | ja |
| `YearWheel` | `YearWheelMonth[]` | Togglebar TIDSLINJE/ÅRSHJUL (SVG-cirkel) | ja |
| `FocusAreaBlock` | `FocusArea[]` | 2×2 grid, fokusområden + fokuspunkter | ja |
| `KvalitetsklubbProcess` | `ProcessStep[]` | Vertikal kedja med nummerade steg + linje | ja |
| `KlubbRolesBlock` | `KlubbRole[]` | 3-kol rollkort med metafor i kursiv serif | ja |
| `EffectChain` | `EffectStage[]` | Pilkedja + 4-stegs detaljkort | ja |
| `EcosystemMap` | `ECOSYSTEM_NODES` (intern import) | Metafor-intro + 6-noders grid | ja |
| `StrategiKarta` | `STRATEGI_MAPPING`, `SVFF_STRATEGIC_AREAS` | Chip-grid + mappnings-tabell | ja |
| `PlanningChainBlock` | `PlanningChainStep[]`, `QualityClubPlanningFocus[]`, `PlanningOutcome[]` | Pilkedja + Kvalitetsklubb-områden + målbilder | ja |
| `PlanningChainTeaserBlock` | `PlanningChainStep[]`, `QualityClubPlanningFocus[]`, `PlanningOutcome[]` | Kort orientering + länk till planeringskedjans fördjupning | nej |

### 5.4 NAVIGATIONSBLOCK
| Komponent | Roll |
|-----------|------|
| `Breadcrumb` | Brödsmulor — läser path från `useLocation`, slår upp etiketter via `RUTE_LABELS` i `Breadcrumb.tsx`. **Lägg in nya slugs i `RUTE_LABELS`** när du skapar nya routes. |
| `TableOfContents` | Sticky TOC i höger sidkolumn. Tar `TocSection[]` med `id`/`title`/`level`. ID:n måste matcha `id` på sidans `ExpandableBlock`/`SectionBlock`. |
| `AsideRelated` | "Vidare läsning"-kort i aside. Lista med `{label, href, hint}`. |
| `NextPageCTA` | Föregående/nästa-bläddring i botten. Tar `next: NextPageTarget`, valfri `prev`. |

### 5.5 Anti-patterns
- **Inga ad hoc-stylingar** med inline-styles förutom när designsystemet inte räcker (t.ex. `clamp()` för dynamisk fontstorlek i `GoalsBlock`).
- **Använd inte `<Button>` från shadcn** för länk-CTA:er. Bygg semantiska `<Link>` med Tailwind-klasser.
- **Inga klassiska `useEffect + fetch`**. Hela datalagret är statiskt — om du behöver runtime-data, använd TanStack Query.

---

## 6. Sidarkitektur — anatomin på en typisk sida

```tsx
const MinSida = () => (
  <div className="min-h-screen bg-background">
    <GlobalNav />                    {/* alltid */}
    <AssignmentShell|AreaShell|SubpageShell>
      <PageWithDepth                 {/* om sidan är djup nog för TOC */}
        toc={SECTIONS}
        aside={<AsideRelated … />}
      >
        <ExpandableBlock id="…" kicker="…" title="…" defaultOpen>
          …prosa + ev. innehållsblock…
        </ExpandableBlock>
        {/* … fler block … */}
      </PageWithDepth>
    </AssignmentShell|AreaShell|SubpageShell>
    <NextPageCTA next={…} prev={…} />
    <Footer />
  </div>
);
```

För enklare sidor (Uppdrag, Arbetsuppgifter, Kvalitetsklubb): hoppa över `PageWithDepth` och stapla `SectionBlock`-sektioner direkt i shellen.

---

## 7. Routing-konvention (`App.tsx`)

- **Alla skyddade routes** wrappas i `<ProtectedRoute>` (Supabase-auth-gate).
- **Två publika routes**: `/login`, `/reset-password`.
- **Bakåtkompatibla aliases**: `/skola-samverkan/fu-i-skola` → `/fu-skola` via `<Navigate replace>`. Behåll dessa när du flyttar URL:er.
- **404**: `*` matchas av `NotFound` (också skyddad).
- **Path-konvention för subpages**:
  - Area-subpage: `<area>/<sub>` (t.ex. `/uppdrag/arbetsuppgifter`).
  - Tematisk subpage under primary: `<primary>/<tema>` (t.ex. `/foreningslyftet/jamstalldhet-och-trygghet`).
  - Notera diskrepansen: pathen `/foreningslyftet/...` är en namn-alias för Föreningslyftet (riktig area heter `foreningsutveckling`). Brödsmulan i `Breadcrumb.tsx` måste mappa båda.

När du lägger till en ny route:
1. Lägg `<Route>` i `App.tsx` (innanför `<AuthProvider>`, wrappad i `<ProtectedRoute>`).
2. Lägg eventuell ny slug-etikett i `Breadcrumb.tsx` `RUTE_LABELS`.
3. Lägg länk i relevant `AsideRelated`/`NextPageCTA` så sidan inte blir orphaned.
4. Om sidan ska finnas i topp-navet: uppdatera `PRIMARY_ASSIGNMENTS` (sällsynt) eller `SECONDARY_LINK` i `GlobalNav.tsx`.

---

## 8. Designsystem

### 8.1 Tokens (`src/index.css` + `tailwind.config.ts`)
- **Färger** definierade som HSL i `--<token>` CSS-variabler. Använd `hsl(var(--primary))` när du behöver dem i custom CSS, annars Tailwind-klasserna `bg-primary`, `text-foreground`, `border-border` etc.
- **Primärfärg**: `--primary: 161 82% 26%` (mörk emerald-grön).
- **Bakgrund**: `--background: 30 12% 97%` (varm grädde).
- **Mörkt läge** stöds (`.dark`-klass på `<html>`), men inte aktivt påkopplat ännu.

### 8.2 Typografi (Tailwind `fontSize`)
| Token | Användning | Font |
|-------|------------|------|
| `text-display` | Hero `<h1>` | Lora (serif) |
| `text-headline` | `<h2>` sektion-titlar | Work Sans |
| `text-subhead` | `<h3>` kortrubriker | Work Sans / Lora (variabelt) |
| `text-lead` | Ingress | Work Sans |
| `text-body` | Standard prosa | Work Sans |
| `text-small` | Meta, badges | Work Sans |
| `text-micro` | Eyebrows, mono-labels | Inconsolata (mono) |

**Regel:** `<h1>` och stora titlar i `font-serif`. Sektionsrubriker och brödtext i Work Sans (default). Kickers, etiketter, siffror och cadence i `font-mono` (Inconsolata) — alltid uppercase med `tracking-wider`.

### 8.3 Spacing-rytm
Använd `section-y` (clamp-baserad padding) för konsekvent vertikal rytm mellan sektioner. För smal/medel/bred variant: `section-y-sm` / `section-y` / `section-y-lg`.

### 8.4 Läsbredder
- `w-reading` (56ch) för prosa-paragraf
- `w-prose` (66ch) för längre text
- `w-content` (80ch) för bredast tillåten textblock

### 8.5 Motion
- `animate-fade-up` + `animate-delay-{75|100|150|200|250|300|400}` för subtila in-animationer.
- `prefers-reduced-motion: reduce` respekteras automatiskt (alla animationer släcks).

---

## 9. Beslutsträd — var lägger jag nytt innehåll?

```
Vad är det jag vill lägga till?
│
├─ En ny TYP av återkommande innehåll (lista, kort, KPI-format)
│   → Skapa src/content/<koncept>.ts + matchande block-komponent.
│
├─ En PUNKT till en befintlig lista (en ny mätpunkt, ett nytt mål)
│   → Hitta rätt fil i src/content/ och lägg till i arrayen.
│
├─ En ny SIDA
│   ├─ Den är ett av de tre huvuduppdragen?
│   │   → Sällsynt. Uppdatera PRIMARY_ASSIGNMENTS, ny route, AssignmentShell.
│   │
│   ├─ Den är en fördjupning av ett huvuduppdrag (tematisk)?
│   │   → Ny route under <primary>/<tema>, använd SubpageShell.
│   │      Exempel: /foreningslyftet/jamstalldhet-och-trygghet, /uppdrag/spelarutbildning
│   │
│   ├─ Den är en formell area-subpage?
│   │   → Lägg till i AREAS[].subpages, route under area-pathen, AreaShell med subtitle.
│   │      Exempel: /uppdrag/arbetsuppgifter
│   │
│   └─ Den hör till en helt nytt tema utan plats i strukturen?
│       → STOPP. Diskutera med ägare först. Att skapa en fjärde topp-route
│          bryter "tre huvuduppdrag"-narrativet.
│
├─ En ny SEKTION på en befintlig sida (ny ExpandableBlock)
│   → 1. Lägg till id i sidans SECTIONS-array (TocSection)
│      2. Lägg ExpandableBlock med matchande id="…"
│      3. Sätt wide när blocket är ett breddat innehåll (årshjul, tabell, 4-kol grid)
│
└─ En ny LÄNK mellan sidor
    → AsideRelated.items eller NextPageCTA. Inte ad-hoc <a> i prosa
       om relationen är strukturell.
```

---

## 10. Att lägga till nytt innehåll — steg för steg

### Scenario A: Ny mätpunkt på En bättre väg
1. Öppna `src/content/metrics.ts`.
2. Lägg in strängen i rätt `groups[].items[]` (kvantitativt eller kvalitativt).
3. Klart. Ingen kod, ingen route.

### Scenario B: Nytt mål med stort numerisk värde (ny `GoalsBlock`-post)
1. Identifiera vilken `Goal[]`-array i `src/content/goals.ts` det hör till (`JAMSTALLDHET_GOALS`, `EN_BATTRE_VAG_GOALS` eller skapa en ny).
2. Lägg till `{ id, value, unit, title, description, deadline? }`.
3. Om antal mål går från 4 → 5 i en 4-kolumnsvy, justera `columns` i konsumenten eller acceptera att sista raden får 1 kort.

### Scenario C: Ny tematisk subpage under ett huvuduppdrag
1. Skapa `src/pages/areas/<NyttTema>.tsx`. Använd `JamstalldhetTrygghet.tsx` som mall.
2. Använd `SubpageShell` med `breadcrumbs={[{label:"Föreningslyftet",href:"/foreningsutveckling"}, {label:"<Tema>"}]}`.
3. Skapa relevant content-fil i `src/content/` om datan är återanvändbar.
4. Lägg `<Route path="/<primary>/<slug>" element={<ProtectedRoute><NyttTema/></ProtectedRoute>} />` i `App.tsx`.
5. Lägg slug-etikett i `RUTE_LABELS` i `Breadcrumb.tsx`.
6. Lägg länk till nya sidan i minst en `AsideRelated` på relaterade sidor.
7. Bygg: `bun run build`. Inga TypeScript-fel = ok.

### Scenario D: Ny återanvändbar visualisering (eget block)
1. Skapa `src/content/<koncept>.ts` med data + interface.
2. Skapa `src/components/blocks/<Koncept>Block.tsx` som tar datan som prop. Följ befintlig stil:
   - JSDoc-block överst som förklarar layout-resonemang.
   - `cn()` från `@/lib/utils` för conditional classes.
   - Editorial palett: kicker (mono micro), serif-titel, primary-färg på accenter.
   - Stöd både ljust och mörkt läge via Tailwind-tokens.
3. Använd blocket i en sida, normalt inom `<ExpandableBlock wide>`.

---

## 11. Centrala konventioner att aldrig bryta

1. **Svenska tecken aldrig i URL:er.** `/foreningsutveckling`, inte `/föreningsutveckling`.
2. **Innehåll i `src/content/`, komposition i `src/pages/`.** Långa textmängder direkt i en sidas JSX är förbjudet.
3. **TanStack Query för all runtime-data.** Provider redan mountad — använd den.
4. **react-router-dom v6 (`useNavigate`, `Link`)** — inga klass-router-konstruktioner, ingen `<a href>` för intern navigering.
5. **shadcn-komponenter får ändras.** De ligger i `src/components/ui/` och är kopierade in (inte importerade från npm).
6. **Editorial typografi.** Serif (Lora) på `<h1>` och stora rubriker. Mono (Inconsolata) på kickers, siffror, cadence. Sans (Work Sans) på allt annat.
7. **`wide` på `ExpandableBlock`** när innehållet är en tabell, ett 4-kol grid eller årshjulet — annars klipps det av 80ch-läsbredden.
8. **`useDocumentTitle(titel, metaDescription)`** anropas en gång per sida — alltid via shellen.
9. **Bun för nya beroenden** (`bun add <pkg>`). npm fungerar men låsfilen ska följa Bun.
10. **Inga `*.md`-filer ska skapas på sajten** för innehåll. All sajt-text bor i `.ts`-filer som typade objekt. Markdown är OK för dokumentation som detta dokument.

---

## 12. Specifika gotchas

- **`Supabase.txt` på rotnivån** innehåller en JWT (anon key) i klartext. Anon-keyn är publik-by-design men ska flyttas till `fotbollsnyttan/.env.local` som `VITE_SUPABASE_ANON_KEY` och `.env.local` ska vara i `.gitignore`.
- **`package.json` heter `vite_react_shadcn_ts`** (Lovable-default). Inte ett bug — bara generiskt namn.
- **Lovable README** pekar på `lovable.dev/projects/REPLACE_WITH_PROJECT_ID` — placeholder, ignorera.
- **`Foreningslyftet` i UI = `Foreningsutveckling.tsx`** i koden. Externt namn ≠ filnamn.
- **Material-mappar är YYMMDD-mötesdatum** (`260114` = 2026-01-14).
- **"Fotbollsutvecklare"** har två betydelser: (1) En bättre väg-tjänst (extern, finansierad), (2) Kvalitetsklubb-roll (intern, ofta ideell). Sajten särskiljer dem genom att placera dem på olika sidor och med olika kicker. Behåll den separationen.
- **Två brödsmulor på primary-sidor**: `<Breadcrumb />` + den inbyggda i `AssignmentShell`. Pre-existing duplikat — rör inte utan diskussion.
- **TableOfContents + AsideRelated kan visuellt överlappa** vid kort innehåll på höga viewports — sticky-positioning + flex-gap. Pre-existing.

---

## 13. Snabbreferens — var bor vad?

| Behov | Plats |
|-------|-------|
| Lägga till ord på en befintlig sektion | `src/content/<rätt fil>.ts` |
| Skapa ny sida | `src/pages/areas/<Namn>.tsx` + route i `App.tsx` |
| Ändra topp-navets ordning | `src/content/primaryAssignments.ts` |
| Lägga till en partner | `src/content/partners.ts` |
| Ändra brödsmulor-etikett | `src/components/blocks/Breadcrumb.tsx` (`RUTE_LABELS`) |
| Ändra färg/font/spacing | `src/index.css` (CSS-variabler) eller `tailwind.config.ts` |
| Ändra TOC-ankare | `SECTIONS`-arrayen överst i sidan + `id` på `ExpandableBlock` |
| Felsöka 404 | `App.tsx` route-listan |
| Hitta vad som visas på Hem | `src/pages/Home.tsx` (komponerad av `SectionBlock`-block) |

---

## 14. Hur sajten bevisar sin egen logik

Den **strategiska kartan** är inbyggd i datalagret:
- `ECOSYSTEM_NODES` säger vad varje system *är*.
- `STRATEGI_MAPPING` säger hur SvFF-strategin *översätts* lokalt.
- `FORENINGSLYFTET_EFFECT_CHAIN` säger hur arbetet *bevisas*.
- `KVALITETSKLUBB_FOCUS_AREAS` säger var arbetet *struktureras*.

Om du bygger något nytt som bryter en av dessa mentala modeller — t.ex. en sida som hävdar att Kvalitetsklubb är ett "spår" sidoordnat med En bättre väg — då är det inte bara ett pedagogiskt fel, det är ett brott mot sajtens datasammanhang. Gå tillbaka till `ecosystem.ts` och justera där först, sedan följer sidorna efter.

Det är poängen med att ha innehållet typsäkert: när narrativet skiftar, skiftar det på ett ställe.

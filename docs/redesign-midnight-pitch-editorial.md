# Redesign — Midnight Pitch Editorial

Self-contained build spec. Executor has NO conversation context — everything needed is here.

## Source of truth

Design reference: `../../design/Nya desigen, 20260707.html` (a bundled placeholder
one-pager that demonstrates the target design language). Palette + tokens already
match the app's current `src/index.css`. The redesign adopts the reference's
**editorial template language** on top of the existing Midnight Pitch palette.

## Design intent

Dark navy manifesto. One precious gold, Swedish blue for links/CTA, pitch-green field
motif. Editorial / magazine feel: numbered chapters, giant black display type with a
single gold word, flanked mono eyebrows, pull-quotes, hairline rules, a living pitch
background (grid + faint centre-circle + drifting gold particles). Dark mode ALWAYS
(no light variant). Gold used sparingly — eyebrows, one word per headline, focus, numbers.

Reference patterns (top → bottom of the doc):
1. **Sticky nav** — gold logo badge + title/subtitle, right links, active link gets gold underline.
2. **Full-viewport hero** — flanked mono eyebrow, 2-line giant headline (white line + gold line),
   manifest subhead, lead paragraph with a gold keyword, scroll cue "KAPITEL 01 ↓".
3. **Chapter section** — huge outlined background numeral (01/02/03, alternating side),
   centred flanked eyebrow "KAPITEL 0X", big `[Sektionsrubrik]`, one-line lead, then content:
   - Ch1: 4-up numbered card grid → pull-quote
   - Ch2: 2-col term/definition list + media placeholder → pull-quote
   - Ch3: labelled panel with bullets + green signal card + red signal card
4. **Closing** — big 2-line statement with gold word + flanked eyebrow (project title).
5. **Footer** — logo badge + title·subtitle left, tagline right, hairline top.

Everything is scroll-reveal (fade + lift). Respect `prefers-reduced-motion`.

## What already exists — REUSE, do not rebuild

- `src/components/motion` → `Reveal` (fade+lift, honors reduced-motion), `StaggerGroup/StaggerItem`, `Parallax`, `StoryBeat`. framer-motion installed.
- `src/components/three` → `AmbientField` (three.js drifting particle field, the "living pitch").
- `src/components/blocks/SectionBlock.tsx` → existing section header (eyebrow/title/lead/split/variant/backdrop).
- `src/components/GlobalNav.tsx`, `src/components/Footer.tsx` (content-driven from `@/content/*`).
- Tailwind type scale: `text-display/headline/subhead/lead/body/small/micro`; colors mapped to CSS vars; `font-sans`/`font-serif` both = Inter.
- ALL copy/content lives in `src/content/*` and `src/pages/*`. **Content stays. Do not rewrite copy.**

## Palette tokens (already in index.css — reference only)

`--background:215 30% 6%` · `--foreground:220 20% 96%` · `--card:217 28% 9%` ·
`--primary:212 50% 48%` (Swedish blue) · `--accent:47 78% 56%` (GOLD) ·
`--zone-attack:142 45% 38%` (green) · `--zone-defense:358 65% 52%` (red) ·
`--pitch:142 35% 22%` · `--border:217 22% 15%`. HSL triplets — wrap in `hsl(var(--x))`.

---

# PHASE 1 — Foundation + editorial components + Home reference (ONE agent, sequential)

Touches shared files (index.css, tailwind, GlobalNav, Footer, Home) → single agent, no parallelism.

## 1.1 `src/index.css` — ADD (append inside existing @layer blocks; do NOT edit existing rules)

Add to `:root` (formalize the type/space system from the reference):
```
--fs-hero: clamp(3rem, 10vw, 8rem);
--fs-h1: clamp(2.25rem, 5vw, 3.75rem);
--fs-h2: clamp(1.875rem, 4vw, 3rem);
--fs-h3: 1.5rem;  --fs-h4: 1.25rem;
--fs-body-lg: 1.125rem; --fs-body: 1rem; --fs-small: 0.875rem; --fs-xs: 0.75rem; --fs-micro: 0.6875rem;
--fw-regular:400; --fw-medium:500; --fw-semibold:600; --fw-bold:700; --fw-extrabold:800; --fw-black:900;
--lh-tight:0.95; --lh-snug:1.2; --lh-body:1.6;
--tracking-hero:-0.04em; --tracking-h1:-0.04em; --tracking-h2:-0.03em; --tracking-h3:-0.02em;
--tracking-eyebrow:0.3em; --tracking-mono:0.18em;
--glow-primary:0 0 30px -5px hsl(var(--primary)/0.4);
--glow-accent:0 0 20px -5px hsl(var(--accent)/0.3);
```

Add to `@layer components` (typography utilities from the reference):
```
.h-hero { font-size:var(--fs-hero); font-weight:900; line-height:var(--lh-tight); letter-spacing:var(--tracking-hero); }
.quote-hero { font-size:var(--fs-h1); font-weight:900; line-height:1.05; letter-spacing:var(--tracking-h1); }
.p-lead { font-size:var(--fs-body-lg); line-height:var(--lh-body); color:hsl(var(--muted-foreground)); }
.label-mono { font-family:var(--font-mono); font-size:var(--fs-micro); font-weight:700; text-transform:uppercase; letter-spacing:var(--tracking-mono); color:hsl(var(--accent)); }
```
(`.eyebrow`, `.text-gradient-accent`, `.text-gradient-primary`, `.pitch-lines` already exist — reuse.)

Add keyframes + classes (playful float, near existing motion block):
```
@keyframes float-particle { 0%,100%{transform:translate(0,0);opacity:.14} 50%{transform:translate(14px,-60px);opacity:.28} }
@keyframes float-blob { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(30px,-40px) scale(1.08)} }
.animate-float-particle { animation: float-particle 9s ease-in-out infinite; }
.animate-float-blob { animation: float-blob 16s ease-in-out infinite; }
```
Add both to the existing `prefers-reduced-motion` disable block.

**AC:** `bun run build` passes. No existing rule changed. New utilities usable.

## 1.2 `src/components/editorial/` — NEW component family

Create each file + a barrel `index.ts`. Use `cn` from `@/lib/utils`, `Reveal` from `@/components/motion`.
Gold-word emphasis convention: titles accept `React.ReactNode` so callers pass
`<>Hela stan på <span className="text-accent">samma plan</span></>`.

- **`Eyebrow.tsx`** — `{ children; className?; align?: "center"|"left" }`. Mono gold label with flanking
  hairlines when centered: `— CHILDREN —` (hairline = `<span className="h-px w-8 bg-accent/50"/>`).
  Uses `.label-mono`. Left variant = no hairlines, just the mono gold label.
- **`OutlineNumeral.tsx`** — `{ value: string; side?: "left"|"right" }`. Giant stroke-only numeral
  in the section background: `font-black`, `text-[clamp(9rem,26vw,22rem)]`, `leading-none`,
  color transparent with `-webkit-text-stroke:1px hsl(var(--accent)/0.18)`, `select-none`,
  `pointer-events-none`, absolutely positioned top, `side` picks left/right offset. `aria-hidden`.
- **`ChapterSection.tsx`** — `{ number?: string; kicker?: string; eyebrow?: ReactNode; title: ReactNode;
  lead?: ReactNode; children; id?; align?: "center"|"left"; className? }`. Renders:
  `<section class="section-y relative isolate overflow-hidden">`, an `OutlineNumeral` (if `number`,
  side alternates by parity of number), centered header (Eyebrow "KAPITEL {number}" or `kicker`,
  `<h2 class="text-headline md:text-display font-black">{title}</h2>`, `<p class="p-lead max-w-[46ch] mx-auto">{lead}</p>`),
  then `<Reveal delay={.08}>{children}</Reveal>`. Wrap header in `<Reveal>`. Set `aria-labelledby`.
- **`EditorialHero.tsx`** — `{ eyebrow?: ReactNode; titleTop: ReactNode; titleGold: ReactNode;
  subhead?: ReactNode; lead?: ReactNode; scrollHint?: string; backdrop?: ReactNode; children? }`.
  Full-viewport (`min-h-[calc(100vh-var(--nav-height))]`), centered, flex column, `PitchField` or
  `backdrop` behind (`absolute inset-0 -z-10`). Eyebrow (centered flanked). Headline: two lines —
  `<span class="h-hero block text-foreground">{titleTop}</span>` + `<span class="h-hero block text-gradient-accent">{titleGold}</span>`.
  Subhead `text-subhead md:text-headline font-bold`. Lead `.p-lead max-w-[52ch]`. Optional `children` (CTA).
  Scroll hint at bottom: label-mono `{scrollHint}` + a bouncing down-chevron (`.animate-float-blob` subtle or lucide ChevronDown w/ gentle bounce).
- **`NumberedCardGrid.tsx`** — `{ items: {number?:string; title:ReactNode; body:ReactNode; href?:string}[]; columns?:2|3|4 }`.
  Responsive grid (`sm:grid-cols-2 lg:grid-cols-{columns}`). Each card: `card-gradient rounded-xl border border-border p-6`,
  gold `.label-mono` number, `text-subhead font-bold text-foreground` title, `text-small text-muted-foreground` body.
  If `href`, render as `Link` (react-router) or `<a>` for external (starts with http, add target/rel), hover `border-accent/40 -translate-y-1 shadow-md transition`.
  Wrap items in `StaggerGroup`/`StaggerItem`.
- **`TermList.tsx`** — `{ items: {term:ReactNode; desc:ReactNode}[] }`. `<dl>` rows:
  `grid sm:grid-cols-[minmax(6rem,10rem)_1fr] gap-x-8 gap-y-5 border-t border-border`, each row separated by
  `border-b border-border py-4`. `<dt class="label-mono !text-accent">` (gold term, but larger: use `text-subhead font-bold text-accent`),
  `<dd class="text-body text-muted-foreground">`.
- **`PullQuote.tsx`** — `{ children: ReactNode; className? }`. Centered big quote: `quote-hero text-center
  text-muted-foreground/90 max-w-[24ch] mx-auto`, curly quotes wrapping (`”…”`), gold-word via `text-accent` in children.
  Optional flanking hairline above. Wrap in `Reveal`.
- **`SignalCard.tsx`** — `{ tone: "green"|"red"|"gold"|"blue"; label: ReactNode; children: ReactNode }`.
  `rounded-xl border p-6` with left accent bar (reuse `.signal-card` pattern) colored by tone:
  green=`--zone-attack`, red=`--zone-defense`, gold=`--accent`, blue=`--primary`. Header = `.label-mono` in tone color
  via inline `--signal`. Body `text-small text-muted-foreground`. Subtle tone-tinted bg `hsl(var(--signal)/0.06)`.
- **`MediaPlaceholder.tsx`** — `{ caption?: string; className?; children? }`. Dashed rounded box
  `rounded-2xl border border-dashed border-border/70 min-h-[16rem] grid place-items-center`, centered gold
  rounded-square icon (lucide `LayoutGrid` in `h-10 w-10 rounded-lg bg-accent/15 text-accent grid place-items-center`),
  caption `text-small text-muted-foreground`. If `children` given, render them instead (real media slot).
- **`ClosingStatement.tsx`** — `{ line1: ReactNode; line2: ReactNode; eyebrow?: ReactNode }`. Centered section,
  two big `text-headline md:text-display font-black` lines (line2 may contain gold word), flanked Eyebrow below. Reveal.
- **`PitchField.tsx`** — `{ className?; particles?: boolean }`. Cheap CSS/SVG living-pitch background (NO three.js so it's
  free on every page): a div with `pitch-lines` grid + a radial pitch-green wash
  (`background: radial-gradient(120% 90% at 50% 0%, hsl(var(--pitch)/0.35), transparent 70%)`), a faint centered
  SVG centre-circle + halfway line (stroke `hsl(var(--accent)/0.12)`), and ~10 absolutely-positioned gold dots with
  `.animate-float-particle` at staggered `animation-delay`. All `pointer-events-none`, `aria-hidden`, `-z-10` when used as backdrop.
- **`index.ts`** — barrel export all of the above.

**AC per component:** builds, typechecks, renders in isolation without runtime error; honors reduced-motion via `Reveal`; no hardcoded hex (use tokens).

## 1.3 `GlobalNav.tsx` — enhance (keep ALL existing content/behavior)

- Replace the 7px dot logo with a **gold logo badge**: `h-8 w-8 rounded-lg bg-accent text-accent-foreground grid place-items-center font-black`
  showing a monogram (e.g. "F" or "FU"), keep the "Föreningsutvecklaren" wordmark beside it; optional subtitle line
  `label-mono text-muted-foreground` ("GÖTEBORGS FF") under the wordmark on desktop.
- Keep the sticky bar, blur, PRIMARY_ASSIGNMENTS nav, SECONDARY_LINKS, login/logout, mobile Sheet — unchanged logic.
- Active nav link: add a gold underline indicator (`after:` bar or bottom border in accent) on `aria-current`/active.
- Do NOT change routes, content imports, or auth.

**AC:** nav renders, badge visible, active link shows gold underline, mobile menu still works, build passes.

## 1.4 `Footer.tsx` — enhance

- Add the same gold logo badge beside the wordmark. Keep NAV_ITEMS list + bottom bar + build date.
- Keep hairline top border. Optional: right-align a mono tagline.

**AC:** builds, content unchanged, badge visible.

## 1.5 `src/pages/Home.tsx` — rebuild to editorial flow (KEEP content + interactive blocks)

Recompose using the new components. Keep imports of PrismaCardDeck, Scene3D/AmbientField, HarvestedSuccessesVideo,
CurrentStateBlock, GlowLink, NEXT_STEP_LINKS, useDocumentTitle. New structure:

1. `<GlobalNav/>`
2. `<EditorialHero>` — eyebrow "FÖRENINGSUTVECKLAREN · GÖTEBORGS FF", titleTop="Hela stan", titleGold="på samma plan"
   (or copy that fits the mission), subhead = the site's one-line manifest, lead = existing intro sentence,
   backdrop=`<PitchField/>`, scrollHint="KAPITEL 01". (Keep it copy-faithful to current Home intent.)
3. Chapter 01 — `<ChapterSection number="01" eyebrow="Områdena" title="Välj din väg in" lead=...>` wrapping the
   existing `<PrismaCardDeck/>` (the card deck stays as the chapter content).
4. Chapter 02 — wrap `<LoggedInHeroCountdown/>` / `<HarvestedSuccessesVideo/>` content OR reframe as a ChapterSection
   with a `<PullQuote>` + `<CurrentStateBlock/>`. Keep the video + current-state content.
5. Chapter 03 — "Spelmodellen" ChapterSection wrapping the 3D `<Scene3D model="pitch"/>` with `<AmbientField/>` backdrop.
6. Chapter 04 — "Fördjupa" ChapterSection: render NEXT_STEP_LINKS via `<NumberedCardGrid>` (or keep GlowLink cards restyled).
7. `<ClosingStatement>` — mission one-liner with gold word.
8. `<Footer/>`

Use `PitchField` as section backdrops where the reference shows the pitch motif. Keep all copy verbatim from current Home;
you may add short editorial lead sentences only where the reference clearly needs one (mark with a comment).

**AC:** Home renders end-to-end at `localhost:8080`, no console errors, hero fills viewport, chapters have outlined
numerals + flanked eyebrows, card deck + 3D + video still work, reduced-motion OK, `bun run build` + `bun run lint` pass.

## Phase 1 verification (executor runs before returning)

```
cd foreningsutvecklaren
bun run lint
bun run build
```
Both must pass. Report any file you changed and the exact AC status per item.

---

# PHASE 2 — Roll out to area pages (parallel, one agent per page) — AFTER Phase 1 verified

15 pages in `src/pages/areas/`. For each: keep GlobalNav/Footer/NextPageCTA/breadcrumb and ALL content + inner blocks;
swap the page header + section headers to the editorial language:
- Replace bespoke page header with an `EditorialHero` (compact variant) or a top `ChapterSection`.
- Wrap `SectionBlock`-based sections as `ChapterSection` (numbered chapters) OR restyle SectionBlock eyebrow to the flanked
  mono gold `Eyebrow`. Keep `split` layouts where they read well.
- Add `PitchField` backdrops, `PullQuote` where a section has a punchy line, `SignalCard` for callouts, `MediaPlaceholder`
  for empty media slots.
- Do NOT touch `src/content/*` copy or remove functional blocks (EcosystemMap, StrategiKarta, quizzes, etc).

Pages: Foreningsutveckling, EnBattreVag, FUiSkola, Portalen, Case, CaseDetail, Uppdateringar, Uppdrag, Arbetsuppgifter,
Partners, Kvalitetsklubb, JamstalldhetTrygghet, Spelarutbildning, SkolaSamverkan, (NotFound optional).

**Per-page AC:** page builds, renders, content intact, editorial header/eyebrow applied, no console errors.

---

## Gotchas

- **Dark mode only.** No light variant. `.dark` mirrors `:root`.
- **No hardcoded hex** — always `hsl(var(--token))`. Gold word = `text-accent`.
- **Reduced motion** — route all entrance animation through `Reveal`; add new keyframes to the reduce block.
- **`font-serif` = Inter** here (not a serif). Display type is Inter Black.
- **Container**: `container mx-auto px-4 sm:px-6` (2rem padding, max 1400px at 2xl). Keep it.
- **Content imports** (`@/content/*`, `@/hooks/*`) must keep working — do not rename/move them.
- **`--nav-height: 4rem`** — hero min-height subtracts it; `scroll-padding-top` already set.
- **framer-motion** already installed; use `Reveal`, don't add a new animation lib.
- three.js `AmbientField` is heavy — prefer CSS `PitchField` for most backdrops; use `AmbientField` only for the 3D chapter.

## NOT in scope

- No new dependencies. No content/copy rewrites. No route changes. No auth changes.
- No deletion of existing blocks/components. No light theme. Phase 2 pages only after Phase 1 sign-off.

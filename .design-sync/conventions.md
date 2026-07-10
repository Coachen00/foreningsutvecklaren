# Varm minimalism — design language

This system is **Joel Sjöqvist's "Varm minimalism"**: a benvit (warm off-white) canvas, soft dark-brown-grey text, and **one** precious terracotta accent. Whitespace is the design — generous line-height, near-square corners, near-zero shadows. Restraint over decoration. EB Garamond serif carries the page; Archivo (sans) is for labels/UI; IBM Plex Mono for numerals and eyebrows.

## Setup
All styling reaches a design through `styles.css` (imported here). It defines color tokens as HSL channels (`--primary: 15 42% 50%`) — **always wrap in `hsl()`**: `color: hsl(var(--primary))`. The fonts load via the `@import` at the top of `styles.css`; no extra setup. Dark mode = add `class="dark"` to a root element.

## Styling idiom
This is a **CSS-variable + utility** system. Style with these tokens, never hardcoded hex/px. Read `styles.css` before styling — it is the source of truth.

**Color tokens** (all `hsl(var(--x))`): `--background` `--foreground` · `--card` `--card-foreground` · `--primary` `--primary-foreground` `--primary-subtle` · `--secondary` · `--muted` `--muted-foreground` · `--accent` `--accent-foreground` · `--border` `--border-subtle` · `--ring` · `--destructive`. Signal accents (use sparingly): `--signal-gold` (ockra), `--signal-coral` (= terracotta), `--signal-ink`.

**Type scale** (`var(--text-x)`): `--text-display` (hero, serif) · `--text-headline` (H2) · `--text-subhead` (H3/card title) · `--text-lead` (ingress) · `--text-body` · `--text-small` (meta) · `--text-micro` (eyebrows). Fonts: `var(--font-serif)` headings + prose, `var(--font-sans)` labels/UI, `var(--font-mono)` numbers.

**Editorial utility classes** (defined in `styles.css` — prefer these, they ARE the house style):
- `.section-y` / `.section-y-sm` / `.section-y-lg` — vertical section rhythm (fluid clamp)
- `.w-prose` (66ch) / `.w-reading` (56ch) / `.w-content` (80ch) — reading measures
- `.border-l-accent` — terracotta left rule for emphasized blocks
- `.signal-label` — uppercase eyebrow with a leading terracotta dot
- `.signal-card` + inline `--signal: hsl(var(--signal-gold))` — card with a colored left rail
- `.pull-quote` — gold rail + warm wash for quotes
- `.num-display` — oversized decorative mono numeral
- `.pitch-lines` — subtle football-pitch grid background
- `.surface-raised` — card surface with the lightest elevation
- `.animate-fade-up` / `.animate-fade-in` / `.animate-scale-in` (+ honors `prefers-reduced-motion`)

## Rules of the house
- **One accent.** Terracotta (`--primary`) is precious — one strong accent per view, not a rainbow. Everything else is benvit/ink/muted.
- **Near-square.** `--radius` is `0.125rem`. Never pill/rounded.
- **Near-zero shadow.** Separate with whitespace + the hairline `--border`, not drop shadows. Floating UI gets the faintest warm `--shadow`.
- **Let it breathe.** Generous `--text-*` sizes, `.section-y` rhythm, `.w-reading` measures. Empty space is intentional.
- **Serif leads.** Body and headings are EB Garamond serif; sans is for small labels/UI only.

## Snippet
```html
<section class="section-y w-content">
  <span class="signal-label">Föreningsutveckling</span>
  <h2 style="font:500 var(--text-headline)/1.1 var(--font-serif); color:hsl(var(--foreground))">
    Tomrummet är designen
  </h2>
  <p class="w-reading reading-dim" style="font-family:var(--font-serif)">
    En benvit yta, en dyrbar terrakotta, och plats att andas.
  </p>
  <blockquote class="pull-quote" style="padding:1.25rem 1.5rem">…</blockquote>
</section>
```

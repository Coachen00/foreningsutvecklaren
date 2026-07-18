# Midnight Pitch — design language

This system is Joel Sjöqvist's **"Midnight Pitch"**: a near-black **navy** canvas, **svensk blå** for primary actions and links, and **one** precious **gold** accent — the signature, used sparingly. Always dark. Inter carries everything; IBM Plex Mono is for numerals and eyebrows. Football-pitch semantics run through the color: attack/midfield/defense zones (green/gold/red).

## Setup
All styling reaches a design through `styles.css` (imported here). It defines color tokens as HSL channels (`--primary: 212 50% 48%`) — **always wrap in `hsl()`**: `color: hsl(var(--primary))`. Fonts load via the `@import` at the top of `styles.css`; no extra setup. The theme is dark by default — `.dark` mirrors `:root`, so nothing to toggle.

## Styling idiom
This is a **CSS-variable + utility** system. Style with these tokens, never hardcoded hex/px. Read `styles.css` before styling — it is the source of truth.

**Color tokens** (all `hsl(var(--x))`): `--background` `--foreground` · `--card` `--card-foreground` · `--primary` `--primary-foreground` `--primary-subtle` · `--secondary` · `--muted` `--muted-foreground` · `--accent` `--accent-foreground` · `--border` `--border-subtle` · `--ring` · `--destructive`. Signal accents (use sparingly): `--signal-blue` (svensk blå), `--signal-gold` (guld = the accent), `--signal-green` (zone attack), `--signal-coral` (zone defense / röd), `--signal-ink`. Pitch zones: `--zone-attack` (green) · `--zone-midfield` (gold) · `--zone-defense` (red).

**Type scale** (`var(--text-x)`): `--text-display` (hero) · `--text-headline` (H2) · `--text-subhead` (H3/card title) · `--text-lead` (ingress) · `--text-body` · `--text-small` (meta) · `--text-micro` (eyebrows). Fonts: `var(--font-sans)` / `var(--font-serif)` are **both Inter** (headings, prose, UI); `var(--font-mono)` (IBM Plex Mono) for numbers and eyebrows.

**Editorial utility classes** (defined in `styles.css` — prefer these, they ARE the house style):
- `.section-y` / `.section-y-sm` / `.section-y-lg` — vertical section rhythm (fluid clamp)
- `.w-prose` (66ch) / `.w-reading` (56ch) / `.w-content` (80ch) — reading measures
- `.border-l-accent` — gold left rule for emphasized blocks
- `.signal-label` — uppercase mono eyebrow with a leading gold dot
- `.signal-card` + inline `--signal: hsl(var(--signal-gold))` — card with a colored left rail
- `.pull-quote` — gold rail + subtle wash for quotes
- `.num-display` — oversized decorative mono numeral
- `.pitch-lines` — subtle football-pitch grid background
- `.surface-raised` — card surface with the lightest elevation
- `.bg-mesh-gradient` — ambient navy mesh backdrop (heroes / muted sections)
- `.reading-dim` — muted body color for long-form prose
- `.animate-fade-up` / `.animate-fade-in` / `.animate-scale-in` · ambient `.animate-float-blob` / `.animate-float-particle` / `.animate-mesh-shift` (all honor `prefers-reduced-motion`)

## Rules of the house
- **Gold is precious.** The gold accent (`--accent`) is the signature — one strong gold moment per view, not a rainbow. Svensk blå (`--primary`) carries actions/links; everything else is navy/ink/muted.
- **Always dark.** Navy base (`--background: 215 30% 6%`). Design for the dark canvas — light text, luminous accents, glow over drop-shadow.
- **Radius 0.5rem.** `--radius` is `0.5rem` (8px base, up to 16px cards). Rounded, not pill, not square.
- **Let it breathe.** Generous `--text-*` sizes, `.section-y` rhythm, `.w-reading` measures. Empty space is intentional.
- **Inter leads, mono signals.** Body and headings are Inter; IBM Plex Mono is reserved for numerals, eyebrows, and labels — it marks "signal," not paragraphs.
- **Pitch semantics.** When color carries meaning, use the zone tokens: green = attack/positive, gold = midfield/highlight, red = defense/warning. (No `success` token — use `--primary` or `--signal-green` for positive states.)

## Snippet
```html
<section class="section-y w-content bg-mesh-gradient">
  <span class="signal-label">Föreningsutveckling</span>
  <h2 style="font:500 var(--text-headline)/1.1 var(--font-sans); color:hsl(var(--foreground))">
    Välj din väg in
  </h2>
  <p class="w-reading reading-dim">
    En mörk navy yta, svensk blå som leder, och en dyrbar guldsignal.
  </p>
  <blockquote class="pull-quote" style="padding:1.25rem 1.5rem">…</blockquote>
</section>
```

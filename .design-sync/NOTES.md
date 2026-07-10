# design-sync notes

- **Login**: DesignSync blocked when session uses `CLAUDE_CODE_OAUTH_TOKEN` (can't add design scopes). User must run `/login` before any project create/upload.
- **Shape**: package (Vite+React+TS app, no Storybook). shadcn/ui in `src/components/ui`.
- **Mode chosen**: lean-tokens-first. Joel tired of current layout, wants to keep Varm minimalism tokens + redesign surface in Claude Design.
- **Bundle**: hand-authored off-script at `ds-bundle/` (styles.css = full token layer + editorial utilities + font @import; README = conventions header). Not the converter output — lean path skips per-component verification.
- Stale comments in tailwind.config.ts fontSize mention Lora/Work Sans — actual fonts are Archivo/EB Garamond/IBM Plex Mono.

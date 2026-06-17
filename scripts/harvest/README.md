# Skördare — "Uppdateringar från rutiner" (Modul 2)

Hämtar utvalda RSS-flöden, plockar **rubrik + länk + kort sammanfattning** och
lägger dem i en granskningskö i Supabase. Inget blir publikt förrän du godkänt
det manuellt.

## Flöde

```
GitHub Action (cron, dagligen)
  → node scripts/harvest/harvest.mjs
      hämtar källor i sources.json → dedup → status='pending' i Supabase
        ↓ (manuell granskning i Supabase Dashboard)
      status='approved'
        ↓
  /uppdateringar  läser approved-rader via anon-nyckeln (TanStack Query)
```

## Engångs-setup

1. **Tabell:** kör `supabase/harvest_items.sql` i Supabase SQL Editor.
2. **Secrets** (GitHub → Settings → Secrets → Actions):
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY` — service-role-nyckeln. **Aldrig** i klientkod
     eller i `.env.local` som byggs in. Bara här, i GitHub Actions.
3. **Källor:** redigera `sources.json`. Sätt `enabled: true` på de flöden som ska
   bevakas. Lägg bara till källor vars `robots.txt` och villkor tillåter att
   rubrik + länk delas.

## Köra lokalt

```bash
SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/harvest/harvest.mjs
```

## Granska

Supabase Dashboard → Table editor → `harvest_items` → filtrera `status = pending`
→ sätt `approved` på det som ska synas, `rejected` på resten. (En egen admin-sida
i appen kan byggas senare; dashboard räcker som MVP.)

## Att göra senare (markerat i koden)

- **`summarize()`** är en platshållare som trunkerar källtexten. Byt mot ett
  Claude-anrop för en genuin svensk sammanfattning.
- **`parseRss()`** är en minimal regex-parser. Byt mot en riktig RSS/Atom-parser
  om källornas format varierar.

## Princip

Bara metadata + länk lagras — **aldrig kopierad fulltext**. Källan attribueras
alltid via `source_name` och länkas via `source_url`. Respektera robots.txt/ToS.

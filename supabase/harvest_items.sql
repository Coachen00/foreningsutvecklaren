-- Modul 2: "Uppdateringar från rutiner" — granskningskö + publikt flöde.
--
-- Kör en gång i Supabase SQL Editor. Skördaren (scripts/harvest/) skriver rader
-- med status = 'pending' via service-role-nyckeln (bypassar RLS). Du granskar i
-- Supabase Dashboard och sätter status = 'approved'/'rejected'. Bara approved
-- når publiken via anon-nyckeln.
--
-- Vi lagrar ALDRIG kopierad fulltext — bara titel, kort sammanfattning och
-- länk till källan. Källan attribueras via source_name.

create table if not exists public.harvest_items (
  id           uuid primary key default gen_random_uuid(),
  title        text not null,
  summary      text not null,
  source_name  text not null,
  source_url   text not null,
  published_at timestamptz,
  status       text not null default 'pending'
                 check (status in ('pending', 'approved', 'rejected')),
  -- Hindrar dubbletter mellan körningar (skördaren sätter = normaliserad URL).
  dedupe_key   text unique,
  created_at   timestamptz not null default now()
);

create index if not exists harvest_items_status_published_idx
  on public.harvest_items (status, published_at desc nulls last);

alter table public.harvest_items enable row level security;

-- Publik läsning: bara godkända rader. Gäller anon + inloggade.
drop policy if exists "read approved harvest items" on public.harvest_items;
create policy "read approved harvest items"
  on public.harvest_items
  for select
  using (status = 'approved');

-- Ingen insert/update/delete-policy för anon/authenticated avsiktligt:
-- bara service-role-nyckeln (skördaren) får skriva, och den kringgår RLS.

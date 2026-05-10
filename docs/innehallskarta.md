# Innehållskarta — Föreningsutvecklaren

> Beskrivning av **vad sajten faktiskt säger** och **var allt hör hemma**. Skrivet för dig som ska lägga till nytt innehåll utan att bryta sajtens kategorisering. Avancerad nivå — kräver att du redan känner till GFF, Kvalitetsklubb och En bättre väg på sakkunnig nivå.

---

## 1. Vad sajten är — och vad den inte är

**Är:** ett operativt kunskapsdokument för rollen språkrör/föreningsutvecklare. En karta över uppdraget — kärnuppgifter, föreningsutveckling, samverkan, samhällsnytta — som länkar GFF:s lokala arbete till SvFF:s nationella strategi.

**Är inte:** marknadsföring, tävlingsinformation, lagsidor, nyhetsflöde eller intern administration.

**Målgrupp:** intern (GFF-personal, föreningar i lyften), extern (skola, kommun, partners) och tidsförskjuten (nästa språkrör som ska ärva uppdraget).

**Ton:** editorial. Lugn typografi (Lora serif + Work Sans + Inconsolata mono). Inga utropstecken. Inga emoji. Allt är menat att läsas, inte skrollas förbi.

---

## 2. Sajtens narrativstruktur — det grundläggande budskapet

Sajten har **ett enda strategiskt påstående** som allt annat hänger på:

> En bättre väg bär den riktade samhällsnyttan. FU Skola bär bron mellan skola och förening. Föreningslyftet bär den generella föreningsutvecklingsmotorn. Kvalitetsklubb är ramverket. Kommittéer, partners och fördjupningar är stödstruktur, inte egna huvudspår.

Det är detta som startsidan kommunicerar genom `Home.tsx` och content-filerna i `src/content/`: `method`, `currentState`, `assignmentOverview`, `missionAreas`, `committees`, `partnerFunding` och `sortingRules`. När du lägger till nytt innehåll måste det respektera dessa positioner — annars förvirrar du besökaren.

**Pedagogisk metafor**: svensk fotboll är en stor skola. SvFF ritar kartan. Kvalitetsklubb är klassrummet. En bättre väg är extra stöd där barnen saknar bäst förutsättningar.

---

## 3. Sidkartan — vad varje sida innehåller

### 3.1 Hem (`/`)

Nio sektioner:

1. **Metod** — översta avsnittet. Processgraf, arbetssätt, arbetsrytm, beslutsmatris och principer för metodutveckling.
2. **Nuläge** — dashboard med roll, tre största arbetsområden, pågående fokus och kompakt effektlogik.
3. **Min arbetsbeskrivning i en mening** — editorial sammanfattning av hela rollen.
4. **Huvuduppdrag** — En bättre väg som tydlig prioritet 1; FU Skola och Föreningslyftet direkt under.
5. **Effektlogik för hela uppdraget** — Resurser → Aktiviteter → Output → Effekt.
6. **Kommittéer och arbetsgrupper** — Samhällsforumet och Föreningskommittén som forum, inte toppnivåer.
7. **Partners, finansiering och samhällsnytta** — fyrrollslogik: strategiska, operativa, finansierande, mottagare/genomförande.
8. **Hur allt sorteras** — åtta regler för var nytt innehåll hör hemma.
9. **Vidare till fördjupning** — länkar till Kvalitetsklubb, Jämställdhet & trygghet, Spelarutbildning, Skola & samverkan, Arbetsuppgifter och Partners.

**Vad som hör hemma här:** sammanhang, prioritering och korta bevis. Hem-sidan ska ge hela bilden på 60–90 sekunder och sedan leda vidare.

---

### 3.2 Föreningslyftet (`/foreningsutveckling`)

GFF:s **lokala motor** för föreningsutveckling. Använder Kvalitetsklubb som verktyg.

Sektioner (TOC-sorterade):

| Sektion | Innehåll |
|---------|----------|
| Vad är Föreningslyftet? | Översikt: tre arbetssätt parallellt — struktur, ledarskap, kultur. |
| Visionen bakom | SvFF:s vision "Nationalsporten – för alla överallt" + förändringsresan Starkare föreningar. |
| Tre arbetssätt | Kvalitetsklubb (strukturen) · Matchklimat (kulturen) · FU i förening (insatsen). Varje med pelare och länk vidare. |
| Prioriteringstrappan | 5-stegs trappa när allt känns viktigt: organisation → ramverk → människor → samverkan → kommunikation. |
| Effektlogiken | Resurser → Aktiviteter → Output → Effekt. Bevis på att arbetet flyttar sig. |
| Planeringskedjan | Koppling mellan verksamhetsidé, verksamhetsmål, verksamhetsplan och årshjul. Visar rätt Kvalitetsklubb-områden och målbilden att föreningar driver sitt eget utvecklingsarbete. |
| Samverkan | Partner-strip: GFF, SvFF, RF-SISU, föreningar, GIS. |
| Det här följs över tid | Mätpunkter (organisation + kultur). |
| Hur det följs upp | Kvalitativa effekter (ImpactBlock). |
| Vanliga frågor | FAQ — fyra frågor inklusive länk till Jämställdhet & trygghet. |

**Vad som hör hemma här:** ramverk, principer, prioritering, KPI:er som rör föreningsutveckling generellt. Specifika program har egna sidor.

**Vad som INTE hör hemma här:** detaljer om Kvalitetsklubb (det är en egen sida), specifik info om En bättre väg-tjänsterna (annan sida), spelarutbildning (annan sida).

---

### 3.3 En bättre väg (`/en-battre-vag`)

SvFF:s **riktade satsning** i prioriterade områden. Använder Kvalitetsklubb som metod.

Sektioner:

| Sektion | Innehåll |
|---------|----------|
| Satsningen | Vad det är, vilka som finansierar, varför det finns. |
| Centrala mål | Fyra kvantifierade mål: välorganiserade föreningar, ledare/tränare, lokala förebilder, fler barn/unga. |
| Två tjänster som bär satsningen | Föreningsutvecklare (organisationen) + Fotbollsutvecklare (planen). **OBS**: detta är En bättre väg-tjänsten — inte att förväxla med Kvalitetsklubb-rollen "Fotbollsutvecklare". |
| Fem arbetsdelar | Förstudier, samverkansdokument, återrapporter, partnerarbete, riktade insatser. |
| Kriterier för att delta | 4 grundkrav för en förening att ingå. |
| Årshjul 2026 | 12-månaderscykel, togglebar tidslinje/cirkel, intensitetsmarkörer. |
| Gör — och gör inte | Språkrörets gränsdragning. |
| Mätpunkter | Kvantitativa + kvalitativa. |
| Samverkan | Partner-strip. |
| Varför satsningen finns | ImpactBlock om inkludering. |

**Vad som hör hemma här:** allt som rör den riktade satsningen i prioriterade områden, inklusive de två En bättre väg-tjänsterna.

**Vad som INTE hör hemma här:** Kvalitetsklubb som ramverk (egen sida), allmän föreningsutveckling (Föreningslyftet).

---

### 3.4 FU Skola (`/fu-skola`)

Bron mellan skola och förening.

Sektioner:

| Sektion | Innehåll |
|---------|----------|
| Så här rullar FU Skola | Översikt: skolan som platsen där barnen redan är. |
| Skolbollen och Fotbollsprofil åk 7–9 | Två SvFF-spår — bredd vs fördjupning. |
| Nio arbetsdelar | Projektledning → onboarding → samverkan → uppföljning. |
| Kriterier för fotbollsprofil | 4 grundkrav + kontaktperson Joel Sjöqvist. |
| Aktörsmatris | 7-rads tabell: GFF, SvFF, RF-SISU, Göteborgs Stad, föreningar, skolor, GIS. |
| Det här följs upp | Mätpunkter (verksamhet + kompetens). |
| Samverkan | Partner-strip. |
| Därför är FU Skola ett huvuduppdrag | ImpactBlock. |

**Vad som hör hemma här:** allt om skola–förening-bron, fotbollsprofil, Skolbollen, onboarding av skolor.

**Vad som INTE hör hemma här:** spelarutbildningsplanen som ramverk (Spelarutbildning-sidan), trygghet generellt (Jämställdhet & trygghet-sidan).

---

### 3.5 Kvalitetsklubb (`/foreningsutveckling/kvalitetsklubb`) — fördjupning

SvFF:s ramverk för föreningsutveckling. Den **operativa kärnan** för Föreningslyftet.

Sektioner:

| Sektion | Innehåll |
|---------|----------|
| Vad det är | Inte en certifiering — ett styrsystem. KPI: 50 % av Föreningslyftet i Kvalitetsklubb 2027. |
| Fyra fokusområden | Vår Förening · Våra Spelare · Våra Ledare · Våra Resurser. Varje område har 4–5 fokuspunkter under sig. |
| Fem steg från nuläge till certifiering | Klubbkollen → Analys → Handlingsplan → Klubbverktyget → Certifiering & omcertifiering (2 år). |
| Tre roller i Kvalitetsklubben | Fotbollsutvecklare ("tränarnas tränare"), Domarutvecklare ("domarnas tränare"), Trygghetsansvarig ("värdegrund i praktiken"). + tydliggörande av skillnad mot En bättre väg-tjänsterna. |
| Bakom konceptet | Partner-strip. |

**Vad som hör hemma här:** allt som rör Kvalitetsklubb som ramverk — fokusområden, fokuspunkter, processteg, klubb-rollerna.

**Vad som INTE hör hemma här:** föreningar som har certifierats (case-studier hör inte hit), administrativa rutiner kring själva ansökan.

---

### 3.6 Jämställdhet & trygghet (`/foreningsutveckling/jamstalldhet-och-trygghet`) — fördjupning

Legacy-URL: `/foreningslyftet/jamstalldhet-och-trygghet` redirectar hit.

Värdegrunden som genomsyrar alla tre uppdragen.

Sektioner:

| Sektion | Innehåll |
|---------|----------|
| Varför detta hör ihop | Inte sidoarbete — själva förutsättningen. |
| Jämställdhet i siffror | 4 kvantifierade mål: 50/50 representation, 20% kvinnliga domare, balans i tränarkåren, fler flicklag. |
| Matchklimat och trygg miljö | Halvering av DPN-ärenden, stoppa ordningsstörningar, vuxennärvaro. |
| Domarlyftet | Programmet för att rekrytera, utbilda och behålla domare. |
| Styrelselyftet och nätverk för kvinnor | Riktade insatser för kvinnliga ledare. |
| Spela – Lek – Lär och Barnkonventionen | Barnperspektivet som styrdokument. |

**Vad som hör hemma här:** alla värdegrundsfrågor — jämställdhet, mångfald, inkludering, trygg miljö, matchklimat, barnperspektiv.

**Vad som INTE hör hemma här:** Kvalitetsklubbs trygghetsansvarig som klubbroll (det är på Kvalitetsklubb-sidan).

---

### 3.7 Spelarutbildning (`/uppdrag/spelarutbildning`) — fördjupning

Allt som handlar om spelaren själv.

Sektioner:

| Sektion | Innehåll |
|---------|----------|
| Visionen | Världsledande spelarutbildning för alla — bredd till elit. |
| Spelarutbildningsplanen i praktiken | SUP som karta + utbildningstrappa + uppföljning. |
| Fotbollslyftet | FU IF och zonutvecklare som strukturell investering. |
| Futsal | Egen pelare, regional lösning, egen SUP. |
| Spelarkarusellen och drop out | Förhindra föreningskollaps + broar mellan skola–förening–samhälle. |

**Vad som hör hemma här:** SUP, Fotbollslyftet, futsal, drop out, retention som spelarfråga.

**Vad som INTE hör hemma här:** ledarutbildning som tema (kommer hamna under Föreningslyftet eller egen sida om volym ökar).

---

### 3.8 Uppdrag (`/uppdrag`) — area-toppsida

Kärnuppdraget och styrningen.

Sektioner:

| Sektion | Innehåll |
|---------|----------|
| Hitta rätt i uppdraget | Kompakt intern karta till Arbetsuppgifter, Planeringskedjan, Kommittéer, Partners, Kvalitetsklubb och Spelarutbildning. |
| Det löpande arbetet | Fyra arbetsformer (CoreMissionBlock). |
| Utöver kärnuppdraget | Längre insatser (uppstart nya lag, spelarutbildningsplan, utbildningsstruktur). Länkar till Arbetsuppgifter och Spelarutbildning. |
| Så här arbetar jag | 4-stegs arbetsmetod (närvaro → dialog → struktur → uppföljning). |
| Från idé till årshjul | Kort orientering om verksamhetsidé → verksamhetsmål → verksamhetsplan → årshjul som föreningsutvecklingens styrkedja. Länkar till Föreningslyftet för fördjupning. |
| Forum jag deltar i | Kommittéer och arbetsgrupper: Samhällsforumet och Föreningskommittén. |
| Vem gör vad | Partner-strip + länk till Partners-sidan. |
| Därför ser uppdraget ut så här | ImpactBlock. |

**Vad som hör hemma här:** själva uppdragets mekanik — hur språkröret arbetar genom föreningens förenings- och fotbollsutvecklare, direkt eller indirekt med styrelser, hur ansvarskedjan ser ut och hur föreningsutveckling blir praktisk styrning.

**Vad som INTE hör hemma här:** specifika program, satsningar, eller fördjupningar.

---

### 3.9 Arbetsuppgifter (`/uppdrag/arbetsuppgifter`) — fördjupning

Operativ detalj kring arbetsformerna.

Sektioner:

| Sektion | Innehåll |
|---------|----------|
| Det löpande navet | 2 kärnaktiviteter: utvecklarträffar och utvecklingsdialoger. |
| Riktade observationer | 2 occasional-aktiviteter: riktade träningsbesök och riktade matchbesök (görs vid behov, inte rutin). |
| Längre insatser | 3 extended-aktiviteter: uppstart nya lag, spelarutbildningsplan och utbildningsstruktur. |
| Hur varje insats rullar | 4-stegs process. |

**Klassificeringsregel** — när du lägger till en arbetsform:
- `core` om den är navet i den dagliga relationen till föreningen
- `occasional` om den görs när det finns ett konkret skäl, inte rutinmässigt
- `extended` om den sträcker sig över säsong eller år

---

### 3.10 Partners (`/uppdrag/partners`) — fördjupning

Partnerskap och finansiering i detalj. Sidan har två nivåer:

| Sektion | Innehåll |
|---------|----------|
| Partnerskap som bygger kapacitet | Samma fyrrollslogik som startsidan: strategiska, operativa, finansierande, mottagare/genomförande. Finansiering beskrivs som kapacitetsbyggande. |
| Vem gör vad i vardagen | Praktisk ansvarskedja från `Partner[]`-data: ansvarig, strategisk, operativ och mottagare. |

---

### 3.11 Skola & samverkan (`/skola-samverkan`) och FU i skola (`/skola-samverkan/fu-i-skola`)

`/skola-samverkan` är en sammanhangssida, inte ett fjärde huvuduppdrag. Den förklarar hur En bättre väg och FU Skola hänger ihop med skola, kommun, förening och civilsamhälle. `/skola-samverkan/fu-i-skola` är aliasad till `/fu-skola` (den primära sidan för FU Skola).

---

## 4. Innehållstaxonomi — gemensamma format som upprepas

Sajten använder en strikt uppsättning återanvändbara innehållsmönster. När du har nytt innehåll, identifiera först **vilket mönster** det är.

### 4.1 Mätbara mål (kvantifierade)
**Format:** stort numerisk värde + enhet + titel + beskrivning + valfri deadline.
**Källa:** GFF:s verksamhetsplan eller SvFF-strategi.
**Exempel:** "50/50 · Representation · Jämn representation i ledande organ · Senast 2027".
**Var:** `src/content/goals.ts`. Visualiseras med `GoalsBlock`.
**Sortering:** grupperas efter tema (jämställdhet, En bättre väg, framtida grupper).

### 4.2 Mätpunkter / KPI:er (uppföljning)
**Format:** lista per grupp ("Kvantitativa", "Kvalitativa", "Organisation", "Kultur"…).
**Källa:** verksamhetsplan, arbetsbeskrivning.
**Var:** `src/content/metrics.ts`. Visualiseras med `MetricListBlock`.
**Skillnad från mål:** mål är *ambitioner*, mätpunkter är *vad vi följer*.

### 4.3 Roller (jämförelser)
**Format:** kicker + titel + sammanfattning + ansvar-lista.
**Två varianter:**
- `RolePair` (2 roller sida vid sida) — för En bättre väg-tjänsterna.
- `KlubbRolesBlock` (3 roller med metafor i kursiv serif) — för Kvalitetsklubbs interna roller.
**Var:** `src/content/roles.ts` och `src/content/kvalitetsklubb.ts`.
**Viktigt:** "Fotbollsutvecklare" finns i båda. De är olika roller.

### 4.4 Gör / gör inte (gränsdragning)
**Format:** två kolumner — vad rollen gör, vad rollen inte gör.
**Var:** `src/content/roles.ts` (`SPRAKROR_DO_DONT`). Visualiseras med `DoDontPair`.
**Användning:** när rolltydlighet behövs, primärt språkrörets gränsdragning.

### 4.5 Kriterier (checklist)
**Format:** numrerad lista med checkmarks + valfri kontaktperson i botten.
**Var:** `src/content/criteria.ts`. Visualiseras med `CriteriaList`.
**Användning:** "vad krävs för att delta" — föreningar i En bättre väg, skolor i fotbollsprofil.

### 4.6 Process (sekventiella steg)
**Två varianter:**
- `KvalitetsklubbProcess` — vertikal kedja med stora numrerade boxar och förbindande linje. För 5 stegs Kvalitetsklubb.
- `WorkMethodBlock` — horisontell numrerad uppställning. För korta arbetsmetoder.
**Var:** `src/content/kvalitetsklubb.ts` (steg) eller inline i sidan (arbetsmetoder).

### 4.7 Pelare / fokusområden
**Två varianter:**
- `ProgramBlock` — pelare under ett program (Kvalitetsklubb 12 pelare visas så på Kvalitetsklubb-sidan, alternativt grupperade i de 4 fokusområdena).
- `FocusAreaBlock` — 4 fokusområden med fokuspunkter under varje. Endast för Kvalitetsklubbs 4 områden.
**Skillnad:** pelare är en lista, fokusområden är en hierarki.

### 4.8 Årshjul (12 månader)
**Format:** månad + fokus + beskrivning + intensitet (`hög`/`medel`/`låg`).
**Var:** `src/content/yearWheel.ts`. Visualiseras med `YearWheel` (togglebar TIDSLINJE/ÅRSHJUL).
**Användning:** En bättre väg har ett. Andra årscykler kan läggas till med samma format.

### 4.9 Effektlogik (4 stegs kausalkedja)
**Format:** Resurser → Aktiviteter → Output → Effekt. Varje stadium har titel + beskrivning + exempel-lista.
**Var:** `src/content/effectChain.ts`. Visualiseras med `EffectChain`.
**Användning:** Föreningslyftet har en. Kan användas för andra arbeten där bevisföring behövs.

### 4.10 Aktörsmatris (tabell)
**Format:** aktör + roll + beskrivning.
**Var:** inline i sidan (FU Skola), inte separat content-fil ännu — eftersom det bara används en gång.
**Om volymen växer:** flytta till `src/content/aktorer.ts`.

### 4.11 Partners (chip-rad eller karta)
**Format:** namn + roll (`ansvarig`/`strategisk`/`operativ`/`mottagare`) + beskrivning + linkedAreas.
**Var:** `src/content/partners.ts`. Visualiseras med `PartnerStrip` (chip-rad) eller `PartnerMapBlock` (rollgrupperad).

### 4.12 Effekt-statements (kvalitativa)
**Format:** rubrik + 3–5 numrerade påståenden om varför arbetet finns.
**Var:** `src/content/impact.ts`. Visualiseras med `ImpactBlock`.
**Användning:** ofta längst ner på en sida som "Varför detta arbete finns".

### 4.13 Ekosystem-noder (positionering)
**Format:** namn + roll-mening ("Infrastrukturen", "Riktad resursförstärkning") + beskrivning + valfri href.
**Var:** `src/content/ecosystem.ts`. Visualiseras med `EcosystemMap` (Hem-sidan).
**Lägg till en nod när:** ett nytt system tillkommer som har egen positionering i helheten. Ovanligt.

### 4.14 Strategikoppling (mappnings-tabell)
**Format:** nivå + nationell SvFF-logik + lokal GFF-tillämpning + praktisk effekt.
**Var:** `src/content/strategikarta.ts`. Visualiseras med `StrategiKarta`.
**Lägg till en rad när:** en ny strategisk koppling formaliseras mellan SvFF och GFF.

### 4.14b Planeringskedja för föreningsutveckling
**Format:** steg + fråga + Kvalitetsklubb-område + output + målbild.
**Var:** `src/content/planningChain.ts`. Visualiseras med `PlanningChainBlock`.
**Användning:** på Föreningslyftet-sidan när arbetet ska förklaras som föreningsutvecklarens styrkedja: verksamhetsidé → verksamhetsmål → verksamhetsplan → årshjul.

### 4.15 Prioriteringstrappa
**Format:** 5 nivåer med nummer + titel + beskrivning. Avtagande visuell bredd.
**Var:** `src/content/priorities.ts`. Visualiseras med `PriorityLadder`.
**Användning:** när allt känns viktigt — denna trappa säger vad som ska prioriteras.

---

## 5. Tematisk sortering — när jag har en ny insikt, var hör den hemma?

Sex tematiska kategorier som alla insatser kan sorteras under. Varje tema mappar mot specifika sidor.

### A. Föreningsstruktur (skelettet)
*Demokrati, årsmöten, stadgar, styrelse, verksamhetsidé, värdegrund, vision, verksamhetsplan, medlemsinflytande.*
- **Generellt:** Föreningslyftet (`/foreningsutveckling`)
- **Som ramverk:** Kvalitetsklubb-sidan, fokusområde "Vår Förening"
- **I prioriterade områden:** En bättre väg

### B. Spelarutveckling
*SUP, spelformer, träningsinnehåll, rekrytering, retention, vårdnadshavare, Fotbollens spela-lek-lär, Fotbollslyftet, FU IF, FU i skolan.*
- **Spelarperspektivet:** Spelarutbildning (`/uppdrag/spelarutbildning`)
- **I förening (ramverk):** Kvalitetsklubb-sidan, fokusområde "Våra Spelare"
- **I skola:** FU Skola
- **Drop out som spelarfråga:** Spelarutbildning, sektionen "Spelarkarusellen"

### C. Ledarförsörjning
*Ledarförsörjningsplan, utbildade tränare, unga ledare, fotbollsutvecklare, domarutvecklare, trygghetsansvarig, utvecklarträffar, utvecklingsdialoger, riktade träningsbesök, mentorskap.*
- **Operativt (vad språkröret gör):** Uppdrag → Arbetsuppgifter
- **Som klubb-roller:** Kvalitetsklubb-sidan, "Tre roller i Kvalitetsklubben"
- **Som strukturell investering:** Spelarutbildning (Fotbollslyftet) eller En bättre väg (tjänsterna)
- **Domarutbildning som tema:** Jämställdhet & trygghet (Domarlyftet)

### D. Trygghet och matchklimat
*Trygg Fotboll, matchvärdar, matchklimatpolicy, Fair Play, DPN-ärenden, avbrutna matcher, domarrollens status, konflikthantering, vårdnadshavare.*
- **Hela temat samlat:** Jämställdhet & trygghet (`/foreningsutveckling/jamstalldhet-och-trygghet`)
- **Som klubbroll:** Kvalitetsklubb-sidan (Trygghetsansvarig)
- **Som matchklimat-program:** Föreningslyftet (tre arbetssätt → Matchklimat)
- **Som Trygg Fotboll-fokuspunkt:** Kvalitetsklubb-sidan, fokusområde "Vår Förening"

### E. Resurser och anläggningar
*Ekonomi, budget, lagkassor, rättvis resursfördelning, anläggningsbehov, plantider, lokaler, utrustning, kommunikation, partnerskap.*
- **Som ramverkets fokuspunkter:** Kvalitetsklubb-sidan, fokusområde "Våra Resurser"
- **Som partnerlogik:** Hem (Ekosystemet, partner-karta) och Partners-sidan
- **Som projektstöd/finansiering:** ej egen sida ännu — kan placeras under Föreningslyftet om volymen växer.

### F. Inkludering och samhällsnytta
*En bättre väg, samhällsnyttan, skolor, fritidsgårdar, spontanfotboll, flickfotboll i prioriterade områden, integrationssammandrag, sociala effekter, områdestrygghet.*
- **Riktad satsning:** En bättre väg
- **Värdegrund som tema:** Jämställdhet & trygghet
- **Skola–förening-bron:** FU Skola
- **Som narrativ helhet:** Hem (Ekosystemet — Samhällsnyttan-noden)

---

## 6. Beslutsträd — var lägger jag mitt nya innehåll?

```
Vad är karaktären på det nya innehållet?

├─ Det är en ny TEXT, RUBRIK eller FÖRTYDLIGANDE
│   → Hitta sidan via tema-sorteringen i § 5
│   → Hitta sektionen via sidkartan i § 3
│   → Lägg in i rätt content-fil eller direkt i sidans JSX om det är unikt
│
├─ Det är en ny POÄNG till en befintlig lista (en ny mätpunkt, ett mål, en kriteria-rad)
│   → Identifiera mönstret via § 4
│   → Lägg in i motsvarande content-fil
│   → Sajten uppdaterar sig automatiskt
│
├─ Det är en ny KATEGORI eller ett nytt MÅLOMRÅDE
│   → Är det inom Föreningslyftet/En bättre väg/FU Skola/Kvalitetsklubb?
│      ├─ JA → ny ExpandableBlock-sektion på rätt sida
│      └─ NEJ → överväg ny fördjupningssida (kräver beslut, se § 7)
│
├─ Det är en ny ROLL
│   → Är det en En bättre väg-tjänst (anställd via satsningen)?
│      → roles.ts → AssignmentRole
│   → Är det en klubbroll (i Kvalitetsklubb)?
│      → kvalitetsklubb.ts → KlubbRole
│   → Inget av ovan? → överväg om det är en ny mönstertyp
│
├─ Det är en ny SATSNING eller ett nytt PROGRAM
│   → Är det en SvFF-satsning som GFF tillämpar lokalt?
│      → Lägg som EcosystemNode + StrategiKarta-rad
│      → Bygg ev. egen sida om volymen kräver
│   → Är det ett internt arbetssätt?
│      → Lägg under rätt huvuduppdrag som arbetsdel
│
├─ Det är en ny KPI eller ett MÅL
│   → Kvantifierat med stort numerisk värde?
│      → goals.ts → Goal
│   → En sak vi följer upp över tid?
│      → metrics.ts → MetricList[].groups[].items[]
│
├─ Det är en ny PARTNER eller AKTÖR
│   → partners.ts → Partner med rätt role-typ + linkedAreas
│
└─ Det är en CASE-STUDIE eller ett EXEMPEL
    → STOPP. Sajten har idag ingen case-studie-mall.
       Diskutera med ägare innan du skapar ett nytt mönster.
```

---

## 7. När en ny sida behövs

En ny sida är motiverad om **alla tre** är sanna:

1. Innehållet kan inte rimligt rymmas som en ExpandableBlock-sektion på en befintlig sida (volym > 4–5 sektioner).
2. Innehållet har en självständig läsare/syfte (någon kommer söka direkt på det).
3. Det finns minst tre andra sidor som naturligt skulle länka hit.

**Två platsalternativ:**

| Plats | Använd när | URL-mönster |
|-------|------------|-------------|
| Under ett huvuduppdrag (tematisk) | Innehållet utvidgar ett huvuduppdrags räckvidd | `/<primary>/<tema>` |
| Under en area (fördjupning) | Innehållet är en formell del av areans struktur | `/<area>/<sub>` |

Innan du skapar: kontrollera att den tilltänkta URL-pathen inte krockar med befintlig route. Lägg etikett i `Breadcrumb.tsx` `RUTE_LABELS` och länka från minst en befintlig sidas `AsideRelated`.

**Anti-mönster:** att skapa en *fjärde topp-route* (jämbördig med Föreningslyftet/En bättre väg/FU Skola) bryter sajtens grundnarrativ. Diskutera först.

---

## 8. Konkreta scenarier

### Scenario 1: SvFF lanserar ett nytt nationellt program "Domarakademin"
1. Lägg en ny `EcosystemNode` i `ecosystem.ts` om programmet har egen positioneringsroll. Annars hoppa.
2. Lägg en `MappingRow` i `strategikarta.ts` (nationell logik → GFF lokal tillämpning → praktisk effekt).
3. Tilläggsavsnitt på Jämställdhet & trygghet → Domarlyftet (nu med inkluderad referens till Domarakademin).
4. Om Göteborg får en lokal pilot: överväg ny sektion på Föreningslyftet eller egen sida.

### Scenario 2: Verksamhetsplanen får en ny KPI "antal nya unga ledare per år"
1. Identifiera tema → C. Ledarförsörjning.
2. Lägg i `metrics.ts` → `FORENINGSLYFTET_METRICS.groups[].items[]`.
3. Om värdet är synligt-mått (t.ex. "200/år"): lägg också som `Goal` i `goals.ts`.

### Scenario 3: Vi får information om Bäckby Uniteds Kvalitetsklubb-resa
1. Det här är en case-studie. Sajten saknar mall för det.
2. **Beslut behövs**: ska vi skapa en case-studie-sida?
3. Om ja: diskutera taxonomi (separat route, sub-route under Kvalitetsklubb, eller modal/popup?). Bygg först typ-ramverket, sen instansen.

### Scenario 4: En förening vill söka stöd via En bättre väg
1. Den här sajten är inte ansökningskanal. Men den ska kunna förklara *hur*.
2. Lägg en sektion på En bättre väg → "Så ansöker föreningen" (ny ExpandableBlock).
3. Använd `CriteriaList`-mönstret (kriterier finns redan) + lägg en `WorkMethodBlock` med ansökningsstegen.

### Scenario 5: Vi vill lyfta GFF:s arbete med Futsal mer
1. Futsal finns redan på Spelarutbildning-sidan som en sektion.
2. Om volymen växer → bryt ut till egen sida `/uppdrag/spelarutbildning/futsal` eller `/futsal` (egen route).
3. Beslut: är futsal ett spelarperspektiv (under Spelarutbildning) eller en strukturell satsning (egen ekosystem-nod)?

### Scenario 6: Ny insikt om hur PFF arbetar med flickrekrytering
1. Det här är operativ kunskap från ett möte — inte sajt-innehåll.
2. Om generaliserbart till flera föreningar: lägg som mätpunkt eller goal under tema F (Inkludering).
3. Om en specifik förening: hör inte hemma på sajten alls — bör i interna dokument.

---

## 9. Vad sajten medvetet utelämnar

Lika viktigt som vad sajten innehåller är vad den **inte** innehåller. Förstå detta innan du föreslår tillägg.

| Utelämnat | Varför |
|-----------|--------|
| Specifika föreningsnamn och case-studier | Bygger personberoende, åldras snabbt, riskerar att bli "PR" snarare än kunskapsdokument. |
| Personliga uppgifter (mer än Joel som FU Skola-kontakt) | Sajten ska överleva personskifte. |
| Tävlingsinformation, serieinformation, matchresultat | Annan teknisk plattform (Svenskfotboll.se, Laget.se). |
| Nyhetsflöde / blogg | Sajten är ett operativt kunskapsdokument, inte en kommunikationskanal. |
| Bildgalleri / videos | Editorial design är typografisk, inte bildbaserad. Bilder skulle bryta tonen. |
| Detaljerade ekonomiska siffror per förening | Konfidentiellt. Hör hemma i ekonomiska rapporter. |
| Interna konflikter eller pågående ärenden | Av integritets- och processkäl. |
| Strategi för annat än Föreningslyftet/En bättre väg/FU Skola | Sajten är inte hela GFF — den är språkrörets specifika uppdrag. |

---

## 10. Vanliga fallgropar och dubblettrisker

### Fallgrop A: Lägga samma sak på två ställen
- Mätpunkter dyker ofta upp både i `metrics.ts` och som `goals.ts`. **Regel:** mål är *vart vi siktar*, mätpunkter är *vad vi följer*. Båda kan finnas — men inte med samma exakta siffra.
- Roller. "Fotbollsutvecklare" finns två gånger (En bättre väg-tjänst + Kvalitetsklubb-roll). **Regel:** behåll separationen. Lägg till disambiguation-not på sidan om förvirring uppstår.

### Fallgrop B: Otydlig ägarsida
- "Trygg Fotboll" hör hemma på Jämställdhet & trygghet (huvudtema) och som fokuspunkt under Vår Förening på Kvalitetsklubb-sidan (ramverkskontext). **Båda ska finnas.** Korslänka.

### Fallgrop C: Att uppgradera en sektion till sida i förtid
- Om en sektion växer till 1500+ ord, först överväg uppdelning i flera ExpandableBlock-sektioner *innan* du bygger ny sida.
- Ny sida först när § 7-kriterierna är uppfyllda.

### Fallgrop D: Att introducera nya termer utan förankring i ekosystemet
- Om en ny term (t.ex. "Föreningslyftet 2.0") dyker upp, första frågan är: hur passar den i ekosystemet? Om den inte har en plats — antingen positionera den eller låta bli att introducera den.

### Fallgrop E: Att blanda intern arbetsbeskrivning med extern kommunikation
- Sajten har båda läsare. Tonen ska vara densamma — saklig, lugn, editorial — men innehåll om språkrörets *arbetsmetodik* (t.ex. Gör/gör inte) ska finnas där intern logik kräver det, och innehåll om *satsningens syfte* där extern läsare behöver det.

---

## 11. Snabbreferens — innehåll → plats

| Du har… | Lägg det på sidan… | I sektionen… | Som datatyp i… |
|---------|---------------------|--------------|----------------|
| Ny mätpunkt för Föreningslyftet | Föreningslyftet | Det här följs över tid | `metrics.ts` → FORENINGSLYFTET_METRICS |
| Nytt jämställdhetsmål med siffra | Jämställdhet & trygghet | Jämställdhet i siffror | `goals.ts` → JAMSTALLDHET_GOALS |
| Ny månad-aktivitet i En bättre väg | En bättre väg | Årshjul 2026 | `yearWheel.ts` |
| Ny kriteria för fotbollsprofil | FU Skola | Kriterier för fotbollsprofil | `criteria.ts` → FOTBOLLSPROFIL_CRITERIA |
| Ny rad till FU Skola-aktörsmatris | FU Skola | Aktörsmatris | inline i `FUiSkola.tsx` (`ACTOR_ROWS`) |
| Ny domarinsats | Jämställdhet & trygghet | Domarlyftet | direkt i `JamstalldhetTrygghet.tsx` |
| Ny SvFF-strategikoppling | Föreningslyftet | Strategikartan eller annat strategiblock | `strategikarta.ts` → STRATEGI_MAPPING |
| Ny styrkedja för verksamhetsidé, mål, plan eller årshjul | Föreningslyftet | Planeringskedjan | `planningChain.ts` → FORENINGSLYFTET_PLANNING_CHAIN |
| Ny pelare i Kvalitetsklubb-fokusområde | Kvalitetsklubb | rätt fokusområde | `kvalitetsklubb.ts` → KVALITETSKLUBB_FOCUS_AREAS[].points |
| Ny exempel på Resurser i effektkedjan | Föreningslyftet | Effektlogiken | `effectChain.ts` → FORENINGSLYFTET_EFFECT_CHAIN[0].examples |
| Ny partner | Alla sidor som listar partners | Samverkan | `partners.ts` |
| Ny effekt-statement | sidan där effekten gäller | Varför… (ImpactBlock) | `impact.ts` |

---

## 12. Avslutande princip

Sajtens **datalager är dess narrativ**. Ändra alltid datan först, så följer sidorna efter. Om du står inför en konflikt mellan två sidor som säger olika saker — gå tillbaka till `ecosystem.ts` och `strategikarta.ts` och avgör narrativet där, sedan rätta sidorna.

Det är därför sajten är typsäker: när berättelsen skiftar, skiftar det på ett ställe.

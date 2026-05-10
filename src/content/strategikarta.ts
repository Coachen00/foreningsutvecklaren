/**
 * STRATEGIKARTAN — SvFF:s nationella strategi översatt till GFF:s lokala arbete.
 *
 * Innehåller två datastrukturer:
 *   1. SvFF:s 14 strategiska områden (orienteringsbredd)
 *   2. Mapping-tabellen: nationell logik → lokal tillämpning → praktisk effekt
 *
 * Källa: Strategiskt sammanfattningsdokument för GFF 2026, avsnitt 1 och 10.
 */

/* ─── SvFF:s 14 strategiska områden ──────────────────────── */

export interface StrategicArea {
  name: string;
  /** Är området en "förändringsresa" (motor) eller en möjliggörare (stöd)? */
  type: "förändringsresa" | "möjliggörare" | "övrigt";
  /** Är detta särskilt prioriterat för GFF:s Föreningslyftet? */
  emphasized?: boolean;
}

export const SVFF_STRATEGIC_AREAS: StrategicArea[] = [
  { name: "Hela landet", type: "övrigt" },
  { name: "Starkare föreningar", type: "förändringsresa", emphasized: true },
  { name: "Jämställdhet, mångfald och inkludering", type: "förändringsresa", emphasized: true },
  { name: "Världsledande spelarutbildning", type: "förändringsresa", emphasized: true },
  { name: "Trygga miljöer", type: "förändringsresa", emphasized: true },
  { name: "Attraktiv för alla", type: "övrigt" },
  { name: "Fler ledare", type: "övrigt" },
  { name: "Fler tränare", type: "övrigt" },
  { name: "Fler domare", type: "övrigt" },
  { name: "Ökade resurser", type: "möjliggörare" },
  { name: "Engagemang", type: "övrigt" },
  { name: "Anläggningar", type: "möjliggörare" },
  { name: "Stark stödorganisation", type: "möjliggörare" },
  { name: "Synlig samhällsnytta", type: "övrigt" },
];

/* ─── Mapping: nationell → lokal → effekt ────────────────── */

export interface MappingRow {
  /** Vilken nivå handlar det om? */
  level: string;
  /** SvFF-logik */
  national: string;
  /** GFF:s lokala översättning */
  local: string;
  /** Praktisk effekt */
  effect: string;
}

export const STRATEGI_MAPPING: MappingRow[] = [
  {
    level: "Strategi",
    national: "Förändringsresor 2024–2027",
    local: "Verksamhetsplan 2026–2027",
    effect: "Gemensam riktning",
  },
  {
    level: "Ramverk",
    national: "Kvalitetsklubb",
    local: "Föreningslyftet med Kvalitetsklubb som verktyg",
    effect: "Föreningar driver utveckling",
  },
  {
    level: "Riktad insats",
    national: "En bättre väg",
    local: "Prioriterade områden i Göteborg",
    effect: "Fler barn i trygg fotboll",
  },
  {
    level: "Spelarutveckling",
    national: "Världsledande spelarutbildning",
    local: "Fotbollslyftet — FU IF och zonutvecklare",
    effect: "Bättre utvecklingsmiljöer",
  },
  {
    level: "Social effekt",
    national: "Synlig samhällsnytta",
    local: "Samhällsforumet i Göteborg",
    effect: "Starkare stadsdelar",
  },
  {
    level: "Trygghet",
    national: "Trygga miljöer",
    local: "Matchklimat, Trygg Fotboll, Domarlyftet",
    effect: "Mindre stök, högre trygghet",
  },
];

/**
 * KPI som binder ihop ramverket med Föreningslyftet.
 * Källa: GFF:s verksamhetsplan 2026–27.
 */
export const FORENINGSLYFTET_KPI = {
  value: "50 %",
  unit: "av Föreningslyftet",
  title: "i Kvalitetsklubb senast 2027",
  description:
    "Minst hälften av föreningarna i Föreningslyftet ska aktivt arbeta i Kvalitetsklubb 2027 — det gör ramverket mätbart, inte bara kvalitativt.",
};

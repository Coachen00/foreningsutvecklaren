import type { AreaSlug } from "./siteStructure";

export interface Program {
  id: string;
  name: string;
  areaSlug: AreaSlug;
  summary: string;
  pillars: { title: string; description?: string }[];
  partners: string[];
  path?: string;
}

export const PROGRAMS: Program[] = [
  {
    id: "kvalitetsklubb",
    name: "Kvalitetsklubb",
    areaSlug: "foreningsutveckling",
    summary:
      "En strukturerad resa där föreningar går från ad hoc till medveten organisation. Kvalitetsklubb samlar mål, roller, kompetens och kultur under ett gemensamt arbetssätt.",
    pillars: [
      { title: "Strukturerad utveckling", description: "Gemensam karta för hur föreningen tar nästa kliv." },
      { title: "Tydliga mål", description: "Kort- och långsiktiga mål som går att följa." },
      { title: "Förbättrad organisation", description: "Från eldsjälar till roller och rutiner." },
      { title: "Rollfördelning", description: "Tydliga uppdrag för styrelse, ledare och personal." },
      { title: "Kompetensutveckling", description: "Systematisk utbildning av ledare och funktionärer." },
      { title: "Ekonomisk stabilitet", description: "Budget, medlemsstrukturer och sponsring som håller." },
      { title: "Medlemsengagemang", description: "Vuxennärvaro, föräldrar och aktiva medlemmar." },
      { title: "Spelarutveckling", description: "Implementerad spelarutbildningsplan i vardagen." },
      { title: "Kvalitetsstämpel", description: "Extern bekräftelse på att arbetet sitter." },
      { title: "Kommunikation", description: "Intern och extern kommunikation som bär." },
      { title: "Långsiktighet", description: "Förvaltning som överlever enskilda personer." },
      { title: "Socialt ansvar", description: "Föreningens roll i lokalsamhället." },
    ],
    partners: ["svff", "gff"],
    path: "/foreningsutveckling/kvalitetsklubb",
  },
  {
    id: "matchklimat",
    name: "Matchklimat & trygg miljö",
    areaSlug: "foreningsutveckling",
    summary:
      "Arbetet runt matchen är lika viktigt som matchen själv. Matchvärdar, guider, avtal och föräldramaterial skapar en trygg miljö där barn kan spela fotboll på riktigt.",
    pillars: [
      { title: "Matchvärdar", description: "Vuxna som läser av och agerar när det krävs." },
      { title: "Guider och avtal", description: "Gemensamma spelregler för vuxna runt planen." },
      { title: "Trygg fotboll", description: "Tydliga förväntningar på beteende, språk och stöd." },
      { title: "Föräldramaterial", description: "Stöd för föräldrar i rollen som följeslagare." },
      { title: "Matchmiljön", description: "Planeringen kring själva matchtillfället." },
    ],
    partners: ["svff", "gff", "foreningar"],
  },
  {
    id: "fu-i-forening",
    name: "FU i förening",
    areaSlug: "foreningsutveckling",
    summary:
      "Riktad föreningsutveckling där en klubb bygger en egen plan, genomför den och följer upp. Arbetet görs tillsammans och kopplas till mätbara nyckeltal.",
    pillars: [
      { title: "Projektplan", description: "Från nuläge till önskat läge på ett arbetsblad." },
      { title: "Genomförande", description: "Tydliga steg, ansvariga och tidpunkter." },
      { title: "KPI och uppföljning", description: "Data och berättelser som visar om det flyttar sig." },
      { title: "Stöd till klubbar", description: "Workshops, samtal och handlingsplaner." },
    ],
    partners: ["gff", "rf-sisu", "foreningar"],
  },
  {
    id: "fu-i-skola",
    name: "Fotbollsutveckling i skola",
    areaSlug: "skola-samverkan",
    summary:
      "Fotboll i skolan är ingen extra aktivitet – det är en väg in i föreningslivet. Arbetet kopplar ihop skola, förening och idrottsrörelse kring barn och unga.",
    pillars: [
      { title: "Projektledning", description: "Samordning mellan skola, förening och förbund." },
      { title: "Informationsmöten med skolor", description: "Förankring av arbetet hos rektorer och lärare." },
      { title: "Informationsmöten med föreningar", description: "Onboarding av klubbar som vill ta emot skolelever." },
      { title: "Samverkan med RF-SISU", description: "Utbildningsstöd och utvecklingsresurser." },
      { title: "Onboarding av nya skolor", description: "Steg för steg in i samarbetet." },
      { title: "Registrering och kartläggning", description: "Vilka skolor gör vad och var finns behoven?" },
      { title: "Promotion av Skolbollen / Fotboll i skolan", description: "Varumärken och material som stödjer genomförandet." },
      { title: "Stöd till föreningars skolsamverkan", description: "Hjälp att komma igång och hålla i arbetet." },
      { title: "Uppföljning och utvärdering", description: "Vad lärde vi oss, vad rullar vidare?" },
    ],
    partners: ["gff", "svff", "rf-sisu", "goteborgs-stad", "foreningar", "skolor"],
    path: "/skola-samverkan/fu-i-skola",
  },
  {
    id: "en-battre-vag",
    name: "En bättre väg",
    areaSlug: "skola-samverkan",
    summary:
      "SvFF:s riktade satsning på fotbollen i prioriterade områden. I Göteborg knyts den till det lokala arbetet genom förstudier, partnerskap och riktade insatser.",
    pillars: [
      { title: "Förstudier", description: "Kartlägga behov, aktörer och möjligheter i området." },
      { title: "Samverkansdokument", description: "Formella överenskommelser som håller över tid." },
      { title: "Återrapporter", description: "Uppföljning mot SvFF och lokala partners." },
      { title: "Partnerarbete", description: "Samordning mellan förening, kommun, förbund och civilsamhälle." },
      { title: "Riktade insatser", description: "Resurser och stöd där de gör mest nytta." },
    ],
    partners: ["svff", "gff", "goteborgs-stad", "foreningar"],
  },
];

export const programsByArea = (slug: AreaSlug): Program[] =>
  PROGRAMS.filter((p) => p.areaSlug === slug);

export const getProgram = (id: string): Program | undefined =>
  PROGRAMS.find((p) => p.id === id);

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
      "Ett stöd för föreningar som vill få bättre ordning på roller, ledare, ekonomi och trygghet.",
    pillars: [
      { title: "Tydlig utveckling", description: "En gemensam karta för nästa steg." },
      { title: "Tydliga mål", description: "Kort- och långsiktiga mål som går att följa." },
      { title: "Bättre ordning", description: "Från enskilda eldsjälar till roller och rutiner." },
      { title: "Rollfördelning", description: "Tydliga uppdrag för styrelse, ledare och personal." },
      { title: "Utbildning", description: "Ledare och funktionärer får stöd att växa." },
      { title: "Ekonomisk stabilitet", description: "Budget, medlemsavgifter och sponsring som håller." },
      { title: "Medlemsengagemang", description: "Vuxennärvaro, föräldrar och aktiva medlemmar." },
      { title: "Spelarutveckling", description: "Planen för spelarna används i vardagen." },
      { title: "Kvalitetsstämpel", description: "En bekräftelse på att arbetet fungerar." },
      { title: "Kommunikation", description: "Intern och extern kommunikation som bär." },
      { title: "Långsiktighet", description: "Arbetet ska hålla även när personer byts ut." },
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
      "Det som händer runt matchen påverkar barnen lika mycket som spelet. Vuxna behöver veta hur de ska stötta.",
    pillars: [
      { title: "Matchvärdar", description: "Vuxna som läser av och agerar när det krävs." },
      { title: "Guider och avtal", description: "Samma regler för vuxna runt planen." },
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
      "Stöd till en förening som vill ta ett konkret steg framåt och följa upp om det fungerade.",
    pillars: [
      { title: "Plan", description: "Från hur det är nu till vad föreningen vill uppnå." },
      { title: "Genomförande", description: "Tydliga steg, ansvariga och tidpunkter." },
      { title: "Uppföljning", description: "Siffror och berättelser visar om något blev bättre." },
      { title: "Stöd till klubbar", description: "Workshops, samtal och handlingsplaner." },
    ],
    partners: ["gff", "rf-sisu", "foreningar"],
  },
  {
    id: "fu-i-skola",
    name: "Fotbollsutveckling i skola",
    areaSlug: "skola-samverkan",
    summary:
      "Fotboll i skolan är en väg in i föreningslivet för barn som annars kanske inte hittar dit.",
    pillars: [
      { title: "Samordning", description: "Skola, förening och förbund arbetar åt samma håll." },
      { title: "Möten med skolor", description: "Rektorer och lärare förstår upplägget." },
      { title: "Möten med föreningar", description: "Klubbar vet hur de tar emot nya barn." },
      { title: "Stöd från RF-SISU", description: "Utbildning och stöd kopplas på när det behövs." },
      { title: "Onboarding av nya skolor", description: "Steg för steg in i samarbetet." },
      { title: "Överblick", description: "Vilka skolor gör vad och var finns behoven?" },
      { title: "Skolbollen", description: "Material och upplägg som gör det lätt att komma igång." },
      { title: "Stöd till föreningar", description: "Hjälp att starta och fortsätta arbetet." },
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
      "En satsning där fotbollen stärker områden där fler barn behöver trygga vägar in.",
    pillars: [
      { title: "Förstudier", description: "Förstå behov, personer och möjligheter i området." },
      { title: "Överenskommelser", description: "Tydliga löften som håller över tid." },
      { title: "Återrapportering", description: "Visa vad som gjorts och vad som händer nu." },
      { title: "Partnerarbete", description: "Förening, kommun och andra parter drar åt samma håll." },
      { title: "Riktade insatser", description: "Resurser och stöd där de gör mest nytta." },
    ],
    partners: ["svff", "gff", "goteborgs-stad", "foreningar"],
  },
];

export const programsByArea = (slug: AreaSlug): Program[] =>
  PROGRAMS.filter((p) => p.areaSlug === slug);

export const getProgram = (id: string): Program | undefined =>
  PROGRAMS.find((p) => p.id === id);

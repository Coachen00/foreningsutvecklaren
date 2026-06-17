import {
  BarChart3,
  ClipboardCheck,
  Compass,
  Eye,
  FileText,
  GitBranch,
  Layers,
  Network,
  Repeat2,
  Target,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export interface MethodStage {
  number: string;
  title: string;
  kicker: string;
  description: string;
  output: string;
  icon: LucideIcon;
}

export interface MethodWorkMode {
  title: string;
  label: string;
  description: string;
  examples: string[];
  icon: LucideIcon;
}

export interface MethodPrinciple {
  title: string;
  description: string;
}

export interface MethodMatrixItem {
  id: string;
  title: string;
  context: string;
  action: string;
}

export interface MethodRhythm {
  title: string;
  description: string;
  weight: "high" | "medium" | "low";
}

export const METHOD_OVERVIEW = {
  eyebrow: "Metod",
  title: "Metoden ska göra nästa steg självklart",
  lead:
    "Först förstå läget. Sedan välja nästa steg, göra jobbet och lära av det.",
  support:
    "Poängen är enkel: föreningen ska få bättre ordning runt barnen, ledarna och lagen.",
};

export const METHOD_STAGES: MethodStage[] = [
  {
    number: "01",
    title: "Rikta frågan",
    kicker: "Hitta rätt plats",
    description:
      "Bestäm vad frågan egentligen handlar om innan arbetet blir större.",
    output: "En tydlig plats att börja på.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Bestäm vem som äger frågan",
    kicker: "Ansvar",
    description:
      "Se till att rätt personer är med och att styrelsen kopplas in när det behövs.",
    output: "Rätt personer i rätt samtal.",
    icon: Users,
  },
  {
    number: "03",
    title: "Förstå läget",
    kicker: "Underlag",
    description:
      "Samla bara så mycket fakta som behövs för att kunna välja klokt.",
    output: "Behov, hinder och möjligheter.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Prioritera insats",
    kicker: "Val",
    description:
      "Välj det som gör mest nytta och som föreningen faktiskt orkar genomföra.",
    output: "Ett avgränsat nästa steg.",
    icon: Target,
  },
  {
    number: "05",
    title: "Genomför i rytm",
    kicker: "Arbete",
    description:
      "Arbeta steg för steg: prata, dokumentera kort, stäm av och justera.",
    output: "Arbete som håller ihop över tid.",
    icon: Workflow,
  },
  {
    number: "06",
    title: "Följ upp och lär",
    kicker: "Utveckling",
    description:
      "Titta på vad som hände, vad som blev bättre och vad som ska ändras nästa gång.",
    output: "Lärdomar som kan användas igen.",
    icon: Repeat2,
  },
];

export const METHOD_WORK_MODES: MethodWorkMode[] = [
  {
    title: "Utvecklingsdialog",
    label: "Navet",
    description:
      "Samtal där föreningen ringar in behov, hinder och nästa steg.",
    examples: ["Vägval", "Uppföljning", "Nästa steg"],
    icon: GitBranch,
  },
  {
    title: "Styrelseförankring",
    label: "Beslut",
    description:
      "När frågan påverkar pengar, roller eller riktning behöver styrelsen vara med.",
    examples: ["Beslut", "Ansvar", "Plan"],
    icon: Layers,
  },
  {
    title: "Riktad observation",
    label: "Underlag",
    description:
      "Träning och match besöks när det hjälper oss förstå miljön bättre.",
    examples: ["Träningsmiljö", "Matchklimat", "Kultur"],
    icon: Eye,
  },
  {
    title: "Dokumenterat arbetssätt",
    label: "Minnet",
    description:
      "Korta anteckningar visar vad som beslutades och vad som händer nu.",
    examples: ["Läge", "Plan", "Årshjul"],
    icon: FileText,
  },
  {
    title: "Resurskoppling",
    label: "Stöd",
    description:
      "Pengar, partners och utbildning kopplas till rätt behov.",
    examples: ["Partners", "RF-SISU", "Finansiering"],
    icon: Network,
  },
  {
    title: "Effektlärande",
    label: "Lärande",
    description:
      "Efteråt samlas vad vi lärde oss och vad som ska göras annorlunda.",
    examples: ["Resultat", "Lärdom", "Justering"],
    icon: BarChart3,
  },
];

export const METHOD_MATRIX: MethodMatrixItem[] = [
  {
    id: "avgransa",
    title: "Avgränsa först",
    context: "Oklart behov · lite ork",
    action:
      "Börja med läget, rollerna och ett litet första steg.",
  },
  {
    id: "samla-riktning",
    title: "Samla riktning",
    context: "Oklart behov · mycket ork",
    action:
      "Sortera idéerna. Föreningen kan mycket, men behöver välja riktning.",
  },
  {
    id: "bygg-struktur",
    title: "Bygg arbetssätt",
    context: "Tydligt behov · lite ork",
    action:
      "Börja med ansvar, årshjul och stödpersoner.",
  },
  {
    id: "delegera-folj-upp",
    title: "Delegera och följ upp",
    context: "Tydligt behov · mycket ork",
    action:
      "Låt föreningen driva arbetet och följ upp längs vägen.",
  },
];

export const METHOD_PRINCIPLES: MethodPrinciple[] = [
  {
    title: "Samma fråga ska inte få två huvudplatser",
    description:
      "En fråga kan länkas från flera håll, men den ska ha en tydlig hemvist.",
  },
  {
    title: "Kapacitet går före aktivitet",
    description:
      "Det viktiga är inte att göra mycket, utan att föreningen står starkare efteråt.",
  },
  {
    title: "Metoden ska tåla förändring",
    description:
      "När nya idéer kommer ska de gå att lägga in utan att allt måste byggas om.",
  },
  {
    title: "Bevis ska vara läsbara",
    description:
      "Siffror och exempel ska hjälpa läsaren förstå, inte göra sidan tyngre.",
  },
];

export const METHOD_RHYTHM: MethodRhythm[] = [
  {
    title: "Dialog och förankring",
    description: "Högst vikt. Här formas riktning, ansvar och lärande.",
    weight: "high",
  },
  {
    title: "Planering och dokumentation",
    description: "Mellanvikt. Gör arbetet lättare att följa och lämna över.",
    weight: "medium",
  },
  {
    title: "Observation och platsnärvaro",
    description: "Riktad vikt. Används när platsbesök hjälper beslutet.",
    weight: "low",
  },
  {
    title: "Uppföljning och metodjustering",
    description: "Hög vikt. Utan lärande upprepar vi bara samma arbete.",
    weight: "high",
  },
];

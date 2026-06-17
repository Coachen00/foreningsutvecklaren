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
    "Från nuläge till prioritering, genomförande och lärande. Samma karta används varje gång, så nya frågor inte blir nya strukturer.",
  support:
    "Arbetet sker genom föreningens utvecklare och styrelse. Ledare, spelare och barn påverkas när strukturen runt dem blir starkare.",
};

export const METHOD_STAGES: MethodStage[] = [
  {
    number: "01",
    title: "Rikta frågan",
    kicker: "Sortering",
    description:
      "Avgör var frågan hör hemma innan arbetet växer. Rätt plats minskar dubbelarbete.",
    output: "Huvudplacering och korslänkar.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Förankra ägarskap",
    kicker: "Mandat",
    description:
      "Klargör vem som äger frågan, vilka som behöver vara med och när styrelsen ska in.",
    output: "Rätt personer och rimlig beslutsväg.",
    icon: Users,
  },
  {
    number: "03",
    title: "Kartlägg nuläge",
    kicker: "Underlag",
    description:
      "Samla precis nog från samtal, dokument, observationer och mätpunkter för att kunna välja klokt.",
    output: "Behov, hinder och möjligheter.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Prioritera insats",
    kicker: "Val",
    description:
      "Välj insats utifrån effekt, tajming, genomförbarhet och föreningens egen kapacitet.",
    output: "Ett avgränsat nästa steg.",
    icon: Target,
  },
  {
    number: "05",
    title: "Genomför i rytm",
    kicker: "Arbete",
    description:
      "Arbeta i rytm: dialog, dokumentation, avstämning och justering. Platsbesök används när de ger bättre underlag.",
    output: "Sammanhängande insatser över tid.",
    icon: Workflow,
  },
  {
    number: "06",
    title: "Följ upp och lär",
    kicker: "Utveckling",
    description:
      "Skilj aktivitet från output och effekt. Då syns vad som faktiskt blev starkare.",
    output: "Lärande som kan återanvändas.",
    icon: Repeat2,
  },
];

export const METHOD_WORK_MODES: MethodWorkMode[] = [
  {
    title: "Utvecklingsdialog",
    label: "Navet",
    description:
      "Löpande samtal där behov, hinder och nästa steg blir synliga.",
    examples: ["Riktningssamtal", "Uppföljning", "Prioritering"],
    icon: GitBranch,
  },
  {
    title: "Styrelseförankring",
    label: "Mandat",
    description:
      "När frågan påverkar resurser eller riktning behöver styrelsen vara med.",
    examples: ["Beslutsväg", "Ansvar", "Verksamhetsplan"],
    icon: Layers,
  },
  {
    title: "Riktad observation",
    label: "Underlag",
    description:
      "Träning och match används när miljön behöver läsas av, alltid kopplat till en fråga.",
    examples: ["Träningsmiljö", "Matchklimat", "Kultur"],
    icon: Eye,
  },
  {
    title: "Dokumenterad process",
    label: "Spårbarhet",
    description:
      "Kort dokumentation visar beslut, riktning, ansvar och nästa steg.",
    examples: ["Nuläge", "Handlingsplan", "Årshjul"],
    icon: FileText,
  },
  {
    title: "Resurskoppling",
    label: "Kapacitet",
    description:
      "Partners, finansiering och utbildningsstöd kopplas till rätt insats.",
    examples: ["Partners", "RF-SISU", "Finansiering"],
    icon: Network,
  },
  {
    title: "Effektlärande",
    label: "Metodutveckling",
    description:
      "Efter insatsen blir lärandet en del av leveransen.",
    examples: ["Output", "Effekt", "Justering"],
    icon: BarChart3,
  },
];

export const METHOD_MATRIX: MethodMatrixItem[] = [
  {
    id: "avgransa",
    title: "Avgränsa först",
    context: "Oklart behov · låg kapacitet",
    action:
      "Börja med nuläge, roller och en liten första åtgärd.",
  },
  {
    id: "samla-riktning",
    title: "Samla riktning",
    context: "Oklart behov · hög kapacitet",
    action:
      "Sortera ambitionerna. Kapaciteten finns, men behöver riktning.",
  },
  {
    id: "bygg-struktur",
    title: "Bygg struktur",
    context: "Tydligt behov · låg kapacitet",
    action:
      "Prioritera ansvar, årshjul, resurser och stödpersoner.",
  },
  {
    id: "delegera-folj-upp",
    title: "Delegera och följ upp",
    context: "Tydligt behov · hög kapacitet",
    action:
      "Lägg arbetet nära föreningen och följ upp riktningen.",
  },
];

export const METHOD_PRINCIPLES: MethodPrinciple[] = [
  {
    title: "Samma fråga ska inte få två huvudplatser",
    description:
      "Innehåll kan korslänkas, men huvudplaceringen ska vara tydlig. Det skyddar både läsaren och framtida uppdateringar.",
  },
  {
    title: "Kapacitet går före aktivitet",
    description:
      "Det viktiga är inte att många saker sker, utan att föreningen blir mer kapabel efteråt: tydligare ansvar, bättre struktur och mer hållbar vardag.",
  },
  {
    title: "Metoden ska tåla förändring",
    description:
      "När nya insatser, partners eller mätpunkter tillkommer ska de kunna sorteras in utan att startsidan byggs om från grunden.",
  },
  {
    title: "Bevis ska vara läsbara",
    description:
      "Siffror, exempel och berättelser används som bevis, men de får inte ta över huvudberättelsen. De ska förklara effekten.",
  },
];

export const METHOD_RHYTHM: MethodRhythm[] = [
  {
    title: "Dialog och förankring",
    description: "Högst vikt. Det är här riktning, mandat och lärande formas.",
    weight: "high",
  },
  {
    title: "Planering och dokumentation",
    description: "Mellanvikt. Gör arbetet spårbart och möjligt att lämna över.",
    weight: "medium",
  },
  {
    title: "Observation och platsnärvaro",
    description: "Riktad vikt. Används när den ger bättre underlag för beslut.",
    weight: "low",
  },
  {
    title: "Uppföljning och metodjustering",
    description: "Hög vikt. Utan lärande blir arbetet upprepning i stället för utveckling.",
    weight: "high",
  },
];

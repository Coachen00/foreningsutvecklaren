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
  title: "Metod",
  lead:
    "Metoden beskriver hur uppdraget rör sig från nuläge till prioritering, genomförande och lärande. Den gör arbetet möjligt att leda, förklara, följa upp och utveckla utan att varje ny fråga blir en ny struktur.",
  support:
    "Arbetet sker främst genom föreningens förenings- och fotbollsutvecklare samt direkt eller indirekt med styrelsen. Ledare, spelare och barn påverkas genom den struktur som föreningen bygger.",
};

export const METHOD_STAGES: MethodStage[] = [
  {
    number: "01",
    title: "Rikta frågan",
    kicker: "Sortering",
    description:
      "Först avgörs var frågan hör hemma: En bättre väg, FU Skola, Föreningslyftet, Uppdrag, Partners eller en fördjupning. Rätt placering minskar dubbelarbete och gör sidan begriplig för läsaren.",
    output: "En tydlig huvudplacering och eventuella korslänkar.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Förankra ägarskap",
    kicker: "Mandat",
    description:
      "Innan insatsen växer behöver ägarskapet vara tydligt. Vem äger frågan i föreningen, vilka behöver vara med och vilken nivå kräver styrelseförankring?",
    output: "Rätt personer i dialogen och en rimlig beslutsväg.",
    icon: Users,
  },
  {
    number: "03",
    title: "Kartlägg nuläge",
    kicker: "Underlag",
    description:
      "Nuläget samlas från samtal, dokument, observationer, mätpunkter och tidigare erfarenhet. Poängen är inte att veta allt, utan att veta tillräckligt för att kunna prioritera klokt.",
    output: "En koncentrerad nulägesbild med behov, hinder och möjligheter.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Prioritera insats",
    kicker: "Val",
    description:
      "När allt verkar viktigt behövs en tydlig prioritering. Insatsen väljs utifrån effekt, genomförbarhet, tajming och hur väl den stärker föreningens egen kapacitet.",
    output: "Ett avgränsat nästa steg som går att genomföra och följa upp.",
    icon: Target,
  },
  {
    number: "05",
    title: "Genomför i rytm",
    kicker: "Arbete",
    description:
      "Genomförandet sker i en återkommande rytm: dialog, dokumentation, avstämning och justering. Tränings- och matchbesök används när de tillför underlag, inte som rutin.",
    output: "Aktiviteter som hänger ihop över tid i stället för enskilda punktinsatser.",
    icon: Workflow,
  },
  {
    number: "06",
    title: "Följ upp och lär",
    kicker: "Utveckling",
    description:
      "Uppföljningen skiljer på aktivitet, output och effekt. Det visar vad som faktiskt hände, vad som blev starkare och vad metoden behöver justera inför nästa cykel.",
    output: "Lärande som kan återanvändas i nästa förening, område eller process.",
    icon: Repeat2,
  },
];

export const METHOD_WORK_MODES: MethodWorkMode[] = [
  {
    title: "Utvecklingsdialog",
    label: "Navet",
    description:
      "Den löpande dialogen med föreningens utvecklare och nyckelpersoner. Här upptäcks behov, hinder och möjliga nästa steg.",
    examples: ["Riktningssamtal", "Uppföljning", "Prioritering"],
    icon: GitBranch,
  },
  {
    title: "Styrelseförankring",
    label: "Mandat",
    description:
      "När frågan påverkar organisation, resurser eller långsiktig riktning behöver styrelsen vara direkt eller indirekt förankrad.",
    examples: ["Beslutsväg", "Ansvar", "Verksamhetsplan"],
    icon: Layers,
  },
  {
    title: "Riktad observation",
    label: "Underlag",
    description:
      "Träning och match används som metod när miljön behöver läsas av. Observationen ska alltid kopplas till en fråga och en efterföljande dialog.",
    examples: ["Träningsmiljö", "Matchklimat", "Kultur"],
    icon: Eye,
  },
  {
    title: "Dokumenterad process",
    label: "Spårbarhet",
    description:
      "Kort dokumentation gör att arbetet går att följa över tid. Den ska visa beslut, riktning, ansvar och nästa steg utan att bli tung administration.",
    examples: ["Nuläge", "Handlingsplan", "Årshjul"],
    icon: FileText,
  },
  {
    title: "Resurskoppling",
    label: "Kapacitet",
    description:
      "Partners, finansiering och utbildningsstöd kopplas till rätt förening och rätt insats. Stödet ska bli kapacitet, inte beroende.",
    examples: ["Partners", "RF-SISU", "Finansiering"],
    icon: Network,
  },
  {
    title: "Effektlärande",
    label: "Metodutveckling",
    description:
      "Efter insatsen analyseras vad som fungerade, vad som saknades och vad som ska ändras i metoden. Lärandet är en del av leveransen.",
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
      "Börja med nuläge, rollfördelning och en liten första åtgärd. För stor insats för tidigt skapar mer friktion än utveckling.",
  },
  {
    id: "samla-riktning",
    title: "Samla riktning",
    context: "Oklart behov · hög kapacitet",
    action:
      "Använd dialog och verksamhetsidé för att sortera ambitionerna. Kapaciteten finns, men den behöver riktning.",
  },
  {
    id: "bygg-struktur",
    title: "Bygg struktur",
    context: "Tydligt behov · låg kapacitet",
    action:
      "Prioritera ansvar, årshjul, resurser och stödpersoner. Insatsen behöver minska personberoende och skapa hållbarhet.",
  },
  {
    id: "delegera-folj-upp",
    title: "Delegera och följ upp",
    context: "Tydligt behov · hög kapacitet",
    action:
      "Lägg arbetet nära föreningen. Rollen blir att säkra riktning, följa upp och koppla på rätt stöd vid rätt tidpunkt.",
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

export interface WorkMethodStep {
  title: string;
  description: string;
}

/** Steg i WorkMethodBlock på /uppdrag ("Så här arbetar jag"). */
export const UPPDRAG_METHOD_STEPS: WorkMethodStep[] = [
  {
    title: "Närvaro",
    description:
      "Arbetet börjar i rätt forum: med föreningens utvecklare, styrelsefunktioner och vid behov i verksamhetsmiljön.",
  },
  {
    title: "Dialog",
    description:
      "Samtal som bygger förtroende, sätter riktning och gör det möjligt att stötta föreningen på riktigt.",
  },
  {
    title: "Struktur",
    description: "Från observation till plan: roller, rytm och uppföljning.",
  },
  {
    title: "Uppföljning",
    description: "Återkoppling, anpassning och långsiktighet – utveckling som håller.",
  },
];

/** Steg i WorkMethodBlock på /uppdrag/arbetsuppgifter ("Hur varje insats rullar"). */
export const ARBETSUPPGIFTER_METHOD_STEPS: WorkMethodStep[] = [
  {
    title: "Planering",
    description:
      "Vilka utvecklingsdialoger, styrelseavstämningar och observationer ligger i kalendern – och varför.",
  },
  {
    title: "Genomförande",
    description:
      "Närvaro i rätt forum: med föreningens utvecklare, styrelsefunktioner eller på plats i verksamheten.",
  },
  {
    title: "Dokumentation",
    description: "Kort notering i systemet så att det går att följa över tid.",
  },
  {
    title: "Reflektion",
    description: "Vad såg vi, vad tar vi med oss, vad justerar vi?",
  },
];

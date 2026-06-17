/**
 * PLANNING CHAIN — föreningsutvecklingens styrkedja.
 *
 * Bygger på GFF:s verksamhetsplan 2026–2027, GFF:s årshjul 2026 och
 * Kvalitetsklubbs fokusområden. Används på Föreningslyftet-sidan för att
 * visa hur föreningsutvecklarrollen gör dokument till praktisk styrning.
 */

import type { LucideIcon } from "lucide-react";
import {
  CalendarDays,
  ClipboardList,
  Compass,
  Target,
} from "lucide-react";

export interface PlanningChainStep {
  number: string;
  title: string;
  question: string;
  description: string;
  qualityClubArea: string;
  qualityClubPoint: string;
  output: string;
  icon: LucideIcon;
}

export interface QualityClubPlanningFocus {
  area: string;
  label: string;
  description: string;
  role: "primär" | "stöd";
  icon: LucideIcon;
}

export interface PlanningOutcome {
  label: string;
  value: string;
  description: string;
}

export const FORENINGSLYFTET_PLANNING_CHAIN: PlanningChainStep[] = [
  {
    number: "01",
    title: "Verksamhetsidé",
    question: "Varför finns föreningen?",
    description:
      "Föreningen behöver veta varför den finns och vad den står för. Det hjälper när svåra val ska göras.",
    qualityClubArea: "Vår Förening",
    qualityClubPoint: "Verksamhetsidé, värdegrund och vision",
    output: "En riktning som hjälper föreningen välja rätt.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Verksamhetsmål",
    question: "Vad ska flytta sig?",
    description:
      "Målen visar vad föreningen vill förändra. De ska vara få, tydliga och möjliga att följa.",
    qualityClubArea: "Vår Förening",
    qualityClubPoint: "Verksamhetsplan",
    output: "Mål som går att följa upp.",
    icon: Target,
  },
  {
    number: "03",
    title: "Verksamhetsplan",
    question: "Vad ska göras och av vem?",
    description:
      "Planen visar vad som ska göras, vem som ansvarar och vilka resurser som behövs.",
    qualityClubArea: "Vår Förening",
    qualityClubPoint: "Föreningens demokrati och verksamhetsplan",
    output: "En plan där aktivitet, ansvar och budget hänger ihop.",
    icon: ClipboardList,
  },
  {
    number: "04",
    title: "Årshjul",
    question: "När ska arbetet ske?",
    description:
      "Årshjulet visar när saker ska hända under säsongen.",
    qualityClubArea: "Vår Förening + Våra Resurser",
    qualityClubPoint: "Styrelsens uppföljning, ekonomi och kommunikation",
    output: "En rytm som gör arbetet lättare att hålla i.",
    icon: CalendarDays,
  },
];

export const QUALITY_CLUB_PLANNING_FOCUS: QualityClubPlanningFocus[] = [
  {
    area: "Vår Förening",
    label: "Primär hemvist",
    description:
      "Här finns idé, årsmöte, styrelsearbete och plan. Det är grunden.",
    role: "primär",
    icon: Compass,
  },
  {
    area: "Våra Resurser",
    label: "När plan blir verklighet",
    description:
      "Budget, planer och kommunikation ska hänga ihop med det föreningen vill göra.",
    role: "stöd",
    icon: ClipboardList,
  },
  {
    area: "Våra Ledare",
    label: "När målen kräver roller",
    description:
      "När målen kräver fler ledare behöver roller och stöd vara tydliga.",
    role: "stöd",
    icon: Target,
  },
];

export const FORENINGSLYFTET_PLANNING_OUTCOMES: PlanningOutcome[] = [
  {
    label: "Målbild",
    value: "Eget utvecklingsarbete",
    description:
      "Föreningen ska kunna driva sitt eget arbete, med stöd när det behövs.",
  },
  {
    label: "Verksamhetsplan 2026–2027",
    value: "50 %",
    description:
      "Minst hälften av föreningarna i Föreningslyftet ska arbeta aktivt med Kvalitetsklubb senast 2027.",
  },
  {
    label: "Årsrytm",
    value: "Planera · genomföra · följa upp",
    description:
      "Årshjulet gör planering, beslut och uppföljning återkommande och tydligt.",
  },
];

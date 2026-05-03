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
      "Verksamhetsidén samlar föreningens syfte, värdegrund och riktning. Den ska vara känd, nedskriven och möjlig att återkomma till när prioriteringar skaver.",
    qualityClubArea: "Vår Förening",
    qualityClubPoint: "Verksamhetsidé, värdegrund och vision",
    output: "En gemensam riktning som styrelse, ledare och medlemmar kan pröva beslut mot.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Verksamhetsmål",
    question: "Vad ska flytta sig?",
    description:
      "Målen gör riktningen mätbar. I föreningsutveckling handlar det om få men tydliga mål som visar om organisation, ledarskap och vardag faktiskt utvecklas.",
    qualityClubArea: "Vår Förening",
    qualityClubPoint: "Verksamhetsplan",
    output: "Mål som kan följas upp över tid, inte bara formuleringar i ett dokument.",
    icon: Target,
  },
  {
    number: "03",
    title: "Verksamhetsplan",
    question: "Vad ska göras och av vem?",
    description:
      "Verksamhetsplanen översätter idé och mål till prioriterade aktiviteter, ansvar och resurser. Den ska beslutas demokratiskt och följas av styrelsen mellan årsmötena.",
    qualityClubArea: "Vår Förening",
    qualityClubPoint: "Föreningens demokrati och verksamhetsplan",
    output: "En beslutad plan där aktiviteter, ansvar och budget hänger ihop.",
    icon: ClipboardList,
  },
  {
    number: "04",
    title: "Årshjul",
    question: "När ska arbetet ske?",
    description:
      "Årshjulet gör planen genomförbar. Det placerar årsmöte, budget, uppföljning, utbildning och föreningsträffar i rätt rytm över säsongen.",
    qualityClubArea: "Vår Förening + Våra Resurser",
    qualityClubPoint: "Styrelsens uppföljning, ekonomi och kommunikation",
    output: "En årsrytm som minskar personberoende och gör uppföljning till vardag.",
    icon: CalendarDays,
  },
];

export const QUALITY_CLUB_PLANNING_FOCUS: QualityClubPlanningFocus[] = [
  {
    area: "Vår Förening",
    label: "Primär hemvist",
    description:
      "Här hör verksamhetsidé, demokrati, årsmöte, styrelsearbete och verksamhetsplan hemma. Det är styrningen som bär hela kedjan.",
    role: "primär",
    icon: Compass,
  },
  {
    area: "Våra Resurser",
    label: "När plan blir kapacitet",
    description:
      "Budget, ekonomi, anläggning och kommunikation ska spegla verksamhetsplanen. Resurserna ska ligga i linje med mål och aktiviteter.",
    role: "stöd",
    icon: ClipboardList,
  },
  {
    area: "Våra Ledare",
    label: "När målen kräver roller",
    description:
      "Ledarförsörjningsplan och tydliga roller kopplas in när verksamhetsmålen kräver fler eller mer hållbara ledare.",
    role: "stöd",
    icon: Target,
  },
];

export const FORENINGSLYFTET_PLANNING_OUTCOMES: PlanningOutcome[] = [
  {
    label: "Målbild",
    value: "Eget utvecklingsarbete",
    description:
      "Föreningarna ska driva sitt eget utvecklingsarbete med stöd av Kvalitetsklubb, inte vara beroende av punktinsatser.",
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
      "GFF:s årshjul placerar verksamhetsplanering, fastställande och uppföljning i en återkommande rytm som kan översättas till föreningarnas vardag.",
  },
];

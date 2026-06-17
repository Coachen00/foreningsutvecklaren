/**
 * KVALITETSKLUBB — SvFF:s ramverk för föreningsutveckling.
 *
 * Strukturerat enligt SvFF:s officiella modell:
 *   • 4 fokusområden (Vår Förening, Våra Spelare, Våra Ledare, Våra Resurser)
 *   • Fokuspunkter under varje
 *   • 5-stegs process från nuläge till certifiering
 *   • 3 klubb-roller (skiljs från En bättre väg-tjänsterna)
 *
 * Källa: SvFF kvalitetsklubbsmaterial + GFF strategiskt sammanfattningsdokument 2026.
 */

import type { LucideIcon } from "lucide-react";
import { Building2, Users, Trophy, Wrench, Compass, Flag, Shield } from "lucide-react";

/* ─── 4 fokusområden ─────────────────────────────────────── */

export interface FocusPoint {
  title: string;
  description: string;
}

export interface FocusArea {
  id: string;
  /** Exakt SvFF-namn */
  name: string;
  /** Kort kicker — vad området handlar om */
  kicker: string;
  /** Längre summary */
  summary: string;
  icon: LucideIcon;
  points: FocusPoint[];
}

export const KVALITETSKLUBB_FOCUS_AREAS: FocusArea[] = [
  {
    id: "var-forening",
    name: "Vår Förening",
    kicker: "Skelettet",
    summary:
      "Basen för allt annat. Här finns besluten, planen och ordningen som gör föreningen trygg att vara i.",
    icon: Building2,
    points: [
      {
        title: "Föreningens demokrati",
        description:
          "Tydliga stadgar, årsmöten, budget och en styrelse som leder arbetet mellan årsmötena.",
      },
      {
        title: "Verksamhetsidé, värdegrund och vision",
        description:
          "Alla vet varför föreningen finns, vad den står för och vart den vill.",
      },
      {
        title: "Jämställdhet, inkludering och mångfald",
        description:
          "Alla barn och vuxna ska känna att föreningen är till för dem.",
      },
      {
        title: "Verksamhetsplan",
        description:
          "En enkel plan för vad föreningen ska göra, vem som ansvarar och hur det följs upp.",
      },
      {
        title: "Trygg Fotboll",
        description:
          "Rutiner för trygghet: registerutdrag, kontaktvägar och vad föreningen gör om något händer.",
      },
    ],
  },
  {
    id: "vara-spelare",
    name: "Våra Spelare",
    kicker: "Verksamheten",
    summary:
      "Att fler barn börjar, trivs och vill fortsätta spela fotboll.",
    icon: Trophy,
    points: [
      {
        title: "Spelarutbildningsplan",
        description:
          "Ett stöd för tränare när de planerar träning och match.",
      },
      {
        title: "Rekrytera",
        description:
          "Så når föreningen nya barn och tar emot dem på ett bra sätt.",
      },
      {
        title: "Behålla",
        description:
          "Så skapas glädje, delaktighet och trygghet så att fler vill fortsätta.",
      },
      {
        title: "Vårdnadshavare",
        description:
          "Så får föräldrar veta vad som gäller och hur de kan bidra.",
      },
    ],
  },
  {
    id: "vara-ledare",
    name: "Våra Ledare",
    kicker: "Människorna",
    summary:
      "Fler ledare som får stöd, utbildning och orkar stanna kvar.",
    icon: Users,
    points: [
      {
        title: "Ledarförsörjningsplan",
        description:
          "Hur föreningen hittar, tar emot, utvecklar och tackar av ledare.",
      },
      {
        title: "Fotbollsutvecklare",
        description:
          "Tränarnas stödperson. Hjälper tränare på planen, i samtal och i utbildning.",
      },
      {
        title: "Domarutvecklare",
        description:
          "Domarnas stödperson. Hjälper nya domare att lära, våga och fortsätta.",
      },
      {
        title: "Trygghetsansvarig",
        description:
          "Personen som hjälper föreningen att förebygga problem och agera när något händer.",
      },
    ],
  },
  {
    id: "vara-resurser",
    name: "Våra Resurser",
    kicker: "Det som möjliggör",
    summary:
      "Pengar, planer, människor och kommunikation som gör arbetet möjligt.",
    icon: Wrench,
    points: [
      {
        title: "Medlemsengagemang",
        description:
          "Hur medlemmar får information, kan påverka och känna sig delaktiga.",
      },
      {
        title: "Ekonomi",
        description:
          "Ordning på budget, lagkassor och hur pengar fördelas.",
      },
      {
        title: "Anläggning",
        description:
          "Trygga planer, rätt ytor och rättvis fördelning av tider.",
      },
      {
        title: "Kommunikationsplan",
        description:
          "Vem som behöver veta vad, var informationen finns och när den skickas.",
      },
    ],
  },
];

/* ─── 5-stegs process ────────────────────────────────────── */

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  output: string;
}

export const KVALITETSKLUBB_PROCESS: ProcessStep[] = [
  {
    number: "01",
    title: "Klubbkollen — nuläge",
    description:
      "Föreningen frågar medlemmarna hur de upplever verksamheten.",
    output: "En bild av vad som fungerar och vad som behöver bli bättre",
  },
  {
    number: "02",
    title: "Analys",
    description:
      "Föreningen går igenom svaren och väljer vad som är viktigast att börja med.",
    output: "Styrkor, behov och första prioritering",
  },
  {
    number: "03",
    title: "Handlingsplan",
    description:
      "Föreningen bestämmer vad som ska göras, vem som gör det och när det följs upp.",
    output: "En plan som går att använda",
  },
  {
    number: "04",
    title: "Klubbverktyget",
    description:
      "Föreningen samlar sitt arbete och får stöd av distriktet på vägen.",
    output: "Tydliga steg framåt",
  },
  {
    number: "05",
    title: "Certifiering & omcertifiering",
    description:
      "När kraven är uppfyllda blir föreningen Kvalitetsklubb. Efter två år görs en ny genomgång.",
    output: "Kvalitetsklubb i två år",
  },
];

/* ─── 3 klubb-roller (skiljs från En bättre väg-tjänsterna) ── */

export interface KlubbRole {
  id: string;
  title: string;
  metaphor: string;
  icon: LucideIcon;
  responsibilities: string[];
  description: string;
}

export const KVALITETSKLUBB_ROLES: KlubbRole[] = [
  {
    id: "fotbollsutvecklare",
    title: "Fotbollsutvecklare",
    metaphor: "Tränarnas tränare",
    icon: Compass,
    description:
      "Stöttar tränare så att träning och match blir bättre för spelarna.",
    responsibilities: [
      "Ledarsamtal och ledarträffar",
      "Träningsbesök och matchbesök",
      "Vägleder tränare i SvFF:s tränarutbildning",
      "Hjälper tränare använda spelarutbildningsplanen",
    ],
  },
  {
    id: "domarutvecklare",
    title: "Domarutvecklare",
    metaphor: "Domarnas tränare",
    icon: Flag,
    description:
      "Stöttar domare så att fler vågar börja och fortsätta döma.",
    responsibilities: [
      "Möjliggör domarutbildning",
      "Stöttar domare under matcher",
      "Hjälper i planering och fadderskap",
      "Utvecklar föreningens domararbete",
    ],
  },
  {
    id: "trygghetsansvarig",
    title: "Trygghetsansvarig",
    metaphor: "Värdegrund i praktiken",
    icon: Shield,
    description:
      "Hjälper föreningen skapa trygg miljö och hantera ärenden på rätt sätt.",
    responsibilities: [
      "Följer värdegrund och riktlinjer",
      "Ansvarar för ärendehantering",
      "Delar kontaktuppgifter till medlemmar",
      "Tydligt uppdrag från styrelsen",
    ],
  },
];

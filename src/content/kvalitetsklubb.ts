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
      "Basen för allt annat. Demokrati, riktning och organisation. När Vår Förening är svag blir resten ostadigt.",
    icon: Building2,
    points: [
      {
        title: "Föreningens demokrati",
        description:
          "Stadgar i linje med RF, årsmöten, beslutad verksamhetsplan och budget, styrelse som leder mellan årsmötena.",
      },
      {
        title: "Verksamhetsidé, värdegrund och vision",
        description:
          "Gemensam syn på syfte, väg framåt och värderingar — nedskriven, tillgänglig och regelbundet utvärderad.",
      },
      {
        title: "Jämställdhet, inkludering och mångfald",
        description:
          "Inte en separat fokuspunkt — ska genomsyra alla fokusområden i föreningens vardag.",
      },
      {
        title: "Verksamhetsplan",
        description:
          "Hela verksamheten beskriven i en övergripande plan, beslutad på årsmöte och följd upp av styrelsen.",
      },
      {
        title: "Trygg Fotboll",
        description:
          "Handlingsplan för trivsel, registerutdrag, referenstagning och flödesschema för incidenter.",
      },
    ],
  },
  {
    id: "vara-spelare",
    name: "Våra Spelare",
    kicker: "Verksamheten",
    summary:
      "Att fler börjar spela och stannar längre. Spelarutbildning, rekrytering, retention och vårdnadshavare.",
    icon: Trophy,
    points: [
      {
        title: "Spelarutbildningsplan",
        description:
          "Utgångspunkten för tränarna när de planerar och genomför träning och match. Bygger på Fotbollens spela, lek och lär.",
      },
      {
        title: "Rekrytera",
        description:
          "Plan för att nå nya barn, ta emot dem och vårdnadshavare, och utveckla uppstarten över tid.",
      },
      {
        title: "Behålla",
        description:
          "Stöd till tränare för glädjefylld verksamhet, spelarinflytande och uppföljning av dem som slutar.",
      },
      {
        title: "Vårdnadshavare",
        description:
          "Plan för engagemang och kommunikation kring föreningen och laget — vårdnadshavare som central resurs.",
      },
    ],
  },
  {
    id: "vara-ledare",
    name: "Våra Ledare",
    kicker: "Människorna",
    summary:
      "Ledarförsörjning, kompetens och hållbarhet. Många ledare med rätt utbildning — och en plan för att hålla dem.",
    icon: Users,
    points: [
      {
        title: "Ledarförsörjningsplan",
        description:
          "Struktur för att rekrytera, utveckla och avsluta ledare. Vilka roller eftersträvas, hur används planen?",
      },
      {
        title: "Fotbollsutvecklare",
        description:
          "Tränarnas tränare i föreningen. Stöttar tränare på planen, genomför ledarsamtal och ledarträffar, vägleder genom SvFF:s tränarutbildning.",
      },
      {
        title: "Domarutvecklare",
        description:
          "Domarnas tränare. Möjliggör domarutbildning, hjälper i planering, stöttar under matcher och utvecklar föreningens domararbete.",
      },
      {
        title: "Trygghetsansvarig",
        description:
          "Arbetar både proaktivt och reaktivt med trygg miljö. Följer värdegrund, ansvarar för ärendehantering, har mandat via styrelse.",
      },
    ],
  },
  {
    id: "vara-resurser",
    name: "Våra Resurser",
    kicker: "Det som möjliggör",
    summary:
      "Människor, ekonomi, anläggning, kommunikation. Resurserna ska ligga i linje med mål och aktiviteter — inte bredvid dem.",
    icon: Wrench,
    points: [
      {
        title: "Medlemsengagemang",
        description:
          "Plan för medlemsinflytande — vilka forum finns, hur tillgängliggörs planen, hur följs den upp?",
      },
      {
        title: "Ekonomi",
        description:
          "Rutiner för redovisning, lagkassor inom föreningens ekonomi, budget som speglar verksamhetsplanen och en jämställd resursfördelning.",
      },
      {
        title: "Anläggning",
        description:
          "Anläggningsbehov, trygg anläggning, jämställd plantidsfördelning, underhållsplan, rätt planmått.",
      },
      {
        title: "Kommunikationsplan",
        description:
          "Nedskriven plan med målgrupper, kanaler, vad som kommuniceras när, hur och varför — utvärderad årligen.",
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
      "Föreningen skickar ut en enkät till medlemmar. Svaren ger en visuell nulägesbild inom de fyra fokusområdena.",
    output: "Visuell nulägesbild",
  },
  {
    number: "02",
    title: "Analys",
    description:
      "Föreningen analyserar resultatet — helst tillsammans med distriktet. Mallar för nulägesanalys finns per fokusområde.",
    output: "Förståelse för styrkor och behov",
  },
  {
    number: "03",
    title: "Handlingsplan",
    description:
      "Vad behöver utvecklas, vem ansvarar, hur drivs arbetet, vad räknas som bevis? Föreningen arbetar i den takt den hinner.",
    output: "Beslutad plan med ansvar",
  },
  {
    number: "04",
    title: "Klubbverktyget",
    description:
      "Föreningen arbetar vidare inom de fyra fokusområdena med löpande dialog, granskning och godkännande från distriktet.",
    output: "Dokumenterade utvecklingssteg",
  },
  {
    number: "05",
    title: "Certifiering & omcertifiering",
    description:
      "När alla kriterier är uppfyllda utnämns föreningen till Kvalitetsklubb i två år. Sedan följer omcertifiering.",
    output: "Kvalitetsstämpel · 2 år",
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
      "Stödjer och vägleder tränare på planen. Utvecklar tillämpningen av spelarutbildningsplanen i föreningens vardag.",
    responsibilities: [
      "Ledarsamtal och ledarträffar",
      "Träningsbesök och matchbesök",
      "Vägleder tränare i SvFF:s tränarutbildning",
      "Utvecklar tillämpningen av spelarutbildningsplanen",
    ],
  },
  {
    id: "domarutvecklare",
    title: "Domarutvecklare",
    metaphor: "Domarnas tränare",
    icon: Flag,
    description:
      "Möjliggör domarutbildning, stöttar nya domare, hjälper i planering och utvecklar föreningens domararbete.",
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
      "Arbetar proaktivt och reaktivt med trygg miljö. Följer värdegrund och hanterar ärenden — med mandat från styrelsen.",
    responsibilities: [
      "Följer värdegrund och riktlinjer",
      "Ansvarar för ärendehantering",
      "Delar kontaktuppgifter till medlemmar",
      "Mandat via styrelse eller delegerat ansvar",
    ],
  },
];

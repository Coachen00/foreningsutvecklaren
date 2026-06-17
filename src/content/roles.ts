/**
 * ROLES — rolldefinitioner för En bättre väg och språkröret.
 *
 * Två olika datatyper:
 *  1. AssignmentRoles — para ihop tjänsterna i programmet (föreningsutvecklare /
 *     fotbollsutvecklare).
 *  2. DoDontPair — gränsdragning för språkrörets eget arbete.
 *
 * Källa: PDF avsnitt 1.1, 1.4.
 */

import type { LucideIcon } from "lucide-react";
import { Building2, Users } from "lucide-react";

export interface AssignmentRole {
  id: string;
  title: string;
  kicker: string;
  icon: LucideIcon;
  responsibilities: string[];
  summary: string;
}

export const EN_BATTRE_VAG_ROLES: AssignmentRole[] = [
  {
    id: "foreningsutvecklare",
    title: "Föreningsutvecklare",
    kicker: "Organisationen runt fotbollen",
    icon: Building2,
    summary:
      "Hjälper föreningen få ordning på roller, beslut, ekonomi och kontakter.",
    responsibilities: [
      "Organisation och styrelsearbete",
      "Ekonomi och finansiering",
      "Värdegrund och demokrati",
      "Kontakt med kommun och skola",
      "Tydliga roller över tid",
    ],
  },
  {
    id: "fotbollsutvecklare",
    title: "Fotbollsutvecklare",
    kicker: "Det som händer på planen",
    icon: Users,
    summary:
      "Stöttar tränare och ledare, ansvarar för spelarutbildning och rekryterar nya ledare.",
    responsibilities: [
      "Stöd till tränare och ledare på planen",
      "Spelarutbildning enligt SUP",
      "Rekrytering av nya ledare",
      "Tränarutbildning på klubbnivå",
      "Lokal förebild i området",
    ],
  },
];

export interface DoDontItem {
  text: string;
}

export interface DoDontGroup {
  kicker: string;
  title: string;
  description: string;
  items: DoDontItem[];
}

export const SPRAKROR_DO_DONT: { do: DoDontGroup; dont: DoDontGroup } = {
  do: {
    kicker: "Gör",
    title: "Det här bygger vi",
    description:
      "Språkröret hjälper föreningen framåt, men föreningen ska själv äga arbetet.",
    items: [
      {
        text: "Ser till att föreningar gör Klubbkollen och skriver enkla planer.",
      },
      {
        text: "Hjälper föreningen välja vad som behöver bli bättre först.",
      },
      {
        text: "Gör roller, beslut och årshjul tydligare.",
      },
      {
        text: "Får GFF, förening, RF-SISU, kommun och skola att dra åt samma håll.",
      },
      {
        text: "Samlar resultat och lärdomar efter arbetet.",
      },
    ],
  },
  dont: {
    kicker: "Gör inte",
    title: "Det här undviker vi",
    description:
      "Språkröret ska inte ta över föreningens ansvar.",
    items: [
      {
        text: "Skriver inte allt åt föreningen — styrelsen ska äga arbetet.",
      },
      {
        text: "Låter inte Kvalitetsklubb bli papper som ingen använder.",
      },
      {
        text: "Ersätter inte föreningens styrelse eller blir deras kansli.",
      },
      {
        text: "Tar inte över alla externa relationer eller varje lokal aktivitet.",
      },
      {
        text: "Driver inte konflikter utan ett tydligt uppdrag.",
      },
    ],
  },
};

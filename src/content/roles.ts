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
      "Bygger en hållbar förening med tydliga strukturer, demokrati och samverkan.",
    responsibilities: [
      "Organisation och styrelsearbete",
      "Ekonomi och finansiering",
      "Värdegrund och demokrati",
      "Samverkan med kommun och skola",
      "Långsiktig kapacitet och rollfördelning",
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
      "Språkröret arbetar processledande. Allt som ökar föreningens egen kapacitet är rätt riktning.",
    items: [
      {
        text: "Säkrar att föreningar genomför Klubbkollen och dokumenterar handlingsplaner.",
      },
      {
        text: "Driver fram handlingsplaner inom Kvalitetsklubbs fyra fokusområden.",
      },
      {
        text: "Stärker föreningens demokratiska arbetssätt och tydliggör roller och årshjul.",
      },
      {
        text: "Skapar samsyn mellan GFF, förening, RF-SISU, kommun/skola och civilsamhälle.",
      },
      {
        text: "Samlar konkreta resultat och lärdomar; kopplar insatser till mål.",
      },
    ],
  },
  dont: {
    kicker: "Gör inte",
    title: "Det här undviker vi",
    description:
      "Det som skapar beroende av GFF eller flyttar ägarskap från föreningen är fel väg.",
    items: [
      {
        text: "Skriver inte allt åt föreningen — styrelsen ska ha ägarskap.",
      },
      {
        text: "Låter inte Kvalitetsklubb bli en pappersprodukt utan förankring.",
      },
      {
        text: "Ersätter inte föreningens styrelse eller blir deras kansli.",
      },
      {
        text: "Tar inte över alla externa relationer eller varje lokal aktivitet.",
      },
      {
        text: "Driver inte konflikter utan mandat.",
      },
    ],
  },
};

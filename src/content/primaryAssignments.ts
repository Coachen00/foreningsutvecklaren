import { Compass, Route, School, type LucideIcon } from "lucide-react";
import type { AreaSlug } from "./siteStructure";

/**
 * PRIMARY ASSIGNMENTS — extern användarlogik.
 *
 * Detta är den yta som användaren möter först: top-nav, startsidans huvudkort
 * och nästa/föregående-flödet mellan de tre stora uppdragen.
 *
 * AREAS (src/content/areas.ts) är fortfarande intern innehållsmodell för
 * fördjupnings- och stödsidor (Uppdrag, Arbetsuppgifter, Partners osv).
 * Gör inte detta beroende av AREAS.
 */

export type PrimaryAssignmentId = "foreningslyftet" | "en-battre-vag" | "fu-skola";

export interface PrimaryAssignment {
  id: PrimaryAssignmentId;
  title: string;
  navLabel: string;
  kicker: string;
  path: string;
  lead: string;
  description: string;
  icon: LucideIcon;
  metaTitle: string;
  metaDescription: string;
  /** Koppling till intern områdesmodell – används bara om en sida lånar en AreaShell. */
  relatedAreaSlug?: AreaSlug;
}

export const PRIMARY_ASSIGNMENTS: PrimaryAssignment[] = [
  {
    id: "en-battre-vag",
    title: "En bättre väg",
    navLabel: "En bättre väg",
    kicker: "Riktad samhällsbärande satsning",
    path: "/en-battre-vag",
    lead: "Extra stöd till fotboll där fler barn behöver trygga vägar in.",
    description:
      "Förening, kommun, förbund och partners jobbar tillsammans där behoven är störst.",
    icon: Route,
    metaTitle: "En bättre väg – Föreningsutvecklaren",
    metaDescription:
      "En bättre väg ger extra stöd till fotboll i områden där fler barn behöver trygga vägar in.",
    relatedAreaSlug: "skola-samverkan",
  },
  {
    id: "fu-skola",
    title: "FU Skola",
    navLabel: "FU Skola",
    kicker: "Bron mellan skola och förening",
    path: "/fu-skola",
    lead: "Där skola, förening och förbund möts – och där många barn får sin första väg in i organiserad fotboll.",
    description:
      "Fotboll i skolan hjälper barn hitta vidare till föreningslivet. Skolor och föreningar får stöd att komma igång.",
    icon: School,
    metaTitle: "FU Skola – Föreningsutvecklaren",
    metaDescription:
      "FU Skola kopplar skolans vardag till föreningslivet och hjälper skolor och föreningar komma igång.",
    relatedAreaSlug: "skola-samverkan",
  },
  {
    id: "foreningslyftet",
    title: "Föreningslyftet",
    navLabel: "Föreningslyftet",
    kicker: "Långsiktig föreningsförflyttning",
    path: "/foreningsutveckling",
    lead: "Stöd till föreningar som vill få bättre ordning och hålla över tid.",
    description:
      "Kvalitetsklubb, matchklimat och föreningsstöd hjälper föreningen bygga trygghet, ledarskap och tydliga rutiner.",
    icon: Compass,
    metaTitle: "Föreningslyftet – Föreningsutvecklaren",
    metaDescription:
      "Föreningslyftet hjälper föreningar bygga trygghet, ledarskap och tydliga rutiner som håller över tid.",
    relatedAreaSlug: "foreningsutveckling",
  },
];

export const getPrimaryAssignment = (
  id: PrimaryAssignmentId,
): PrimaryAssignment => PRIMARY_ASSIGNMENTS.find((p) => p.id === id)!;

/**
 * Returnerar prev/next bland de tre primära uppdragen.
 * Loopar – efter sista kommer det första.
 */
export const adjacentPrimaryAssignments = (id: PrimaryAssignmentId) => {
  const i = PRIMARY_ASSIGNMENTS.findIndex((p) => p.id === id);
  const last = PRIMARY_ASSIGNMENTS.length - 1;
  return {
    prev: i > 0 ? PRIMARY_ASSIGNMENTS[i - 1] : null,
    next: i < last ? PRIMARY_ASSIGNMENTS[i + 1] : PRIMARY_ASSIGNMENTS[0],
  };
};

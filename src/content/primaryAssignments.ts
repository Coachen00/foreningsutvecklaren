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
    lead: "SvFF:s riktade satsning på fotbollen i prioriterade områden – lokalt förankrad genom förstudier, partnerskap och riktade insatser.",
    description:
      "Arbete där resurser möter de platser som behöver dem mest. Förstudier, samverkansdokument och insatser som kopplar förening, kommun, förbund och civilsamhälle.",
    icon: Route,
    metaTitle: "En bättre väg – Arbetsdetektiven",
    metaDescription:
      "En bättre väg är SvFF:s riktade satsning på fotboll i prioriterade områden. Förstudier, partnerskap och riktade insatser – lokalt förankrat i Göteborg.",
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
      "Fotbollsutveckling i skolan är inte en extra aktivitet, utan en väg in i föreningslivet. Projektledning, onboarding, samverkan och uppföljning som håller ihop arbetet.",
    icon: School,
    metaTitle: "FU Skola – Arbetsdetektiven",
    metaDescription:
      "FU Skola kopplar skolans vardag till föreningslivet – onboarding av skolor och föreningar, samverkan med RF-SISU och stöd i uppföljning.",
    relatedAreaSlug: "skola-samverkan",
  },
  {
    id: "foreningslyftet",
    title: "Föreningslyftet",
    navLabel: "Föreningslyftet",
    kicker: "Långsiktig föreningsförflyttning",
    path: "/foreningsutveckling",
    lead: "Ett sammanhållet utvecklingsspår där föreningar går från ad hoc till medveten organisation.",
    description:
      "Kvalitetsklubb, matchklimat och riktad föreningsutveckling – tre sammanhängande arbetssätt för struktur, ledarskap och kultur som håller över säsonger.",
    icon: Compass,
    metaTitle: "Föreningslyftet – Arbetsdetektiven",
    metaDescription:
      "Föreningslyftet samlar Kvalitetsklubb, matchklimat och FU i förening – långsiktig utveckling av struktur, ledarskap och kultur i Göteborgs föreningsliv.",
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

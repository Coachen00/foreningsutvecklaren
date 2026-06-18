import {
  Briefcase,
  Building2,
  Compass,
  type LucideIcon,
} from "lucide-react";
import type { AreaSlug } from "./siteStructure";

export interface Subpage {
  slug: string;
  path: string;
  title: string;
  navLabel: string;
  metaDescription: string;
  heroLead: string;
}

export interface Area {
  slug: AreaSlug;
  path: string;
  number: "01" | "02" | "03";
  title: string;
  shortTitle: string;
  navLabel: string;
  kicker: string;
  heroLead: string;
  heroSupport: string;
  metaTitle: string;
  metaDescription: string;
  icon: LucideIcon;
  subpages: Subpage[];
}

export const AREAS: Area[] = [
  {
    slug: "uppdrag",
    path: "/uppdrag",
    number: "01",
    title: "Uppdrag, styrning och administration",
    shortTitle: "Uppdrag",
    navLabel: "Uppdrag",
    kicker: "Stöd · Kärnuppdraget",
    heroLead:
      "Här förklaras vad rollen gör i vardagen.",
    heroSupport:
      "Det handlar om samtal med föreningar, stöd till beslut, besök i verksamheten och uppföljning efteråt.",
    metaTitle: "Uppdrag, styrning och administration – Föreningsutvecklaren",
    metaDescription:
      "Kärnuppdraget inom GFF: utvecklingsdialoger, utvecklarträffar, styrelseförankring och riktade observationer – plus arbetsmetod, styrning och ansvarskedjan mellan GFF, SvFF, RF-SISU, föreningar och skolor.",
    icon: Briefcase,
    subpages: [
      {
        slug: "arbetsuppgifter",
        path: "/uppdrag/arbetsuppgifter",
        title: "Arbetsuppgifter i detalj",
        navLabel: "Arbetsuppgifter",
        metaDescription:
          "Vad som görs i praktiken: samtal, träffar, föreningsbesök, uppstart av lag, spelarutbildning och uppföljning.",
        heroLead:
          "Vad som faktiskt görs, varför det görs och hur det följs upp.",
      },
      {
        slug: "partners",
        path: "/uppdrag/partners",
        title: "Partners och ansvarskedja",
        navLabel: "Partners",
        metaDescription:
          "Vem som gör vad: GFF, SvFF, RF-SISU, Göteborgs Stad, föreningar och skolor.",
        heroLead:
          "Vem som ansvarar, vem som stöttar och hur arbetet hänger ihop.",
      },
    ],
  },
  {
    slug: "foreningsutveckling",
    path: "/foreningsutveckling",
    number: "02",
    title: "Föreningsutveckling och kvalitetsarbete",
    shortTitle: "Föreningsutveckling",
    navLabel: "Föreningsutveckling",
    kicker: "Stöd · Kvalitet & kultur",
    heroLead:
      "Hur en förening får bättre ordning och kan fortsätta utvecklas.",
    heroSupport:
      "Kvalitetsklubb, matchklimat och föreningsutveckling hjälper föreningen bygga trygghet, ledarskap och tydliga arbetssätt.",
    metaTitle: "Föreningsutveckling och kvalitetsarbete – Föreningsutvecklaren",
    metaDescription:
      "Kvalitetsklubb, matchklimat, FU i förening och handlingsplaner – stöd som gör föreningarnas vardag tydligare och lättare att hålla i.",
    icon: Compass,
    subpages: [
      {
        slug: "kvalitetsklubb",
        path: "/foreningsutveckling/kvalitetsklubb",
        title: "Kvalitetsklubb",
        navLabel: "Kvalitetsklubb",
        metaDescription:
          "Kvalitetsklubb i praktiken: roller, ledare, spelare, ekonomi och trygghet.",
        heroLead:
          "För föreningar som vill bli tydligare, tryggare och mer hållbara.",
      },
    ],
  },
  {
    slug: "skola-samverkan",
    path: "/skola-samverkan",
    number: "03",
    title: "Skola, förening och sociala satsningar",
    shortTitle: "Skola & förening",
    navLabel: "Skola & förening",
    kicker: "Stöd · Utanför föreningsväggarna",
    heroLead:
      "Hur skola, kommun och förening kan hjälpa fler barn in i fotbollen.",
    heroSupport:
      "Här syns hur skola, förening, förbund och kommun hänger ihop. En bättre väg och FU Skola har egna sidor.",
    metaTitle: "Skola, förening och sociala satsningar – Föreningsutvecklaren",
    metaDescription:
      "Fotboll i skolan, En bättre väg och samarbete mellan förening, skola, GFF, SvFF, RF-SISU och Göteborgs Stad – fler barn i rörelse och starkare föreningar.",
    icon: Building2,
    subpages: [
      {
        slug: "fu-i-skola",
        path: "/skola-samverkan/fu-i-skola",
        title: "Fotbollsutveckling i skola",
        navLabel: "FU i skola",
        metaDescription:
          "Fotboll i skolan i praktiken: skolor, föreningar, RF-SISU, stöd och uppföljning.",
        heroLead:
          "Där många barn får sin första väg in i fotbollen.",
      },
    ],
  },
];

export const getArea = (slug: AreaSlug): Area =>
  AREAS.find((a) => a.slug === slug)!;

export const adjacentAreas = (slug: AreaSlug) => {
  const i = AREAS.findIndex((a) => a.slug === slug);
  return {
    prev: i > 0 ? AREAS[i - 1] : null,
    next: i < AREAS.length - 1 ? AREAS[i + 1] : AREAS[0],
  };
};

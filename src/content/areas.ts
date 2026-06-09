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
    kicker: "Kärnuppdraget",
    heroLead:
      "Rollen som binder ihop föreningar, förbund och spelarutbildning i vardagen.",
    heroSupport:
      "Utvecklingsdialoger, utvecklarträffar, styrelseförankring och riktade observationer är stommen. Runt det ligger planering, utbildning, partnerarbete och administration som gör att arbetet håller över tid.",
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
          "Fördjupning i de operativa arbetsuppgifterna: utvecklingsdialoger, utvecklarträffar, styrelseförankring, riktade observationer, uppstart av nya lag, spelarutbildningsplan och utbildningsstruktur.",
        heroLead:
          "Från kärnuppdraget till det dagliga arbetet – vad som faktiskt görs och hur det följs upp.",
      },
      {
        slug: "partners",
        path: "/uppdrag/partners",
        title: "Partners och ansvarskedja",
        navLabel: "Partners",
        metaDescription:
          "Ansvarskedjan bakom uppdraget: GFF, SvFF, RF-SISU, Göteborgs Stad, föreningar och skolor – vem gör vad, och hur beslut rör sig mellan nivåerna.",
        heroLead:
          "Vem som äger vad, vem som stöttar vem, och hur besluten rör sig mellan nivåerna.",
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
    kicker: "Kvalitet & kultur",
    heroLead:
      "Hur en förening går från ad hoc till medveten organisation – och stannar där.",
    heroSupport:
      "Kvalitetsklubb, matchklimat och föreningsutveckling i förening är tre sammanhängande spår. Tillsammans bygger de struktur, ledarskap och trygg miljö som håller över säsonger.",
    metaTitle: "Föreningsutveckling och kvalitetsarbete – Föreningsutvecklaren",
    metaDescription:
      "Kvalitetsklubb, matchklimat, FU i förening och handlingsplaner – arbetsverktyg, kvalitetsstruktur och uppföljning som stärker föreningarnas vardag.",
    icon: Compass,
    subpages: [
      {
        slug: "kvalitetsklubb",
        path: "/foreningsutveckling/kvalitetsklubb",
        title: "Kvalitetsklubb",
        navLabel: "Kvalitetsklubb",
        metaDescription:
          "SvFF:s kvalitetskoncept i praktiken: från rollfördelning och kompetens till spelarutveckling, ekonomi och socialt ansvar.",
        heroLead:
          "Ett sammanhållet arbetssätt för föreningar som vill utvecklas medvetet – inte bara växa.",
      },
      {
        slug: "begrepp",
        path: "/foreningsutveckling/begrepp",
        title: "Begrepp",
        navLabel: "Begrepp",
        metaDescription:
          "Ordlista över centrala begrepp i en idrottsförening: bokföring, löpande bokföring, budget, bokslut, revision, verksamhetsplanering, stadgar, årsmöte och de vanligaste bidragen att söka.",
        heroLead:
          "En kort ordlista för förtroendevalda och ledare: ekonomi, planering, regler och bidrag i en idrottsförening – förklarat utan krångel.",
      },
      {
        slug: "case",
        path: "/foreningsutveckling/case",
        title: "Case",
        navLabel: "Case",
        metaDescription:
          "Fem nivåanpassade övningscase i föreningsutveckling – registerutdrag, kommunikation, ekonomi, anläggning och drop-out – med utmanande fråga, vägledning och effektlogik.",
        heroLead:
          "Fem case att träna på, från enkel struktur till komplext föreningssystem. Tänk själv först – fäll sedan ut vägledningen.",
      },
    ],
  },
  {
    slug: "skola-samverkan",
    path: "/skola-samverkan",
    number: "03",
    title: "Skola, samverkan och sociala satsningar",
    shortTitle: "Skola & samverkan",
    navLabel: "Skola & samverkan",
    kicker: "Utveckling utanför föreningsväggarna",
    heroLead:
      "Sammanhanget runt skola, kommun, förening och sociala satsningar.",
    heroSupport:
      "Det här är en kontextsida, inte ett fjärde huvuduppdrag. En bättre väg och FU Skola har egna sidor; här förklaras hur skola, förening, förbund och kommun hänger ihop.",
    metaTitle: "Skola, samverkan och sociala satsningar – Föreningsutvecklaren",
    metaDescription:
      "Fotboll i skolan, En bättre väg och samverkan mellan förening, skola, GFF, SvFF, RF-SISU och Göteborgs Stad – inkludering, tillgänglighet och föreningsstärkning i prioriterade områden.",
    icon: Building2,
    subpages: [
      {
        slug: "fu-i-skola",
        path: "/skola-samverkan/fu-i-skola",
        title: "Fotbollsutveckling i skola",
        navLabel: "FU i skola",
        metaDescription:
          "Fotboll i skolan i praktiken: projektledning, onboarding av skolor, samverkan med RF-SISU, stöd till föreningars skolsamverkan och uppföljning.",
        heroLead:
          "Där skola, förening och förbund möts – och där många barn får sin första väg in i fotbollen.",
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

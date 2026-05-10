/**
 * EKOSYSTEMET — den skarpa positioneringen.
 *
 * Varje system fyller en specifik funktion i den lokala helheten.
 * Ramverket gör att besökaren förstår vad som är vad — och varför
 * de hör ihop.
 *
 * Källa: Strategiskt sammanfattningsdokument för GFF 2026, avsnitt 15.
 */

import type { LucideIcon } from "lucide-react";
import { Layers, Route, Trophy, Compass, BookOpen, Map } from "lucide-react";

export interface EcosystemNode {
  id: string;
  /** Namnet på systemet */
  name: string;
  /** Den skarpa rollen — en mening, det viktigaste */
  role: string;
  /** Längre förklaring */
  description: string;
  icon: LucideIcon;
  /** Var hittar man det på sajten? */
  href?: string;
}

export const ECOSYSTEM_NODES: EcosystemNode[] = [
  {
    id: "kvalitetsklubb",
    name: "Kvalitetsklubb",
    role: "Infrastrukturen",
    description:
      "SvFF:s ramverk för föreningsutveckling. Inte en certifiering — ett styrsystem som föreningar bygger på.",
    icon: Layers,
    href: "/foreningsutveckling/kvalitetsklubb",
  },
  {
    id: "en-battre-vag",
    name: "En bättre väg",
    role: "Riktad resursförstärkning",
    description:
      "Använder Kvalitetsklubb som metod, men riktar resurserna till föreningar i prioriterade områden.",
    icon: Route,
    href: "/en-battre-vag",
  },
  {
    id: "fotbollslyftet",
    name: "Fotbollslyftet",
    role: "Spelarutvecklingsmotorn",
    description:
      "FU IF och zonutvecklare som bygger spelarutvecklingsmiljöer i föreningar och områden.",
    icon: Trophy,
    href: "/uppdrag/spelarutbildning",
  },
  {
    id: "foreningslyftet",
    name: "Föreningslyftet",
    role: "Föreningsutvecklingsmotorn",
    description:
      "Den lokala motorn för att flytta föreningar från ad hoc till medveten organisation. Använder Kvalitetsklubb som verktyg.",
    icon: Compass,
    href: "/foreningsutveckling",
  },
  {
    id: "samhallsnyttan",
    name: "Samhällsnyttan",
    role: "Samhällsberättelsen",
    description:
      "Det som visar vad fotbollen ger Göteborg — indikatorer, sociala effekter och områdestrygghet.",
    icon: BookOpen,
  },
  {
    id: "verksamhetsplan",
    name: "Verksamhetsplanen",
    role: "Den lokala styrningen",
    description:
      "GFF:s plan 2026–27 som binder ihop nationell strategi med lokala mål, KPI:er och prioriteringar.",
    icon: Map,
  },
];

/**
 * Den pedagogiska metaforen — för intro-blocket.
 */
export const ECOSYSTEM_METAPHOR = {
  kicker: "Pedagogiken",
  title: "Tänk att svensk fotboll är en stor skola",
  body: "SvFF ritar kartan. Kvalitetsklubb är klassrummet. En bättre väg är extra stöd där barnen saknar bäst förutsättningar. Effektlogiken är enkel: resurser in, arbete görs, resultat syns, effekt stannar. När alla delar hänger ihop blir föreningen starkare och tryggare över tid.",
};

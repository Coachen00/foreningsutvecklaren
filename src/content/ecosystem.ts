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
    role: "Grunden",
    description:
      "Ett stöd som hjälper föreningen få ordning på roller, ledare, spelare och trygghet.",
    icon: Layers,
    href: "/foreningsutveckling/kvalitetsklubb",
  },
  {
    id: "en-battre-vag",
    name: "En bättre väg",
    role: "Extra stöd där behoven är störst",
    description:
      "Riktar stöd till föreningar och områden där fler barn behöver trygga vägar in.",
    icon: Route,
    href: "/en-battre-vag",
  },
  {
    id: "fotbollslyftet",
    name: "Fotbollslyftet",
    role: "Bättre miljö för spelare",
    description:
      "Stöd till tränare och föreningar så att spelare får bättre träning och miljö.",
    icon: Trophy,
    href: "/uppdrag/spelarutbildning",
  },
  {
    id: "foreningslyftet",
    name: "Föreningslyftet",
    role: "Bättre vardag i föreningen",
    description:
      "Hjälper föreningar gå från brandsläckning till tydliga arbetssätt.",
    icon: Compass,
    href: "/foreningsutveckling",
  },
  {
    id: "samhallsnyttan",
    name: "Samhällsnyttan",
    role: "Det fotbollen bidrar med",
    description:
      "Visar hur fotboll kan bidra till trygghet, hälsa, gemenskap och framtidstro.",
    icon: BookOpen,
  },
  {
    id: "verksamhetsplan",
    name: "Verksamhetsplanen",
    role: "Planen för arbetet",
    description:
      "GFF:s plan för vad som ska göras lokalt och vad som ska följas upp.",
    icon: Map,
  },
];

/**
 * Den pedagogiska metaforen — för intro-blocket.
 */
export const ECOSYSTEM_METAPHOR = {
  kicker: "Pedagogiken",
  title: "Tänk att svensk fotboll är en stor skola",
  body: "SvFF ritar kartan. Kvalitetsklubb är klassrummet. En bättre väg ger extra stöd där barnen behöver en bättre fotbollsvardag. När stöd, människor och uppföljning hänger ihop blir föreningen starkare över tid.",
};

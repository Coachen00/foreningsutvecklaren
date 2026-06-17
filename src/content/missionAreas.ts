/**
 * HUVUDUPPDRAG — tre prioriterade spår som bär hela arbetet.
 *
 * Ordning: 1. En bättre väg (störst, mest framträdande)
 *          2. FU Skola
 *          3. Föreningsutveckling / Föreningslyftet
 *
 * Allt annat på sajten är stödstruktur, korslänk eller fördjupning.
 */

import type { LucideIcon } from "lucide-react";
import { Compass, Route, School } from "lucide-react";

export type MissionId = "en-battre-vag" | "fu-skola" | "foreningslyftet";

export type MissionPriority = "primary" | "secondary";

export interface MissionCrossLink {
  label: string;
  hint: string;
  href: string;
}

export interface MissionArea {
  id: MissionId;
  priority: MissionPriority;
  number: "01" | "02" | "03";
  title: string;
  kicker: string;
  /** Stor ingress som beskriver berättelsen */
  lead: string;
  /** Kort etikett för rollen i helheten */
  bearing: string;
  /** Punktlista med vad som hör hit */
  contains: string[];
  /** Korslänkar till relaterade ytor */
  crossLinks: MissionCrossLink[];
  path: string;
  icon: LucideIcon;
}

export const MISSION_AREAS: MissionArea[] = [
  {
    id: "en-battre-vag",
    priority: "primary",
    number: "01",
    title: "En bättre väg",
    kicker: "Riktad samhällsbärande satsning",
    lead: "Där behoven är störst: trygghet, inkludering och meningsfull fritid.",
    bearing: "Bär samhällsnyttan",
    contains: [
      "Girls FC",
      "Där behoven är störst",
      "Lokala förebilder",
    ],
    crossLinks: [
      {
        label: "Jämställdhet & trygghet",
        hint: "När fokus är flickfotboll, inkludering eller trygg miljö",
        href: "/foreningsutveckling/jamstalldhet-och-trygghet",
      },
      {
        label: "Partners",
        hint: "När fokus är vem som gör vad bakom satsningen",
        href: "/uppdrag/partners",
      },
    ],
    path: "/en-battre-vag",
    icon: Route,
  },
  {
    id: "fu-skola",
    priority: "secondary",
    number: "02",
    title: "FU Skola",
    kicker: "Bron mellan skola och förening",
    lead: "Skolan blir vägen in. Barn nås där de redan är.",
    bearing: "Bär skola–förening-bron",
    contains: [
      "Skolbollen",
      "Fotbollsprofil",
      "Skola–förening",
    ],
    crossLinks: [
      {
        label: "Skola & förening",
        hint: "Bredare hubb för skola, förening, förbund och kommun",
        href: "/skola-samverkan",
      },
      {
        label: "Spelarutbildning",
        hint: "När fokus är träningsinnehåll och spelarutveckling — inte skolan som plats",
        href: "/uppdrag/spelarutbildning",
      },
    ],
    path: "/fu-skola",
    icon: School,
  },
  {
    id: "foreningslyftet",
    priority: "secondary",
    number: "03",
    title: "Föreningsutveckling / Föreningslyftet",
    kicker: "Den generella föreningsmotorn",
    lead: "Arbetssätt, ledarskap och kultur som håller över säsonger.",
    bearing: "Bär kvalitet, arbetssätt och föreningsmotor",
    contains: [
      "Kvalitetsklubb",
      "Trygg Fotboll",
      "Årshjul",
    ],
    crossLinks: [
      {
        label: "Kvalitetsklubb",
        hint: "Fördjupning av stödet — inte huvudberättelsen",
        href: "/foreningsutveckling/kvalitetsklubb",
      },
      {
        label: "Föreningskommittén",
        hint: "Forum för gemensamma utvecklingsfrågor",
        href: "/uppdrag#kommitteer",
      },
    ],
    path: "/foreningsutveckling",
    icon: Compass,
  },
];

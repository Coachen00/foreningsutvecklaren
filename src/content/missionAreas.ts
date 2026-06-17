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
    lead: "Riktade insatser där behoven är störst: inkludering, trygghet och meningsfull fritid.",
    bearing: "Bär samhällsnyttan",
    contains: [
      "Girls FC och flickfotboll i prioriterade områden",
      "Hisingsbacka, Tynnered, Biskopsgården och andra geografier",
      "Förenings- och fotbollsutvecklare i satsningen",
      "Partners och finansiering kopplat till riktade insatser",
      "Lokala förebilder, trygghet och meningsfull fritid",
    ],
    crossLinks: [
      {
        label: "Jämställdhet & trygghet",
        hint: "När fokus är flickfotboll, inkludering eller trygg miljö",
        href: "/foreningsutveckling/jamstalldhet-och-trygghet",
      },
      {
        label: "Partners",
        hint: "När fokus är aktörskedjan bakom satsningen",
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
    lead: "Skolan som väg in i fotboll. Barn nås där de redan är.",
    bearing: "Bär skola–förening-bron",
    contains: [
      "Skolbollen och fotbollsprofil åk 7–9",
      "Onboarding av skolor, rektorer och kommun",
      "Samverkan mellan GFF, skolor, föreningar och RF-SISU",
      "Uppföljning av skolrelaterad fotbollsverksamhet",
      "Kompetenshöjning kopplad till skola–förening",
    ],
    crossLinks: [
      {
        label: "Skola & samverkan",
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
    lead: "Den generella motorn. Här byggs struktur, ledarskap och kultur som håller över säsonger.",
    bearing: "Bär struktur, kvalitet och föreningsmotor",
    contains: [
      "Föreningslyftet som huvudmotor",
      "Kvalitetsklubb som ramverk",
      "Nulägesanalys, handlingsplaner och uppföljning",
      "Styrelsearbete, årshjul och verksamhetsplan",
      "Matchklimat, Trygg Fotboll och ledarförsörjning",
      "Samverkan med RF-SISU och andra idrotter",
      "Digitala och fysiska föreningsträffar, konferenser och erfarenhetsutbyte",
    ],
    crossLinks: [
      {
        label: "Kvalitetsklubb",
        hint: "Fördjupning av ramverket — inte huvudberättelsen",
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

/**
 * NULÄGE — startsidans dashboard.
 *
 * Kort rollbeskrivning, tre största arbetsområden, pågående fokus
 * och en snabb effektlogik. Allt här är redaktionellt — uppdatera
 * när rollens nuläge förändras.
 */

import { Boxes, Hammer, ListChecks, Sparkles } from "lucide-react";
import type { EffectStage } from "./effectChain";

export interface MissionCard {
  id: "en-battre-vag" | "fu-skola" | "foreningslyftet";
  title: string;
  kicker: string;
  summary: string;
  path: string;
}

export interface FocusItem {
  label: string;
  description: string;
}

export interface CurrentState {
  eyebrow: string;
  title: string;
  role: {
    label: string;
    body: string;
  };
  topMissions: MissionCard[];
  focus: {
    eyebrow: string;
    intro: string;
    items: FocusItem[];
  };
  effect: {
    eyebrow: string;
    intro: string;
    stages: EffectStage[];
  };
}

export const CURRENT_STATE: CurrentState = {
  eyebrow: "Nuläge",
  title: "Så ser uppdraget ut just nu",
  role: {
    label: "Roll",
    body: "Språkrör och föreningsutvecklare inom Göteborgs Fotbollförbund. Jag arbetar med riktad föreningsutveckling, skola–förening, samhällsnytta, partners och operativ uppföljning.",
  },
  topMissions: [
    {
      id: "en-battre-vag",
      title: "En bättre väg",
      kicker: "Riktad samhällsbärande satsning",
      summary:
        "Riktade insatser i prioriterade områden. Här bär uppdraget den stora samhällsnyttan.",
      path: "/en-battre-vag",
    },
    {
      id: "fu-skola",
      title: "FU Skola",
      kicker: "Bron mellan skola och förening",
      summary:
        "Skolan som väg in i fotboll. Skolbollen, fotbollsprofil och samverkan med kommun, RF-SISU och GIS.",
      path: "/fu-skola",
    },
    {
      id: "foreningslyftet",
      title: "Föreningsutveckling / Föreningslyftet",
      kicker: "Den generella föreningsmotorn",
      summary:
        "Struktur, kvalitet och föreningsmotor. Kvalitetsklubb är verktyget — Föreningslyftet är arbetet.",
      path: "/foreningsutveckling",
    },
  ],
  focus: {
    eyebrow: "Just nu",
    intro:
      "Prioriterat arbete under innevarande period. Listan justeras när tyngdpunkten flyttar.",
    items: [
      {
        label: "Girls FC och flickfotboll",
        description: "Riktad satsning i prioriterade områden under En bättre väg.",
      },
      {
        label: "Partners och finansiering",
        description:
          "Stiftelser, bostadsbolag och samhällsaktörer som omsätts till föreningskapacitet.",
      },
      {
        label: "Kommittéarbete",
        description:
          "Fotbollsnyttan i Göteborg och Föreningskommittén — samhällsberättelse och utvecklingsforum.",
      },
      {
        label: "Kvalitet och trygghet",
        description:
          "Kvalitetsklubb, matchklimat, trygg fotboll och föreningsstruktur.",
      },
    ],
  },
  effect: {
    eyebrow: "Snabb effektlogik",
    intro: "Hur resurser översätts till verklig förändring.",
    stages: [
      {
        number: "01",
        label: "Resurser",
        title: "Resurser — det som stoppas in",
        description:
          "Människor, kapital och samverkan som möjliggör arbetet.",
        examples: [
          "Förbund och föreningar",
          "Skolor och kommun",
          "Partners, stiftelser, bostadsbolag",
        ],
        icon: Boxes,
      },
      {
        number: "02",
        label: "Aktiviteter",
        title: "Aktiviteter — det som görs",
        description: "Det dagliga arbetet som omsätter resurserna.",
        examples: [
          "Möten och uppföljning",
          "Ansökningar och samverkan",
          "Utbildning och start av nya grupper",
        ],
        icon: Hammer,
      },
      {
        number: "03",
        label: "Output",
        title: "Output — det som syns direkt",
        description: "Beviset på att aktiviteterna sker.",
        examples: [
          "Fler träffar och fler ledare",
          "Fler flickor i träning",
          "Mer finansiering, tydligare handlingsplaner",
        ],
        icon: ListChecks,
      },
      {
        number: "04",
        label: "Effekt",
        title: "Effekt — det som stannar kvar",
        description: "Det som finns kvar när insatsen är genomförd.",
        examples: [
          "Starkare föreningar",
          "Mer meningsfull fritid",
          "Bättre inkludering och lokal trygghet",
        ],
        icon: Sparkles,
      },
    ],
  },
};

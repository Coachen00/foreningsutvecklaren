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
    body: "Språkrör och föreningsutvecklare inom Göteborgs Fotbollförbund. Fokus är att hjälpa föreningar, skolor och partners jobba åt samma håll.",
  },
  topMissions: [
    {
      id: "en-battre-vag",
      title: "En bättre väg",
      kicker: "Riktad samhällsbärande satsning",
      summary:
        "Extra stöd där fler barn behöver trygga vägar in i fotbollen.",
      path: "/en-battre-vag",
    },
    {
      id: "fu-skola",
      title: "FU Skola",
      kicker: "Bron mellan skola och förening",
      summary:
        "Skolan blir en väg in till fotboll och föreningsliv.",
      path: "/fu-skola",
    },
    {
      id: "foreningslyftet",
      title: "Föreningsutveckling / Föreningslyftet",
      kicker: "Den generella föreningsmotorn",
      summary:
        "Stöd till föreningar som vill få bättre ordning och tryggare vardag.",
      path: "/foreningsutveckling",
    },
  ],
  focus: {
    eyebrow: "Just nu",
    intro:
      "Tyngdpunkter under nuvarande period.",
    items: [
      {
        label: "Girls FC och flickfotboll",
        description: "Fler flickor ska hitta in och stanna kvar i fotbollen.",
      },
      {
        label: "Partners och finansiering",
        description:
          "Stöd från andra ska bli konkret hjälp i föreningen.",
      },
      {
        label: "Kommittéarbete",
        description:
          "Forum där frågor samlas, diskuteras och blir beslut.",
      },
      {
        label: "Kvalitet och trygghet",
        description:
          "Kvalitetsklubb, matchklimat och trygghet i vardagen.",
      },
    ],
  },
  effect: {
    eyebrow: "Så blir stöd till förändring",
    intro: "Från människor och pengar till något som märks i föreningen.",
    stages: [
      {
        number: "01",
        label: "Resurser",
        title: "Resurser — det som behövs",
        description:
          "Människor, pengar och kontakter som gör arbetet möjligt.",
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
        title: "Aktiviteter — det vi gör",
        description: "Möten, träffar, utbildning och stöd i vardagen.",
        examples: [
          "Möten och uppföljning",
          "Ansökningar och samarbete",
          "Utbildning och start av nya grupper",
        ],
        icon: Hammer,
      },
      {
        number: "03",
        label: "Resultat",
        title: "Resultat — det som syns direkt",
        description: "Det första beviset på att arbetet rör sig framåt.",
        examples: [
          "Fler träffar och fler ledare",
          "Fler flickor i träning",
          "Mer stöd, tydligare planer",
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

export type ActivityScope = "core" | "occasional" | "extended";

export interface Activity {
  id: string;
  title: string;
  scope: ActivityScope;
  description: string;
  cadence?: string;
}

/**
 * Aktiviteter sorterade efter hur centralt de är i vardagen.
 *
 *  • core       — det löpande navet i uppdraget
 *  • occasional — görs när det passar, inte ständigt
 *  • extended   — längre insatser och projekt
 */
export const ACTIVITIES: Activity[] = [
  /* CORE — det löpande */
  {
    id: "ledartraffar",
    title: "Utvecklarträffar",
    scope: "core",
    description:
      "Gemensamma träffar med föreningens förenings- och fotbollsutvecklare, och vid behov styrelsen. Fokus ligger på arbetssätt, spelarutbildning och att få alla med.",
    cadence: "Flera per säsong",
  },
  {
    id: "ledarsamtal",
    title: "Utvecklingsdialoger",
    scope: "core",
    description:
      "Samtal med föreningsutvecklare, fotbollsutvecklare i förening och styrelsefunktioner för att sätta riktning, följa upp och undanröja hinder.",
    cadence: "Löpande",
  },

  /* OCCASIONAL — görs när det passar, inte ständigt */
  {
    id: "traningsbesok",
    title: "Riktade träningsbesök",
    scope: "occasional",
    description:
      "Närvaro på träning när det finns ett konkret utvecklingsskäl. Besöket förankras med föreningens nyckelpersoner och kopplas till nästa steg.",
    cadence: "Vid behov",
  },
  {
    id: "matchbesok",
    title: "Riktade matchbesök",
    scope: "occasional",
    description:
      "Observation av matchklimat och föreningskultur runt matchtillfället. Görs riktat, ofta med efterföljande dialog med utvecklare eller styrelse.",
    cadence: "Vid behov",
  },

  /* EXTENDED — längre insatser */
  {
    id: "uppstart-nya-lag",
    title: "Uppstart av nya lag",
    scope: "extended",
    description:
      "Stöd när föreningar startar nya åldersgrupper — från styrelseförankring och ansvar till första fungerande organisation runt laget.",
    cadence: "Säsongsstart",
  },
  {
    id: "spelarutbildningsplan",
    title: "Spelarutbildningsplan",
    scope: "extended",
    description:
      "Stöd till fotbollsutvecklare i förening att omsätta SvFF:s spelarutbildningsplan från dokument till träningsyta.",
    cadence: "Långsiktigt",
  },
  {
    id: "tranarutbildningar",
    title: "Utbildningsstöd",
    scope: "extended",
    description:
      "Initiering, förankring och stöd till föreningens utbildningsplanering, ofta via förenings- och fotbollsutvecklare samt styrelse.",
    cadence: "Årligen",
  },
];

export const CORE_ACTIVITIES = ACTIVITIES.filter((a) => a.scope === "core");
export const OCCASIONAL_ACTIVITIES = ACTIVITIES.filter(
  (a) => a.scope === "occasional",
);
export const EXTENDED_ACTIVITIES = ACTIVITIES.filter(
  (a) => a.scope === "extended",
);

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
    title: "Ledarträffar",
    scope: "core",
    description:
      "Gemensamma träffar för ledare i klubben — dialog kring metodik, spelarutbildning och kultur. Det är ofta här rörelsen syns först.",
    cadence: "Flera per säsong",
  },
  {
    id: "ledarsamtal",
    title: "Ledarsamtal",
    scope: "core",
    description:
      "Enskilda samtal med tränare och ledare för reflektion, riktning och stöd i rollen. Den närmaste relationen i uppdraget.",
    cadence: "Löpande",
  },

  /* OCCASIONAL — görs när det passar, inte ständigt */
  {
    id: "traningsbesok",
    title: "Träningsbesök",
    scope: "occasional",
    description:
      "Närvaro på träningar för att läsa av miljö, ledarskap och spelarutveckling i vardagen. Görs när det finns ett konkret skäl.",
    cadence: "Vid behov",
  },
  {
    id: "matchbesok",
    title: "Matchbesök",
    scope: "occasional",
    description:
      "Observation av matchklimat, ledarbeteende och föreningskultur runt matchtillfället. Görs riktat — inte rutinmässigt.",
    cadence: "Vid behov",
  },

  /* EXTENDED — längre insatser */
  {
    id: "uppstart-nya-lag",
    title: "Uppstart av nya lag",
    scope: "extended",
    description:
      "Stöd när föreningar startar nya åldersgrupper — från organisation till första tränarteam.",
    cadence: "Säsongsstart",
  },
  {
    id: "spelarutbildningsplan",
    title: "Spelarutbildningsplan",
    scope: "extended",
    description:
      "Implementering av SvFF:s spelarutbildningsplan i vardagen — från dokument till träningsyta.",
    cadence: "Långsiktigt",
  },
  {
    id: "tranarutbildningar",
    title: "Tränarutbildningar",
    scope: "extended",
    description:
      "Initiering, förankring och stöd kring utbildning av tränare på klubbnivå.",
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

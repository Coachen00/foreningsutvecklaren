export type ActivityScope = "core" | "extended";

export interface Activity {
  id: string;
  title: string;
  scope: ActivityScope;
  description: string;
  cadence?: string;
}

export const ACTIVITIES: Activity[] = [
  {
    id: "traningsbesok",
    title: "Träningsbesök",
    scope: "core",
    description: "Närvaro på träningar för att läsa av miljö, ledarskap och spelarutveckling i vardagen.",
    cadence: "Kontinuerligt under säsong",
  },
  {
    id: "matchbesok",
    title: "Matchbesök",
    scope: "core",
    description: "Observation av matchklimat, ledarbeteende och föreningskultur runt matchtillfället.",
    cadence: "Regelbundet under seriespel",
  },
  {
    id: "ledartraffar",
    title: "Ledarträffar",
    scope: "core",
    description: "Gemensamma träffar för ledare i klubben – dialog kring metodik, spelarutbildning och kultur.",
    cadence: "Flera per säsong",
  },
  {
    id: "ledarsamtal",
    title: "Ledarsamtal",
    scope: "core",
    description: "Enskilda samtal med tränare och ledare för reflektion, riktning och stöd i rollen.",
    cadence: "Löpande",
  },
  {
    id: "uppstart-nya-lag",
    title: "Uppstart av nya lag",
    scope: "extended",
    description: "Stöd när föreningar startar nya åldersgrupper – från organisation till första tränarteam.",
    cadence: "Säsongsstart",
  },
  {
    id: "spelarutbildningsplan",
    title: "Spelarutbildningsplan",
    scope: "extended",
    description: "Implementering av SvFF:s spelarutbildningsplan i vardagen – från dokument till träningsyta.",
    cadence: "Långsiktigt",
  },
  {
    id: "tranarutbildningar",
    title: "Tränarutbildningar",
    scope: "extended",
    description: "Initiering, förankring och stöd kring utbildning av tränare på klubbnivå.",
    cadence: "Årligen",
  },
];

export const CORE_ACTIVITIES = ACTIVITIES.filter((a) => a.scope === "core");
export const EXTENDED_ACTIVITIES = ACTIVITIES.filter((a) => a.scope === "extended");

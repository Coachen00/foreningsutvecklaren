export type ActivityScope = "core" | "occasional" | "extended" | "area";

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
      "Gemensamma träffar med föreningens förenings- och fotbollsutvecklare, och vid behov styrelsefunktioner. Fokus ligger på metod, struktur, spelarutbildning och förankring.",
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
    title: "Utbildningsstruktur",
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

/**
 * Arbetsområden — en övergripande beskrivning av vad rollen gör, grundad i
 * arbetsbeskrivningens avsnitt 4. Hålls utanför ACTIVITIES så att scope-filtren
 * ovan (core/occasional/extended) lämnas orörda; aktivitetslistorna ovan beskriver
 * de konkreta arbetsformerna, WORK_AREAS beskriver uppdraget på en nivå högre.
 *
 * Heter WORK_AREAS (inte MISSION_AREAS) för att inte krocka med
 * content/missionAreas.ts, som redan exporterar MISSION_AREAS för de tre
 * huvuduppdragen — två olika koncept som inte ska dela namn.
 */
export const WORK_AREAS: Activity[] = [
  {
    id: "foreningsutveckling-metod",
    title: "Föreningsutveckling med metod",
    scope: "area",
    description:
      "Jag driver utvecklingen genom Kvalitetsklubb: nulägesbild med Klubbkollen, handlingsplan inom de fyra fokusområdena och dokumentation i Klubbverktyget — metod i stället för lösa aktiviteter.",
  },
  {
    id: "starkare-organisation",
    title: "Starkare organisation",
    scope: "area",
    description:
      "Jag stärker styrelse och organisation: tydliga roller, ansvar och årshjul, verksamhetsplanering och ett arbetssätt som bärs av värdegrund, trygghet och delaktighet.",
  },
  {
    id: "samverkan-sprakror",
    title: "Samverkan och språkrör",
    scope: "area",
    description:
      "Jag knyter ihop förening, GFF, RF-SISU, kommun, skola och partners — och för föreningens behov, hinder och resultat vidare så att alla drar åt samma håll.",
  },
  {
    id: "uppfoljning-larande",
    title: "Uppföljning och lärande",
    scope: "area",
    description:
      "Jag ser till att planerna blir verklig praktik, kopplar insatserna till mål — fler ledare, fler aktiva, starkare föreningar — och återrapporterar på saklig grund.",
  },
];

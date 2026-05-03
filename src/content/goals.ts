/**
 * GOALS — kvantifierade mål från GFF:s verksamhetsplan 2026–27.
 * Källa: PDF avsnitt 2.5, 4.4.
 */

export interface Goal {
  id: string;
  /** Stora numerala värdet (t.ex. "50/50", "20 %", "90 %") */
  value: string;
  /** Liten kontext under värdet */
  unit?: string;
  title: string;
  description: string;
  deadline?: string;
}

export const JAMSTALLDHET_GOALS: Goal[] = [
  {
    id: "rep-50-50",
    value: "50/50",
    unit: "Representation",
    title: "Jämn representation i ledande organ",
    description:
      "Kansli, styrelse, valberedning, kommittéer och arbetsgrupper. Senast 2027.",
    deadline: "2027",
  },
  {
    id: "kvinnliga-domare",
    value: "20 %",
    unit: "av domarkåren",
    title: "Fler kvinnliga domare",
    description:
      "Mål: minst 20 % kvinnliga domare. 90 % av nuvarande kvinnliga domare ska fortsätta.",
  },
  {
    id: "tranare-balans",
    value: "Balans",
    unit: "i tränarkåren",
    title: "Jämställd fördelning av tränare och ledare",
    description:
      "Riktade satsningar för att utbilda och stötta kvinnliga ledare i föreningarna.",
  },
  {
    id: "flicklag",
    value: "Fler",
    unit: "i alla stadsdelar",
    title: "Flicklag i alla delar av Göteborg",
    description:
      "Riktade insatser för att locka flickor till fotbollen genom skolaktiviteter och övergångsstöd.",
  },
];

export const EN_BATTRE_VAG_GOALS: Goal[] = [
  {
    id: "valorganiserade",
    value: "Fler",
    unit: "föreningar",
    title: "Välorganiserade föreningar",
    description:
      "Tydliga strukturer och ansvar i föreningar i prioriterade områden.",
  },
  {
    id: "ledare-tranare",
    value: "Fler",
    unit: "ideella & utbildade",
    title: "Ideella ledare och utbildade tränare",
    description:
      "Rekrytering och utbildning av ledare och tränare är centralt i programmet.",
  },
  {
    id: "lokala-forebilder",
    value: "Lokalt",
    unit: "förankrat",
    title: "Lokala förebilder",
    description:
      "Anställa och lyfta fram personer med lokal förankring som positiva förebilder.",
  },
  {
    id: "deltagande",
    value: "Fler",
    unit: "barn & unga",
    title: "Fler flickor och pojkar i fotbollen",
    description:
      "Öka deltagandet bland barn och ungdomar — särskilt i områden med låg aktivitet.",
  },
];

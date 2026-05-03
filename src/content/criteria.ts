/**
 * CRITERIA — kriterier för deltagande i program.
 * Källa: PDF avsnitt 1.3, 3.1.
 */

export interface CriteriaList {
  id: string;
  title: string;
  description: string;
  items: string[];
  contact?: { name: string; role: string };
}

export const EN_BATTRE_VAG_CRITERIA: CriteriaList = {
  id: "en-battre-vag-kriterier",
  title: "Kriterier för att delta",
  description:
    "Föreningar som vill ingå i En bättre väg behöver uppfylla en uppsättning grundkrav. De är till för att säkra att satsningen landar där den gör mest nytta.",
  items: [
    "Föreningen verkar i ett prioriterat område enligt polisens klassificering.",
    "Föreningen anställer båda nyckelrollerna — föreningsutvecklare och fotbollsutvecklare.",
    "Föreningen deltar aktivt i forum med GFF, kommun och övriga partners.",
    "Föreningen erbjuder verksamhet för flickor och pojkar 7–25 år.",
  ],
};

export const FOTBOLLSPROFIL_CRITERIA: CriteriaList = {
  id: "fotbollsprofil-kriterier",
  title: "Kriterier för fotbollsprofil",
  description:
    "För att starta en fotbollsprofil i åk 7–9 behöver skolan uppfylla SvFF:s grundkrav. Distriktsförbundet beslutar om profilen får behållas över tid.",
  items: [
    "Minst två fotbollspass per vecka integrerade i skolans schema.",
    "Lärare med fotbollsutbildning enligt SvFF:s krav.",
    "Samverkan med närliggande fotbollsföreningar — träning, ledarutbildning och övergång till föreningsverksamhet.",
    "Regelbunden utvärdering av kvalitet och lärmiljö.",
  ],
  contact: {
    name: "Joel Sjöqvist",
    role: "FU Skola-ansvarig, Göteborg",
  },
};

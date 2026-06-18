import type { AreaSlug } from "./siteStructure";

export interface ImpactStatement {
  areaSlug: AreaSlug;
  headline: string;
  statements: string[];
}

export const IMPACTS: ImpactStatement[] = [
  {
    areaSlug: "uppdrag",
    headline: "Därför finns uppdraget",
    statements: [
      "Föreningar behöver stöd i vardagen, inte bara vid särskilda tillfällen.",
      "Spelarutbildning blir verklighet först när ledare har hjälp att landa den.",
      "En nära relation mellan förbund och klubb är vad som bär utveckling över tid.",
    ],
  },
  {
    areaSlug: "foreningsutveckling",
    headline: "Effekt i förening",
    statements: [
      "Tydligare roller och lättare vardag.",
      "Ledare som utvecklas och stannar.",
      "Tryggare matchmiljö där barn får spela på riktigt.",
      "Spelarutbildning som syns i träningen, inte bara i pärmen.",
    ],
  },
  {
    areaSlug: "skola-samverkan",
    headline: "Varför detta arbete finns",
    statements: [
      "Inkludering – fler barn får en väg in oavsett bakgrund.",
      "Tillgänglighet – fotbollen möter barnen där de redan är.",
      "Föreningar som blir starkare i områden där vardagen är tuff.",
      "Fler vägar in i organiserad idrott för de som idag står utanför.",
    ],
  },
];

export const impactForArea = (slug: AreaSlug): ImpactStatement | undefined =>
  IMPACTS.find((i) => i.areaSlug === slug);

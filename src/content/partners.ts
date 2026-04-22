import type { AreaSlug } from "./siteStructure";

export type PartnerRole = "ansvarig" | "strategisk" | "operativ" | "mottagare";

export interface Partner {
  id: string;
  name: string;
  role: PartnerRole;
  shortDescription: string;
  linkedAreas: AreaSlug[];
}

export const PARTNERS: Partner[] = [
  {
    id: "gff",
    name: "GFF",
    role: "ansvarig",
    shortDescription: "Göteborgs Fotbollförbund – huvudman för uppdraget lokalt.",
    linkedAreas: ["uppdrag", "foreningsutveckling", "skola-samverkan"],
  },
  {
    id: "svff",
    name: "SvFF",
    role: "strategisk",
    shortDescription: "Svenska Fotbollförbundet – äger riktning, utbildningsstruktur och En bättre väg.",
    linkedAreas: ["uppdrag", "foreningsutveckling", "skola-samverkan"],
  },
  {
    id: "rf-sisu",
    name: "RF-SISU Västra Götaland",
    role: "operativ",
    shortDescription: "Utbildnings- och utvecklingsstöd till föreningsliv och skolsamverkan.",
    linkedAreas: ["foreningsutveckling", "skola-samverkan"],
  },
  {
    id: "goteborgs-stad",
    name: "Göteborgs Stad",
    role: "strategisk",
    shortDescription: "Idrotts- och föreningsförvaltning samt skolförvaltning – avgörande för skola-, plats- och resursfrågor.",
    linkedAreas: ["skola-samverkan"],
  },
  {
    id: "foreningar",
    name: "Föreningar",
    role: "mottagare",
    shortDescription: "Klubbarna är de som genomför, utvecklas och bär arbetet i vardagen.",
    linkedAreas: ["uppdrag", "foreningsutveckling", "skola-samverkan"],
  },
  {
    id: "skolor",
    name: "Skolor",
    role: "mottagare",
    shortDescription: "Grundskolor i prioriterade områden – mötesplats för inkludering och aktivitet.",
    linkedAreas: ["skola-samverkan"],
  },
];

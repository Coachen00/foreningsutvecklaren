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
    shortDescription: "Svenska Fotbollförbundet – sätter riktning och ger utbildningsstöd.",
    linkedAreas: ["uppdrag", "foreningsutveckling", "skola-samverkan"],
  },
  {
    id: "rf-sisu",
    name: "RF-SISU Västra Götaland",
    role: "operativ",
    shortDescription: "Ger utbildning och stöd till föreningar och skolprojekt.",
    linkedAreas: ["foreningsutveckling", "skola-samverkan"],
  },
  {
    id: "goteborgs-stad",
    name: "Göteborgs Stad",
    role: "strategisk",
    shortDescription: "Viktig för skolor, planer, föreningsstöd och lokala beslut.",
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
    shortDescription: "Skolor där många barn kan möta fotbollen för första gången.",
    linkedAreas: ["skola-samverkan"],
  },
  {
    id: "gis",
    name: "GIS – Göteborgs institut för samhällsansvar",
    role: "strategisk",
    shortDescription: "Samarbetspartner kring socialt ansvar och fotbollens roll i området.",
    linkedAreas: ["skola-samverkan", "foreningsutveckling"],
  },
];

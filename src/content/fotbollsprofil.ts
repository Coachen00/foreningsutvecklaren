/**
 * FOTBOLLSPROFIL — definition, syfte och målbild.
 *
 * Fyller luckan "Vad betyder fotbollsprofil? Vad är målsättningen?".
 * Två-spårsblocket på FU Skola beskriver redan formen (Skolbollen vs
 * Fotbollsprofil åk 7–9); här definieras begreppet och den geografiska
 * målbilden för Göteborg.
 *
 * Källa: arbetsmaterial En bättre väg / Skolfotboll 2026.
 */

import type { Goal } from "./goals";

export const FOTBOLLSPROFIL_DEFINITION = {
  eyebrow: "Definition",
  title: "Vad en fotbollsprofil är — och målet i Göteborg",
  lead:
    "En fotbollsprofil är en skola som gör fotboll till en bärande del av sin verksamhet — inte en enstaka aktivitet, utan en stabil väg in i föreningslivet på en plats där barnen redan finns.",
  body:
    "Profilen kombinerar fotbollsundervisning enligt SvFF:s spelarutbildningsplan med ett fast samarbete mellan skola och närliggande förening. Den blir en tydlig plats där barn, föräldrar, lärare och ledare möts, och där steget till föreningsfotboll blir kort.",
  purposeLabel: "Målsättning",
  purpose:
    "Att fler barn får fotboll i sin vardag, att fler föreningar hittar nya spelare, och att skolan blir en trygg bro in i organiserad idrott.",
};

export const FOTBOLLSPROFIL_GOALS: Goal[] = [
  {
    id: "antal-profiler",
    value: "~10",
    unit: "i Göteborg",
    title: "Cirka en profil per stadsområde",
    description:
      "Riktmärket är ungefär tio fotbollsprofiler i Göteborg — ungefär en per kommun/stadsområde — så att täckningen blir geografiskt jämn. Talet är en arbetshypotes som ska valideras mot behov och förutsättningar.",
  },
  {
    id: "lokalt-nav",
    value: "Nav",
    unit: "per område",
    title: "Ett tydligt nav i varje område",
    description:
      "Varje profil ska fungera som ett lokalt nav som knyter ihop skola, förening och närområde.",
  },
  {
    id: "overgang",
    value: "Bro",
    unit: "skola → förening",
    title: "Kort väg till föreningen",
    description:
      "Fast samarbete med närliggande förening så att övergången från skolfotboll till föreningsfotboll blir enkel.",
  },
];

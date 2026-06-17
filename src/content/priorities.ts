/**
 * PRIORITIES — språkrörets prioriteringstrappa när allt känns viktigt.
 * Källa: PDF avsnitt 2.3.
 */

export interface PriorityLevel {
  number: string;
  title: string;
  description: string;
}

export const PRIORITY_LADDER: PriorityLevel[] = [
  {
    number: "01",
    title: "Föreningens organisation och förmåga över tid",
    description:
      "Det som gör att föreningen klarar sig själv över tid: ägarskap, arbetssätt och tydliga roller.",
  },
  {
    number: "02",
    title: "Kvalitetsklubb och kluster av verktyg",
    description:
      "Klubbkoll, handlingsplan och återrapportering. Det gemensamma arbetssättet.",
  },
  {
    number: "03",
    title: "Fler ledare, utbildade tränare, lokala förebilder och aktiva barn",
    description:
      "Människorna som faktiskt bär verksamheten. Rekrytering, utbildning och kontinuitet.",
  },
  {
    number: "04",
    title: "Fungerande samarbete mellan föreningar och lokala parter",
    description:
      "Skola, kommun, civilsamhälle och förbund som drar åt samma håll.",
  },
  {
    number: "05",
    title: "Kommunikation och administration",
    description:
      "Stödfunktionen som direkt möjliggör nivåerna ovanför. Inte ett självändamål.",
  },
];

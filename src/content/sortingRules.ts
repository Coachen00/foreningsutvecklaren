/**
 * SORTERINGSREGLER — så sorteras nytt innehåll in på sajten.
 *
 * Visas som "Hur allt sorteras"-blocket på startsidan.
 * Reglerna utgör också den interna check-listan när nytt material
 * ska placeras på rätt ställe.
 */

export type DestinationKey =
  | "en-battre-vag"
  | "fu-skola"
  | "foreningslyftet"
  | "jamstalldhet-trygghet"
  | "spelarutbildning"
  | "partners"
  | "uppdrag"
  | "exempel";

export interface Destination {
  key: DestinationKey;
  label: string;
  href?: string;
}

export interface SortingRule {
  number: "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08";
  question: string;
  destination: Destination;
  /** Sekundär placering eller korslänk */
  also?: Destination;
  note?: string;
}

export const SORTING_RULES: SortingRule[] = [
  {
    number: "01",
    question: "Är det riktat till ett område där behoven är stora?",
    destination: { key: "en-battre-vag", label: "En bättre väg", href: "/en-battre-vag" },
  },
  {
    number: "02",
    question: "Handlar det om skolan som väg in i fotbollen?",
    destination: { key: "fu-skola", label: "FU Skola", href: "/fu-skola" },
  },
  {
    number: "03",
    question: "Handlar det om föreningens arbetssätt, ledning eller kvalitet?",
    destination: {
      key: "foreningslyftet",
      label: "Föreningslyftet",
      href: "/foreningsutveckling",
    },
  },
  {
    number: "04",
    question:
      "Handlar det om trygghet, jämställdhet, flickfotboll, matchklimat eller barnperspektiv?",
    destination: {
      key: "jamstalldhet-trygghet",
      label: "Jämställdhet & trygghet",
      href: "/foreningsutveckling/jamstalldhet-och-trygghet",
    },
    also: { key: "en-battre-vag", label: "Länka även till En bättre väg om stödet hör dit" },
  },
  {
    number: "05",
    question: "Handlar det om spelarens utveckling, SUP, träningsinnehåll eller Fotbollslyftet?",
    destination: {
      key: "spelarutbildning",
      label: "Spelarutbildning",
      href: "/uppdrag/spelarutbildning",
    },
  },
  {
    number: "06",
    question: "Handlar det om pengar, stöd, stiftelser, bostadsbolag eller CSR?",
    destination: {
      key: "partners",
      label: "Partners / finansiering",
      href: "/uppdrag/partners",
    },
    also: {
      key: "en-battre-vag",
      label: "Placeras under En bättre väg när stödet hör dit",
    },
  },
  {
    number: "07",
    question: "Handlar det om mitt faktiska sätt att arbeta?",
    destination: { key: "uppdrag", label: "Uppdrag / arbetsuppgifter", href: "/uppdrag" },
  },
  {
    number: "08",
    question: "Är det bara ett enskilt klubbexempel?",
    destination: {
      key: "exempel",
      label: "Använd som kort exempel",
    },
    note: "Inte som egen sida — bara om det förstärker en generell poäng.",
  },
];

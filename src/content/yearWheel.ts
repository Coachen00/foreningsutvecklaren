/**
 * YEAR WHEEL — månadscykel för En bättre väg.
 *
 * Datat används av YearWheel-komponenten i båda visningslägena
 * (horisontell tidslinje + roterande cirkel). Källa: Strategiskt
 * sammanfattningsdokument för GFF 2026 (PDF), avsnitt 1.6.
 */

export type Intensity = "hög" | "medel" | "låg";

export interface YearWheelMonth {
  /** 01–12 */
  number: string;
  /** "Januari" */
  name: string;
  short: string;
  focus: string;
  description: string;
  intensity: Intensity;
}

export const YEAR_WHEEL_EN_BATTRE_VAG: YearWheelMonth[] = [
  {
    number: "01",
    name: "Januari",
    short: "Jan",
    focus: "Nuläge & urval",
    description:
      "Bekräfta vilka föreningar och områden som omfattas. Uppdatera förstudier, förankra avtal och tidigare handlingsplaner.",
    intensity: "medel",
  },
  {
    number: "02",
    name: "Februari",
    short: "Feb",
    focus: "Förankring",
    description:
      "Startmöten med styrelser i prioriterade föreningar och partners (kommun, skola, RF-SISU). Klargör uppdraget för alla.",
    intensity: "hög",
  },
  {
    number: "03",
    name: "Mars",
    short: "Mar",
    focus: "Nulägesanalys",
    description:
      "Klubbkollen genomförs i varje deltagande förening. Styrkor och utvecklingsområden kartläggs.",
    intensity: "hög",
  },
  {
    number: "04",
    name: "April",
    short: "Apr",
    focus: "Handlingsplan",
    description:
      "Handlingsplaner formas eller revideras. Ansvar, tidsplan och mål för föreningsutveckling sätts på pränt.",
    intensity: "hög",
  },
  {
    number: "05",
    name: "Maj",
    short: "Maj",
    focus: "Ledar- & resursfokus",
    description:
      "Inventering av utbildningsbehov, föreningsstöd och samverkansaktiviteter. Resurser justeras inför hösten.",
    intensity: "medel",
  },
  {
    number: "06",
    name: "Juni",
    short: "Jun",
    focus: "Halvårsuppföljning",
    description:
      "Uppföljning av aktiviteter. Hinder identifieras och tidiga resultat synliggörs.",
    intensity: "medel",
  },
  {
    number: "07",
    name: "Juli",
    short: "Jul",
    focus: "Lågintensiv uppföljning",
    description:
      "Endast kritiska avstämningar. Lärdomar från vårens insatser dokumenteras.",
    intensity: "låg",
  },
  {
    number: "08",
    name: "Augusti",
    short: "Aug",
    focus: "Planering nästa cykel",
    description:
      "Föreningarnas behov kopplas till GFF:s planering av kommande utbildningar och insatser.",
    intensity: "medel",
  },
  {
    number: "09",
    name: "September",
    short: "Sep",
    focus: "Strategisk fastställan",
    description:
      "Avstämning med GFF, föreningar och partners. Prioriteringar för 2027 förankras i data.",
    intensity: "hög",
  },
  {
    number: "10",
    name: "Oktober",
    short: "Okt",
    focus: "Kvalitetssäkring",
    description:
      "Dokumentation i Klubbverktyget, budgetlogik och återrapporteringsprocesser säkerställs.",
    intensity: "medel",
  },
  {
    number: "11",
    name: "November",
    short: "Nov",
    focus: "Återrapportering",
    description:
      "Resultat samlas in. Utvärderingar genomförs. Återrapportering till SvFF, GIS och andra finansiärer.",
    intensity: "hög",
  },
  {
    number: "12",
    name: "December",
    short: "Dec",
    focus: "Slutrapport",
    description:
      "Effekter, risker och prioriteringar sammanfattas. Förbättringar inför nästa år föreslås.",
    intensity: "medel",
  },
];

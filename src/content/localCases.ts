/**
 * LOKALA CASE — konkreta föreningsexempel under En bättre väg.
 *
 * Källa: projektsammanfattningen (2026-05-25), avsnitt 6 "Lokala case och
 * konkreta arbetslinjer". Visar samma mönster: behovet är inte bara
 * aktivitetstid, utan ledare, struktur, skolrelationer, flickfotboll och
 * vägar vidare in i föreningen.
 *
 * Lägg till nya case genom att utöka arrayen. `points` är konkreta fakta
 * eller arbetsspår; `significance` är den strategiska betydelsen.
 */

export interface LocalCase {
  id: string;
  /** Kort etikett ovanför namnet, t.ex. "Föreningscase" */
  kicker: string;
  name: string;
  /** 1–2 meningar som ramar in caset */
  summary: string;
  /** Konkreta fakta eller arbetsspår */
  points: string[];
  /** Varför caset spelar roll strategiskt */
  significance: string;
}

export const LOCAL_CASES: LocalCase[] = [
  {
    id: "girls-fc",
    kicker: "Flickfotbollscase",
    name: "Girls FC — flickfotboll i prioriterade områden",
    summary:
      "Girls FC skapar flickverksamhet över föreningsgränser och visar hur riktad resursförstärkning öppnar fotbollen för flickor som tidigare stått utanför föreningsidrotten.",
    points: [
      "Snart 80 flickor som aldrig spelat fotboll tidigare deltar i verksamheten",
      "Kärnan är att nå flickor som inte redan är inne i idrotten och bygga en trygg lågtröskelmiljö",
      "Broar byggs vidare till kontinuerlig föreningsverksamhet — aktiviteten blir inte en återvändsgränd",
      "Mäts på deltagare, återkommande närvaro, övergång till lag, antal kvinnliga och unga ledare samt antal stadsdelar med flickverksamhet",
    ],
    significance:
      "Flickfotboll är en indikator på faktisk jämlik tillgång — inte bara en aktivitetspunkt. Små resurser kan skapa stor förändring när rätt målgrupp nås i rätt miljö.",
  },
  {
    id: "proletaren-pff",
    kicker: "Föreningscase",
    name: "Proletären / PFF — föreningscase med tydliga systemfrågor",
    summary:
      "En förening med stark pojkverksamhet, bollskola, unga ledare och lokal skolkoppling — men med tydliga utvecklingsbehov kring jämställd tillväxt, övergångar och samverkan mellan föreningar.",
    points: [
      "10–12 ledare inklusive unga ledare och cirka 115 pojkar — men inga flicklag",
      "Skolkoppling till Frejaskolan, Vättnedalsskolan och Ängåsskolan",
      "Övergångsfrågor och bristande kommunikation mellan närliggande föreningar tar mycket energi",
      "Behov av erfarenhetsutbyte mellan föreningar inom En bättre väg",
      "Behov av gemensamma normer för barn som missköter sig",
    ],
    significance:
      "Basen finns, men jämställd tillväxt och flickfotboll är ett tydligt utvecklingsområde. Skolkopplingen visar potentialen i FU Skola, och övergångspolicy plus lokal samverkanskultur behöver bli ett prioriterat systemspår.",
  },
  {
    id: "tynnered-pff",
    kicker: "Handlingsplan",
    name: "Tynnered / PFF — från idé till konkret aktivitet",
    summary:
      "Handlingsplanen för samarbete visar hur ett lokalt område går från idé till genomförande. Den vilar på sex spår som tillsammans bygger lokal kapacitet och vägar vidare in i föreningen.",
    points: [
      "Lokala föreningar — regelbundna kontakter, gemensam strategi, cuper och spontanfotboll",
      "Fritidsledare — fritidsassistenter och fritidsledare inkluderas i planeringen",
      "Fotbollscup — årlig cup under sportlovet med skola, fritid och förening",
      "Spontanfotboll — veckovis aktivitet för åk 4–6 och 7–9 med ungdomsledare",
      "Slussning — ungdomar matchas till föreningar eller egna lag",
      "Unga ledare — identifiera, utbilda och ge ansvar",
    ],
    significance:
      "Varje spår har en effektlogik: minskad isolering mellan aktörer, fler vuxna i barnens vardag, områdessammanhållning och att deltagare blir bärare av verksamheten. Aktiviteten leder vidare — den blir inte en återvändsgränd.",
  },
];

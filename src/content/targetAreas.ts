/**
 * SEX MÅLOMRÅDEN — "Hela stan på samma plan".
 *
 * Källa: projektsammanfattningen (2026-05-25), avsnitt 5. Formulerades vid
 * mötet 2025-11-17: Göteborg har stora skillnader i barns och ungas
 * livsvillkor, och fotbollen kan vara en folkrörelse som minskar avståndet
 * mellan stadsdelar. För att göra det mätbart samlades arbetet i sex
 * målområden — strategisk ram för En bättre väg.
 */

export interface TargetArea {
  number: string;
  title: string;
  /** Kärnan i målområdet */
  core: string;
  /** Exempel på indikatorer som följs */
  indicators: string;
}

export const TARGET_AREAS: TargetArea[] = [
  {
    number: "1",
    title: "Deltagande och tillgänglighet",
    core: "Alla stadsdelar ska ha föreningar med kapacitet att erbjuda barn och unga fotbollsaktiviteter.",
    indicators:
      "Antal deltagare per stadsdel, antal nya spelare, andel flickor och pojkar, kostnadsfria aktiviteter, upplevda hinder.",
  },
  {
    number: "2",
    title: "Tillgång till anläggningar",
    core: "Trygga, tillgängliga och rättvist fördelade planer och miljöer.",
    indicators:
      "Antal planer, beläggning, belysning, konstgräs, omklädningsrum, upplevd trygghet.",
  },
  {
    number: "3",
    title: "Trygghet och inkludering",
    core: "Barn och unga ska känna sig välkomna, respekterade och trygga.",
    indicators:
      "Upplevt bemötande, incidenter, intervjuer, föreningarnas självskattning.",
  },
  {
    number: "4",
    title: "Sociala effekter",
    core: "Fotbollen ska stärka gemenskap, hälsa och socialt kapital.",
    indicators:
      "Samarbeten, blandade aktiviteter, föräldraengagemang, skolor, fritidsgårdar och föreningar i aktivitet.",
  },
  {
    number: "5",
    title: "Ledarskap och kompetens",
    core: "Föreningar ska ha hållbara ledare som kan möta en mångfald av barn och unga.",
    indicators:
      "Antal utbildade ledare, ledaromsättning, självskattning, deltagarupplevelse.",
  },
  {
    number: "6",
    title: "Systemnivå",
    core: "Strukturer, resurser och beslut ska bidra till långsiktig jämlikhet.",
    indicators:
      "Skillnader mellan flick- och pojklag, föreningsekonomi i prioriterade områden, investeringar, policybeslut.",
  },
];

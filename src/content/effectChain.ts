/**
 * EFFECT CHAIN — fyra stegs effektlogik.
 *
 * Resurser → Aktiviteter → Output → Effekt
 *
 * SvFF:s och GFF:s grundlogik för att bevisa att arbetet fungerar:
 * inte bara att resurser används, utan att effekt syns och stannar.
 *
 * Källa: Strategiskt sammanfattningsdokument för GFF 2026, avsnitt 12.
 */

import type { LucideIcon } from "lucide-react";
import { Boxes, Hammer, ListChecks, Sparkles } from "lucide-react";

export interface EffectStage {
  number: string;
  /** Kort etikett som ska kunna stå i en pil-kedja */
  label: string;
  /** Komplett rubrik */
  title: string;
  description: string;
  /** Konkreta exempel — visas som en kort lista under */
  examples: string[];
  icon: LucideIcon;
}

export const FORENINGSLYFTET_EFFECT_CHAIN: EffectStage[] = [
  {
    number: "01",
    label: "Resurser",
    title: "Resurser — det som behövs",
    description:
      "Människor, pengar, platser och verktyg som gör arbetet möjligt.",
    examples: [
      "Föreningsutvecklare och fotbollsutvecklare",
      "Zonutvecklare och RF-SISU-stöd",
      "Projektstöd och annat ekonomiskt stöd",
      "Klubbkollen och Klubbverktyget",
      "Föreningarnas ideella ledare",
      "Skolor, fritid, lokaler, anläggningar",
      "Partners som bidrar med pengar eller kunskap",
    ],
    icon: Boxes,
  },
  {
    number: "02",
    label: "Aktiviteter",
    title: "Aktiviteter — det vi gör",
    description:
      "Det praktiska arbetet: möten, planer, utbildning och stöd i föreningen.",
    examples: [
      "Fråga medlemmar hur föreningen fungerar",
      "Göra en plan för vad som ska bli bättre",
      "Prata om föreningens idé, värderingar och mål",
      "Ta fram plan för spelare och ledare",
      "Införa trygghetsansvarig",
      "Utbilda tränare och unga ledare",
      "Fotboll i skolan och öppna aktiviteter",
      "Visa för partners vad stödet leder till",
    ],
    icon: Hammer,
  },
  {
    number: "03",
    label: "Resultat",
    title: "Resultat — det som syns direkt",
    description:
      "Det första man kan se efter arbetet. Det visar att något faktiskt har hänt.",
    examples: [
      "Fler föreningar i Kvalitetsklubb och Föreningslyftet",
      "Fler föreningar med plan för verksamhet och spelare",
      "Fler föreningar med plan för ledare",
      "Fler FU IF och utbildade tränare",
      "Fler unga ledare och flicklag",
      "Fler aktiviteter mellan skola, förening och andra parter",
      "Fler öppna fotbollsaktiviteter",
      "Fler exempel på nytta i området",
    ],
    icon: ListChecks,
  },
  {
    number: "04",
    label: "Effekt",
    title: "Effekt — det som stannar kvar",
    description:
      "Det som finns kvar när insatsen är klar. Det är det långsiktiga värdet.",
    examples: [
      "Föreningar blir mindre beroende av enskilda personer",
      "Barn får tryggare fotbollsmiljöer",
      "Fler spelare börjar och stannar längre",
      "Fler flickor får tillgång till fotboll",
      "Ledare håller längre i sina roller",
      "Föreningar i utsatta lägen står stadigare",
      "Områden får fler trygga mötesplatser",
      "GFF ser bättre vad som fungerar",
    ],
    icon: Sparkles,
  },
];

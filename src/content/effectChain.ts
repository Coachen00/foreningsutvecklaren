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
    title: "Resurser — det som stoppas in",
    description:
      "Människor, verktyg och kapital som möjliggör arbetet. Utan resurser blir handlingsplaner pappersprodukter.",
    examples: [
      "Föreningsutvecklare och fotbollsutvecklare",
      "Zonutvecklare och RF-SISU-stöd",
      "Projektstöd IF, verksamhetsstöd",
      "Klubbkollen och Klubbverktyget",
      "Föreningarnas ideella ledare",
      "Skolor, fritid, lokaler, anläggningar",
      "Partners — Folksam, Svenska Spel, Riksidrottsförbundet",
    ],
    icon: Boxes,
  },
  {
    number: "02",
    label: "Aktiviteter",
    title: "Aktiviteter — det som görs",
    description:
      "Det praktiska arbetet med resurserna. Här blir Kvalitetsklubb metod, inte dokument.",
    examples: [
      "Genomföra Klubbkollen och analysera nuläge",
      "Skapa handlingsplan inom fokusområdena",
      "Utveckla verksamhetsidé, värdegrund och vision",
      "Ta fram spelarutbildningsplan och ledarförsörjningsplan",
      "Införa trygghetsansvarig",
      "Utbilda tränare och unga ledare",
      "Skolsamverkan, spontanfotboll, integrationssammandrag",
      "Paketera Fotbollsnyttan med indikatorer och partnerskap",
    ],
    icon: Hammer,
  },
  {
    number: "03",
    label: "Output",
    title: "Output — det som syns direkt",
    description:
      "Mätbara resultat av aktiviteterna. Output är inte effekt — det är beviset på att aktiviteterna har skett.",
    examples: [
      "Fler föreningar i Kvalitetsklubb och Föreningslyftet",
      "Fler föreningar med levande verksamhets- och spelarutbildningsplan",
      "Fler föreningar med ledarförsörjningsplan",
      "Fler FU IF och utbildade tränare",
      "Fler unga ledare och flicklag",
      "Fler samverkansaktiviteter",
      "Fler öppna fotbollsaktiviteter",
      "Fler indikatorer i Fotbollsnyttan",
    ],
    icon: ListChecks,
  },
  {
    number: "04",
    label: "Effekt",
    title: "Effekt — det som stannar kvar",
    description:
      "Den verkliga förändringen — det som finns kvar när insatsen är genomförd. Här är det enda som räknas på lång sikt.",
    examples: [
      "Föreningar går från personberoende till system",
      "Barn får tryggare fotbollsmiljöer",
      "Fler spelare börjar och stannar längre",
      "Fler flickor får tillgång till fotboll",
      "Ledare håller längre i sina roller",
      "Föreningar i prioriterade områden kollapsar inte under belastning",
      "Stadsdelar får starkare social infrastruktur",
      "GFF får bättre uppföljning, prioritering och partnerskapslogik",
    ],
    icon: Sparkles,
  },
];

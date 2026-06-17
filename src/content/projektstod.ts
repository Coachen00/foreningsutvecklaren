/**
 * PROJEKTSTÖD — stödformer som kan kopplas till En bättre väg.
 *
 * Svarar på "Vilka pengar kan kopplas till En Bättre Väg?".
 * Återanvänder MetricList-formen så att det renderas med MetricListBlock.
 * Logiken följer partnerlogiken: finansiering är kapacitetsbyggande,
 * inte bidragssökande (se partnerFunding.ts).
 *
 * Källa: arbetsmaterial En bättre väg / partners 2026.
 */

import type { MetricList } from "./metrics";

export const EN_BATTRE_VAG_PROJEKTSTOD: MetricList = {
  id: "en-battre-vag-projektstod",
  title: "Stödformer som kan kopplas",
  description:
    "Olika stöd kan bära olika delar av satsningen. Poängen är att koppla rätt stöd till rätt insats — så att pengar blir ledare, aktiviteter och struktur.",
  groups: [
    {
      label: "Idrottens stöd",
      items: [
        "Projektstöd IF (barn- och ungdomsidrott) via RF-SISU",
        "Verksamhetsstöd och utvecklingsstöd från RF-SISU Västra Götaland",
        "SvFF:s riktade medel för En bättre väg i prioriterade områden",
      ],
    },
    {
      label: "Offentligt stöd",
      items: [
        "Föreningsbidrag och aktivitetsstöd via Göteborgs Stad",
        "Idéburet offentligt partnerskap (IOP) med kommun eller förvaltning",
        "Riktade kommunala satsningar i prioriterade områden",
      ],
    },
    {
      label: "Externt och civilsamhälle",
      items: [
        "Stiftelser och fonder med social inriktning",
        "Bostadsbolag med lokalt samhällsuppdrag",
        "Företag och CSR-aktörer (t.ex. Folksam, ICA, Svenska Spel)",
      ],
    },
  ],
};

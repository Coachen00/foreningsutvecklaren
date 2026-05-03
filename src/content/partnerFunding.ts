/**
 * PARTNERS, FINANSIERING OCH SAMHÄLLSNYTTA — startsidans förklaring.
 *
 * Fyra roller som strukturerar partnerlogiken:
 *   1. Strategiska partners
 *   2. Operativa partners
 *   3. Finansierande partners
 *   4. Mottagare / genomförandeaktörer
 *
 * Finansiering beskrivs som kapacitetsbyggande, inte bidragssökande.
 */

export type PartnerFundingRole =
  | "strategisk"
  | "operativ"
  | "finansierande"
  | "mottagare";

export interface PartnerFundingGroup {
  id: PartnerFundingRole;
  number: "01" | "02" | "03" | "04";
  label: string;
  shortDescription: string;
  examples: string[];
}

export const PARTNER_FUNDING_GROUPS: PartnerFundingGroup[] = [
  {
    id: "strategisk",
    number: "01",
    label: "Strategiska partners",
    shortDescription: "Sätter riktning, ramverk och förutsättningar.",
    examples: ["SvFF", "GFF", "RF-SISU Västra Götaland", "Göteborgs Stad"],
  },
  {
    id: "operativ",
    number: "02",
    label: "Operativa partners",
    shortDescription: "Genomför och stödjer i vardagen.",
    examples: ["Skolor", "Föreningar", "GIS", "Lokala aktörer"],
  },
  {
    id: "finansierande",
    number: "03",
    label: "Finansierande partners",
    shortDescription: "Möjliggör kapacitet — inte bidrag.",
    examples: ["Stiftelser", "Bostadsbolag", "Företag", "CSR-aktörer"],
  },
  {
    id: "mottagare",
    number: "04",
    label: "Mottagare och genomförandeaktörer",
    shortDescription: "Tar emot och omsätter stödet i verksamhet.",
    examples: ["Föreningar", "Barn och ungdomar", "Ledare", "Skolor"],
  },
];

export const PARTNER_FUNDING_NARRATIVE = {
  eyebrow: "Partners, finansiering och samhällsnytta",
  title: "Så fungerar partnerskap och finansiering",
  lead: "Partnerskap är en arbetsdel — inte ett sidospår. Finansiering är kapacitetsbyggande, inte bidragssökande.",
  positioning:
    "Jag arbetar med att koppla rätt resurser till rätt förening och rätt insats, så att ekonomiskt stöd blir verksamhet, ledare, aktiviteter och hållbar struktur.",
  guardrails: [
    "Medel kan gå till GFF och till lokala föreningar.",
    "Syftet är faktisk kapacitet: ledare, aktiviteter, struktur, utrustning och genomförande.",
    "Detaljerade summor per förening hanteras försiktigt — det blir inte huvudberättelsen.",
  ],
};

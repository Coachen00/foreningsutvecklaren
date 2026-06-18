/**
 * PARTNERS, FINANSIERING OCH SAMHÄLLSNYTTA — startsidans förklaring.
 *
 * Fyra roller som strukturerar partnerlogiken:
 *   1. Strategiska partners
 *   2. Operativa partners
 *   3. Finansierande partners
 *   4. Mottagare / genomförandeaktörer
 *
 * Finansiering beskrivs som stöd som blir verklig hjälp, inte bidragssökande.
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
    label: "Partners som sätter riktning",
    shortDescription: "Sätter riktning och gör stöd möjligt.",
    examples: ["SvFF", "GFF", "RF-SISU Västra Götaland", "Göteborgs Stad"],
  },
  {
    id: "operativ",
    number: "02",
    label: "Partners som gör arbetet",
    shortDescription: "Gör arbetet tillsammans med föreningarna.",
    examples: ["Skolor", "Föreningar", "GIS", "Lokala parter"],
  },
  {
    id: "finansierande",
    number: "03",
    label: "Finansierande partners",
    shortDescription: "Bidrar med pengar som blir ledare, aktiviteter och stöd.",
    examples: ["Stiftelser", "Bostadsbolag", "Företag", "CSR-parter"],
  },
  {
    id: "mottagare",
    number: "04",
    label: "De som tar emot stödet",
    shortDescription: "Tar emot stödet och gör det till verklig verksamhet.",
    examples: ["Föreningar", "Barn och ungdomar", "Ledare", "Skolor"],
  },
];

export const PARTNER_FUNDING_NARRATIVE = {
  eyebrow: "Partners, finansiering och samhällsnytta",
  title: "Så fungerar partnerskap och finansiering",
  lead: "Partnerskap handlar om att göra mer nytta i föreningen, inte bara hitta pengar.",
  positioning:
    "Målet är att rätt stöd hamnar hos rätt förening och blir ledare, aktiviteter, utrustning och tryggare vardag.",
  guardrails: [
    "Medel kan gå till GFF och till lokala föreningar.",
    "Syftet är konkret hjälp: ledare, aktiviteter, utrustning och genomförande.",
    "Detaljerade summor per förening hanteras försiktigt — det blir inte huvudberättelsen.",
  ],
};

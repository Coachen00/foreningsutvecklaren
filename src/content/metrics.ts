/**
 * METRICS — mätpunkter och KPI:er.
 * Källa: PDF avsnitt 1.5, 2.6, 3.4.
 */

export interface MetricList {
  id: string;
  title: string;
  description: string;
  groups: { label: string; items: string[] }[];
}

export const EN_BATTRE_VAG_METRICS: MetricList = {
  id: "en-battre-vag-matpunkter",
  title: "Mätpunkter och uppföljning",
  description:
    "Vi följer både siffror och berättelser. Då syns både vad som hänt och hur det känns i föreningen.",
  groups: [
    {
      label: "Siffror",
      items: [
        "Antal föreningar som gjort Klubbkollen",
        "Antal föreningar med aktiv handlingsplan",
        "Antal dokumenterade uppföljningsmöten",
        "Antal nya ideella ledare, kvinnliga ledare och ledare med introduktionsstöd",
        "Antal utbildade tränare och ledare, antal flickor och pojkar i verksamhet",
        "Antal föreningar med dokumenterad rollfördelning och årshjul",
        "Antal fungerande forum med skola, kommun och föreningar",
      ],
    },
    {
      label: "Lärdomar",
      items: [
        "Hur arbetet har blivit mindre personberoende",
        "Hur arbetet har blivit mer hållbart över tid",
        "Vilka samarbeten som fungerar — och vilka som inte gör det",
      ],
    },
  ],
};

export const FU_SKOLA_METRICS: MetricList = {
  id: "fu-skola-matpunkter",
  title: "Det här följs upp",
  description:
    "Här följer vi om fotboll i skolan faktiskt leder vidare till mer fotboll.",
  groups: [
    {
      label: "Verksamhet",
      items: [
        "Antal skolor med fotbollsprofil (mål: ca 10 i Göteborg, ungefär en per stadsområde)",
        "Antal skolor som genomför Skolbollen",
        "Antal flickor och pojkar i skolverksamheten",
      ],
    },
    {
      label: "Kompetens",
      items: [
        "Antal utbildade FU IF (fotbollsutvecklare i förening)",
        "Antal föreningar som använder spelarutbildningsplan i skolan",
      ],
    },
    {
      label: "Det Skolbollen ska leda till",
      items: [
        "Antal skolor som erbjuder fotboll i sin verksamhet",
        "Antal föreningar som aktivt jobbar med skolfrågan",
        "Antal nya kontaktytor skola–förening som lever vidare över läsår",
        "Antal barn som tar steget från skolfotboll till förening",
      ],
    },
  ],
};

export const FORENINGSLYFTET_METRICS: MetricList = {
  id: "foreningslyftet-matpunkter",
  title: "Det här följer vi över tid",
  description:
    "Här följer vi om föreningar blir tydligare, tryggare och mer hållbara.",
  groups: [
    {
      label: "Organisation",
      items: [
        "Nationellt läge 2026: 49 certifierade Kvalitetsklubbar i Sverige",
        "Antal föreningar per kommun och antal föreningsutvecklare",
        "Genomsnittlig anställningstid för zonutvecklare och antal nyanställda",
        "Antal föreningar som aktivt arbetar i Kvalitetsklubb",
        "Antal föreningar i Föreningslyftet",
      ],
    },
    {
      label: "Kultur och representation",
      items: [
        "Andel kvinnor i ledande roller, antal kvinnliga domare, antal flicklag",
        "Nyckeltal för Fair Play-ligan och Disciplinnämndens ärenden",
        "Antal utbildade tränare och domare",
        "Antal föreningar som använder SUP och antal lag i seriespel",
      ],
    },
  ],
};

export interface UppdragHubItem {
  id: string;
  label: string;
  eyebrow: string;
  description: string;
  href: string;
}

export const UPPDRAG_HUB_ITEMS: UppdragHubItem[] = [
  {
    id: "arbetsuppgifter",
    label: "Arbetsuppgifter i detalj",
    eyebrow: "Arbetsformer",
    description:
      "Samtal, föreningsbesök och längre insatser. Vad som görs, när och varför.",
    href: "/uppdrag/arbetsuppgifter",
  },
  {
    id: "planeringskedja",
    label: "Från idé till årshjul",
    eyebrow: "Föreningsutveckling",
    description:
      "Hur idé, mål, plan och årshjul hänger ihop i föreningens vardag.",
    href: "#planeringskedja",
  },
  {
    id: "kommitteer",
    label: "Kommittéer och forum",
    eyebrow: "Arbetsgrupper",
    description:
      "Forum där viktiga frågor samlas, diskuteras och förs vidare.",
    href: "#kommitteer",
  },
  {
    id: "partners",
    label: "Partners och ansvarskedja",
    eyebrow: "Tillsammans",
    description:
      "Vem som bidrar med pengar, kunskap, beslut och praktisk hjälp.",
    href: "/uppdrag/partners",
  },
  {
    id: "kvalitetsklubb",
    label: "Kvalitetsklubb",
    eyebrow: "Ramverk",
    description:
      "Hur föreningen kan få bättre ordning på roller, ledare, spelare och stöd.",
    href: "/foreningsutveckling/kvalitetsklubb",
  },
  {
    id: "spelarutbildning",
    label: "Spelarutbildning",
    eyebrow: "Fördjupning",
    description:
      "Träning, spelarutveckling och stöd till tränare.",
    href: "/uppdrag/spelarutbildning",
  },
];

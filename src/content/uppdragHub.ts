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
      "Utvecklingsdialoger, styrelseförankring, riktade observationer och längre insatser. Vad som görs, när och varför.",
    href: "/uppdrag/arbetsuppgifter",
  },
  {
    id: "planeringskedja",
    label: "Från idé till årshjul",
    eyebrow: "Föreningsutveckling",
    description:
      "Kopplingen mellan verksamhetsidé, verksamhetsmål, verksamhetsplan och årshjul som praktisk styrkedja.",
    href: "#planeringskedja",
  },
  {
    id: "kommitteer",
    label: "Kommittéer och forum",
    eyebrow: "Arbetsgrupper",
    description:
      "Samhällsforumet och Föreningskommittén som forum för samhällsnytta, struktur och gemensamma utvecklingsfrågor.",
    href: "#kommitteer",
  },
  {
    id: "partners",
    label: "Partners och ansvarskedja",
    eyebrow: "Samverkan",
    description:
      "Strategiska, operativa och finansierande partners samt de aktörer som omsätter stödet i verksamhet.",
    href: "/uppdrag/partners",
  },
  {
    id: "kvalitetsklubb",
    label: "Kvalitetsklubb",
    eyebrow: "Ramverk",
    description:
      "Fördjupning i kvalitetsarbetet som hjälper föreningen att utveckla struktur, spelare, ledare och resurser.",
    href: "/foreningsutveckling/kvalitetsklubb",
  },
  {
    id: "spelarutbildning",
    label: "Spelarutbildning",
    eyebrow: "Fördjupning",
    description:
      "SUP, Fotbollslyftet och träningsinnehåll. Här ligger spelarens utveckling, separerad från FU Skola.",
    href: "/uppdrag/spelarutbildning",
  },
];

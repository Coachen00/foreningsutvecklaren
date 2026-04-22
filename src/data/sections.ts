import {
  Compass,
  Target,
  Sparkles,
  Layers,
  GitCompare,
  Users2,
  CalendarClock,
  Route,
  Mail,
  type LucideIcon,
} from "lucide-react";

export type SectionSlug =
  | "varfor"
  | "fokus-2026"
  | "gemensamma-mal"
  | "vad-och-hur"
  | "satsningarna"
  | "arbetsgrupper"
  | "motesrytm"
  | "en-battre-vag"
  | "kontakt";

export interface SectionMeta {
  number: string;        // "01" .. "09"
  slug: SectionSlug;
  path: string;          // /sektion/<slug>
  title: string;         // Kort titel (nav + kort)
  longTitle: string;     // H1 på sidan
  eyebrow: string;       // "Sektion 03 · Riktning"
  kicker: string;        // Kategori
  lead: string;          // Mikrokopia på hub-kortet (1 mening)
  intro: string;         // Lead-paragraf på undersidan
  icon: LucideIcon;
  size: "lg" | "md" | "sm"; // bento-storlek
}

export const sections: SectionMeta[] = [
  {
    number: "01",
    slug: "varfor",
    path: "/sektion/varfor",
    title: "Varför",
    longTitle: "Varför finns vi?",
    eyebrow: "Sektion 01 · Utgångspunkt",
    kicker: "Utgångspunkt",
    lead: "Bakgrunden, behovet och vad som driver arbetet framåt.",
    intro:
      "Fotbollsnyttan finns för att jämna ut förutsättningar, stärka föreningarna över tid och göra samhällsnyttan synlig.",
    icon: Compass,
    size: "lg",
  },
  {
    number: "02",
    slug: "fokus-2026",
    path: "/sektion/fokus-2026",
    title: "Fokus 2026",
    longTitle: "Kommitté 2026 – fokus & avgränsning",
    eyebrow: "Sektion 02 · Avgränsning",
    kicker: "Avgränsning",
    lead: "Från referensgrupp till kommitté – och vad vi väljer att prioritera.",
    intro:
      "Styrelsen har beslutat att vi går från referensgrupp till kommitté. Under 2026 fokuserar vi enbart på polisens utsatta områden.",
    icon: Target,
    size: "md",
  },
  {
    number: "03",
    slug: "gemensamma-mal",
    path: "/sektion/gemensamma-mal",
    title: "Gemensamma mål",
    longTitle: "Gemensamma mål (En bättre väg + VP)",
    eyebrow: "Sektion 03 · Riktning",
    kicker: "Riktning",
    lead: "Den gemensamma riktningen och de nyckeltal vi vill flytta.",
    intro:
      "Vi delar riktning med En bättre väg och verksamhetsplanen. Här är de fem ledstjärnorna och de tal vi vill öka.",
    icon: Sparkles,
    size: "md",
  },
  {
    number: "04",
    slug: "vad-och-hur",
    path: "/sektion/vad-och-hur",
    title: "Vad & Hur",
    longTitle: "Vad vi gör – och hur vi jobbar",
    eyebrow: "Sektion 04 · Metod",
    kicker: "Metod",
    lead: "Ramverket med sex mål, typinsatser och vårt arbetssätt.",
    intro:
      "Fotbollsnyttan är vårt ramverk: sex mål, paketerade insatser och en arbetsmetod som itererar – inte gissar.",
    icon: Layers,
    size: "lg",
  },
  {
    number: "05",
    slug: "satsningarna",
    path: "/sektion/satsningarna",
    title: "Satsningarna",
    longTitle: "Så hänger satsningarna ihop",
    eyebrow: "Sektion 05 · Landskap",
    kicker: "Landskap",
    lead: "Fotbollsnyttan, En bättre väg och Idrottsklivet sida vid sida – plus andra pågående insatser.",
    intro:
      "Tre satsningar som kompletterar varandra, och en överblick över andra pågående fotbollsbaserade samhällsinsatser i Göteborg 2026.",
    icon: GitCompare,
    size: "lg",
  },
  {
    number: "06",
    slug: "arbetsgrupper",
    path: "/sektion/arbetsgrupper",
    title: "Arbetsgrupper",
    longTitle: "Tre arbetsgrupper bär arbetet",
    eyebrow: "Sektion 06 · Organisation",
    kicker: "Organisation",
    lead: "Partners & ansökningar · Koordination · Idrottspolitik.",
    intro:
      "Arbetet drivs i tre arbetsgrupper med tydliga ägare, effektmål och ansvar. Varje grupp tar fram en målbild.",
    icon: Users2,
    size: "md",
  },
  {
    number: "07",
    slug: "motesrytm",
    path: "/sektion/motesrytm",
    title: "Mötesrytm",
    longTitle: "Styrning & mötesrytm",
    eyebrow: "Sektion 07 · Tempo",
    kicker: "Tempo",
    lead: "Hur ofta vi möts, hur besluten flyter och kommittédatumen för 2026.",
    intro:
      "En enkel rytm håller arbetet i rörelse: arbetsgrupper varannan vecka, återsamling var åttonde, och fyra kommittémöten 2026.",
    icon: CalendarClock,
    size: "md",
  },
  {
    number: "08",
    slug: "en-battre-vag",
    path: "/sektion/en-battre-vag",
    title: "En bättre väg",
    longTitle: "En bättre väg",
    eyebrow: "Sektion 08 · Samverkan",
    kicker: "Samverkan",
    lead: "SvFF:s riktade fotbollssatsning – och hur den kopplas till oss lokalt.",
    intro:
      "En bättre väg är Svenska Fotbollförbundets satsning för att stärka fotbollen i prioriterade områden. Fotbollsnyttan är det lokala ramverket.",
    icon: Route,
    size: "md",
  },
  {
    number: "09",
    slug: "kontakt",
    path: "/sektion/kontakt",
    title: "Kontakt & Bidra",
    longTitle: "Vill du bidra eller veta mer?",
    eyebrow: "Sektion 09 · Nästa steg",
    kicker: "Nästa steg",
    lead: "Hör av dig om du vill bidra, samverka eller förstå mer.",
    intro:
      "Vi bygger Fotbollsnyttan tillsammans med föreningar, kommun, partners och idrottsrörelsen. Hör av dig.",
    icon: Mail,
    size: "sm",
  },
];

export const getSection = (slug: SectionSlug): SectionMeta =>
  sections.find((s) => s.slug === slug)!;

export const getAdjacent = (slug: SectionSlug) => {
  const i = sections.findIndex((s) => s.slug === slug);
  return {
    prev: i > 0 ? sections[i - 1] : null,
    next: i < sections.length - 1 ? sections[i + 1] : null,
  };
};

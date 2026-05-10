/**
 * Skördade framgångar — andra delen av inloggad startsida.
 *
 * Lägg till nya kort genom att utöka arrayen. Minst 3, max 6 rekommenderat.
 * `metric` är kort, kvalitativ effektetikett — inte en hård siffra.
 */

export interface HarvestedSuccess {
  id: string;
  title: string;
  description: string;
  /** Kort effektetikett — visas som meta ovanför rubriken */
  metric: string;
}

export const HARVESTED_SUCCESSES: HarvestedSuccess[] = [
  {
    id: "barn-i-rorelse",
    title: "Fler barn i rörelse",
    description:
      "Satsningen har skapat fler organiserade möten mellan förening, skola och lokalsamhälle.",
    metric: "Barn, ledare och föreningar i gemensam riktning",
  },
  {
    id: "starkare-foreningsstruktur",
    title: "Starkare föreningsstruktur",
    description:
      "Arbetssättet gör det lättare att följa upp, dokumentera och visa effekt över tid.",
    metric: "Tydligare process från idé till effekt",
  },
  {
    id: "partnernytta",
    title: "Partnernytta som går att visa",
    description:
      "Insatserna kopplas till konkret samhällsnytta, lokal närvaro och långsiktig föreningsutveckling.",
    metric: "Synlig effekt före, under och efter insats",
  },
];

export interface SuccessVideoConfig {
  videoUrl: string;
  posterUrl?: string;
  eyebrow: string;
  title: string;
  lead: string;
}

export const SUCCESS_VIDEO: SuccessVideoConfig = {
  eyebrow: "Skördade framgångar",
  title: "Framgångar vi redan har skördat",
  lead: "Det här har satsningen redan givit. Inte färdiga sanningar — men spår som går att följa, mäta och bygga vidare på.",
  videoUrl: "/videos/successes.mp4",
  posterUrl: "/images/video-poster-successes.jpg",
};

/**
 * Effektlogik — sista summeringen längst ned på dashboard.
 * Resurser → aktiviteter → mål → effekt.
 */
export interface EffectLogicEntry {
  label: string;
  body: string;
}

export const EFFECT_LOGIC: EffectLogicEntry[] = [
  {
    label: "Resurser",
    body: "Partners, föreningar, ledare, skolor, lokala nätverk och gemensam dokumentation.",
  },
  {
    label: "Aktiviteter",
    body: "Skolsamverkan, föreningsstöd, partnerträffar, ledarutbildning, kommunikation och uppföljning.",
  },
  {
    label: "Mål",
    body: "Fler barn i rörelse, starkare föreningar, bättre ledarskap och tydligare lokal samverkan.",
  },
  {
    label: "Effekt",
    body: "Ett område där fotboll fungerar som infrastruktur för trygghet, lärande, hälsa och framtidstro.",
  },
];

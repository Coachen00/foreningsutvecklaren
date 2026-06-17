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
    description: "Fler möten mellan förening, skola och lokalsamhälle.",
    metric: "Barn i rörelse",
  },
  {
    id: "starkare-foreningsstruktur",
    title: "Starkare föreningsstruktur",
    description: "Lättare att följa upp, dokumentera och lära.",
    metric: "Tydligare process",
  },
  {
    id: "partnernytta",
    title: "Partnernytta som syns",
    description: "Samhällsnytta kopplad till plats, förening och effekt.",
    metric: "Synlig effekt",
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
  title: "Det finns redan spår",
  lead: "Inte hela berättelsen. Bara tillräckligt för att vilja se mer.",
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

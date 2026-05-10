/**
 * Tidslinje för satsningens stora aktiviteter — driver nedräkningen på
 * inloggad startsida.
 *
 * Ändra `latestActivity.date` när en stor aktivitet just genomförts.
 * Ändra `nextActivity.date` när nästa större insats är planerad.
 *
 * `videoUrl` får peka på lokal fil i /public/videos/ eller HTTPS-källa.
 * `posterUrl` visas tills videon laddats — alltid lokal eller HTTPS.
 */

export interface ActivityPoint {
  /** Kort etikett ovanför namn — t.ex. "Senaste stora aktivitet" */
  title: string;
  /** Aktivitetens namn */
  name: string;
  /** ISO-datum, YYYY-MM-DD */
  date: string;
  /** Kort beskrivning som visas under nedräkningen */
  description?: string;
}

export interface CampaignTimeline {
  /** Övergripande rubrik på första hero-sektionen */
  heroTitle: string;
  /** Pre-title (eyebrow) ovanför rubriken */
  heroEyebrow: string;
  /** Kort lead under rubriken */
  heroLead: string;
  /** Sökvägen till hero-videon (lokal eller HTTPS) */
  heroVideoUrl: string;
  /** Poster-bild som visas tills videon laddats */
  heroPosterUrl?: string;
  latestActivity: ActivityPoint;
  nextActivity: ActivityPoint;
}

export const CAMPAIGN_TIMELINE: CampaignTimeline = {
  heroEyebrow: "Kontrollrum",
  heroTitle: "Satsningen lever mellan stegen",
  heroLead:
    "Mellan senaste stora aktiviteten och nästa stora steg pågår arbetet i föreningar, skolor och partnerskap.",
  heroVideoUrl: "/videos/latest-activity.mp4",
  heroPosterUrl: "/images/video-poster.jpg",
  latestActivity: {
    title: "Senaste stora aktivitet",
    name: "Partnerträff och föreningsaktivitet",
    date: "2026-05-01",
    description:
      "Möte mellan partners, förening och skola — en milstolpe vi tar avstamp från.",
  },
  nextActivity: {
    title: "Nästa stora aktivitet",
    name: "Nästa partner- och föreningsinsats",
    date: "2026-06-15",
    description:
      "Riktad insats där samverkan, struktur och uppföljning kopplas ihop.",
  },
};

/**
 * Returnerar absolut antal dagar mellan två datum.
 * Använder UTC-midnatt för att undvika DST-glitch.
 */
const daysBetween = (from: Date, to: Date) => {
  const a = Date.UTC(from.getFullYear(), from.getMonth(), from.getDate());
  const b = Date.UTC(to.getFullYear(), to.getMonth(), to.getDate());
  return Math.round((b - a) / (1000 * 60 * 60 * 24));
};

export interface TimelineProgress {
  daysSinceLatest: number;
  daysUntilNext: number;
  /** 0–100, klampat */
  progressPercent: number;
}

export const computeTimelineProgress = (
  timeline: CampaignTimeline = CAMPAIGN_TIMELINE,
  now: Date = new Date(),
): TimelineProgress => {
  const latest = new Date(timeline.latestActivity.date);
  const next = new Date(timeline.nextActivity.date);
  const totalSpan = Math.max(daysBetween(latest, next), 1);
  const elapsed = daysBetween(latest, now);

  return {
    daysSinceLatest: Math.max(daysBetween(latest, now), 0),
    daysUntilNext: Math.max(daysBetween(now, next), 0),
    progressPercent: Math.min(100, Math.max(0, Math.round((elapsed / totalSpan) * 100))),
  };
};

/** Formaterar ISO-datum till svensk lokal "1 maj 2026". */
export const formatActivityDate = (iso: string): string => {
  const d = new Date(iso);
  return new Intl.DateTimeFormat("sv-SE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
};

/**
 * Case ur föreningsutvecklingen — varje case består av en kort text, en film
 * och ett quiz som befäster lärandet.
 *
 * PLACEHOLDER-DATA: texterna och video-url:erna nedan är exempel tills riktiga
 * case spelats in. Lägg filmerna i public/videos/ och peka videoUrl dit.
 * Saknas filmen visas en fallback-gradient (CaseVideo hanterar onError).
 */

export interface QuizOption {
  id: string;
  label: string;
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  options: QuizOption[];
  correctOptionId: string;
  /** Visas efter svar — förklarar varför rätt svar är rätt. */
  explanation: string;
}

export interface Case {
  slug: string;
  title: string;
  kicker: string;
  /** Lead/ingress på detaljsidan. */
  intro: string;
  /** Kort sammanfattning på listkortet. */
  summary: string;
  /** Brödtext, en sträng per stycke. */
  body: string[];
  videoUrl: string;
  posterUrl?: string;
  /** Kort textning av vad filmen visar (a11y + kontext). */
  videoCaption: string;
  quiz: QuizQuestion[];
}

export const CASES: Case[] = [
  {
    slug: "fran-ad-hoc-till-arshjul",
    title: "Från ad hoc till årshjul",
    kicker: "Case · Struktur",
    intro:
      "En förening som drevs på eldsjälar och tur fick på ett år en rytm som höll även när nyckelpersoner försvann.",
    summary:
      "Hur en förening gick från brandkårsutryckningar till ett årshjul som gör arbetet förutsägbart.",
    body: [
      "Föreningen hade allt som krävdes utom struktur: engagerade ledare, fulla lag och en stark kultur. Men allt hängde på enskilda personer. När en eldsjäl tog paus stannade halva verksamheten.",
      "Vi började inte med dokument, utan med dialog. Vad gör vi varje månad, oavsett vem som är på plats? Svaren blev ett första årshjul — grovt, men gemensamt ägt.",
      "Efter en säsong kunde styrelsen leda efter hjulet i stället för efter kalenderns kriser. Nya ledare kunde kliva in och se vad som förväntades. Strukturen blev inte byråkrati — den blev trygghet.",
    ],
    videoUrl: "/videos/case-arshjul.mp4",
    posterUrl: "/images/case-arshjul-poster.jpg",
    videoCaption:
      "Föreningsutvecklaren beskriver hur det första årshjulet togs fram tillsammans med styrelsen.",
    quiz: [
      {
        id: "q1",
        prompt: "Vad var föreningens egentliga problem?",
        options: [
          { id: "a", label: "Brist på engagerade ledare" },
          { id: "b", label: "Att allt hängde på enskilda personer" },
          { id: "c", label: "För få spelare" },
        ],
        correctOptionId: "b",
        explanation:
          "Föreningen hade både ledare och spelare — men ingen struktur som överlevde när en nyckelperson försvann.",
      },
      {
        id: "q2",
        prompt: "Var började arbetet?",
        options: [
          { id: "a", label: "Med att skriva styrdokument" },
          { id: "b", label: "Med att rekrytera fler ledare" },
          { id: "c", label: "Med dialog om vad som görs varje månad" },
        ],
        correctOptionId: "c",
        explanation:
          "Strukturen växte ur en gemensam dialog, inte ur dokument som någon skrev ensam.",
      },
    ],
  },
  {
    slug: "matchklimat-som-vander",
    title: "Matchklimatet som vände",
    kicker: "Case · Kultur",
    intro:
      "Hård stämning på sidlinjen blev förenings­gemensamma spelregler som höll – utan att någon tappade engagemanget.",
    summary:
      "En förening tog tag i tonen runt planen och förvandlade press till stöd.",
    body: [
      "Det började med enstaka incidenter: föräldrar som skrek åt domare, ledare som pressade barn. Inget olagligt, men en kultur på väg åt fel håll.",
      "I stället för förbud byggde föreningen gemensamma spelregler — framtagna av ledare, föräldrar och spelare tillsammans. Reglerna sattes upp, men viktigast var samtalet bakom dem.",
      "Ett år senare var tonen en annan. Inte för att någon förbjudits, utan för att alla varit med och formulerat vad som gäller hos oss.",
    ],
    videoUrl: "/videos/case-matchklimat.mp4",
    videoCaption:
      "Kort film om hur föreningen tog fram gemensamma spelregler för matchklimatet.",
    quiz: [
      {
        id: "q1",
        prompt: "Hur löste föreningen problemet med matchklimatet?",
        options: [
          { id: "a", label: "Med förbud och sanktioner" },
          { id: "b", label: "Med gemensamt framtagna spelregler" },
          { id: "c", label: "Genom att byta ut ledarna" },
        ],
        correctOptionId: "b",
        explanation:
          "Det var delaktigheten i att formulera reglerna — inte förbuden — som ändrade kulturen.",
      },
    ],
  },
];

export const getCase = (slug: string): Case | undefined =>
  CASES.find((c) => c.slug === slug);

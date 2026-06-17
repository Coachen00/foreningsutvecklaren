/**
 * Föreningsportalen — intern hubb som samlar genvägar till de system, verktyg
 * och resurser en förening behöver nå i vardagen.
 *
 * PLACEHOLDER-DATA: länkarna nedan är exempel tills riktiga URL:er fastställts.
 * Byt ut href och text — strukturen (grupper + länkar) är den som ska bestå.
 */

export interface PortalLink {
  id: string;
  label: string;
  eyebrow: string;
  description: string;
  href: string;
  /** true = extern destination (öppnas i ny flik). false = intern route. */
  external: boolean;
}

export interface PortalGroup {
  id: string;
  title: string;
  eyebrow: string;
  lead: string;
  links: PortalLink[];
}

export const PORTAL_GROUPS: PortalGroup[] = [
  {
    id: "system",
    title: "System och verktyg",
    eyebrow: "Logga in",
    lead: "De plattformar föreningen administrerar sin verksamhet i.",
    links: [
      {
        id: "fogis",
        label: "Fogis",
        eyebrow: "Administration",
        description:
          "SvFF:s administrativa system för matcher, domare, licenser och föreningsuppgifter.",
        href: "https://fogis.svenskfotboll.se",
        external: true,
      },
      {
        id: "svff-foreningsportal",
        label: "SvFF Föreningsportal",
        eyebrow: "Förbund",
        description:
          "Svenska Fotbollförbundets portal för föreningsärenden, ansökningar och förbundsinformation.",
        href: "https://www.svenskfotboll.se",
        external: true,
      },
      {
        id: "idrottonline",
        label: "IdrottOnline",
        eyebrow: "Medlemmar",
        description:
          "RF:s system för medlemsregister, LOK-stöd och idrottsmedel.",
        href: "https://www.idrottonline.se",
        external: true,
      },
    ],
  },
  {
    id: "stod",
    title: "Stöd och resurser",
    eyebrow: "Hämta hjälp",
    lead: "Mallar, kontaktvägar och material som stöttar föreningens utveckling.",
    links: [
      {
        id: "kvalitetsklubb",
        label: "Kvalitetsklubb",
        eyebrow: "Ramverk",
        description:
          "Arbetssättet för föreningar som vill utvecklas medvetet — struktur, ledare, spelare och resurser.",
        href: "/foreningsutveckling/kvalitetsklubb",
        external: false,
      },
      {
        id: "partners",
        label: "Partners och ansvarskedja",
        eyebrow: "Samverkan",
        description:
          "Vilka aktörer som stöttar föreningen och hur stödet rör sig mellan förbund, kommun och förening.",
        href: "/uppdrag/partners",
        external: false,
      },
      {
        id: "kontakt",
        label: "Kontakta din utvecklare",
        eyebrow: "Dialog",
        description:
          "Hör av dig till föreningsutvecklaren för dialog, observation eller stöd i ett pågående arbete.",
        href: "mailto:foreningsutveckling@gff.se",
        external: true,
      },
    ],
  },
  {
    id: "utbildning",
    title: "Utbildning",
    eyebrow: "Lär mer",
    lead: "Utbildningar och case som höjer kompetensen i föreningen.",
    links: [
      {
        id: "case",
        label: "Case och quiz",
        eyebrow: "Lärande",
        description:
          "Korta case ur föreningsutvecklingen — text, film och ett quiz som befäster lärandet.",
        href: "/case",
        external: false,
      },
      {
        id: "uppdateringar",
        label: "Uppdateringar från rutiner",
        eyebrow: "Omvärld",
        description:
          "Skördat arbete från andra föreningar — exempel värda att inspireras av.",
        href: "/uppdateringar",
        external: false,
      },
    ],
  },
];

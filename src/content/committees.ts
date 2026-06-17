/**
 * KOMMITTÉER OCH ARBETSGRUPPER.
 *
 * Två forum jag deltar i — beskrivs som stöd, inte egna toppkategorier.
 *
 * Samhällsforumet     = samhällsberättelsen och mötesplatsen.
 * Föreningskommittén  = forum för gemensamma utvecklingsfrågor.
 */

export interface CommitteeCrossLink {
  label: string;
  href: string;
}

export interface Committee {
  id: "samhallsforum" | "foreningskommitten";
  name: string;
  role: string;
  description: string;
  myParticipation: string;
  crossLinks: CommitteeCrossLink[];
}

export const COMMITTEES: Committee[] = [
  {
    id: "samhallsforum",
    name: "Samhällsforumet",
    role: "Samhällsberättelsen och mötesplatsen",
    description:
      "Forumet som visar vad fotbollen ger Göteborg: social effekt, trygghet och fler barn i rörelse. Knyter samman förbund, föreningar, partners och offentliga parter kring CSR, Starkare IF och sociala insatser.",
    myParticipation:
      "Jag deltar i samhällsforumet och ansvarar för arbetsgruppen partners.",
    crossLinks: [
      { label: "En bättre väg", href: "/en-battre-vag" },
      { label: "Partners", href: "/uppdrag/partners" },
      { label: "Uppdrag", href: "/uppdrag" },
    ],
  },
  {
    id: "foreningskommitten",
    name: "Föreningskommittén",
    role: "Forum för gemensamma utvecklingsfrågor",
    description:
      "Knyter ihop Föreningslyftet med generell föreningsutveckling. Hanterar Kvalitetsklubb, Trygg Fotboll, matchklimat, multiidrott och föreningarnas handlingsplaner.",
    myParticipation:
      "Jag deltar i föreningskommittén som språkrör för utvecklingsfrågor.",
    crossLinks: [
      { label: "Föreningslyftet", href: "/foreningsutveckling" },
      { label: "Kvalitetsklubb", href: "/foreningsutveckling/kvalitetsklubb" },
      { label: "Uppdrag", href: "/uppdrag" },
    ],
  },
];

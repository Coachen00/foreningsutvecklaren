/**
 * ARBETSBESKRIVNING I EN MENING.
 *
 * Den korta sammanfattningen av hela uppdraget — som ankar startsidans
 * berättelse och håller copyn skarp.
 */

export interface AssignmentOverview {
  eyebrow: string;
  oneLine: string;
  support: string;
}

export const ASSIGNMENT_OVERVIEW: AssignmentOverview = {
  eyebrow: "Min arbetsbeskrivning",
  oneLine:
    "Jag är språkrör och föreningsutvecklare för Göteborgs föreningsliv — och kopplar resurser, samverkan och kvalitet till föreningar som behöver det mest.",
  support:
    "Tre huvuduppdrag bär arbetet: En bättre väg för riktad samhällsnytta, FU Skola för bron mellan skola och förening, och Föreningslyftet för struktur, kvalitet och föreningsmotor. Allt annat — kommittéer, partners, kvalitetsklubb, jämställdhet — är stödstruktur, korslänkar eller fördjupning.",
};

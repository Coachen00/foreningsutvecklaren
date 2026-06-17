import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import SectionBlock from "@/components/blocks/SectionBlock";
import CurrentStateBlock from "@/components/blocks/CurrentStateBlock";
import MissionPriorityBlock from "@/components/blocks/MissionPriorityBlock";
import LoggedInHeroCountdown from "@/components/dashboard/LoggedInHeroCountdown";
import HarvestedSuccessesVideo from "@/components/dashboard/HarvestedSuccessesVideo";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const NEXT_STEP_LINKS = [
  {
    label: "Kvalitetsklubb",
    hint: "Hur föreningen blir starkare över tid.",
    href: "/foreningsutveckling/kvalitetsklubb",
  },
  {
    label: "Jämställdhet & trygghet",
    hint: "När miljön runt barnen måste hålla.",
    href: "/foreningsutveckling/jamstalldhet-och-trygghet",
  },
  {
    label: "Spelarutbildning",
    hint: "Fotbollsinnehållet bakom utveckling.",
    href: "/uppdrag/spelarutbildning",
  },
  {
    label: "Skola & samverkan",
    hint: "Vägen från skoldag till föreningsliv.",
    href: "/skola-samverkan",
  },
  {
    label: "Arbetsuppgifter",
    hint: "Vad rollen faktiskt gör.",
    href: "/uppdrag/arbetsuppgifter",
  },
  {
    label: "Partners",
    hint: "Resurser som blir kapacitet.",
    href: "/uppdrag/partners",
  },
];

const Home = () => {
  useDocumentTitle(
    undefined,
    "Arbetsbeskrivning för språkrör och föreningsutvecklare inom Göteborgs Fotbollförbund. Tre huvuduppdrag: En bättre väg, FU Skola och Föreningslyftet.",
  );

  return (
    <div className="min-h-screen bg-background">
      <GlobalNav />

      <main id="main-content">
        {/* Akt 1 — Hero med video och nedräkning */}
        <LoggedInHeroCountdown />

        {/* Akt 2 — Skördade framgångar (scroll-revealed) */}
        <HarvestedSuccessesVideo />

        {/* Akt 3 — snabb översikt, inte underlag */}
        <CurrentStateBlock />

        <SectionBlock
          eyebrow="Huvuduppdrag"
          title="Tre vägar in"
          lead="Välj spår när du vill förstå mer. Startsidan ska bara ge kartan."
          split
        >
          <MissionPriorityBlock />
        </SectionBlock>

        <SectionBlock
          variant="muted"
          eyebrow="Fördjupa"
          title="När du vill veta mer"
          lead="Kort väg vidare. Inga långa förklaringar innan du själv väljer dem."
          split
        >
          <ul
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            role="list"
          >
            {NEXT_STEP_LINKS.map((link) => (
              <li key={link.href} className="min-h-full">
                <Link
                  to={link.href}
                  className="group flex h-full flex-col gap-3 rounded-md border border-border bg-card p-6 shadow-xs transition-[background,border-color,transform] hover:-translate-y-0.5 hover:border-primary/35 hover:bg-primary-subtle/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <span className="flex items-center justify-between">
                    <span className="font-serif text-base font-semibold text-foreground">
                      {link.label}
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-small leading-relaxed text-muted-foreground">
                    {link.hint}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </SectionBlock>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

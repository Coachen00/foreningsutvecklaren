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
import { Scene3D } from "@/components/three";
import { StaggerGroup, StaggerItem } from "@/components/motion";

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
    label: "Skola & förening",
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
    hint: "Stöd som blir verklig hjälp.",
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

        {/* Akt 4 — Spelmodellen i 3D (interaktiv) */}
        <SectionBlock
          variant="flush"
          eyebrow="Spelmodellen"
          title="Hela stan på samma plan"
          lead="Dra för att vrida. En enkel bild av ett gemensamt spelsätt — försvar, mittfält, anfall."
          split
        >
          <div className="mx-auto max-w-md">
            <Scene3D model="pitch" label="Tredimensionell fotbollsplan med zoner för försvar, mittfält och anfall" />
          </div>
        </SectionBlock>

        <SectionBlock
          variant="muted"
          eyebrow="Fördjupa"
          title="När du vill veta mer"
          lead="Kort väg vidare. Inga långa förklaringar innan du själv väljer dem."
          split
        >
          <StaggerGroup
            as="ul"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {NEXT_STEP_LINKS.map((link) => (
              <StaggerItem key={link.href} as="li" className="min-h-full">
                <Link
                  to={link.href}
                  className="card-gradient group flex h-full flex-col gap-3 rounded-xl border border-border p-6 transition-[background,border-color,transform,box-shadow] hover:-translate-y-1 hover:border-accent/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <span className="flex items-center justify-between">
                    <span className="text-base font-semibold text-foreground">
                      {link.label}
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-small leading-relaxed text-muted-foreground">
                    {link.hint}
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </SectionBlock>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

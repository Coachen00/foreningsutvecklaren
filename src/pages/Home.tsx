import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import SectionBlock from "@/components/blocks/SectionBlock";
import CurrentStateBlock from "@/components/blocks/CurrentStateBlock";
import AssignmentOverviewBlock from "@/components/blocks/AssignmentOverviewBlock";
import MissionPriorityBlock from "@/components/blocks/MissionPriorityBlock";
import EffectChain from "@/components/blocks/EffectChain";
import CommitteeBlock from "@/components/blocks/CommitteeBlock";
import PartnerFundingBlock from "@/components/blocks/PartnerFundingBlock";
import SortingMapBlock from "@/components/blocks/SortingMapBlock";
import { CURRENT_STATE } from "@/content/currentState";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const NEXT_STEP_LINKS = [
  {
    label: "Kvalitetsklubb",
    hint: "Ramverket för föreningsutveckling — fördjupning under Föreningslyftet.",
    href: "/foreningsutveckling/kvalitetsklubb",
  },
  {
    label: "Jämställdhet & trygghet",
    hint: "Värdegrund som genomsyrar arbetet — flickfotboll, matchklimat, barnperspektiv.",
    href: "/foreningslyftet/jamstalldhet-och-trygghet",
  },
  {
    label: "Spelarutbildning",
    hint: "Spelarens utveckling, SUP och träningsinnehåll — separerat från FU Skola.",
    href: "/uppdrag/spelarutbildning",
  },
  {
    label: "Skola & samverkan",
    hint: "Bredare hubb för skola, förening, förbund och kommun.",
    href: "/skola-samverkan",
  },
  {
    label: "Arbetsuppgifter",
    hint: "Det dagliga arbetet i detalj — träningsbesök, ledarsamtal, uppstart.",
    href: "/uppdrag/arbetsuppgifter",
  },
  {
    label: "Partners",
    hint: "Hela ansvarskedjan — strategiska, operativa, finansierande, mottagare.",
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
        {/* 1. Nuläge — sidans hero */}
        <CurrentStateBlock />

        {/* 2. Arbetsbeskrivningen i en mening */}
        <AssignmentOverviewBlock />

        {/* 3. Huvuduppdrag — En bättre väg som hero, FU Skola + Föreningslyftet under */}
        <SectionBlock
          eyebrow="Huvuduppdrag"
          title="Tre spår bär arbetet"
          lead="En bättre väg bär samhällsnyttan. FU Skola bär bron mellan skola och förening. Föreningslyftet bär struktur, kvalitet och föreningsmotor. Allt annat är stödstruktur, korslänk eller fördjupning."
          split
        >
          <MissionPriorityBlock />
        </SectionBlock>

        {/* 4. Effektlogik för hela uppdraget */}
        <SectionBlock
          variant="muted"
          eyebrow="Effektlogik"
          title="Resurser blir effekt"
          lead="Den röda tråden från det som stoppas in till det som stannar kvar. Samma fyra steg gäller för alla tre huvuduppdragen."
          split
        >
          <EffectChain stages={CURRENT_STATE.effect.stages} />
        </SectionBlock>

        {/* 5. Kommittéer och arbetsgrupper */}
        <SectionBlock
          eyebrow="Kommittéer och arbetsgrupper"
          title="Forum jag deltar i"
          lead="Två arbetsgrupper som binder ihop strategi och vardag. Inga egna toppkategorier — viktiga som korslänkar in i resten av sajten."
          split
        >
          <CommitteeBlock />
        </SectionBlock>

        {/* 6. Partners, finansiering och samhällsnytta */}
        <SectionBlock
          variant="muted"
          eyebrow="Partners, finansiering och samhällsnytta"
          title="Så fungerar partnerskap och finansiering"
          lead="Partnerskap är en arbetsdel — inte ett sidospår. Finansiering är kapacitetsbyggande, inte bidragssökande."
          split
        >
          <PartnerFundingBlock />
        </SectionBlock>

        {/* 7. Hur allt sorteras */}
        <SectionBlock
          eyebrow="Sorteringskarta"
          title="Var hör detta hemma?"
          lead="Åtta frågor som avgör var nytt innehåll placeras. Reglerna gäller för mig själv när jag bygger sajten — och för läsaren som vill förstå strukturen."
          split
        >
          <SortingMapBlock />
        </SectionBlock>

        {/* 8. Vidare till fördjupning */}
        <SectionBlock
          variant="muted"
          eyebrow="Vidare till fördjupning"
          title="Fortsätt läsa"
          lead="Fördjupningssidor och stödytor — sortera in efter behov."
          split
        >
          <ul
            className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
            role="list"
          >
            {NEXT_STEP_LINKS.map((link) => (
              <li key={link.href} className="bg-card">
                <Link
                  to={link.href}
                  className="group flex h-full flex-col gap-3 p-6 transition-colors hover:bg-primary-subtle/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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

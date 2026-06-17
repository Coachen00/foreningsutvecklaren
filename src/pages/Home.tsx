import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import SectionBlock from "@/components/blocks/SectionBlock";
import MethodBlock from "@/components/blocks/MethodBlock";
import CurrentStateBlock from "@/components/blocks/CurrentStateBlock";
import AssignmentOverviewBlock from "@/components/blocks/AssignmentOverviewBlock";
import MissionPriorityBlock from "@/components/blocks/MissionPriorityBlock";
import EffectChain from "@/components/blocks/EffectChain";
import CommitteeBlock from "@/components/blocks/CommitteeBlock";
import PartnerFundingBlock from "@/components/blocks/PartnerFundingBlock";
import SortingMapBlock from "@/components/blocks/SortingMapBlock";
import LoggedInHeroCountdown from "@/components/dashboard/LoggedInHeroCountdown";
import HarvestedSuccessesVideo from "@/components/dashboard/HarvestedSuccessesVideo";
import { CURRENT_STATE } from "@/content/currentState";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const NEXT_STEP_LINKS = [
  {
    label: "Kvalitetsklubb",
    hint: "Ramverket som gör föreningsutveckling möjlig att följa.",
    href: "/foreningsutveckling/kvalitetsklubb",
  },
  {
    label: "Jämställdhet & trygghet",
    hint: "Flickfotboll, matchklimat och barnperspektiv i samma riktning.",
    href: "/foreningsutveckling/jamstalldhet-och-trygghet",
  },
  {
    label: "Spelarutbildning",
    hint: "Spelarens miljö, träningsinnehåll och SUP.",
    href: "/uppdrag/spelarutbildning",
  },
  {
    label: "Skola & samverkan",
    hint: "När skola, förening, förbund och kommun behöver samma karta.",
    href: "/skola-samverkan",
  },
  {
    label: "Arbetsuppgifter",
    hint: "Dialog, förankring, observation och uppföljning i vardagen.",
    href: "/uppdrag/arbetsuppgifter",
  },
  {
    label: "Partners",
    hint: "Roller, ansvar och finansiering utan att tappa riktningen.",
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

        {/* Fördjupningsstart — full sajtkarta nedanför kontrollrummet */}
        {/* 1. Metod — sidans första orientering */}
        <MethodBlock />

        {/* 2. Nuläge */}
        <CurrentStateBlock />

        {/* 3. Arbetsbeskrivningen i en mening */}
        <AssignmentOverviewBlock />

        {/* 4. Huvuduppdrag — En bättre väg som hero, FU Skola + Föreningslyftet under */}
        <SectionBlock
          eyebrow="Huvuduppdrag"
          title="Tre spår bär arbetet"
          lead="En bättre väg bär samhällsnyttan. FU Skola bygger bron. Föreningslyftet gör strukturen hållbar."
          split
        >
          <MissionPriorityBlock />
        </SectionBlock>

        {/* 5. Effektlogik för hela uppdraget */}
        <SectionBlock
          variant="muted"
          eyebrow="Effektlogik"
          title="Resurser blir effekt"
          lead="Fyra steg räcker för att skilja aktivitet från verklig förändring."
          split
        >
          <EffectChain stages={CURRENT_STATE.effect.stages} />
        </SectionBlock>

        {/* 6. Kommittéer och arbetsgrupper */}
        <SectionBlock
          eyebrow="Kommittéer och arbetsgrupper"
          title="Forum jag deltar i"
          lead="Två forum där strategi möter vardag och blir till beslut."
          split
        >
          <CommitteeBlock />
        </SectionBlock>

        {/* 7. Partners, finansiering och samhällsnytta */}
        <SectionBlock
          variant="muted"
          eyebrow="Partners, finansiering och samhällsnytta"
          title="Så fungerar partnerskap och finansiering"
          lead="Partnerskap ska öka föreningens kapacitet, inte bara fylla en budgetrad."
          split
        >
          <PartnerFundingBlock />
        </SectionBlock>

        {/* 8. Hur allt sorteras */}
        <SectionBlock
          eyebrow="Sorteringskarta"
          title="Var hör detta hemma?"
          lead="Åtta frågor som håller sajten ren när uppdraget växer."
          split
        >
          <SortingMapBlock />
        </SectionBlock>

        {/* 9. Vidare till fördjupning */}
        <SectionBlock
          variant="muted"
          eyebrow="Vidare till fördjupning"
          title="Fortsätt läsa"
          lead="Välj nästa yta efter vad du behöver förstå, besluta eller göra."
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

import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import CurrentStateBlock from "@/components/blocks/CurrentStateBlock";
import PrismaCardDeck from "@/components/blocks/PrismaCardDeck";
import LoggedInHeroCountdown from "@/components/dashboard/LoggedInHeroCountdown";
import HarvestedSuccessesVideo from "@/components/dashboard/HarvestedSuccessesVideo";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { Scene3D, AmbientField } from "@/components/three";
import {
  EditorialHero,
  ChapterSection,
  PullQuote,
  ClosingStatement,
  NumberedCardGrid,
  PitchField,
} from "@/components/editorial";
import { SUCCESS_VIDEO } from "@/content/harvestedSuccesses";

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
        <EditorialHero
          eyebrow="FÖRENINGSUTVECKLAREN · GÖTEBORGS FF"
          titleTop="Hela stan"
          titleGold="på samma plan"
          // nyckel: en-radig manifest hämtad från sidans og:description (index.html)
          subhead="En översikt över uppdraget i Göteborg."
          lead="Arbetsbeskrivning för språkrör och föreningsutvecklare inom Göteborgs Fotbollförbund. Tre huvuduppdrag: En bättre väg, FU Skola och Föreningslyftet."
          scrollHint="KAPITEL 01"
          backdrop={<PitchField />}
        />

        {/* Kapitel 01 — Kortleken: första intrycket */}
        <ChapterSection
          id="omradena"
          number="01"
          eyebrow="Områdena"
          title="Välj din väg in"
          lead="Korten delas ut i en solfjäder. Hovra för att lyfta ett kort — klicka för att läsa om området och välja att gå vidare."
        >
          <PrismaCardDeck />
        </ChapterSection>

        {/* Akt — hero med video/nedräkning + skördade framgångar, egna fullbredds-sektioner */}
        <LoggedInHeroCountdown />
        <HarvestedSuccessesVideo />
        <PullQuote>{SUCCESS_VIDEO.lead}</PullQuote>
        <CurrentStateBlock />

        {/* Kapitel 03 — Spelmodellen i 3D, levande ambient-scen */}
        <div className="relative isolate">
          <div className="absolute inset-0 -z-10">
            <AmbientField />
          </div>
          <ChapterSection
            id="spelmodellen"
            number="03"
            title="Spelmodellen"
            lead="Dra för att vrida. En enkel bild av ett gemensamt spelsätt — försvar, mittfält, anfall."
          >
            <div className="mx-auto max-w-xl">
              <Scene3D
                model="pitch"
                label="Tredimensionell fotbollsplan med zoner för försvar, mittfält och anfall"
              />
            </div>
          </ChapterSection>
        </div>

        {/* Kapitel 04 — Fördjupa */}
        <ChapterSection
          id="fordjupa"
          number="04"
          eyebrow="Fördjupa"
          title="När du vill veta mer"
          lead="Kort väg vidare. Inga långa förklaringar innan du själv väljer dem."
        >
          <NumberedCardGrid
            columns={3}
            items={NEXT_STEP_LINKS.map((link, i) => ({
              number: String(i + 1).padStart(2, "0"),
              title: link.label,
              body: link.hint,
              href: link.href,
            }))}
          />
        </ChapterSection>

        <ClosingStatement
          eyebrow="FÖRENINGSUTVECKLAREN · GÖTEBORGS FF"
          line1="Hela stan"
          line2={
            <>
              på samma <span className="text-accent">plan</span>
            </>
          }
        />
      </main>

      <Footer />
    </div>
  );
};

export default Home;

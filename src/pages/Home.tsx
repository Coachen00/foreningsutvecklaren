import { ArrowUpRight } from "lucide-react";
import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import SectionBlock from "@/components/blocks/SectionBlock";
import CurrentStateBlock from "@/components/blocks/CurrentStateBlock";
import PrismaCardDeck from "@/components/blocks/PrismaCardDeck";
import GlowLink from "@/components/blocks/GlowLink";
import LoggedInHeroCountdown from "@/components/dashboard/LoggedInHeroCountdown";
import HarvestedSuccessesVideo from "@/components/dashboard/HarvestedSuccessesVideo";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { Scene3D, AmbientField } from "@/components/three";
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
        {/* Akt 0 — Kortleken: första intrycket */}
        <section
          aria-labelledby="deck-heading"
          className="relative overflow-hidden border-b border-border bg-background"
        >
          <div className="container mx-auto px-4 pt-10 sm:px-6 sm:pt-14 lg:pt-16">
            <p
              className="signal-label mb-3"
              style={{ "--signal": "var(--signal-blue)" } as React.CSSProperties}
            >
              Områdena
            </p>
            <h1
              id="deck-heading"
              className="font-serif text-headline font-semibold text-foreground"
            >
              Välj din väg in
            </h1>
            <p className="mt-3 max-w-[56ch] text-base leading-relaxed text-muted-foreground md:text-[1.0625rem]">
              Korten delas ut i en solfjäder. Hovra för att lyfta ett kort — klicka för
              att läsa om området och välja att gå vidare.
            </p>
          </div>
          <PrismaCardDeck />
        </section>

        {/* Akt 1 — Hero med video och nedräkning */}
        <LoggedInHeroCountdown />

        {/* Akt 2 — Skördade framgångar (scroll-revealed) */}
        <HarvestedSuccessesVideo />

        {/* Akt 3 — snabb översikt, inte underlag */}
        <CurrentStateBlock />

        {/* Akt 4 — Spelmodellen i 3D (interaktiv), levande ambient-scen */}
        <SectionBlock
          variant="flush"
          eyebrow="Spelmodellen"
          title="Hela stan på samma plan"
          lead="Dra för att vrida. En enkel bild av ett gemensamt spelsätt — försvar, mittfält, anfall."
          split
          backdrop={<AmbientField />}
        >
          <div className="mx-auto max-w-xl">
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
                <GlowLink
                  to={link.href}
                  className="card-gradient group relative flex h-full flex-col gap-3 overflow-hidden rounded-xl border border-border p-6 hover:border-accent/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <span className="relative flex items-center justify-between">
                    <span className="text-base font-semibold text-foreground">
                      {link.label}
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="relative text-small leading-relaxed text-muted-foreground">
                    {link.hint}
                  </span>
                </GlowLink>
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

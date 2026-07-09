import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import UpdatesFeedBlock from "@/components/blocks/UpdatesFeedBlock";
import NextPageCTA from "@/components/blocks/NextPageCTA";
import { useApprovedUpdates } from "@/lib/harvest";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { EditorialHero, ChapterSection, PitchField } from "@/components/editorial";

const Uppdateringar = () => {
  const { data, isLoading, isError, refetch } = useApprovedUpdates();

  useDocumentTitle(
    "Uppdateringar från rutiner",
    "Uppdateringar från rutiner: skördat och granskat arbete från andra föreningar, med länk till ursprungskällan. Inspiration och goda exempel för föreningsutveckling.",
  );

  return (
    <div className="min-h-screen bg-background">
      <GlobalNav />

      <nav
        aria-label="Brödsmula"
        className="container mx-auto flex flex-wrap items-center gap-1.5 border-b border-border px-4 py-4 sm:px-6"
      >
        <Link
          to="/"
          className="font-mono text-micro uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
        >
          Start
        </Link>
        <span className="flex items-center gap-1.5">
          <ChevronRight className="h-3 w-3 text-border" aria-hidden="true" />
          <span aria-current="page" className="font-mono text-micro uppercase tracking-wider text-foreground">
            Uppdateringar
          </span>
        </span>
      </nav>

      <main id="main-content">
        <EditorialHero
          eyebrow="Omvärld · Skördat arbete"
          titleTop="Uppdateringar från"
          titleGold="rutiner"
          subhead="Bra arbete från andra föreningar — samlat, granskat och länkat till källan."
          lead="Listan fylls på efter hand. Varje post länkar vidare till den ursprungliga källan, som alltid får erkännandet."
          backdrop={<PitchField />}
        />

        <ChapterSection
          id="senaste"
          number="01"
          eyebrow="Senaste"
          title="Värt att inspireras av"
          lead="Ett urval av andra föreningars arbete. Klicka för att läsa hela hos källan."
        >
          <UpdatesFeedBlock
            items={data ?? []}
            isLoading={isLoading}
            isError={isError}
            onRetry={() => refetch()}
          />
        </ChapterSection>

        <ChapterSection id="metod" number="02" eyebrow="Metod" title="Skördat, inte kopierat">
          <div className="mx-auto w-reading space-y-5 text-base leading-relaxed text-foreground/85">
            <p>
              Innehållet här samlas automatiskt från utvalda källor och granskas
              manuellt innan det publiceras. Vi visar bara en rubrik och en kort
              sammanfattning — för att läsa hela går du till källan.
            </p>
            <p>
              Ser du en förening vars arbete borde lyftas? Tipsa din
              föreningsutvecklare så kan källan läggas till i bevakningen.
            </p>
          </div>
        </ChapterSection>
      </main>

      <NextPageCTA
        next={{ path: "/case", title: "Case ur föreningsutvecklingen", shortTitle: "Case" }}
        label="Lär av case"
      />
      <Footer />
    </div>
  );
};

export default Uppdateringar;

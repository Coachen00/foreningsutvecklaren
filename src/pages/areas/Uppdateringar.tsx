import { Rss } from "lucide-react";
import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import SubpageShell from "@/components/blocks/SubpageShell";
import SectionBlock from "@/components/blocks/SectionBlock";
import UpdatesFeedBlock from "@/components/blocks/UpdatesFeedBlock";
import NextPageCTA from "@/components/blocks/NextPageCTA";
import { useApprovedUpdates } from "@/lib/harvest";

const Uppdateringar = () => {
  const { data, isLoading, isError, refetch } = useApprovedUpdates();

  return (
    <div className="min-h-screen bg-background">
      <GlobalNav />
      <SubpageShell
        breadcrumbs={[{ label: "Uppdateringar" }]}
        headingLevel="tool"
        kicker="Omvärld · Skördat arbete"
        icon={Rss}
        title="Uppdateringar från rutiner"
        lead="Bra arbete från andra föreningar — samlat, granskat och länkat till källan."
        description="Listan fylls på efter hand. Varje post länkar vidare till den ursprungliga källan, som alltid får erkännandet."
        metaDescription="Uppdateringar från rutiner: skördat och granskat arbete från andra föreningar, med länk till ursprungskällan. Inspiration och goda exempel för föreningsutveckling."
      >
        <SectionBlock
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
        </SectionBlock>

        <SectionBlock
          variant="muted"
          eyebrow="Metod"
          title="Skördat, inte kopierat"
          narrow
        >
          <div className="space-y-5 text-base leading-relaxed text-foreground/85">
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
        </SectionBlock>
      </SubpageShell>

      <NextPageCTA
        next={{ path: "/case", title: "Case ur föreningsutvecklingen", shortTitle: "Case" }}
        label="Lär av case"
      />
      <Footer />
    </div>
  );
};

export default Uppdateringar;

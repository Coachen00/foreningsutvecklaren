import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import HomeHero from "@/components/home/HomeHero";
import AreaCardGrid from "@/components/home/AreaCardGrid";
import SectionBlock from "@/components/blocks/SectionBlock";
import CoreMissionBlock from "@/components/blocks/CoreMissionBlock";
import PartnerStrip from "@/components/blocks/PartnerStrip";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const Home = () => {
  useDocumentTitle(
    undefined,
    "Arbetsdetektiven – karta över uppdraget inom Göteborgs Fotbollförbund. Kärnuppgifter, föreningsutveckling, kvalitetsklubb, fotboll i skolan och En bättre väg.",
  );

  return (
    <div className="min-h-screen bg-background">
      <GlobalNav />
      <main>
        <HomeHero />

        <SectionBlock
          eyebrow="Tre områden"
          title="Uppdraget i tre delar"
          lead="Rollen är en och samma – men den tar sig olika uttryck beroende på var i systemet arbetet sker. Välj ett område att fördjupa dig i."
        >
          <AreaCardGrid />
        </SectionBlock>

        <SectionBlock
          variant="muted"
          eyebrow="Det återkommande"
          title="Kärnuppdraget i vardagen"
          lead="De arbetsformer som bär allt annat. Allt fördjupningsarbete vilar på att det här görs konsekvent."
        >
          <CoreMissionBlock title="Fyra kärnuppgifter" lead="" />
        </SectionBlock>

        <SectionBlock
          eyebrow="Samverkan"
          title="Vi gör det här tillsammans"
          lead="Uppdraget lever i en kedja av aktörer – ingen driver det ensam."
        >
          <PartnerStrip />
        </SectionBlock>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import HomeHero from "@/components/home/HomeHero";
import PrimaryAssignmentsGrid from "@/components/home/PrimaryAssignmentsGrid";
import SectionBlock from "@/components/blocks/SectionBlock";
import CoreMissionBlock from "@/components/blocks/CoreMissionBlock";
import PartnerMapBlock from "@/components/blocks/PartnerMapBlock";
import EcosystemMap from "@/components/blocks/EcosystemMap";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const Home = () => {
  useDocumentTitle(
    undefined,
    "Arbetsdetektiven – tre huvuduppdrag inom Göteborgs Fotbollförbund: Föreningslyftet, En bättre väg och FU Skola.",
  );

  return (
    <div className="min-h-screen bg-background">
      <GlobalNav />

      <main id="main-content">
        <HomeHero />

        <SectionBlock
          eyebrow="Tre huvuduppdrag"
          title="Det här bär uppdraget"
          lead="Tre spår som var för sig gör skillnad – och som tillsammans håller ihop arbetet. Välj ett uppdrag att fördjupa dig i."
          split
        >
          <PrimaryAssignmentsGrid />
        </SectionBlock>

        <SectionBlock
          eyebrow="Ekosystemet"
          title="Var sak har sin roll"
          lead="Sex system som hänger ihop — varje med en egen funktion. Tillsammans gör de Göteborgsfotbollen starkare, tryggare och mer inkluderande."
          split
        >
          <EcosystemMap />
        </SectionBlock>

        <SectionBlock
          variant="muted"
          eyebrow="Det återkommande"
          title="Kärnuppdraget i vardagen"
          lead="De arbetsformer som bär allt annat. Fördjupningsspåren vilar på att det här görs konsekvent och med omsorg."
        >
          <CoreMissionBlock title="" lead="" />
        </SectionBlock>

        <SectionBlock
          id="partners"
          eyebrow="Ekosystemet"
          title="Vi gör det här tillsammans"
          lead="Uppdraget lever i en kedja av aktörer – från ansvariga förbund och kommun till föreningar, skolor och samhällsaktörer som GIS."
          split
        >
          <PartnerMapBlock />
        </SectionBlock>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

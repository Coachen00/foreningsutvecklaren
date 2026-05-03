import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import AreaShell from "@/components/blocks/AreaShell";
import SectionBlock from "@/components/blocks/SectionBlock";
import PartnerFundingBlock from "@/components/blocks/PartnerFundingBlock";
import PartnerMapBlock from "@/components/blocks/PartnerMapBlock";
import NextPageCTA from "@/components/blocks/NextPageCTA";
import { getArea } from "@/content/areas";
import { PRIMARY_ASSIGNMENTS } from "@/content/primaryAssignments";

const Partners = () => {
  const area = getArea("uppdrag");
  const subpage = area.subpages.find((s) => s.slug === "partners")!;
  const next = PRIMARY_ASSIGNMENTS[0];

  return (
    <div className="min-h-screen bg-background">
      <GlobalNav />
      <AreaShell area={area} subtitle={subpage.title}>
        <SectionBlock
          eyebrow="Fyra roller"
          title="Partnerskap som bygger kapacitet"
          lead="Partnersidan använder samma logik som startsidan: strategiska, operativa och finansierande partners samt mottagare och genomförandeaktörer."
          split
        >
          <PartnerFundingBlock />
        </SectionBlock>

        <SectionBlock
          variant="muted"
          eyebrow="Ansvarskedjan"
          title="Vem gör vad i vardagen"
          lead="Den praktiska ansvarskedjan visar vem som äger riktning, vem som stödjer genomförandet och vilka aktörer som bär arbetet lokalt."
          split
        >
          <PartnerMapBlock />
        </SectionBlock>
      </AreaShell>
      <NextPageCTA next={next} label="Första huvuduppdraget" />
      <Footer />
    </div>
  );
};

export default Partners;

import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import AreaShell from "@/components/blocks/AreaShell";
import SectionBlock from "@/components/blocks/SectionBlock";
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
          eyebrow="Ansvarskedjan"
          title="Vem gör vad"
          lead="Grupperade efter roll i uppdraget: vem som är ansvarig, vem som sätter strategi, vem som genomför och vem som är mottagare av stödet."
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

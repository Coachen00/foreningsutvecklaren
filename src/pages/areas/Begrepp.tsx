import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import AreaShell from "@/components/blocks/AreaShell";
import SectionBlock from "@/components/blocks/SectionBlock";
import GlossaryBlock from "@/components/blocks/GlossaryBlock";
import NextPageCTA from "@/components/blocks/NextPageCTA";
import { getArea } from "@/content/areas";
import {
  getPrimaryAssignment,
  adjacentPrimaryAssignments,
} from "@/content/primaryAssignments";

const Begrepp = () => {
  const area = getArea("foreningsutveckling");
  const subpage = area.subpages.find((s) => s.slug === "begrepp")!;
  const prev = getPrimaryAssignment("foreningslyftet");
  const { next } = adjacentPrimaryAssignments("foreningslyftet");

  return (
    <div className="min-h-screen bg-background">
      <GlobalNav />
      <AreaShell area={area} subtitle={subpage.title}>
        <SectionBlock
          eyebrow="Ordlista"
          title="Begrepp i en förening"
          lead="Korta förklaringar av orden som återkommer i styrelsearbete, ekonomi och planering. Tänkt som ett uppslagsverk – läs det du behöver, när du behöver det."
        >
          <GlossaryBlock />
        </SectionBlock>
      </AreaShell>
      <NextPageCTA next={next} prev={prev} label="Första huvuduppdraget" />
      <Footer />
    </div>
  );
};

export default Begrepp;

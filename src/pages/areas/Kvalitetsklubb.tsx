import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import AreaShell from "@/components/blocks/AreaShell";
import SectionBlock from "@/components/blocks/SectionBlock";
import ProgramBlock from "@/components/blocks/ProgramBlock";
import PartnerStrip from "@/components/blocks/PartnerStrip";
import NextPageCTA from "@/components/blocks/NextPageCTA";
import { getArea, adjacentAreas } from "@/content/areas";
import { getProgram } from "@/content/programs";

const Kvalitetsklubb = () => {
  const area = getArea("foreningsutveckling");
  const subpage = area.subpages.find((s) => s.slug === "kvalitetsklubb")!;
  const { next, prev } = adjacentAreas("foreningsutveckling");
  const program = getProgram("kvalitetsklubb");

  return (
    <div className="min-h-screen bg-background">
      <GlobalNav />
      <AreaShell area={area} subtitle={subpage.title}>
        {program && (
          <SectionBlock
            eyebrow="Konceptet"
            title="Tolv områden som hänger ihop"
            lead="Kvalitetsklubb är inte en checklista – det är en förflyttning. Varje del stöttar en annan."
          >
            <ProgramBlock program={program} />
          </SectionBlock>
        )}

        <SectionBlock
          variant="muted"
          eyebrow="Samverkan"
          title="Bakom konceptet"
          lead="Kvalitetsklubb ägs av SvFF. GFF förvaltar det i Göteborg."
        >
          <PartnerStrip ids={["svff", "gff", "foreningar"]} />
        </SectionBlock>
      </AreaShell>
      <NextPageCTA next={next} prev={prev} />
      <Footer />
    </div>
  );
};

export default Kvalitetsklubb;

import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import AreaShell from "@/components/blocks/AreaShell";
import SectionBlock from "@/components/blocks/SectionBlock";
import ProgramBlock from "@/components/blocks/ProgramBlock";
import PartnerStrip from "@/components/blocks/PartnerStrip";
import NextPageCTA from "@/components/blocks/NextPageCTA";
import { getArea, adjacentAreas } from "@/content/areas";
import { getProgram } from "@/content/programs";

const FUiSkola = () => {
  const area = getArea("skola-samverkan");
  const subpage = area.subpages.find((s) => s.slug === "fu-i-skola")!;
  const { next, prev } = adjacentAreas("skola-samverkan");
  const program = getProgram("fu-i-skola");

  return (
    <div className="min-h-screen bg-background">
      <GlobalNav />
      <AreaShell area={area} subtitle={subpage.title}>
        {program && (
          <SectionBlock
            eyebrow="Arbetet"
            title="Så här rullar FU i skola"
            lead="Från onboarding av nya skolor till uppföljning – nio arbetsdelar som tillsammans håller arbetet igång."
          >
            <ProgramBlock program={program} />
          </SectionBlock>
        )}

        <SectionBlock
          variant="muted"
          eyebrow="Samverkan"
          title="Alla led behövs"
          lead="Det här är ett arbete som korsar flera huvudmän. Varje aktör fyller en egen lucka."
        >
          <PartnerStrip
            ids={["gff", "svff", "rf-sisu", "goteborgs-stad", "foreningar", "skolor"]}
          />
        </SectionBlock>
      </AreaShell>
      <NextPageCTA next={next} prev={prev} label="Tillbaka till starten" />
      <Footer />
    </div>
  );
};

export default FUiSkola;

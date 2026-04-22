import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import AreaShell from "@/components/blocks/AreaShell";
import SectionBlock from "@/components/blocks/SectionBlock";
import ProgramBlock from "@/components/blocks/ProgramBlock";
import ImpactBlock from "@/components/blocks/ImpactBlock";
import PartnerStrip from "@/components/blocks/PartnerStrip";
import NextPageCTA from "@/components/blocks/NextPageCTA";
import { getArea, adjacentAreas } from "@/content/areas";
import { programsByArea } from "@/content/programs";
import { impactForArea } from "@/content/impact";

const Foreningsutveckling = () => {
  const area = getArea("foreningsutveckling");
  const { next, prev } = adjacentAreas("foreningsutveckling");
  const impact = impactForArea("foreningsutveckling");
  const programs = programsByArea("foreningsutveckling");

  return (
    <div className="min-h-screen bg-background">
      <GlobalNav />
      <AreaShell area={area}>
        <SectionBlock
          eyebrow="Tre spår"
          title="Tre sammanhängande arbetssätt"
          lead="Kvalitetsklubb bygger strukturen. Matchklimat bygger kulturen runt matchen. FU i förening är den riktade insatsen där den behövs mest."
        >
          <div className="space-y-6">
            {programs.map((program) => (
              <ProgramBlock
                key={program.id}
                program={program}
                compact={program.id !== "kvalitetsklubb"}
              />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          variant="muted"
          eyebrow="Samverkan"
          title="Vilka som bär arbetet"
          lead="Föreningsutveckling sker i mötet mellan förening, förbund och utbildningsstöd."
        >
          <PartnerStrip ids={["gff", "svff", "rf-sisu", "foreningar"]} />
        </SectionBlock>

        {impact && (
          <SectionBlock
            eyebrow="Effekt"
            title="Det här förflyttas"
            lead="När de tre spåren rullar ihop syns det i vardagen – i träningar, i matcher och i hur klubben organiseras."
          >
            <ImpactBlock impact={impact} />
          </SectionBlock>
        )}
      </AreaShell>
      <NextPageCTA next={next} prev={prev} />
      <Footer />
    </div>
  );
};

export default Foreningsutveckling;

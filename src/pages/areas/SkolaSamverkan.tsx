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

const SkolaSamverkan = () => {
  const area = getArea("skola-samverkan");
  const { next, prev } = adjacentAreas("skola-samverkan");
  const impact = impactForArea("skola-samverkan");
  const programs = programsByArea("skola-samverkan");

  return (
    <div className="min-h-screen bg-background">
      <GlobalNav />
      <AreaShell area={area}>
        <SectionBlock
          eyebrow="Två satsningar"
          title="Fotboll i skolan och En bättre väg"
          lead="Två spår som kompletterar varandra: ett brett som möter barnen i skolans vardag, ett riktat som arbetar i områden med tuffa förutsättningar."
        >
          <div className="space-y-6">
            {programs.map((program) => (
              <ProgramBlock
                key={program.id}
                program={program}
                compact={program.id !== "fu-i-skola"}
              />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          variant="muted"
          eyebrow="Samverkan"
          title="Alla nivåer behöver vara med"
          lead="Det här är arbete som bara fungerar när skola, förening, kommun, förbund och civilsamhälle drar åt samma håll."
        >
          <PartnerStrip
            ids={["gff", "svff", "rf-sisu", "goteborgs-stad", "foreningar", "skolor"]}
          />
        </SectionBlock>

        {impact && (
          <SectionBlock
            eyebrow="Varför"
            title="Därför finns satsningarna"
            lead="Inkludering och tillgänglighet är inte ett tillägg – det är själva skälet till att arbetet finns."
          >
            <ImpactBlock impact={impact} />
          </SectionBlock>
        )}
      </AreaShell>
      <NextPageCTA next={next} prev={prev} label="Tillbaka till starten" />
      <Footer />
    </div>
  );
};

export default SkolaSamverkan;

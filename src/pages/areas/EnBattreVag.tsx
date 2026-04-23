import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import AssignmentShell from "@/components/blocks/AssignmentShell";
import SectionBlock from "@/components/blocks/SectionBlock";
import ProgramBlock from "@/components/blocks/ProgramBlock";
import PartnerStrip from "@/components/blocks/PartnerStrip";
import ImpactBlock from "@/components/blocks/ImpactBlock";
import NextPageCTA from "@/components/blocks/NextPageCTA";
import {
  adjacentPrimaryAssignments,
  getPrimaryAssignment,
} from "@/content/primaryAssignments";
import { getProgram } from "@/content/programs";
import { impactForArea } from "@/content/impact";

const EnBattreVag = () => {
  const assignment = getPrimaryAssignment("en-battre-vag");
  const { next, prev } = adjacentPrimaryAssignments("en-battre-vag");
  const program = getProgram("en-battre-vag");
  const impact = impactForArea("skola-samverkan");

  return (
    <div className="min-h-screen bg-background">
      <GlobalNav />
      <AssignmentShell assignment={assignment}>
        {program && (
          <SectionBlock
            eyebrow="Satsningen"
            title="Riktade insatser där de behövs mest"
            lead="En bättre väg är SvFF:s nationella satsning, lokalt genomförd i Göteborg. Fem arbetsdelar som tillsammans bär arbetet."
          >
            <ProgramBlock program={program} />
          </SectionBlock>
        )}

        <SectionBlock
          variant="muted"
          eyebrow="Samverkan"
          title="Detta är ingen enmansinsats"
          lead="En bättre väg fungerar när förbund, kommun, förening och civilsamhälle drar åt samma håll. Varje aktör fyller en egen lucka."
        >
          <PartnerStrip
            ids={["svff", "gff", "goteborgs-stad", "foreningar", "gis"]}
          />
        </SectionBlock>

        {impact && (
          <SectionBlock
            eyebrow="Varför"
            title="Det är därför satsningen finns"
            lead="Inkludering och tillgänglighet är inte tillägg – de är själva skälet till att arbetet finns."
          >
            <ImpactBlock impact={impact} />
          </SectionBlock>
        )}
      </AssignmentShell>
      <NextPageCTA
        next={next}
        prev={prev}
        label={
          next.id === "foreningslyftet" ? "Tillbaka till starten" : "Nästa uppdrag"
        }
      />
      <Footer />
    </div>
  );
};

export default EnBattreVag;

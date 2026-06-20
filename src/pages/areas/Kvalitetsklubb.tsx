import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import AreaShell from "@/components/blocks/AreaShell";
import SectionBlock from "@/components/blocks/SectionBlock";
import FocusAreaBlock from "@/components/blocks/FocusAreaBlock";
import KvalitetsklubbProcess from "@/components/blocks/KvalitetsklubbProcess";
import KlubbRolesBlock from "@/components/blocks/KlubbRolesBlock";
import PartnerStrip from "@/components/blocks/PartnerStrip";
import NextPageCTA from "@/components/blocks/NextPageCTA";
import { AmbientField } from "@/components/three";
import { getArea } from "@/content/areas";
import {
  getPrimaryAssignment,
  adjacentPrimaryAssignments,
} from "@/content/primaryAssignments";
import {
  KVALITETSKLUBB_FOCUS_AREAS,
  KVALITETSKLUBB_PROCESS,
  KVALITETSKLUBB_ROLES,
} from "@/content/kvalitetsklubb";

const Kvalitetsklubb = () => {
  const area = getArea("foreningsutveckling");
  const subpage = area.subpages.find((s) => s.slug === "kvalitetsklubb")!;
  const prev = getPrimaryAssignment("foreningslyftet");
  const { next } = adjacentPrimaryAssignments("foreningslyftet");

  return (
    <div className="min-h-screen bg-background">
      <GlobalNav />
      <AreaShell area={area} subtitle={subpage.title}>
        <SectionBlock
          eyebrow="Vad det är"
          title="SvFF:s stöd för bättre föreningsvardag"
          lead="Kvalitetsklubb gör föreningen lättare att driva: tydliga roller, trygg vardag och arbete som håller när personer byts ut."
          narrow
        >
          <div className="grid gap-6 max-w-prose text-foreground/85 leading-relaxed">
            <p>
              Föreningen får stöd att se vad som fungerar, välja nästa steg och
              följa upp arbetet. GFF finns med som stöd längs vägen.
            </p>
            <p>
              I Föreningslyftet är målet tydligt: minst hälften av föreningarna
              ska arbeta aktivt med Kvalitetsklubb senast 2027.
            </p>
          </div>
        </SectionBlock>

        <SectionBlock
          variant="muted"
          eyebrow="Fyra delar"
          title="Fyra fokusområden"
          lead="Roller, ledare, spelare och stöd runt föreningen behöver fungera samtidigt."
          backdrop={<AmbientField className="opacity-50" />}
        >
          <FocusAreaBlock areas={KVALITETSKLUBB_FOCUS_AREAS} />
        </SectionBlock>

        <SectionBlock
          eyebrow="Vägen dit"
          title="Fem steg från nuläge till certifiering"
          lead="Samma väg för alla, men i föreningens egen takt."
        >
          <KvalitetsklubbProcess steps={KVALITETSKLUBB_PROCESS} />
        </SectionBlock>

        <SectionBlock
          variant="muted"
          eyebrow="Klubb-rollerna"
          title="Tre roller i Kvalitetsklubben"
          lead="Det här är roller som föreningen själv bygger upp."
        >
          <KlubbRolesBlock roles={KVALITETSKLUBB_ROLES} />
          <p className="mt-6 max-w-prose text-small text-muted-foreground">
            Skillnaden: i En bättre väg kan fotbollsutvecklare vara en tjänst
            i satsningen. Här är rollen föreningens egen.
          </p>
        </SectionBlock>

        <SectionBlock
          eyebrow="Tillsammans"
          title="Bakom konceptet"
          lead="SvFF äger modellen. GFF hjälper till. Föreningen gör jobbet i vardagen."
        >
          <PartnerStrip ids={["svff", "gff", "rf-sisu", "foreningar"]} />
        </SectionBlock>
      </AreaShell>
      <NextPageCTA next={next} prev={prev} />
      <Footer />
    </div>
  );
};

export default Kvalitetsklubb;

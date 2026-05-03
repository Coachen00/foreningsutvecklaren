import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import AreaShell from "@/components/blocks/AreaShell";
import SectionBlock from "@/components/blocks/SectionBlock";
import FocusAreaBlock from "@/components/blocks/FocusAreaBlock";
import KvalitetsklubbProcess from "@/components/blocks/KvalitetsklubbProcess";
import KlubbRolesBlock from "@/components/blocks/KlubbRolesBlock";
import PartnerStrip from "@/components/blocks/PartnerStrip";
import NextPageCTA from "@/components/blocks/NextPageCTA";
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
          title="SvFF:s ramverk för föreningsutveckling"
          lead="Kvalitetsklubb är inte en certifiering — det är ett styrsystem. Föreningar går från otydlighet till riktning, från personberoende till struktur, från projekt till långsiktig kapacitet."
          narrow
        >
          <div className="grid gap-6 max-w-prose text-foreground/85 leading-relaxed">
            <p>
              SvFF beskriver Kvalitetsklubb som ett ramverk för effektiv och
              schysst föreningsverksamhet. Föreningen får verktyg, stöd och
              motivation att ta nästa steg — och distriktet stöttar, granskar
              och godkänner längs vägen.
            </p>
            <p>
              För GFF är Kvalitetsklubb det operativa verktyget i
              Föreningslyftet. Mål 2027: minst 50 % av föreningarna i
              Föreningslyftet ska aktivt arbeta i Kvalitetsklubb.
            </p>
          </div>
        </SectionBlock>

        <SectionBlock
          variant="muted"
          eyebrow="Strukturen"
          title="Fyra fokusområden"
          lead="SvFF:s officiella struktur. Tillsammans ringar de in hela föreningsverksamheten — om en del är svag blir helheten ostadig."
        >
          <FocusAreaBlock areas={KVALITETSKLUBB_FOCUS_AREAS} />
        </SectionBlock>

        <SectionBlock
          eyebrow="Vägen dit"
          title="Fem steg från nuläge till certifiering"
          lead="Processen är samma för alla — men takten är föreningens egen. Distriktet stöttar, granskar och godkänner längs vägen."
        >
          <KvalitetsklubbProcess steps={KVALITETSKLUBB_PROCESS} />
        </SectionBlock>

        <SectionBlock
          variant="muted"
          eyebrow="Klubb-rollerna"
          title="Tre roller i Kvalitetsklubben"
          lead="Inte att förväxla med En bättre väg-tjänsterna — detta är de roller som föreningen själv bygger upp internt."
        >
          <KlubbRolesBlock roles={KVALITETSKLUBB_ROLES} />
          <p className="mt-6 max-w-prose text-small text-muted-foreground">
            Skillnaden från En bättre väg-tjänsterna: där är{" "}
            <em>fotbollsutvecklare</em> en tjänst som GFF/SvFF bidrar till
            satsningen med. Här är klubb-rollen något föreningen själv
            bemannar — ofta ideellt eller på del av tjänst.
          </p>
        </SectionBlock>

        <SectionBlock
          eyebrow="Samverkan"
          title="Bakom konceptet"
          lead="Kvalitetsklubb ägs av SvFF. GFF förvaltar det i Göteborg. Föreningen driver arbetet i sin vardag."
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

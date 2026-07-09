import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import AreaShell from "@/components/blocks/AreaShell";
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
import {
  EditorialHero,
  ChapterSection,
  PitchField,
} from "@/components/editorial";

const Kvalitetsklubb = () => {
  const area = getArea("foreningsutveckling");
  const subpage = area.subpages.find((s) => s.slug === "kvalitetsklubb")!;
  const prev = getPrimaryAssignment("foreningslyftet");
  const { next } = adjacentPrimaryAssignments("foreningslyftet");

  return (
    <div className="min-h-screen bg-background">
      <GlobalNav />
      <AreaShell
        area={area}
        subtitle={subpage.title}
        hero={
          <EditorialHero
            eyebrow={`Område ${area.number} · ${area.kicker}`}
            titleTop="Kvalitets"
            titleGold="klubb"
            lead={subpage.heroLead}
            backdrop={<PitchField />}
          />
        }
      >
        <ChapterSection
          id="vad-det-ar"
          number="01"
          eyebrow="Vad det är"
          title="SvFF:s stöd för bättre föreningsvardag"
          lead="Kvalitetsklubb gör föreningen lättare att driva: tydliga roller, trygg vardag och arbete som håller när personer byts ut."
        >
          <div className="mx-auto grid max-w-prose gap-6 leading-relaxed text-foreground/85">
            <p>
              Föreningen får stöd att se vad som fungerar, välja nästa steg och
              följa upp arbetet. GFF finns med som stöd längs vägen.
            </p>
            <p>
              I Föreningslyftet är målet tydligt: minst hälften av föreningarna
              ska arbeta aktivt med Kvalitetsklubb senast 2027.
            </p>
          </div>
        </ChapterSection>

        <div className="relative isolate">
          <div className="absolute inset-0 -z-10">
            <AmbientField className="opacity-50" />
          </div>
          <ChapterSection
            id="fyra-fokusomraden"
            number="02"
            eyebrow="Fyra delar"
            title="Fyra fokusområden"
            lead="Roller, ledare, spelare och stöd runt föreningen behöver fungera samtidigt."
          >
            <FocusAreaBlock areas={KVALITETSKLUBB_FOCUS_AREAS} />
          </ChapterSection>
        </div>

        <ChapterSection
          id="vagen-dit"
          number="03"
          eyebrow="Vägen dit"
          title="Fem steg från nuläge till certifiering"
          lead="Samma väg för alla, men i föreningens egen takt."
        >
          <KvalitetsklubbProcess steps={KVALITETSKLUBB_PROCESS} />
        </ChapterSection>

        <ChapterSection
          id="klubb-rollerna"
          number="04"
          eyebrow="Klubb-rollerna"
          title="Tre roller i Kvalitetsklubben"
          lead="Det här är roller som föreningen själv bygger upp."
        >
          <KlubbRolesBlock roles={KVALITETSKLUBB_ROLES} />
          <p className="mt-6 max-w-prose text-small text-muted-foreground">
            Skillnaden: i En bättre väg kan fotbollsutvecklare vara en tjänst
            i satsningen. Här är rollen föreningens egen.
          </p>
        </ChapterSection>

        <ChapterSection
          id="bakom-konceptet"
          number="05"
          eyebrow="Tillsammans"
          title="Bakom konceptet"
          lead="SvFF äger modellen. GFF hjälper till. Föreningen gör jobbet i vardagen."
        >
          <PartnerStrip ids={["svff", "gff", "rf-sisu", "foreningar"]} />
        </ChapterSection>
      </AreaShell>

      <NextPageCTA next={next} prev={prev} />
      <Footer />
    </div>
  );
};

export default Kvalitetsklubb;

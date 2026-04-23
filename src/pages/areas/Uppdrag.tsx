import { Link } from "react-router-dom";
import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import AreaShell from "@/components/blocks/AreaShell";
import SectionBlock from "@/components/blocks/SectionBlock";
import CoreMissionBlock from "@/components/blocks/CoreMissionBlock";
import ActivityListBlock from "@/components/blocks/ActivityListBlock";
import WorkMethodBlock from "@/components/blocks/WorkMethodBlock";
import ImpactBlock from "@/components/blocks/ImpactBlock";
import PartnerStrip from "@/components/blocks/PartnerStrip";
import NextPageCTA from "@/components/blocks/NextPageCTA";
import { getArea } from "@/content/areas";
import { PRIMARY_ASSIGNMENTS } from "@/content/primaryAssignments";
import { EXTENDED_ACTIVITIES } from "@/content/activities";
import { impactForArea } from "@/content/impact";

const METHOD_STEPS = [
  {
    title: "Närvaro",
    description: "Arbetet börjar där det sker – på träningen, i matchen, hos ledarna.",
  },
  {
    title: "Dialog",
    description: "Samtal som bygger förtroende och gör det möjligt att stötta på riktigt.",
  },
  {
    title: "Struktur",
    description: "Från observation till plan: roller, rytm och uppföljning.",
  },
  {
    title: "Uppföljning",
    description: "Återkoppling, anpassning och långsiktighet – utveckling som håller.",
  },
];

const Uppdrag = () => {
  const area = getArea("uppdrag");
  const next = PRIMARY_ASSIGNMENTS[0];
  const impact = impactForArea("uppdrag");

  return (
    <div className="min-h-screen bg-background">
      <GlobalNav />
      <AreaShell area={area}>
        <SectionBlock
          eyebrow="Kärnuppdraget"
          title="Fyra arbetsformer som bär uppdraget"
          lead="Det här är de återkommande momenten. Allt annat – program, satsningar och samverkan – lutar sig mot att det här görs regelbundet och med omsorg."
        >
          <CoreMissionBlock title="" lead="" />
        </SectionBlock>

        <SectionBlock
          variant="muted"
          eyebrow="Fördjupning"
          title="Utöver kärnuppdraget"
          lead="Längre insatser som kommer ur relationen till föreningen – ofta över en hel säsong eller flera."
        >
          <ActivityListBlock activities={EXTENDED_ACTIVITIES} columns={3} />
          <p className="mt-8 text-sm text-muted-foreground">
            Mer detalj i{" "}
            <Link to="/uppdrag/arbetsuppgifter" className="text-primary hover:underline">
              Arbetsuppgifter i detalj
            </Link>
            .
          </p>
        </SectionBlock>

        <SectionBlock
          eyebrow="Arbetsmetod"
          title="Så här arbetar jag"
          lead="Fyra steg som återkommer oavsett om det handlar om ett ledarsamtal, en kvalitetsklubbsprocess eller en skolinsats."
        >
          <WorkMethodBlock steps={METHOD_STEPS} />
        </SectionBlock>

        <SectionBlock
          variant="muted"
          eyebrow="Ansvarskedjan"
          title="Vem gör vad"
          lead="Uppdraget är ett gemensamt arbete mellan flera aktörer. Här är hur beslut och stöd rör sig mellan nivåerna."
        >
          <PartnerStrip />
          <p className="mt-8 text-sm text-muted-foreground">
            Djupdykning i{" "}
            <Link to="/uppdrag/partners" className="text-primary hover:underline">
              Partners och ansvarskedja
            </Link>
            .
          </p>
        </SectionBlock>

        {impact && (
          <SectionBlock
            eyebrow="Varför"
            title="Därför ser uppdraget ut så här"
            lead="Varje arbetsform har ett syfte bakom sig. Här är det som driver det."
          >
            <ImpactBlock impact={impact} />
          </SectionBlock>
        )}
      </AreaShell>
      <NextPageCTA next={next} label="Första huvuduppdraget" />
      <Footer />
    </div>
  );
};

export default Uppdrag;

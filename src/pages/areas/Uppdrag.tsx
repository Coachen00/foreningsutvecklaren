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
import CommitteeBlock from "@/components/blocks/CommitteeBlock";
import PlanningChainTeaserBlock from "@/components/blocks/PlanningChainTeaserBlock";
import UppdragHubBlock from "@/components/blocks/UppdragHubBlock";
import NextPageCTA from "@/components/blocks/NextPageCTA";
import { getArea } from "@/content/areas";
import { PRIMARY_ASSIGNMENTS } from "@/content/primaryAssignments";
import { EXTENDED_ACTIVITIES } from "@/content/activities";
import { impactForArea } from "@/content/impact";
import { UPPDRAG_HUB_ITEMS } from "@/content/uppdragHub";
import {
  FORENINGSLYFTET_PLANNING_CHAIN,
  FORENINGSLYFTET_PLANNING_OUTCOMES,
  QUALITY_CLUB_PLANNING_FOCUS,
} from "@/content/planningChain";

const METHOD_STEPS = [
  {
    title: "Närvaro",
    description:
      "Arbetet börjar i rätt forum: med föreningens utvecklare, styrelsefunktioner och vid behov i verksamhetsmiljön.",
  },
  {
    title: "Dialog",
    description:
      "Samtal som bygger förtroende, sätter riktning och gör det möjligt att stötta föreningen på riktigt.",
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
          id="hitta-ratt"
          variant="muted"
          eyebrow="Intern karta"
          title="Hitta rätt i uppdraget"
          lead="Uppdragssidan ska vara en hubb, inte en samlingsplats för lösa länkar. Här syns var stödytor, fördjupningar och forum hör hemma."
          split
        >
          <UppdragHubBlock items={UPPDRAG_HUB_ITEMS} />
        </SectionBlock>

        <SectionBlock
          eyebrow="Kärnuppdraget"
          title="Det löpande arbetet"
          lead="Utvecklingsdialogerna är navet. Jag arbetar främst genom föreningens förenings- och fotbollsutvecklare, och direkt eller indirekt med styrelsen i de föreningar som berörs."
        >
          <CoreMissionBlock title="" lead="" />
        </SectionBlock>

        <SectionBlock
          eyebrow="Fördjupning"
          title="Utöver kärnuppdraget"
          lead="Längre insatser som kommer ur relationen till föreningens nyckelpersoner – ofta över en hel säsong eller flera."
        >
          <ActivityListBlock activities={EXTENDED_ACTIVITIES} columns={3} />
          <p className="mt-8 text-sm text-muted-foreground">
            Mer detalj i{" "}
            <Link to="/uppdrag/arbetsuppgifter" className="text-primary hover:underline">
              Arbetsuppgifter i detalj
            </Link>
            . Spelarutbildning som helhet ligger i en{" "}
            <Link to="/uppdrag/spelarutbildning" className="text-primary hover:underline">
              egen sektion
            </Link>
            .
          </p>
        </SectionBlock>

        <SectionBlock
          eyebrow="Arbetsmetod"
          title="Så här arbetar jag"
          lead="Fyra steg som återkommer oavsett om det handlar om en utvecklingsdialog, styrelseförankring, en kvalitetsklubbsprocess eller en skolinsats."
        >
          <WorkMethodBlock steps={METHOD_STEPS} />
        </SectionBlock>

        <SectionBlock
          id="planeringskedja"
          variant="muted"
          eyebrow="Föreningsutveckling som arbetsform"
          title="Från idé till årshjul"
          lead="När uppdraget handlar om föreningsutveckling ska dokumenten hänga ihop. Verksamhetsidé, mål, plan och årshjul blir en styrkedja som gör föreningens utveckling möjlig att leda och följa upp."
        >
          <PlanningChainTeaserBlock
            steps={FORENINGSLYFTET_PLANNING_CHAIN}
            focus={QUALITY_CLUB_PLANNING_FOCUS}
            outcomes={FORENINGSLYFTET_PLANNING_OUTCOMES}
            href="/foreningsutveckling#strategikartan"
          />
        </SectionBlock>

        <SectionBlock
          id="kommitteer"
          eyebrow="Kommittéer och arbetsgrupper"
          title="Forum jag deltar i"
          lead="Två arbetsgrupper som binder ihop strategi och vardag. Inga egna toppkategorier — beskrivs här som del av uppdraget."
        >
          <CommitteeBlock />
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

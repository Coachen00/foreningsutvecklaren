import { Link } from "react-router-dom";
import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import AreaShell from "@/components/blocks/AreaShell";
import CoreMissionBlock from "@/components/blocks/CoreMissionBlock";
import ActivityListBlock from "@/components/blocks/ActivityListBlock";
import WorkMethodBlock from "@/components/blocks/WorkMethodBlock";
import ImpactBlock from "@/components/blocks/ImpactBlock";
import PartnerStrip from "@/components/blocks/PartnerStrip";
import CommitteeBlock from "@/components/blocks/CommitteeBlock";
import PlanningChainTeaserBlock from "@/components/blocks/PlanningChainTeaserBlock";
import UppdragHubBlock from "@/components/blocks/UppdragHubBlock";
import NextPageCTA from "@/components/blocks/NextPageCTA";
import { EditorialHero, ChapterSection, PitchField } from "@/components/editorial";
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
      <AreaShell
        area={area}
        hero={
          <EditorialHero
            eyebrow={`Område ${area.number} · ${area.kicker}`}
            titleTop="Uppdrag,"
            titleGold="styrning och administration"
            lead={
              <>
                {area.heroLead}
                <span className="mt-3 block text-small">{area.heroSupport}</span>
              </>
            }
            backdrop={<PitchField />}
          />
        }
      >
        <ChapterSection
          id="hitta-ratt"
          number="01"
          eyebrow="Karta"
          title="Hitta rätt i uppdraget"
          lead="Börja här när du vill förstå vad rollen gör, vilka spår som finns och var nästa klick leder."
        >
          <UppdragHubBlock items={UPPDRAG_HUB_ITEMS} />
        </ChapterSection>

        <ChapterSection
          number="02"
          eyebrow="Kärnuppdraget"
          title="Det löpande arbetet"
          lead="Kärnan är samtal som leder vidare: med utvecklare, styrelse och föreningar som behöver stöd."
        >
          <CoreMissionBlock title="" lead="" />
        </ChapterSection>

        <ChapterSection
          number="03"
          eyebrow="Mer än samtal"
          title="Utöver kärnuppdraget"
          lead="Vissa frågor kräver längre stöd över en säsong eller flera år."
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
        </ChapterSection>

        <ChapterSection
          number="04"
          eyebrow="Arbetsmetod"
          title="Så här arbetar jag"
          lead="Samma enkla rytm: var nära, lyssna, välj nästa steg och följ upp."
        >
          <WorkMethodBlock steps={METHOD_STEPS} />
        </ChapterSection>

        <ChapterSection
          id="planeringskedja"
          number="05"
          eyebrow="Från idé till vardag"
          title="Från idé till årshjul"
          lead="En bra idé behöver bli mål, plan och årshjul. Annars stannar den i ett dokument."
        >
          <PlanningChainTeaserBlock
            steps={FORENINGSLYFTET_PLANNING_CHAIN}
            focus={QUALITY_CLUB_PLANNING_FOCUS}
            outcomes={FORENINGSLYFTET_PLANNING_OUTCOMES}
            href="/foreningsutveckling#strategikartan"
          />
        </ChapterSection>

        <ChapterSection
          id="kommitteer"
          number="06"
          eyebrow="Kommittéer och arbetsgrupper"
          title="Forum jag deltar i"
          lead="Två forum där beslut, vardag och lärande kopplas ihop."
        >
          <CommitteeBlock />
        </ChapterSection>

        <ChapterSection
          number="07"
          eyebrow="Ansvarskedjan"
          title="Vem gör vad"
          lead="Här syns hur beslut, stöd och genomförande hänger ihop."
        >
          <PartnerStrip />
          <p className="mt-8 text-sm text-muted-foreground">
            Djupdykning i{" "}
            <Link to="/uppdrag/partners" className="text-primary hover:underline">
              Partners och ansvarskedja
            </Link>
            .
          </p>
        </ChapterSection>

        {impact && (
          <ChapterSection
            number="08"
            eyebrow="Varför"
            title="Därför ser uppdraget ut så här"
            lead="Varje arbetsform har ett syfte bakom sig. Här är det som driver det."
          >
            <ImpactBlock impact={impact} />
          </ChapterSection>
        )}
      </AreaShell>
      <NextPageCTA next={next} label="Första huvuduppdraget" />
      <Footer />
    </div>
  );
};

export default Uppdrag;

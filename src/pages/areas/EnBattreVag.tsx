import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import AssignmentShell from "@/components/blocks/AssignmentShell";
import PageWithDepth from "@/components/blocks/PageWithDepth";
import ExpandableBlock from "@/components/blocks/ExpandableBlock";
import AsideRelated from "@/components/blocks/AsideRelated";
import PartnerStrip from "@/components/blocks/PartnerStrip";
import ImpactBlock from "@/components/blocks/ImpactBlock";
import NextPageCTA from "@/components/blocks/NextPageCTA";
import YearWheel from "@/components/blocks/YearWheel";
import { RolePair, DoDontPair } from "@/components/blocks/RolePairBlock";
import GoalsBlock from "@/components/blocks/GoalsBlock";
import CriteriaList from "@/components/blocks/CriteriaList";
import MetricListBlock from "@/components/blocks/MetricListBlock";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { Scene3D } from "@/components/three";
import { MediaFrame } from "@/components/media/MediaFrame";
import {
  adjacentPrimaryAssignments,
  getPrimaryAssignment,
} from "@/content/primaryAssignments";
import { getProgram } from "@/content/programs";
import { impactForArea } from "@/content/impact";
import { YEAR_WHEEL_EN_BATTRE_VAG } from "@/content/yearWheel";
import { EN_BATTRE_VAG_ROLES, SPRAKROR_DO_DONT } from "@/content/roles";
import { EN_BATTRE_VAG_GOALS } from "@/content/goals";
import { EN_BATTRE_VAG_CRITERIA } from "@/content/criteria";
import { EN_BATTRE_VAG_METRICS } from "@/content/metrics";
import { EN_BATTRE_VAG_PROJEKTSTOD } from "@/content/projektstod";
import type { TocSection } from "@/components/blocks/TableOfContents";

const SECTIONS: TocSection[] = [
  { id: "satsningen", title: "Satsningen", level: 2 },
  { id: "mal", title: "Centrala mål", level: 2 },
  { id: "girls-fc", title: "Girls FC — fler tjejer börjar spela", level: 2 },
  { id: "roller", title: "Två roller", level: 2 },
  { id: "arbetsdelar", title: "Fem arbetsdelar", level: 2 },
  { id: "kriterier", title: "Kriterier för att delta", level: 2 },
  { id: "arshjul", title: "Årshjul 2026", level: 2 },
  { id: "gransdragning", title: "Gör / Gör inte", level: 2 },
  { id: "matpunkter", title: "Mätpunkter", level: 2 },
  { id: "samverkan", title: "Tillsammans", level: 2 },
  { id: "stodformer", title: "Stödformer", level: 2 },
  { id: "varfor", title: "Varför satsningen finns", level: 2 },
];

const EnBattreVag = () => {
  const assignment = getPrimaryAssignment("en-battre-vag");
  const { next, prev } = adjacentPrimaryAssignments("en-battre-vag");
  const program = getProgram("en-battre-vag");
  const impact = impactForArea("skola-samverkan");

  return (
    <div className="min-h-screen bg-background">
      <GlobalNav />
      <AssignmentShell assignment={assignment}>
        <PageWithDepth
          toc={SECTIONS}
          aside={
            <AsideRelated
              kicker="Relaterat"
              title="Vidare läsning"
              items={[
                {
                  label: "FU Skola",
                  href: "/fu-skola",
                  hint: "Bron mellan skola och förening",
                },
                {
                  label: "Föreningslyftet",
                  href: "/foreningsutveckling",
                  hint: "Föreningar som håller över tid",
                },
                {
                  label: "Jämställdhet & trygghet",
                  href: "/foreningsutveckling/jamstalldhet-och-trygghet",
                  hint: "Trygg miljö runt barnen",
                },
                {
                  label: "Partners",
                  href: "/uppdrag/partners",
                  hint: "Vem som hjälper till",
                },
              ]}
            />
          }
        >
          {/* SATSNINGEN */}
          <Reveal>
            <ExpandableBlock
              id="satsningen"
              kicker="Satsningen"
              title="Riktade insatser där de behövs mest"
              defaultOpen
              wide
            >
              <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
                <div>
                  <p className="text-lead">
                    En bättre väg ger mer fotboll där behoven är störst.
                  </p>
                  <p className="mt-4">
                    Barn ska få en meningsfull fritid, föreningar ska bli starkare
                    och fler tjejer ska hitta in i spelet.
                  </p>
                  {program && (
                    <p className="mt-4 text-foreground/80">{program.summary}</p>
                  )}
                </div>
                <div className="mx-auto w-full max-w-[18rem] not-prose">
                  <Scene3D
                    model="ball"
                    label="Tredimensionell fotboll som symbol för satsningen En bättre väg"
                  />
                </div>
              </div>
            </ExpandableBlock>
          </Reveal>

          {/* CENTRALA MÅL */}
          <Reveal>
            <ExpandableBlock
              id="mal"
              kicker="Mål"
              title="Centrala mål för satsningen"
              defaultOpen
              wide
            >
              <p>
                GFF:s mål till 2027: fler föreningar i utvalda områden ska få
                stöd, och fler tjejer ska börja spela.
              </p>
              <div className="mt-6 not-prose">
                <GoalsBlock goals={EN_BATTRE_VAG_GOALS} columns={4} />
              </div>
            </ExpandableBlock>
          </Reveal>

          {/* GIRLS FC — case under En bättre väg */}
          <Reveal>
            <ExpandableBlock
              id="girls-fc"
              kicker="Case"
              title="Girls FC — fler tjejer börjar spela"
              defaultOpen
              wide
            >
              <div className="grid gap-8 md:grid-cols-2 md:items-start">
                <div>
                  <p>
                    Girls FC visar hur extra stöd kan bli nya spelare, ledare och
                    gemenskaper.
                  </p>
                  <p className="mt-4">
                    Snart 80 flickor som aldrig spelat fotboll tidigare deltar.
                    Siffran är bara början.
                  </p>
                  <p className="mt-4 text-small text-muted-foreground">
                    Flickfotboll, trygghet och inkludering hänger ihop med sidan om
                    jämställdhet och trygghet.
                  </p>
                </div>
                <div className="not-prose">
                  <MediaFrame chapterLabel="Case · Girls FC" comingSoon />
                </div>
              </div>
            </ExpandableBlock>
          </Reveal>

          {/* ROLLER */}
          <Reveal>
            <ExpandableBlock
              id="roller"
              kicker="Rollerna"
              title="Två tjänster som bär satsningen"
              defaultOpen={false}
              wide
            >
              <p>
                Två roller behövs: en som stärker föreningen runt fotbollen och
                en som stärker det som händer på planen.
              </p>
              <div className="mt-6 not-prose">
                <RolePair roles={EN_BATTRE_VAG_ROLES} />
              </div>
            </ExpandableBlock>
          </Reveal>

          {/* ARBETSDELAR */}
          {program && program.pillars.length > 0 && (
            <Reveal>
              <ExpandableBlock
                id="arbetsdelar"
                kicker="Arbetet"
                title="Fem arbetsdelar"
                defaultOpen={false}
              >
                <p>
                  Fem delar håller ihop stödet från första nuläge till uppföljning.
                </p>
                <StaggerGroup
                  as="ul"
                  className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2"
                >
                  {program.pillars.map((p) => (
                    <StaggerItem as="li" key={p.title}>
                      <p className="text-sm font-semibold text-foreground leading-tight">
                        {p.title}
                      </p>
                      {p.description && (
                        <p className="mt-1 text-small text-muted-foreground leading-relaxed">
                          {p.description}
                        </p>
                      )}
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </ExpandableBlock>
            </Reveal>
          )}

          {/* KRITERIER */}
          <Reveal>
            <ExpandableBlock
              id="kriterier"
              kicker="Kriterier"
              title="Kriterier för att delta"
              defaultOpen={false}
              wide
            >
              <p>
                Grundkraven hjälper stödet hamna där det gör mest nytta.
              </p>
              <div className="mt-6 not-prose">
                <CriteriaList data={EN_BATTRE_VAG_CRITERIA} />
              </div>
            </ExpandableBlock>
          </Reveal>

          {/* ÅRSHJUL */}
          <Reveal>
            <ExpandableBlock
              id="arshjul"
              kicker="Året runt"
              title="Årshjul 2026"
              defaultOpen={false}
              wide
            >
              <p>
                Året går från nuläge till uppföljning. Klicka på en månad för att
                se vad som händer.
              </p>
              <div className="mt-6 not-prose">
                <YearWheel months={YEAR_WHEEL_EN_BATTRE_VAG} />
              </div>
            </ExpandableBlock>
          </Reveal>

          {/* GÖR / GÖR INTE */}
          <Reveal>
            <ExpandableBlock
              id="gransdragning"
              kicker="Rolltydlighet"
              title="Gör — och gör inte"
              defaultOpen={false}
              wide
            >
              <p>
                Språkröret leder arbetet framåt. Gränsen är viktig: föreningen
                ska bli starkare själv, inte beroende av GFF.
              </p>
              <div className="mt-6 not-prose">
                <DoDontPair
                  doGroup={SPRAKROR_DO_DONT.do}
                  dontGroup={SPRAKROR_DO_DONT.dont}
                />
              </div>
            </ExpandableBlock>
          </Reveal>

          {/* MÄTPUNKTER */}
          <Reveal>
            <ExpandableBlock
              id="matpunkter"
              kicker="Uppföljning"
              title="Mätpunkter"
              defaultOpen={false}
              wide
            >
              <p>
                Vi följer både siffror och berättelser för att se om arbetet
                faktiskt flyttar sig.
              </p>
              <div className="mt-6 not-prose">
                <MetricListBlock data={EN_BATTRE_VAG_METRICS} />
              </div>
            </ExpandableBlock>
          </Reveal>

          {/* SAMARBETE */}
          <Reveal>
            <ExpandableBlock
              id="samverkan"
              kicker="Tillsammans"
              title="Detta är ingen enmansinsats"
              defaultOpen={false}
            >
              <p>
                Förbund, kommun, förening och civilsamhälle behöver dra åt samma
                håll.
              </p>
              <div className="mt-5">
                <PartnerStrip
                  ids={["svff", "gff", "goteborgs-stad", "foreningar", "gis"]}
                />
              </div>
            </ExpandableBlock>
          </Reveal>

          {/* STÖDFORMER */}
          <Reveal>
            <ExpandableBlock
              id="stodformer"
              kicker="Finansiering"
              title="Stödformer som kan kopplas"
              defaultOpen={false}
              wide
            >
              <p>
                Rätt stöd kopplas till rätt insats: pengar blir ledare,
                aktiviteter och tydligare arbetssätt.
              </p>
              <div className="mt-6 not-prose">
                <MetricListBlock data={EN_BATTRE_VAG_PROJEKTSTOD} />
              </div>
            </ExpandableBlock>
          </Reveal>

          {/* VARFÖR */}
          <Reveal>
            <ExpandableBlock
              id="varfor"
              kicker="Varför"
              title="Det är därför satsningen finns"
              defaultOpen={false}
            >
              <p>
                Satsningen finns för att fler barn ska få en trygg väg in i
                fotbollen.
              </p>
              {impact && (
                <div className="mt-6">
                  <ImpactBlock impact={impact} />
                </div>
              )}
            </ExpandableBlock>
          </Reveal>
        </PageWithDepth>
      </AssignmentShell>
      <NextPageCTA
        next={next}
        prev={prev}
        label={
          next.id === "en-battre-vag" ? "Tillbaka till starten" : "Nästa uppdrag"
        }
      />
      <Footer />
    </div>
  );
};

export default EnBattreVag;

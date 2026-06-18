import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import AssignmentShell from "@/components/blocks/AssignmentShell";
import PageWithDepth from "@/components/blocks/PageWithDepth";
import ExpandableBlock from "@/components/blocks/ExpandableBlock";
import AsideRelated from "@/components/blocks/AsideRelated";
import PartnerStrip from "@/components/blocks/PartnerStrip";
import ImpactBlock from "@/components/blocks/ImpactBlock";
import NextPageCTA from "@/components/blocks/NextPageCTA";
import PriorityLadder from "@/components/blocks/PriorityLadder";
import MetricListBlock from "@/components/blocks/MetricListBlock";
import EffectChain from "@/components/blocks/EffectChain";
import PlanningChainBlock from "@/components/blocks/PlanningChainBlock";
import {
  adjacentPrimaryAssignments,
  getPrimaryAssignment,
} from "@/content/primaryAssignments";
import { programsByArea } from "@/content/programs";
import { impactForArea } from "@/content/impact";
import { PRIORITY_LADDER } from "@/content/priorities";
import { FORENINGSLYFTET_METRICS } from "@/content/metrics";
import { FORENINGSLYFTET_EFFECT_CHAIN } from "@/content/effectChain";
import {
  FORENINGSLYFTET_PLANNING_CHAIN,
  FORENINGSLYFTET_PLANNING_OUTCOMES,
  QUALITY_CLUB_PLANNING_FOCUS,
} from "@/content/planningChain";
import type { TocSection } from "@/components/blocks/TableOfContents";

const SECTIONS: TocSection[] = [
  { id: "vad", title: "Vad är Föreningslyftet?", level: 2 },
  { id: "vision", title: "Visionen bakom", level: 2 },
  { id: "tre-arbetssatt", title: "Tre arbetssätt", level: 2 },
  { id: "prioritering", title: "Prioriteringstrappa", level: 2 },
  { id: "effektlogik", title: "Så ser vi om det fungerar", level: 2 },
  { id: "strategikartan", title: "Planeringskedjan", level: 2 },
  { id: "samverkan", title: "Tillsammans", level: 2 },
  { id: "matpunkter", title: "Det här följs upp", level: 2 },
  { id: "uppfoljning", title: "Hur det följs upp", level: 2 },
  { id: "faq", title: "Vanliga frågor", level: 2 },
];

const Foreningslyftet = () => {
  const assignment = getPrimaryAssignment("foreningslyftet");
  const { next, prev } = adjacentPrimaryAssignments("foreningslyftet");
  const impact = impactForArea("foreningsutveckling");
  const programs = programsByArea("foreningsutveckling");

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
                  label: "Kvalitetsklubb (djupdyk)",
                  href: "/foreningsutveckling/kvalitetsklubb",
                  hint: "Tolv delar som gör föreningen lättare att driva",
                },
                {
                  label: "Jämställdhet & trygghet",
                  href: "/foreningsutveckling/jamstalldhet-och-trygghet",
                  hint: "Trygg miljö runt barnen",
                },
                {
                  label: "Spelarutbildning",
                  href: "/uppdrag/spelarutbildning",
                  hint: "SUP, Fotbollslyftet och futsal",
                },
                {
                  label: "En bättre väg",
                  href: "/en-battre-vag",
                  hint: "Riktat stöd där behoven är störst",
                },
              ]}
            />
          }
        >
          <ExpandableBlock
            id="vad"
            kicker="Översikt"
            title="Vad är Föreningslyftet?"
            defaultOpen
            className="animate-fade-up animate-delay-100"
          >
            <p className="text-lead">
              Föreningslyftet hjälper föreningar gå från brandsläckning till
              tydliga arbetssätt.
            </p>
            <p className="mt-4">
              Kvalitetsklubb gör vardagen tydligare. Matchklimat bygger
              kulturen runt matchen. FU i förening ger riktat stöd där det
              behövs mest.
            </p>
          </ExpandableBlock>

          <ExpandableBlock
            id="vision"
            kicker="Riktningen"
            title="Visionen bakom — Nationalsporten, för alla överallt"
            defaultOpen={false}
            className="animate-fade-up animate-delay-150"
          >
            <p>
              SvFF:s vision är enkel: fotboll ska vara möjlig för alla,
              överallt. Då behöver föreningar som orkar hålla över tid.
            </p>
            <p className="mt-4">
              Föreningslyftet är GFF:s sätt att göra den visionen praktisk:
              tydligare roller, bättre ledarskap och fler som vill stanna.
            </p>
          </ExpandableBlock>

          <ExpandableBlock
            id="tre-arbetssatt"
            kicker="Tre spår"
            title="Tre arbetssätt"
            defaultOpen
          >
            <p>
              En förening kan börja där behovet är störst.
            </p>

            <div className="mt-6 space-y-2">
              {programs.map((program) => (
                <ExpandableBlock
                  key={program.id}
                  kicker={
                    program.id === "kvalitetsklubb"
                      ? "Strukturen"
                      : program.id === "matchklimat"
                      ? "Kulturen"
                      : "Insatsen"
                  }
                  title={program.name}
                  defaultOpen={program.id === "kvalitetsklubb"}
                >
                  <p className="text-lead">{program.summary}</p>
                  {program.pillars.length > 0 && (
                    <>
                      <p className="mt-5 mb-3 font-mono text-micro uppercase tracking-wider text-muted-foreground">
                        Arbetsdelar · {program.pillars.length} områden
                      </p>
                      <ul
                        className="grid gap-x-6 gap-y-2 sm:grid-cols-2"
                        role="list"
                      >
                        {program.pillars.slice(0, 6).map((p) => (
                          <li key={p.title} className="text-small">
                            <span className="font-medium text-foreground">
                              {p.title}
                            </span>
                            {p.description && (
                              <span className="text-muted-foreground">
                                {" – "}
                                {p.description}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                      {program.pillars.length > 6 && (
                        <p className="mt-3 font-mono text-micro uppercase tracking-wider text-muted-foreground">
                          +{program.pillars.length - 6} fler
                        </p>
                      )}
                    </>
                  )}
                  {program.path && (
                    <p className="mt-5">
                      <a
                        href={program.path}
                        className="font-mono text-micro uppercase tracking-wider text-primary hover:text-primary/70 transition-colors"
                      >
                        Fördjupning →
                      </a>
                    </p>
                  )}
                </ExpandableBlock>
              ))}
            </div>
          </ExpandableBlock>

          <ExpandableBlock
            id="prioritering"
            kicker="När allt känns viktigt"
            title="Prioriteringstrappan — när allt känns viktigt"
            defaultOpen={false}
            wide
          >
            <p>
              När allt känns viktigt visar trappan vad som behöver göras först.
            </p>
            <div className="mt-6 not-prose">
              <PriorityLadder levels={PRIORITY_LADDER} />
            </div>
          </ExpandableBlock>

          <ExpandableBlock
            id="effektlogik"
            kicker="Bevis på arbete"
            title="Så ser vi om det fungerar"
            defaultOpen={false}
            wide
          >
            <p>
              Resurser in, arbete görs, resultat syns, effekt stannar.
              Det här hjälper oss skilja mellan det som händer direkt och det
              som faktiskt blir kvar i föreningen.
            </p>
            <div className="mt-6 not-prose">
              <EffectChain stages={FORENINGSLYFTET_EFFECT_CHAIN} />
            </div>
          </ExpandableBlock>

          <ExpandableBlock
            id="strategikartan"
            kicker="Plan till vardag"
            title="Från verksamhetsidé till årshjul"
            defaultOpen
            wide
          >
            <p>
              En idé behöver bli mål, plan och årshjul. Då går arbetet att
              leda, följa upp och fortsätta även när vardagen blir rörig.
            </p>
            <div className="mt-6 not-prose">
              <PlanningChainBlock
                steps={FORENINGSLYFTET_PLANNING_CHAIN}
                focus={QUALITY_CLUB_PLANNING_FOCUS}
                outcomes={FORENINGSLYFTET_PLANNING_OUTCOMES}
              />
            </div>
          </ExpandableBlock>

          <ExpandableBlock
            id="samverkan"
            kicker="Vilka bär arbetet"
            title="Tillsammans"
            defaultOpen={false}
          >
            <p>
              Föreningslyftet lever i mötet mellan förening, förbund och
              utbildningsstöd. Ingen kan bära det själv.
            </p>
            <div className="mt-5">
              <PartnerStrip ids={["gff", "svff", "rf-sisu", "foreningar", "gis"]} />
            </div>
          </ExpandableBlock>

          <ExpandableBlock
            id="matpunkter"
            kicker="Uppföljning"
            title="Det här följs över tid"
            defaultOpen={false}
            wide
          >
            <p>
              Vi följer både siffror och berättelser: vad som händer, vad som
              fastnar och vad föreningen själv klarar nästa gång.
            </p>
            <div className="mt-6 not-prose">
              <MetricListBlock data={FORENINGSLYFTET_METRICS} />
            </div>
          </ExpandableBlock>

          <ExpandableBlock
            id="uppfoljning"
            kicker="Effekt"
            title="Hur det följs upp"
            defaultOpen={false}
          >
            <p>
              Det syns i vardagen: på träningen, runt matchen och i hur
              föreningen organiserar sig.
            </p>
            {impact && (
              <div className="mt-6">
                <ImpactBlock impact={impact} />
              </div>
            )}
          </ExpandableBlock>

          <ExpandableBlock
            id="faq"
            kicker="FAQ"
            title="Vanliga frågor"
            defaultOpen={false}
          >
            <div className="space-y-5">
              <div>
                <p className="font-medium text-foreground">
                  Måste en förening göra alla tre spåren?
                </p>
                <p className="mt-1 text-muted-foreground">
                  Nej. Varje spår står på egna ben och kan startas där behovet
                  är störst. Många börjar med Kvalitetsklubb för att få
                  ordning på arbetet.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Hur lång tid tar Kvalitetsklubb?
                </p>
                <p className="mt-1 text-muted-foreground">
                  Det är en resa, inte en kurs. Första certifieringen tar ofta
                  12–18 månader.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Vad kostar det?
                </p>
                <p className="mt-1 text-muted-foreground">
                  Stödet i sig är subventionerat genom GFF, SvFF och RF-SISU.
                  Föreningens egen tid är den största investeringen.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Hur hänger det ihop med jämställdhet och trygghet?
                </p>
                <p className="mt-1 text-muted-foreground">
                  Det går inte att skilja på. Värdegrund, jämställdhet och
                  trygg miljö är genomgående teman i alla tre spåren — och de
                  fördjupas i en{" "}
                  <a
                    href="/foreningsutveckling/jamstalldhet-och-trygghet"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    egen sektion
                  </a>
                  .
                </p>
              </div>
            </div>
          </ExpandableBlock>
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

export default Foreningslyftet;

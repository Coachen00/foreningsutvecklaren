import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/blocks/Breadcrumb";
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
import StrategiKarta from "@/components/blocks/StrategiKarta";
import {
  adjacentPrimaryAssignments,
  getPrimaryAssignment,
} from "@/content/primaryAssignments";
import { programsByArea } from "@/content/programs";
import { impactForArea } from "@/content/impact";
import { PRIORITY_LADDER } from "@/content/priorities";
import { FORENINGSLYFTET_METRICS } from "@/content/metrics";
import { FORENINGSLYFTET_EFFECT_CHAIN } from "@/content/effectChain";
import { FORENINGSLYFTET_KPI } from "@/content/strategikarta";
import type { TocSection } from "@/components/blocks/TableOfContents";

const SECTIONS: TocSection[] = [
  { id: "vad", title: "Vad är Föreningslyftet?", level: 2 },
  { id: "vision", title: "Visionen bakom", level: 2 },
  { id: "tre-arbetssatt", title: "Tre arbetssätt", level: 2 },
  { id: "prioritering", title: "Prioriteringstrappa", level: 2 },
  { id: "effektlogik", title: "Effektlogiken", level: 2 },
  { id: "strategikartan", title: "Strategikartan", level: 2 },
  { id: "samverkan", title: "Samverkan", level: 2 },
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
      <Breadcrumb />
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
                  hint: "Tolv arbetsdelar, struktur och kvalitetsstämpel",
                },
                {
                  label: "Jämställdhet & trygghet",
                  href: "/foreningslyftet/jamstalldhet-och-trygghet",
                  hint: "Värdegrund som genomsyrar arbetet",
                },
                {
                  label: "Spelarutbildning",
                  href: "/uppdrag/spelarutbildning",
                  hint: "SUP, Fotbollslyftet och futsal",
                },
                {
                  label: "En bättre väg",
                  href: "/en-battre-vag",
                  hint: "Nationell satsning, lokalt förankrad",
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
              Föreningslyftet samlar tre sammanhängande arbetssätt för att
              flytta föreningar från ad hoc till medveten organisation.
            </p>
            <p className="mt-4">
              Det är inte en enskild kurs eller ett tidsbegränsat projekt – det
              är en pågående resa där struktur, ledarskap och kultur byggs
              parallellt. Kvalitetsklubb bygger strukturen. Matchklimat bygger
              kulturen runt matchen. FU i förening är den riktade insatsen där
              den behövs mest.
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
              SvFF:s vision <em>"Nationalsporten – för alla överallt"</em> är
              fonden mot vilket allt arbete vägs. Föreningar är grunden för
              svensk fotboll, och starka, välorganiserade föreningar är
              avgörande för att utveckla spelare, ledare, resurser och
              samhället i stort.
            </p>
            <p className="mt-4">
              En stark förening har en tydlig riktning, demokrati och
              organisation, samt förmåga att rekrytera, utveckla och behålla
              ledare och spelare. Föreningslyftet är GFF:s lokala översättning
              av den visionen — och förändringsresan{" "}
              <em>Starkare föreningar</em> är dess motor.
            </p>
          </ExpandableBlock>

          <ExpandableBlock
            id="tre-arbetssatt"
            kicker="Tre spår"
            title="Tre arbetssätt"
            defaultOpen={false}
          >
            <p>
              Spåren är fristående men förstärker varandra. En förening kan
              börja på vilket spår som helst beroende på behov.
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
                  defaultOpen={false}
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
            kicker="Arbetslogik"
            title="Prioriteringstrappan — när allt känns viktigt"
            defaultOpen={false}
            wide
          >
            <p>
              Språkrörets vardag är full av legitima krav som drar i olika
              riktningar. Trappan är hjälpmedlet för att veta vad som ska
              göras först — och vad som ska ifrågasättas, delegeras eller
              tidsbegränsas.
            </p>
            <div className="mt-6 not-prose">
              <PriorityLadder levels={PRIORITY_LADDER} />
            </div>
          </ExpandableBlock>

          <ExpandableBlock
            id="effektlogik"
            kicker="Bevis på arbete"
            title="Effektlogiken — fyra steg"
            defaultOpen={false}
            wide
          >
            <p>
              Resurser in, arbete görs, resultat syns, effekt stannar.
              Effektlogiken är sättet att bevisa att arbetet faktiskt fungerar
              — och att skilja mellan det som syns direkt och det som blir
              kvar över tid.
            </p>
            <div className="mt-6 not-prose">
              <EffectChain stages={FORENINGSLYFTET_EFFECT_CHAIN} />
            </div>
          </ExpandableBlock>

          <ExpandableBlock
            id="strategikartan"
            kicker="Nationellt → lokalt"
            title="Strategikartan"
            defaultOpen={false}
            wide
          >
            <p>
              Föreningslyftet hänger inte i luften. Det är GFF:s lokala
              översättning av SvFF:s nationella förändringsresor — samma
              riktning, lokal verkstad.
            </p>
            <div className="mt-6 not-prose">
              <StrategiKarta />
            </div>
            <div className="mt-8 not-prose">
              <p className="mb-4 font-mono text-micro uppercase tracking-wider text-muted-foreground">
                Konkret KPI · Verksamhetsplan 2026–27
              </p>
              <article className="flex flex-col gap-4 rounded-md border border-border bg-card p-7 sm:flex-row sm:items-start sm:gap-8">
                <div className="shrink-0">
                  <p
                    className="font-mono leading-none tracking-tight text-foreground"
                    style={{
                      fontSize: "clamp(2.75rem, 5vw, 3.5rem)",
                      fontWeight: 600,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {FORENINGSLYFTET_KPI.value}
                  </p>
                  <p className="mt-2 font-mono text-micro uppercase tracking-wider text-primary">
                    {FORENINGSLYFTET_KPI.unit}
                  </p>
                </div>
                <div className="min-w-0">
                  <h4 className="font-serif text-subhead font-semibold leading-snug text-foreground">
                    {FORENINGSLYFTET_KPI.title}
                  </h4>
                  <p className="mt-2 max-w-prose text-base leading-relaxed text-muted-foreground">
                    {FORENINGSLYFTET_KPI.description}
                  </p>
                  <p className="mt-4 font-mono text-micro uppercase tracking-wider text-muted-foreground">
                    Senast 2027
                  </p>
                </div>
              </article>
            </div>
          </ExpandableBlock>

          <ExpandableBlock
            id="samverkan"
            kicker="Vilka bär arbetet"
            title="Samverkan"
            defaultOpen={false}
          >
            <p>
              Föreningslyftet lever i mötet mellan förening, förbund och
              utbildningsstöd. Ingen enskild aktör kan bära det själv.
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
              Föreningsutveckling mäts både i organisation och i kultur.
              Indikatorerna nedan kommer från GFF:s verksamhetsplan 2026–27 och
              kompletteras av kvalitativa lärdomar från arbetet i föreningarna.
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
              När de tre spåren rullar ihop syns det i vardagen — i träningar, i
              matcher och i hur klubben organiseras. Uppföljningen kombinerar
              data och berättelser, så att rörelsen kan beskrivas både i
              nyckeltal och i kultur.
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
                  struktur på plats.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Hur lång tid tar Kvalitetsklubb?
                </p>
                <p className="mt-1 text-muted-foreground">
                  Det är en pågående resa, inte en kurs. Första certifieringen
                  är vanligen 12–18 månader, sedan förvaltas arbetet vidare år
                  för år.
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
                    href="/foreningslyftet/jamstalldhet-och-trygghet"
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
      <NextPageCTA next={next} prev={prev} />
      <Footer />
    </div>
  );
};

export default Foreningslyftet;

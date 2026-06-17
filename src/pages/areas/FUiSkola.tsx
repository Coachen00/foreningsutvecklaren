import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import AssignmentShell from "@/components/blocks/AssignmentShell";
import PageWithDepth from "@/components/blocks/PageWithDepth";
import ExpandableBlock from "@/components/blocks/ExpandableBlock";
import AsideRelated from "@/components/blocks/AsideRelated";
import PartnerStrip from "@/components/blocks/PartnerStrip";
import ImpactBlock from "@/components/blocks/ImpactBlock";
import NextPageCTA from "@/components/blocks/NextPageCTA";
import CriteriaList from "@/components/blocks/CriteriaList";
import MetricListBlock from "@/components/blocks/MetricListBlock";
import GoalsBlock from "@/components/blocks/GoalsBlock";
import {
  adjacentPrimaryAssignments,
  getPrimaryAssignment,
} from "@/content/primaryAssignments";
import { getProgram } from "@/content/programs";
import { impactForArea } from "@/content/impact";
import { FOTBOLLSPROFIL_CRITERIA } from "@/content/criteria";
import { FU_SKOLA_METRICS } from "@/content/metrics";
import {
  FOTBOLLSPROFIL_DEFINITION,
  FOTBOLLSPROFIL_GOALS,
} from "@/content/fotbollsprofil";
import type { TocSection } from "@/components/blocks/TableOfContents";

const SECTIONS: TocSection[] = [
  { id: "arbetet", title: "Arbetet", level: 2 },
  { id: "spar", title: "Två huvudspår", level: 2 },
  { id: "fotbollsprofil-mal", title: "Vad en fotbollsprofil är", level: 2 },
  { id: "relationsbyggande", title: "Relationsbyggande", level: 2 },
  { id: "arbetsdelar", title: "Nio arbetsdelar", level: 2 },
  { id: "kriterier", title: "Kriterier för fotbollsprofil", level: 2 },
  { id: "aktorer", title: "Aktörsmatris", level: 2 },
  { id: "matpunkter", title: "Det här följs upp", level: 2 },
  { id: "samverkan", title: "Tillsammans", level: 2 },
  { id: "effekt", title: "Därför ett huvuduppdrag", level: 2 },
];

interface ActorRow {
  actor: string;
  role: string;
  description: string;
}

const ACTOR_ROWS: ActorRow[] = [
  {
    actor: "GFF",
    role: "Lokal huvudman",
    description:
      "Ansvarar för programmet i distriktet — samordnar projektledning, utbildning och uppföljning.",
  },
  {
    actor: "SvFF",
    role: "Strategisk ägare",
    description:
      "Sätter riktning och utbildningsstöd för fotboll i skolan.",
  },
  {
    actor: "RF-SISU Västra Götaland",
    role: "Operativ partner",
    description:
      "Bidrar med utbildnings- och utvecklingsstöd till föreningsliv och skola.",
  },
  {
    actor: "Göteborgs Stad",
    role: "Strategisk partner",
    description:
      "Idrotts- och föreningsförvaltningen samt skolförvaltningen gör det möjligt för skolor och föreningar att arbeta ihop.",
  },
  {
    actor: "Föreningar",
    role: "Mottagare",
    description:
      "Genomför aktiviteter, tar emot elever och håller i fotbollspassen.",
  },
  {
    actor: "Skolor",
    role: "Mottagare",
    description:
      "Deltar i programmet — erbjuder tid i schemat och samarbetar med föreningar.",
  },
  {
    actor: "GIS",
    role: "Strategisk partner",
    description:
      "Göteborgs institut för samhällsansvar bidrar med kompetens inom socialt ansvar och inkludering.",
  },
];

const FUiSkola = () => {
  const assignment = getPrimaryAssignment("fu-skola");
  const { next, prev } = adjacentPrimaryAssignments("fu-skola");
  const program = getProgram("fu-i-skola");
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
                  label: "En bättre väg",
                  href: "/en-battre-vag",
                  hint: "Riktad samhällsbärande satsning",
                },
                {
                  label: "Föreningslyftet",
                  href: "/foreningsutveckling",
                  hint: "Strukturen som tar emot eleverna",
                },
                {
                  label: "Spelarutbildning",
                  href: "/uppdrag/spelarutbildning",
                  hint: "SUP, Fotbollslyftet och futsal",
                },
                {
                  label: "Partners",
                  href: "/uppdrag/partners",
                  hint: "Vilka som bär arbetet tillsammans",
                },
              ]}
            />
          }
        >
          {/* ARBETET */}
          <ExpandableBlock
            id="arbetet"
            kicker="Översikt"
            title="Så här rullar FU Skola"
            defaultOpen
            className="animate-fade-up animate-delay-100"
          >
            <p className="text-lead">
              Skolan är platsen där barnen redan är. Därifrån byggs bron in i
              föreningslivet.
            </p>
            {program && <p className="mt-4">{program.summary}</p>}
            <p className="mt-4">
              FU Skola ska inte ses som en extra aktivitet, utan som ett sätt
              att integrera fysisk aktivitet och värdegrundsarbete i skolans
              vardag — och en konkret väg in för barn som annars aldrig hittar
              till organiserad idrott.
            </p>
          </ExpandableBlock>

          {/* TVÅ HUVUDSPÅR */}
          <ExpandableBlock
            id="spar"
            kicker="Två spår"
            title="Skolbollen och Fotbollsprofil åk 7–9"
            defaultOpen
            wide
            className="animate-fade-up animate-delay-150"
          >
            <p>
              SvFF erbjuder två huvudspår för skolor — ett för bredd och
              rörelse, ett för fördjupning och spelarutbildning.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 not-prose">
              <article className="border border-border bg-card p-6">
                <p className="font-mono text-micro uppercase tracking-wider text-primary">
                  Bredd
                </p>
                <h3 className="mt-2 font-serif text-subhead font-semibold text-foreground">
                  Skolbollen
                </h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/80">
                  Ett rörelseprogram med bollspel och lek som hjälper lärare
                  och elever att vara aktiva under skoldagen. Lågt
                  trösklar, stor räckvidd.
                </p>
                <ul className="mt-4 space-y-1.5 text-small text-muted-foreground" role="list">
                  <li>· Inga särskilda lärarkrav</li>
                  <li>· Material och stöd via SvFF</li>
                  <li>· Passar alla stadier</li>
                </ul>
              </article>
              <article className="border border-border bg-card p-6">
                <p className="font-mono text-micro uppercase tracking-wider text-primary">
                  Fördjupning
                </p>
                <h3 className="mt-2 font-serif text-subhead font-semibold text-foreground">
                  Fotbollsprofil åk 7–9
                </h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/80">
                  Fotbollsprofilerad undervisning för högstadiet som följer
                  SvFF:s spelarutbildningsplan. Kräver lärare med
                  fotbollsutbildning och samarbete med förening.
                </p>
                <ul className="mt-4 space-y-1.5 text-small text-muted-foreground" role="list">
                  <li>· Minst två fotbollspass per vecka i schemat</li>
                  <li>· Utbildade lärare</li>
                  <li>· Samverkan med närliggande förening</li>
                </ul>
              </article>
            </div>
          </ExpandableBlock>

          {/* FOTBOLLSPROFIL — DEFINITION & MÅL */}
          <ExpandableBlock
            id="fotbollsprofil-mal"
            kicker={FOTBOLLSPROFIL_DEFINITION.eyebrow}
            title={FOTBOLLSPROFIL_DEFINITION.title}
            defaultOpen={false}
            wide
          >
            <p className="text-lead">{FOTBOLLSPROFIL_DEFINITION.lead}</p>
            <p className="mt-4">{FOTBOLLSPROFIL_DEFINITION.body}</p>
            <p className="mt-4">
              <span className="font-mono text-micro uppercase tracking-wider text-primary">
                {FOTBOLLSPROFIL_DEFINITION.purposeLabel}
              </span>
              <span className="mt-1 block text-foreground/80">
                {FOTBOLLSPROFIL_DEFINITION.purpose}
              </span>
            </p>
            <div className="mt-6 not-prose">
              <GoalsBlock goals={FOTBOLLSPROFIL_GOALS} columns={3} />
            </div>
          </ExpandableBlock>

          {/* RELATIONSBYGGANDE */}
          <ExpandableBlock
            id="relationsbyggande"
            kicker="Arbetssätt"
            title="Relationsbyggande — kom ut med bollsäcken"
            defaultOpen={false}
          >
            <p>
              Skola och förening bärs av relationer, inte av material. Att själv komma
              ut till skolan med bollsäcken — leda ett pass, möta lärare och
              elever på plats — bygger förtroende på ett sätt som utskickat
              material aldrig gör.
            </p>
            <p className="mt-4">
              Att &bdquo;kasta dit&rdquo; bollar och affischer ger sällan
              effekt. Den fysiska närvaron är det som gör att skolan vill
              fortsätta — och som öppnar dörren för ett fast samarbete med
              närliggande förening.
            </p>
          </ExpandableBlock>

          {/* ARBETSDELAR */}
          {program && program.pillars.length > 0 && (
            <ExpandableBlock
              id="arbetsdelar"
              kicker="Arbetet"
              title="Nio arbetsdelar"
              defaultOpen={false}
            >
              <p>
                Arbetsdelarna håller arbetet igång — från onboarding av nya
                skolor till uppföljning över läsår.
              </p>
              <ul
                className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2"
                role="list"
              >
                {program.pillars.map((p) => (
                  <li key={p.title}>
                    <p className="text-sm font-semibold text-foreground leading-tight">
                      {p.title}
                    </p>
                    {p.description && (
                      <p className="mt-1 text-small text-muted-foreground leading-relaxed">
                        {p.description}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </ExpandableBlock>
          )}

          {/* KRITERIER */}
          <ExpandableBlock
            id="kriterier"
            kicker="Kriterier"
            title="Kriterier för fotbollsprofil"
            defaultOpen={false}
            wide
          >
            <p>
              Skolor som vill starta en fotbollsprofil i åk 7–9 behöver
              uppfylla SvFF:s grundkrav. Distriktsförbundet beslutar om
              profilen får behållas över tid.
            </p>
            <div className="mt-6 not-prose">
              <CriteriaList data={FOTBOLLSPROFIL_CRITERIA} />
            </div>
          </ExpandableBlock>

          {/* AKTÖRSMATRIS */}
          <ExpandableBlock
            id="aktorer"
            kicker="Vem gör vad"
            title="Aktörsmatris"
            defaultOpen={false}
            wide
          >
            <p>
              Arbetet korsar flera huvudmän. Varje part fyller en egen lucka —
              det är själva poängen med samarbetet.
            </p>
            <div className="mt-6 overflow-hidden rounded-md border border-border not-prose">
              <table className="w-full text-left text-sm">
                <thead className="bg-background">
                  <tr className="border-b border-border">
                    <th
                      scope="col"
                      className="px-5 py-3 font-mono text-micro uppercase tracking-wider text-muted-foreground"
                    >
                      Aktör
                    </th>
                    <th
                      scope="col"
                      className="hidden px-5 py-3 font-mono text-micro uppercase tracking-wider text-muted-foreground sm:table-cell"
                    >
                      Roll
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 font-mono text-micro uppercase tracking-wider text-muted-foreground"
                    >
                      Beskrivning
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-card">
                  {ACTOR_ROWS.map((row) => (
                    <tr key={row.actor} className="align-top">
                      <th
                        scope="row"
                        className="px-5 py-4 font-semibold text-foreground"
                      >
                        {row.actor}
                        <span className="block font-mono text-micro uppercase tracking-wider text-primary sm:hidden mt-1">
                          {row.role}
                        </span>
                      </th>
                      <td className="hidden px-5 py-4 text-muted-foreground sm:table-cell">
                        <span className="font-mono text-micro uppercase tracking-wider text-primary">
                          {row.role}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-foreground/80 leading-relaxed">
                        {row.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ExpandableBlock>

          {/* MÄTPUNKTER */}
          <ExpandableBlock
            id="matpunkter"
            kicker="Uppföljning"
            title="Det här följs upp"
            defaultOpen={false}
            wide
          >
            <p>
              Mätpunkterna kopplas till SvFF:s mål om världsledande
              spelarutbildning och GFF:s lokala plan för fotboll i skolan.
            </p>
            <div className="mt-6 not-prose">
              <MetricListBlock data={FU_SKOLA_METRICS} />
            </div>
          </ExpandableBlock>

          {/* SAMVERKAN */}
          <ExpandableBlock
            id="samverkan"
            kicker="Samverkan"
            title="Alla led behövs"
            defaultOpen={false}
          >
            <p>
              Arbetet korsar flera huvudmän. Varje part fyller en egen lucka —
              det är själva poängen med samarbetet.
            </p>
            <div className="mt-5">
              <PartnerStrip
                ids={[
                  "gff",
                  "svff",
                  "rf-sisu",
                  "goteborgs-stad",
                  "foreningar",
                  "skolor",
                ]}
              />
            </div>
          </ExpandableBlock>

          {/* EFFEKT */}
          <ExpandableBlock
            id="effekt"
            kicker="Effekt"
            title="Därför är FU Skola ett huvuduppdrag"
            defaultOpen={false}
          >
            <p>
              Skolan är platsen där alla barn finns. När bron till
              föreningslivet fungerar når fotbollen barn som annars aldrig
              hittar in.
            </p>
            {impact && (
              <div className="mt-6">
                <ImpactBlock impact={impact} />
              </div>
            )}
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

export default FUiSkola;

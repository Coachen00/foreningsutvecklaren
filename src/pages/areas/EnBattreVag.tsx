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
import type { TocSection } from "@/components/blocks/TableOfContents";

const SECTIONS: TocSection[] = [
  { id: "satsningen", title: "Satsningen", level: 2 },
  { id: "mal", title: "Centrala mål", level: 2 },
  { id: "girls-fc", title: "Girls FC — flickfotboll i prioriterade områden", level: 2 },
  { id: "roller", title: "Två roller", level: 2 },
  { id: "arbetsdelar", title: "Fem arbetsdelar", level: 2 },
  { id: "kriterier", title: "Kriterier för att delta", level: 2 },
  { id: "arshjul", title: "Årshjul 2026", level: 2 },
  { id: "gransdragning", title: "Gör / Gör inte", level: 2 },
  { id: "matpunkter", title: "Mätpunkter", level: 2 },
  { id: "samverkan", title: "Samverkan", level: 2 },
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
                  hint: "Långsiktig föreningsförflyttning",
                },
                {
                  label: "Jämställdhet & trygghet",
                  href: "/foreningslyftet/jamstalldhet-och-trygghet",
                  hint: "Värdegrund som genomsyrar arbetet",
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
          {/* SATSNINGEN */}
          <ExpandableBlock
            id="satsningen"
            kicker="Satsningen"
            title="Riktade insatser där de behövs mest"
            defaultOpen
            className="animate-fade-up animate-delay-100"
          >
            <p className="text-lead">
              En bättre väg är SvFF:s och regeringens riktade satsning på
              fotbollens närvaro i prioriterade områden — lokalt genomförd i
              Göteborg.
            </p>
            <p className="mt-4">
              Satsningen får stöd av Riksidrottsförbundet, Folksam, ICA och
              Svenska Spel. Syftet är att skapa meningsfulla fritidsaktiviteter
              för barn och unga i områden som polisen klassar som särskilt
              utsatta — och att bygga en hållbar struktur runt fotbollen som
              håller över tid.
            </p>
            {program && (
              <p className="mt-4 text-foreground/80">{program.summary}</p>
            )}
          </ExpandableBlock>

          {/* CENTRALA MÅL */}
          <ExpandableBlock
            id="mal"
            kicker="Mål"
            title="Centrala mål för satsningen"
            defaultOpen
            wide
            className="animate-fade-up animate-delay-150"
          >
            <p>
              SvFF:s nationella målbild förstärks av GFF:s lokala
              verksamhetsplan: merparten av föreningarna i prioriterade
              områden ska ta del av GFF:s stöd senast 2027, och fler tjejer
              ska spela fotboll i prioriterade områden.
            </p>
            <div className="mt-6 not-prose">
              <GoalsBlock goals={EN_BATTRE_VAG_GOALS} columns={4} />
            </div>
          </ExpandableBlock>

          {/* GIRLS FC — case under En bättre väg */}
          <ExpandableBlock
            id="girls-fc"
            kicker="Case"
            title="Girls FC — flickfotboll i prioriterade områden"
            defaultOpen={false}
            className="animate-fade-up animate-delay-200"
          >
            <p>
              Girls FC visar hur riktad resursförstärkning kan öppna fotbollen
              för flickor som tidigare stått utanför föreningsidrotten.
            </p>
            <p className="mt-4">
              Snart 80 flickor som aldrig spelat fotboll tidigare deltar i
              verksamheten. Siffran är inte huvudberättelsen — beviset är att
              riktad satsning på flickfotboll i prioriterade områden faktiskt
              översätts till nya spelare, nya ledare och nya gemenskaper.
            </p>
            <p className="mt-4 text-small text-muted-foreground">
              Korslänk: när fokus är flickfotboll, inkludering eller trygg miljö
              hör frågan hemma både här och under Jämställdhet &amp; trygghet —
              se vidare läsning i sidopanelen.
            </p>
          </ExpandableBlock>

          {/* ROLLER */}
          <ExpandableBlock
            id="roller"
            kicker="Rollerna"
            title="Två tjänster som bär satsningen"
            defaultOpen={false}
            wide
            className="animate-fade-up animate-delay-200"
          >
            <p>
              Programmet möjliggör att föreningar i prioriterade områden kan
              anställa två nyckelroller — en för organisationen runt fotbollen
              och en för det som händer på planen. Tillsammans bär de hela
              satsningen.
            </p>
            <div className="mt-6 not-prose">
              <RolePair roles={EN_BATTRE_VAG_ROLES} />
            </div>
          </ExpandableBlock>

          {/* ARBETSDELAR */}
          {program && program.pillars.length > 0 && (
            <ExpandableBlock
              id="arbetsdelar"
              kicker="Arbetet"
              title="Fem arbetsdelar"
              defaultOpen={false}
            >
              <p>
                Arbetet är uppdelat i fem delar som tillsammans bär satsningen
                — från första kartläggning till uppföljning över tid.
              </p>
              <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2" role="list">
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
            title="Kriterier för att delta"
            defaultOpen={false}
            wide
          >
            <p>
              Föreningar som vill ingå i En bättre väg behöver uppfylla en
              uppsättning grundkrav. De är till för att säkra att satsningen
              landar där den gör mest nytta.
            </p>
            <div className="mt-6 not-prose">
              <CriteriaList data={EN_BATTRE_VAG_CRITERIA} />
            </div>
          </ExpandableBlock>

          {/* ÅRSHJUL */}
          <ExpandableBlock
            id="arshjul"
            kicker="Året runt"
            title="Årshjul 2026"
            defaultOpen={false}
            wide
          >
            <p>
              Arbetet följer en tolvmånaderscykel — från nuläge i januari till
              slutrapport i december. Klicka på en månad för att se fokus och
              aktiviteter. Växla mellan tidslinje och årshjul efter behov.
            </p>
            <div className="mt-6 not-prose">
              <YearWheel months={YEAR_WHEEL_EN_BATTRE_VAG} />
            </div>
          </ExpandableBlock>

          {/* GÖR / GÖR INTE */}
          <ExpandableBlock
            id="gransdragning"
            kicker="Rolltydlighet"
            title="Gör — och gör inte"
            defaultOpen={false}
            wide
          >
            <p>
              Språkröret arbetar processledande. Gränsdragningen säkerställer
              att arbetet bygger föreningens egen kapacitet i stället för
              beroende av GFF.
            </p>
            <div className="mt-6 not-prose">
              <DoDontPair
                doGroup={SPRAKROR_DO_DONT.do}
                dontGroup={SPRAKROR_DO_DONT.dont}
              />
            </div>
          </ExpandableBlock>

          {/* MÄTPUNKTER */}
          <ExpandableBlock
            id="matpunkter"
            kicker="Uppföljning"
            title="Mätpunkter"
            defaultOpen={false}
            wide
          >
            <p>
              Uppföljning sker både kvantitativt och kvalitativt — i statistik
              och i berättelser. Båda krävs för att förstå om arbetet faktiskt
              flyttar sig.
            </p>
            <div className="mt-6 not-prose">
              <MetricListBlock data={EN_BATTRE_VAG_METRICS} />
            </div>
          </ExpandableBlock>

          {/* SAMVERKAN */}
          <ExpandableBlock
            id="samverkan"
            kicker="Samverkan"
            title="Detta är ingen enmansinsats"
            defaultOpen={false}
          >
            <p>
              En bättre väg fungerar när förbund, kommun, förening och
              civilsamhälle drar åt samma håll. Varje aktör fyller en egen
              lucka.
            </p>
            <div className="mt-5">
              <PartnerStrip
                ids={["svff", "gff", "goteborgs-stad", "foreningar", "gis"]}
              />
            </div>
          </ExpandableBlock>

          {/* VARFÖR */}
          <ExpandableBlock
            id="varfor"
            kicker="Varför"
            title="Det är därför satsningen finns"
            defaultOpen={false}
          >
            <p>
              Inkludering och tillgänglighet är inte tillägg — de är själva
              skälet till att arbetet finns.
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

export default EnBattreVag;

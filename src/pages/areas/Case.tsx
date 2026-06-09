import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import AreaShell from "@/components/blocks/AreaShell";
import SectionBlock from "@/components/blocks/SectionBlock";
import TrainingCaseBlock from "@/components/blocks/TrainingCaseBlock";
import NextPageCTA from "@/components/blocks/NextPageCTA";
import { getArea } from "@/content/areas";
import {
  getPrimaryAssignment,
  adjacentPrimaryAssignments,
} from "@/content/primaryAssignments";
import {
  TRAINING_CASES,
  CASE_PROGRESSION,
  CASE_RED_THREAD,
} from "@/content/trainingCases";

const Case = () => {
  const area = getArea("foreningsutveckling");
  const subpage = area.subpages.find((s) => s.slug === "case")!;
  const prev = getPrimaryAssignment("foreningslyftet");
  const { next } = adjacentPrimaryAssignments("foreningslyftet");

  return (
    <div className="min-h-screen bg-background">
      <GlobalNav />
      <AreaShell area={area} subtitle={subpage.title}>
        <SectionBlock
          eyebrow="Övningscase"
          title="Fem case att träna på"
          lead="Från enkel struktur till komplext föreningssystem. Läs summeringen och den utmanande frågan, försök svara själv – och fäll sedan ut vägledningen."
        >
          {/* Progressionsöversikt */}
          <div className="mb-10 overflow-x-auto">
            <table className="w-full border-collapse text-left text-small">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="border-b border-border px-3 py-2 font-mono text-micro uppercase tracking-wider text-primary"
                  >
                    Nivå
                  </th>
                  <th
                    scope="col"
                    className="border-b border-border px-3 py-2 font-mono text-micro uppercase tracking-wider text-primary"
                  >
                    Case
                  </th>
                  <th
                    scope="col"
                    className="border-b border-border px-3 py-2 font-mono text-micro uppercase tracking-wider text-primary"
                  >
                    Vad du tränar
                  </th>
                </tr>
              </thead>
              <tbody>
                {CASE_PROGRESSION.map((row) => (
                  <tr key={row.level}>
                    <td className="border-b border-border/60 px-3 py-2 font-mono tabular-nums text-muted-foreground">
                      {row.level}
                    </td>
                    <td className="border-b border-border/60 px-3 py-2 font-medium text-foreground">
                      {row.area}
                    </td>
                    <td className="border-b border-border/60 px-3 py-2 text-muted-foreground">
                      {row.trains}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Casen, i stigande svårighet */}
          <div className="flex flex-col gap-6">
            {TRAINING_CASES.map((c) => (
              <TrainingCaseBlock key={c.id} data={c} />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          variant="muted"
          eyebrow="Röd tråd"
          title="Progressionen mellan casen"
          lead={CASE_RED_THREAD.lead}
          narrow
        >
          <ol className="ml-5 list-decimal space-y-2 text-base leading-relaxed text-foreground/85">
            {CASE_RED_THREAD.steps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
        </SectionBlock>
      </AreaShell>
      <NextPageCTA next={next} prev={prev} label="Första huvuduppdraget" />
      <Footer />
    </div>
  );
};

export default Case;

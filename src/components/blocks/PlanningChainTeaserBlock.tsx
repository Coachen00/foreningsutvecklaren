import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type {
  PlanningChainStep,
  PlanningOutcome,
  QualityClubPlanningFocus,
} from "@/content/planningChain";

interface Props {
  steps: PlanningChainStep[];
  focus: QualityClubPlanningFocus[];
  outcomes: PlanningOutcome[];
  href: string;
}

const PlanningChainTeaserBlock = ({ steps, focus, outcomes, href }: Props) => {
  const primaryFocus = focus.find((item) => item.role === "primär");
  const supportFocus = focus.filter((item) => item.role === "stöd");
  const mainOutcome = outcomes[0];
  const kpiOutcome = outcomes.find((item) => item.value === "50 %");

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.75fr)]">
      <ol className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 xl:grid-cols-4">
        {steps.map((step) => (
          <li key={step.number} className="bg-card p-6">
            <p className="font-mono text-micro tabular-nums text-primary">
              {step.number}
            </p>
            <h3 className="mt-3 font-serif text-base font-semibold leading-snug text-foreground">
              {step.title}
            </h3>
            <p className="mt-2 text-small font-medium leading-snug text-foreground/90">
              {step.question}
            </p>
            <p className="mt-3 text-small leading-relaxed text-muted-foreground">
              {step.output}
            </p>
          </li>
        ))}
      </ol>

      <aside className="rounded-md border border-border bg-background p-6">
        <p className="font-mono text-micro uppercase tracking-wider text-primary">
          Koppling till Kvalitetsklubb
        </p>

        {primaryFocus && (
          <div className="mt-5 border-b border-border pb-4">
            <p className="text-small font-semibold text-foreground">
              {primaryFocus.area}
            </p>
            <p className="mt-1 text-small leading-relaxed text-muted-foreground">
              {primaryFocus.description}
            </p>
          </div>
        )}

        {supportFocus.length > 0 && (
          <div className="border-b border-border py-4">
            <p className="font-mono text-micro uppercase tracking-wider text-muted-foreground">
              Stöd när planen kräver kapacitet
            </p>
            <p className="mt-2 text-small leading-relaxed text-foreground/85">
              {supportFocus.map((item) => item.area).join(" · ")}
            </p>
          </div>
        )}

        {mainOutcome && (
          <div className="py-4">
            <p className="font-mono text-micro uppercase tracking-wider text-muted-foreground">
              Målbild
            </p>
            <p className="mt-2 font-serif text-base font-semibold text-foreground">
              {mainOutcome.value}
            </p>
            {kpiOutcome && (
              <p className="mt-2 text-small leading-relaxed text-muted-foreground">
                {kpiOutcome.description}
              </p>
            )}
          </div>
        )}

        <Link
          to={href}
          className="mt-2 inline-flex items-center gap-2 font-mono text-micro uppercase tracking-wider text-primary transition-colors hover:text-primary/70"
        >
          Läs fördjupningen
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </aside>
    </div>
  );
};

export default PlanningChainTeaserBlock;

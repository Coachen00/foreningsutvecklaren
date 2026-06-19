import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { StaggerGroup, StaggerItem } from "@/components/motion";
import type {
  PlanningChainStep,
  PlanningOutcome,
  QualityClubPlanningFocus,
} from "@/content/planningChain";

interface Props {
  steps: PlanningChainStep[];
  focus: QualityClubPlanningFocus[];
  outcomes: PlanningOutcome[];
  className?: string;
}

/**
 * PLANNING CHAIN BLOCK — visar hur föreningsutveckling gör styrdokument
 * operativa: idé → mål → plan → årshjul.
 */
const PlanningChainBlock = ({ steps, focus, outcomes, className }: Props) => (
  <div className={cn("space-y-7", className)}>
    <div className="overflow-x-auto">
      <ol
        className="flex flex-col items-start gap-3 rounded-md border border-border bg-card px-5 py-4 sm:min-w-max sm:flex-row sm:items-center"
        role="list"
      >
        {steps.map((step, index) => (
          <li key={step.number} className="contents">
            <div className="inline-flex items-baseline gap-2">
              <span className="font-mono text-micro tabular-nums text-muted-foreground">
                {step.number}
              </span>
              <span className="font-serif text-base font-semibold text-foreground">
                {step.title}
              </span>
            </div>
            {index < steps.length - 1 && (
              <ArrowRight
                className="h-4 w-4 shrink-0 rotate-90 text-accent/70 sm:rotate-0"
                aria-hidden="true"
              />
            )}
          </li>
        ))}
      </ol>
    </div>

    <StaggerGroup className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2 xl:grid-cols-4">
      {steps.map((step) => {
        const Icon = step.icon;
        return (
          <StaggerItem key={step.number} className="flex">
          <article className="group flex w-full flex-col bg-card p-6 transition-colors hover:bg-accent/[0.06]">
            <header className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-accent/15 group-hover:text-accent">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="font-mono text-micro uppercase tracking-wider text-primary">
                  Steg {step.number}
                </p>
                <h3 className="mt-1 font-serif text-base font-semibold leading-snug text-foreground">
                  {step.title}
                </h3>
              </div>
            </header>

            <p className="mt-4 text-sm font-semibold leading-snug text-foreground">
              {step.question}
            </p>
            <p className="mt-2 text-small leading-relaxed text-muted-foreground">
              {step.description}
            </p>

            <div className="mt-5 border-t border-border pt-4">
              <p className="font-mono text-micro uppercase tracking-wider text-muted-foreground">
                Kvalitetsklubb
              </p>
              <p className="mt-2 text-small font-medium leading-relaxed text-foreground">
                {step.qualityClubArea}
              </p>
              <p className="mt-1 text-[0.8125rem] leading-relaxed text-muted-foreground">
                {step.qualityClubPoint}
              </p>
            </div>

            <p className="mt-4 text-[0.8125rem] leading-relaxed text-foreground/85">
              <span className="font-semibold text-foreground">Output: </span>
              {step.output}
            </p>
          </article>
          </StaggerItem>
        );
      })}
    </StaggerGroup>

    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.85fr)]">
      <section className="rounded-md border border-border bg-card p-6">
        <p className="font-mono text-micro uppercase tracking-wider text-primary">
          Rätt Kvalitetsklubb-områden
        </p>
        <div className="mt-5 grid gap-3">
          {focus.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.area}
                className="grid gap-3 border-t border-border pt-4 first:border-t-0 first:pt-0 sm:grid-cols-[10rem_minmax(0,1fr)]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-serif text-base font-semibold leading-tight text-foreground">
                      {item.area}
                    </p>
                    <p className="mt-1 font-mono text-micro uppercase tracking-wider text-muted-foreground">
                      {item.role}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-small font-semibold leading-relaxed text-foreground">
                    {item.label}
                  </p>
                  <p className="mt-1 text-small leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="rounded-md border border-border bg-background p-6">
        <p className="font-mono text-micro uppercase tracking-wider text-primary">
          Målbilder
        </p>
        <div className="mt-5 space-y-5">
          {outcomes.map((outcome) => (
            <article key={outcome.label}>
              <p className="font-mono text-micro uppercase tracking-wider text-muted-foreground">
                {outcome.label}
              </p>
              <h3 className="mt-1 font-serif text-base font-semibold leading-snug text-foreground">
                {outcome.value}
              </h3>
              <p className="mt-1 text-small leading-relaxed text-muted-foreground">
                {outcome.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default PlanningChainBlock;

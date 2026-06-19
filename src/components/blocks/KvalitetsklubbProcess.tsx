import { cn } from "@/lib/utils";
import { StaggerGroup, StaggerItem } from "@/components/motion";
import type { ProcessStep } from "@/content/kvalitetsklubb";

interface Props {
  steps: ProcessStep[];
  className?: string;
}

/**
 * PROCESS STEPS — vertikal kedja med stora numerala markörer och en
 * vertikal linje som binder dem samman. Varje steg har titel, beskrivning
 * och vad det resulterar i (output).
 *
 * Layout: stappel av 5 steg där numret är till vänster, content till höger,
 * och linjen löper i mellanrummet mellan numret och content. Ger känsla av
 * "väg" snarare än "tabell".
 */
const KvalitetsklubbProcess = ({ steps, className }: Props) => (
  <StaggerGroup as="ol" className={cn("relative", className)}>
    {steps.map((step, i) => {
      const isLast = i === steps.length - 1;
      return (
        <StaggerItem as="li" key={step.number} className="group relative flex gap-5 sm:gap-7">
          {/* Vänster: nummer + linje */}
          <div className="relative flex shrink-0 flex-col items-center">
            <span
              aria-hidden="true"
              className={cn(
                "z-10 flex h-12 w-12 shrink-0 items-center justify-center",
                "rounded-md border bg-card",
                "font-mono text-base font-semibold tabular-nums",
                "border-accent/35 bg-accent/10 text-accent transition-shadow group-hover:glow-accent",
              )}
            >
              {step.number}
            </span>
            {!isLast && (
              <span
                aria-hidden="true"
                className="w-px flex-1 bg-border"
                style={{ minHeight: "2.5rem" }}
              />
            )}
          </div>

          {/* Höger: content */}
          <div className={cn("min-w-0 flex-1", isLast ? "pb-0" : "pb-8")}>
            <h3 className="font-serif text-subhead font-semibold leading-snug text-foreground">
              {step.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-foreground/80">
              {step.description}
            </p>
            <p className="mt-3 inline-flex items-center gap-2 font-mono text-micro uppercase tracking-wider text-accent">
              <span aria-hidden="true">→</span>
              {step.output}
            </p>
          </div>
        </StaggerItem>
      );
    })}
  </StaggerGroup>
);

export default KvalitetsklubbProcess;

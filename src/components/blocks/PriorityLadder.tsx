import { cn } from "@/lib/utils";
import { StaggerGroup, StaggerItem } from "@/components/motion";
import type { PriorityLevel } from "@/content/priorities";

interface Props {
  levels: PriorityLevel[];
  className?: string;
}

/**
 * PRIORITY LADDER — vertikal trappa där position visar prioritet.
 *
 * Visualiserar 5-stegs prioriteringstrappa: nivå 1 är "viktigast",
 * och varje steg har en bredd som speglar prioritet.
 */
const PriorityLadder = ({ levels, className }: Props) => (
  <StaggerGroup as="ol" className={cn("relative space-y-2", className)}>
    {levels.map((level, i) => {
      // Bredd minskar gradvis: nivå 1 = 100 %, nivå 5 = ~70 %
      const width = 100 - i * 7;
      return (
        <StaggerItem as="li" key={level.number}>
          <article
            style={{ maxWidth: `${width}%` }}
            className={cn(
              "flex items-start gap-5 rounded-xl border border-border card-gradient px-6 py-5",
              "transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md",
              i === 0 && "border-accent/40",
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                "shrink-0 font-mono text-2xl font-semibold tabular-nums tracking-tight",
                i === 0 ? "text-accent" : "text-border",
              )}
            >
              {level.number}
            </span>
            <div className="min-w-0">
              <h3 className="text-base font-semibold leading-snug text-foreground">
                {level.title}
              </h3>
              <p className="mt-1.5 text-small leading-relaxed text-muted-foreground">
                {level.description}
              </p>
            </div>
          </article>
        </StaggerItem>
      );
    })}
  </StaggerGroup>
);

export default PriorityLadder;

import { cn } from "@/lib/utils";
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
  <ol
    className={cn("relative space-y-2", className)}
    role="list"
  >
    {levels.map((level, i) => {
      // Bredd minskar gradvis: nivå 1 = 100 %, nivå 5 = ~70 %
      const width = 100 - i * 7;
      return (
        <li key={level.number} style={{ maxWidth: `${width}%` }}>
          <article
            className={cn(
              "flex items-start gap-5 border border-border bg-card px-6 py-5",
              "transition-colors hover:border-primary/40",
              i === 0 && "border-primary/30 bg-primary-subtle/40",
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                "shrink-0 font-mono text-2xl tabular-nums",
                i === 0 ? "text-primary" : "text-border",
              )}
              style={{ fontWeight: 600 }}
            >
              {level.number}
            </span>
            <div className="min-w-0">
              <h3 className="font-serif text-base font-semibold leading-snug text-foreground">
                {level.title}
              </h3>
              <p className="mt-1.5 text-small leading-relaxed text-muted-foreground">
                {level.description}
              </p>
            </div>
          </article>
        </li>
      );
    })}
  </ol>
);

export default PriorityLadder;

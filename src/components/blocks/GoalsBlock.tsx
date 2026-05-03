import { cn } from "@/lib/utils";
import type { Goal } from "@/content/goals";

interface Props {
  goals: Goal[];
  className?: string;
  /** Antal kolumner. Standard 4 på desktop. */
  columns?: 2 | 3 | 4;
}

const columnClass: Record<2 | 3 | 4, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

/**
 * GOALS BLOCK — kvantifierade mål i mono-display.
 *
 * Stora siffror i Inconsolata, kontextuell mikrotext i mono,
 * Lora-titel under. Inramning som matchar ImpactBlock.
 */
const GoalsBlock = ({ goals, className, columns = 4 }: Props) => (
  <div
    className={cn(
      "grid gap-px overflow-hidden rounded-md border border-border bg-border",
      "grid-cols-1",
      columnClass[columns],
      className,
    )}
  >
    {goals.map((goal) => (
      <article
        key={goal.id}
        className="flex flex-col bg-card p-6 sm:p-7"
      >
        <p
          className="font-mono leading-none tracking-tight text-foreground"
          style={{
            fontSize: "clamp(2rem, 4vw, 2.75rem)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          {goal.value}
        </p>
        {goal.unit && (
          <p className="mt-2 font-mono text-micro uppercase tracking-wider text-primary">
            {goal.unit}
          </p>
        )}
        <h3 className="mt-4 font-serif text-base font-semibold leading-snug text-foreground">
          {goal.title}
        </h3>
        <p className="mt-2 text-small leading-relaxed text-muted-foreground">
          {goal.description}
        </p>
        {goal.deadline && (
          <p className="mt-4 font-mono text-micro uppercase tracking-wider text-muted-foreground">
            Senast {goal.deadline}
          </p>
        )}
      </article>
    ))}
  </div>
);

export default GoalsBlock;

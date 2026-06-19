import { cn } from "@/lib/utils";
import { StaggerGroup, StaggerItem } from "@/components/motion";
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
 * Stora siffror i mono (num-display), kontextuell mikrotext i mono,
 * titel under. Kort med card-gradient och hover-lift.
 */
const GoalsBlock = ({ goals, className, columns = 4 }: Props) => (
  <StaggerGroup
    as="div"
    className={cn(
      "grid gap-4",
      "grid-cols-1",
      columnClass[columns],
      className,
    )}
  >
    {goals.map((goal) => (
      <StaggerItem
        as="div"
        key={goal.id}
        className="group flex h-full flex-col rounded-xl border border-border card-gradient p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-md sm:p-7"
      >
        <p
          className="num-display leading-none text-accent transition-colors"
          style={{
            fontSize: "clamp(2.25rem, 4.5vw, 3.25rem)",
          }}
        >
          {goal.value}
        </p>
        {goal.unit && (
          <p className="mt-2 font-mono text-micro uppercase tracking-wider text-muted-foreground">
            {goal.unit}
          </p>
        )}
        <h3 className="mt-4 text-base font-semibold leading-snug text-foreground">
          {goal.title}
        </h3>
        <p className="mt-2 text-small leading-relaxed text-muted-foreground">
          {goal.description}
        </p>
        {goal.deadline && (
          <p className="mt-auto pt-4 font-mono text-micro uppercase tracking-wider text-muted-foreground">
            Senast {goal.deadline}
          </p>
        )}
      </StaggerItem>
    ))}
  </StaggerGroup>
);

export default GoalsBlock;

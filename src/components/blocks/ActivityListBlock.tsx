import { StaggerGroup, StaggerItem } from "@/components/motion";
import type { Activity } from "@/content/activities";

interface Props {
  activities: Activity[];
  columns?: 2 | 3;
}

const ActivityListBlock = ({ activities, columns = 2 }: Props) => {
  return (
    <StaggerGroup
      as="ul"
      className={[
        "grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border",
        columns === 3
          ? "sm:grid-cols-2 lg:grid-cols-3"
          : "sm:grid-cols-2",
      ].join(" ")}
    >
      {activities.map((a) => (
        <StaggerItem
          key={a.id}
          as="li"
          className="flex flex-col gap-2.5 bg-card px-6 py-5 transition-colors hover:bg-muted/40"
        >
          {/* Title + cadence row */}
          <div className="flex items-start justify-between gap-4">
            <h4 className="text-base font-semibold leading-tight text-foreground">
              {a.title}
            </h4>
            {a.cadence && (
              <span className="shrink-0 pt-0.5 font-mono text-micro uppercase tracking-wider text-accent">
                {a.cadence}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-small leading-relaxed text-muted-foreground">
            {a.description}
          </p>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
};

export default ActivityListBlock;

import type { Activity } from "@/content/activities";

interface Props {
  activities: Activity[];
  columns?: 2 | 3;
}

const ActivityListBlock = ({ activities, columns = 2 }: Props) => {
  return (
    <ul
      className={[
        "grid grid-cols-1 gap-px bg-border",
        columns === 3
          ? "sm:grid-cols-2 lg:grid-cols-3"
          : "sm:grid-cols-2",
      ].join(" ")}
      role="list"
    >
      {activities.map((a) => (
        <li
          key={a.id}
          className="flex flex-col gap-2.5 bg-card px-6 py-5 transition-colors hover:bg-muted/60"
        >
          {/* Title + cadence row */}
          <div className="flex items-start justify-between gap-4">
            <h4 className="text-base font-semibold text-foreground leading-tight">
              {a.title}
            </h4>
            {a.cadence && (
              <span className="shrink-0 font-mono text-micro uppercase tracking-wider text-primary pt-0.5">
                {a.cadence}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-small text-muted-foreground leading-relaxed">
            {a.description}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ActivityListBlock;

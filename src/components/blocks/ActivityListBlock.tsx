import type { Activity } from "@/content/activities";

interface Props {
  activities: Activity[];
  columns?: 2 | 3;
}

const ActivityListBlock = ({ activities, columns = 2 }: Props) => {
  return (
    <ul
      className={
        columns === 3
          ? "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
          : "grid grid-cols-1 gap-4 md:grid-cols-2"
      }
    >
      {activities.map((a) => (
        <li
          key={a.id}
          className="rounded-lg border border-border bg-background p-6 transition-colors hover:border-primary/40"
        >
          <div className="mb-2 flex items-baseline justify-between gap-3">
            <h3 className="text-lg font-semibold text-foreground">{a.title}</h3>
            {a.cadence && (
              <span className="shrink-0 text-xs font-mono text-muted-foreground">{a.cadence}</span>
            )}
          </div>
          <p className="text-sm text-foreground/80">{a.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default ActivityListBlock;

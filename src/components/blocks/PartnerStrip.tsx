import { PARTNERS } from "@/content/partners";
import { cn } from "@/lib/utils";

interface Props {
  ids?: string[];
  title?: string;
}

const PartnerStrip = ({ ids, title = "Tillsammans med" }: Props) => {
  const list = ids ? PARTNERS.filter((p) => ids.includes(p.id)) : PARTNERS;
  if (list.length === 0) return null;

  return (
    <div>
      <p className="mb-4 font-mono text-micro uppercase tracking-wider text-muted-foreground">
        {title}
      </p>
      <ul className="flex flex-wrap gap-2" role="list">
        {list.map((p) => (
          <li
            key={p.id}
            className={cn(
              "rounded-sm border border-border bg-card",
              "px-4 py-2 text-sm font-medium text-foreground",
              "transition-colors hover:border-primary/50 hover:bg-primary-subtle hover:text-foreground"
            )}
          >
            {p.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PartnerStrip;

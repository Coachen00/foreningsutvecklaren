import type { CSSProperties } from "react";
import { PARTNERS } from "@/content/partners";
import { cn } from "@/lib/utils";
import { StaggerGroup, StaggerItem } from "@/components/motion";

interface Props {
  ids?: string[];
  title?: string;
}

const PartnerStrip = ({ ids, title = "Tillsammans med" }: Props) => {
  const list = ids ? PARTNERS.filter((p) => ids.includes(p.id)) : PARTNERS;
  if (list.length === 0) return null;

  return (
    <div>
      <p className="signal-label mb-4" style={{ "--signal": "var(--signal-gold)" } as CSSProperties}>
        {title}
      </p>
      <StaggerGroup as="ul" stagger={0.04} className="flex flex-wrap gap-2">
        {list.map((p) => (
          <StaggerItem
            key={p.id}
            as="li"
            className={cn(
              "rounded-md border border-border bg-card",
              "px-4 py-2 text-sm font-medium text-foreground",
              "transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-foreground",
            )}
          >
            {p.name}
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  );
};

export default PartnerStrip;

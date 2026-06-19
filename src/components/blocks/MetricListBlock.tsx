import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { StaggerGroup, StaggerItem } from "@/components/motion";
import type { MetricList } from "@/content/metrics";

interface Props {
  data: MetricList;
  className?: string;
}

/**
 * METRIC LIST BLOCK — mätpunkter grupperade per typ.
 *
 * Distinkt från CriteriaList: mätpunkter följs, kriterier uppfylls.
 * Använder mono-numrering i marginalen för editorial-känsla.
 */
const MetricListBlock = ({ data, className }: Props) => (
  <div className={cn("card-gradient overflow-hidden rounded-xl border border-border", className)}>
    <div className="border-b border-border px-7 py-5">
      <p className="signal-label mb-3" style={{ "--signal": "var(--signal-gold)" } as CSSProperties}>
        Uppföljning
      </p>
      <h3 className="text-subhead font-semibold text-foreground">
        {data.title}
      </h3>
      <p className="mt-2 max-w-prose text-small leading-relaxed text-muted-foreground">
        {data.description}
      </p>
    </div>

    <div className="divide-y divide-border">
      {data.groups.map((group) => (
        <section key={group.label} className="px-7 py-6">
          <p className="mb-4 font-mono text-micro uppercase tracking-wider text-muted-foreground">
            {group.label}
          </p>
          <StaggerGroup as="ul" className="space-y-3">
            {group.items.map((item, idx) => (
              <StaggerItem as="li" key={item} className="flex items-baseline gap-4">
                <span
                  aria-hidden="true"
                  className="font-mono text-micro tabular-nums text-accent"
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="text-base leading-relaxed text-foreground/85">
                  {item}
                </span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>
      ))}
    </div>
  </div>
);

export default MetricListBlock;

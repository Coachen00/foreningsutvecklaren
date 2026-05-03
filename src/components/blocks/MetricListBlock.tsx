import { cn } from "@/lib/utils";
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
  <div className={cn("border border-border bg-card", className)}>
    <div className="border-b border-border bg-background px-7 py-5">
      <p className="font-mono text-micro uppercase tracking-wider text-primary">
        Uppföljning
      </p>
      <h3 className="mt-1 font-serif text-subhead font-semibold text-foreground">
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
          <ul className="space-y-3" role="list">
            {group.items.map((item, idx) => (
              <li key={item} className="flex items-baseline gap-4">
                <span
                  aria-hidden="true"
                  className="font-mono text-micro tabular-nums text-primary"
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="text-base leading-relaxed text-foreground/85">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  </div>
);

export default MetricListBlock;

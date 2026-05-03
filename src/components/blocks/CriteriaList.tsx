import { Check, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CriteriaList as CriteriaListData } from "@/content/criteria";

interface Props {
  data: CriteriaListData;
  className?: string;
}

/**
 * CRITERIA LIST — kriterier för deltagande, presenterade som checklist.
 *
 * Avsiktligt skild från MetricList visuellt: kriterier är något
 * man uppfyller (check-symbol), mätpunkter är något man följer.
 */
const CriteriaList = ({ data, className }: Props) => (
  <div className={cn("border border-border bg-card", className)}>
    <div className="border-b border-border bg-background px-7 py-5">
      <p className="font-mono text-micro uppercase tracking-wider text-primary">
        Kriterier
      </p>
      <h3 className="mt-1 font-serif text-subhead font-semibold text-foreground">
        {data.title}
      </h3>
      <p className="mt-2 max-w-prose text-small leading-relaxed text-muted-foreground">
        {data.description}
      </p>
    </div>

    <ul className="divide-y divide-border" role="list">
      {data.items.map((item, idx) => (
        <li key={item} className="flex items-start gap-5 px-7 py-5">
          <span
            aria-hidden="true"
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary"
          >
            <Check className="h-3.5 w-3.5" strokeWidth={3} />
          </span>
          <div className="min-w-0">
            <p className="font-mono text-micro uppercase tracking-wider text-muted-foreground">
              {String(idx + 1).padStart(2, "0")}
            </p>
            <p className="mt-1 text-base font-medium leading-relaxed text-foreground/90">
              {item}
            </p>
          </div>
        </li>
      ))}
    </ul>

    {data.contact && (
      <div className="flex items-center gap-4 border-t border-border bg-background px-7 py-5">
        <span
          aria-hidden="true"
          className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground"
        >
          <Mail className="h-4 w-4" />
        </span>
        <div>
          <p className="font-mono text-micro uppercase tracking-wider text-muted-foreground">
            Kontaktperson
          </p>
          <p className="mt-0.5 text-base font-semibold text-foreground">
            {data.contact.name}
          </p>
          <p className="text-small text-muted-foreground">
            {data.contact.role}
          </p>
        </div>
      </div>
    )}
  </div>
);

export default CriteriaList;

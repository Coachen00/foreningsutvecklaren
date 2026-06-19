import type { CSSProperties } from "react";
import { StaggerGroup, StaggerItem } from "@/components/motion";
import type { ImpactStatement } from "@/content/impact";

interface Props {
  impact: ImpactStatement;
}

const ImpactBlock = ({ impact }: Props) => {
  return (
    <div className="card-gradient overflow-hidden rounded-xl border border-border">
      {/* Header strip */}
      <div className="border-b border-border px-7 py-5">
        <p className="signal-label mb-3" style={{ "--signal": "var(--signal-green)" } as CSSProperties}>
          Effekt
        </p>
        <h3 className="text-subhead font-semibold text-foreground">
          {impact.headline}
        </h3>
      </div>

      {/* Statements */}
      <StaggerGroup as="ul" className="divide-y divide-border">
        {impact.statements.map((s, idx) => (
          <StaggerItem
            as="li"
            key={s}
            className="flex items-baseline gap-5 px-7 py-5"
          >
            <span
              aria-hidden="true"
              className="shrink-0 font-mono text-micro font-medium tabular-nums text-accent"
            >
              {String(idx + 1).padStart(2, "0")}
            </span>
            <p className="text-base font-medium leading-relaxed text-foreground/85">
              {s}
            </p>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  );
};

export default ImpactBlock;

import type { ImpactStatement } from "@/content/impact";

interface Props {
  impact: ImpactStatement;
}

const ImpactBlock = ({ impact }: Props) => {
  return (
    <div className="border border-border">
      {/* Header strip */}
      <div className="border-b border-border bg-card px-7 py-5">
        <p className="font-mono text-micro uppercase tracking-wider text-primary">
          Effekt
        </p>
        <h3 className="mt-1 text-subhead font-semibold text-foreground">
          {impact.headline}
        </h3>
      </div>

      {/* Statements */}
      <ul className="divide-y divide-border bg-background" role="list">
        {impact.statements.map((s, idx) => (
          <li
            key={s}
            className="flex items-baseline gap-5 px-7 py-5"
          >
            <span
              aria-hidden="true"
              className="shrink-0 font-mono text-micro font-medium tabular-nums text-primary"
            >
              {String(idx + 1).padStart(2, "0")}
            </span>
            <p className="text-base font-medium leading-relaxed text-foreground/85">
              {s}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImpactBlock;

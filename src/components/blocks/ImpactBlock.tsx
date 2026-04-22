import type { ImpactStatement } from "@/content/impact";

interface Props {
  impact: ImpactStatement;
}

const ImpactBlock = ({ impact }: Props) => {
  return (
    <div className="rounded-lg border border-border bg-accent/30 p-6 md:p-10">
      <p className="mb-2 text-xs font-mono uppercase tracking-wider text-primary">
        Effekt
      </p>
      <h2 className="mb-6 font-serif text-2xl font-bold text-foreground md:text-3xl">
        {impact.headline}
      </h2>
      <ul className="space-y-3">
        {impact.statements.map((s) => (
          <li
            key={s}
            className="flex gap-3 text-base text-foreground/90 md:text-lg"
          >
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImpactBlock;

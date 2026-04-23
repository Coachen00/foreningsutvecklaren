import { Link } from "react-router-dom";
import type { Program } from "@/content/programs";

interface Props {
  program: Program;
  compact?: boolean;
}

const ProgramBlock = ({ program, compact = false }: Props) => {
  return (
    <article className="border border-border bg-card">
      {/* Header */}
      <header className="flex flex-wrap items-baseline justify-between gap-4 border-b border-border px-7 py-6">
        <h3 className="text-subhead font-semibold text-foreground">
          {program.name}
        </h3>
        {program.path && (
          <Link
            to={program.path}
            className="font-mono text-micro uppercase tracking-wider text-primary hover:text-primary/70 transition-colors"
          >
            Fördjupning →
          </Link>
        )}
      </header>

      {/* Summary */}
      <div className="px-7 py-6">
        <p className="max-w-prose text-lead text-foreground/80 leading-relaxed">
          {program.summary}
        </p>
      </div>

      {/* Pillars grid — only when not compact */}
      {!compact && program.pillars.length > 0 && (
        <div className="border-t border-border px-7 pb-7 pt-5">
          <p className="mb-4 font-mono text-micro uppercase tracking-wider text-muted-foreground">
            Arbetsdelar · {program.pillars.length} områden
          </p>
          <ul
            className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3"
            role="list"
          >
            {program.pillars.map((pillar) => (
              <li
                key={pillar.title}
                className="flex flex-col gap-1.5 bg-background px-5 py-4"
              >
                <p className="text-sm font-semibold text-foreground leading-tight">
                  {pillar.title}
                </p>
                {pillar.description && (
                  <p className="text-small text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Compact — just a note that this area has more depth */}
      {compact && program.pillars.length > 0 && (
        <div className="border-t border-border px-7 py-4">
          <p className="font-mono text-micro uppercase tracking-wider text-muted-foreground">
            {program.pillars.length} definierade arbetsdelar
          </p>
        </div>
      )}
    </article>
  );
};

export default ProgramBlock;

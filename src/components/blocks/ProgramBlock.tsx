import { Link } from "react-router-dom";
import type { Program } from "@/content/programs";

interface Props {
  program: Program;
  compact?: boolean;
}

const ProgramBlock = ({ program, compact = false }: Props) => {
  return (
    <article className="rounded-lg border border-border bg-background p-6 md:p-8">
      <header className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
          {program.name}
        </h3>
        {program.path && (
          <Link
            to={program.path}
            className="text-sm font-mono text-primary hover:underline"
          >
            Läs mer →
          </Link>
        )}
      </header>
      <p className="mb-6 max-w-3xl text-base text-foreground/80 md:text-lg">
        {program.summary}
      </p>
      {!compact && (
        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {program.pillars.map((pillar) => (
            <li
              key={pillar.title}
              className="rounded-md border border-border bg-card p-4"
            >
              <p className="mb-1 font-semibold text-foreground">{pillar.title}</p>
              {pillar.description && (
                <p className="text-sm text-foreground/70">{pillar.description}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default ProgramBlock;

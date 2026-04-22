import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AREAS } from "@/content/areas";

const AreaCardGrid = () => {
  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {AREAS.map((area) => {
        const Icon = area.icon;
        return (
          <li key={area.slug}>
            <Link
              to={area.path}
              className="group flex h-full flex-col rounded-lg border border-border bg-background p-6 transition-colors hover:border-primary/60 md:p-8"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Område {area.number} · {area.kicker}
                </span>
              </div>
              <h3 className="mb-3 font-serif text-2xl font-bold text-foreground group-hover:text-primary md:text-3xl">
                {area.title}
              </h3>
              <p className="mb-6 text-base text-foreground/80">{area.heroLead}</p>
              <span className="mt-auto inline-flex items-center gap-2 text-sm font-mono text-primary">
                Läs mer
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default AreaCardGrid;

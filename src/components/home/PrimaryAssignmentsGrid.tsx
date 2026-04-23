import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PRIMARY_ASSIGNMENTS } from "@/content/primaryAssignments";
import { cn } from "@/lib/utils";

/**
 * Startsidans tre huvudkort – drivs av PRIMARY_ASSIGNMENTS, inte AREAS.
 * Den externa logiken är tre huvuduppdrag, inte tre områden.
 */
const PrimaryAssignmentsGrid = () => {
  return (
    <ul
      className="grid grid-cols-1 gap-px bg-border sm:grid-cols-1 md:grid-cols-3"
      role="list"
    >
      {PRIMARY_ASSIGNMENTS.map((item, idx) => {
        const Icon = item.icon;
        return (
          <li key={item.id} className="bg-background">
            <Link
              to={item.path}
              className={cn(
                "group relative flex h-full flex-col gap-0 bg-card p-7 md:p-8 lg:p-9",
                "outline-offset-[-2px] transition-colors duration-200",
                "hover:bg-primary hover:text-primary-foreground",
                "focus-visible:outline-2 focus-visible:outline-ring",
              )}
            >
              <span
                aria-hidden="true"
                className="absolute top-6 right-7 font-mono text-[4rem] font-bold leading-none text-border/60 transition-colors duration-200 group-hover:text-primary-foreground/15 select-none"
              >
                {String(idx + 1).padStart(2, "0")}
              </span>

              <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary-foreground/15 group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>

              <p className="mb-2 font-mono text-micro uppercase tracking-wider text-muted-foreground transition-colors duration-200 group-hover:text-primary-foreground/60">
                {item.kicker}
              </p>

              <h3 className="mb-3 text-subhead font-semibold text-foreground transition-colors duration-200 group-hover:text-primary-foreground">
                {item.title}
              </h3>

              <p className="mb-8 text-small text-foreground/70 transition-colors duration-200 group-hover:text-primary-foreground/75">
                {item.lead}
              </p>

              <span className="mt-auto inline-flex items-center gap-2 font-mono text-micro font-medium uppercase tracking-wider text-primary transition-colors duration-200 group-hover:text-primary-foreground">
                Gå till uppdraget
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
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

export default PrimaryAssignmentsGrid;

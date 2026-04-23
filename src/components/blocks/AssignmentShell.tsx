import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import type { PrimaryAssignment } from "@/content/primaryAssignments";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

interface Props {
  assignment: PrimaryAssignment;
  children: React.ReactNode;
}

/**
 * Shell för de tre primära uppdragen.
 * Håller sig visuellt jämbördig med AreaShell men är driven av PrimaryAssignment
 * så att primärresan är frikopplad från den interna AREAS-modellen.
 */
const AssignmentShell = ({ assignment, children }: Props) => {
  useDocumentTitle(assignment.title, assignment.metaDescription);
  const Icon = assignment.icon;

  return (
    <>
      <div className="border-b border-border bg-card" id="main-content">
        <div className="container mx-auto px-4 sm:px-6">
          <nav
            aria-label="Brödsmula"
            className="flex items-center gap-1.5 border-b border-border py-4"
          >
            <Link
              to="/"
              className="font-mono text-micro uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              Start
            </Link>
            <ChevronRight className="h-3 w-3 text-border" aria-hidden="true" />
            <span
              aria-current="page"
              className="font-mono text-micro uppercase tracking-wider text-foreground"
            >
              {assignment.title}
            </span>
          </nav>

          <header className="section-y max-w-[52rem]">
            <p className="mb-6 inline-flex items-center gap-2.5 font-mono text-micro uppercase tracking-wider text-muted-foreground">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              Huvuduppdrag · {assignment.kicker}
            </p>

            <h1 className="font-serif text-display font-semibold text-foreground">
              {assignment.title}
            </h1>

            <p className="mt-5 max-w-[48ch] text-lead text-muted-foreground">
              {assignment.lead}
            </p>

            <p className="mt-3 max-w-[52ch] text-base text-foreground/65">
              {assignment.description}
            </p>
          </header>
        </div>
      </div>

      <main>{children}</main>
    </>
  );
};

export default AssignmentShell;

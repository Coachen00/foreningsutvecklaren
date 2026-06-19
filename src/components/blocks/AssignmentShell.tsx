import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import type { PrimaryAssignment } from "@/content/primaryAssignments";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { Reveal } from "@/components/motion";

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
      <div className="border-b border-border bg-card pitch-lines" id="main-content">
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

          <Reveal>
            <header className="section-y max-w-[56rem]">
              <p className="signal-label mb-6">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent/10 text-accent">
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                Huvuduppdrag · {assignment.kicker}
              </p>

              <h1 className="text-display font-semibold text-foreground">
                {assignment.title}
              </h1>

              <p className="mt-5 max-w-[46ch] text-lead text-muted-foreground">
                {assignment.lead}
              </p>

              <p className="mt-4 max-w-[50ch] text-base leading-relaxed text-foreground/65">
                {assignment.description}
              </p>
            </header>
          </Reveal>
        </div>
      </div>

      <main>{children}</main>
    </>
  );
};

export default AssignmentShell;

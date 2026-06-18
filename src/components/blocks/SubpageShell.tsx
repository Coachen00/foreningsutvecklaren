import { Link } from "react-router-dom";
import { ChevronRight, type LucideIcon } from "lucide-react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export interface SubpageBreadcrumb {
  label: string;
  href?: string;
}

interface Props {
  /** Sista crumben är aktuell sida; tidigare crumbs är länkar. */
  breadcrumbs: SubpageBreadcrumb[];
  kicker: string;
  icon: LucideIcon;
  title: string;
  lead: string;
  description?: string;
  metaDescription: string;
  /**
   * Nivå i informationshierarkin (se docs/site-positioning.md):
   * "support" (L2, default) = serif display-h1, jämbördig huvuduppdragen.
   * "tool" (L3, verktyg/lärande) = Work Sans headline-h1, visuellt dämpad.
   */
  headingLevel?: "support" | "tool";
  children: React.ReactNode;
}

/**
 * Generisk shell för fördjupningssidor som inte hör till PRIMARY_ASSIGNMENTS
 * eller AREAS — t.ex. tematiska undersidor under ett uppdrag.
 *
 * Visuellt jämbördig med AssignmentShell och AreaShell.
 */
const SubpageShell = ({
  breadcrumbs,
  kicker,
  icon: Icon,
  title,
  lead,
  description,
  metaDescription,
  headingLevel = "support",
  children,
}: Props) => {
  useDocumentTitle(title, metaDescription);

  return (
    <>
      <div className="border-b border-border bg-card pitch-lines" id="main-content">
        <div className="container mx-auto px-4 sm:px-6">
          <nav
            aria-label="Brödsmula"
            className="flex flex-wrap items-center gap-1.5 border-b border-border py-4"
          >
            <Link
              to="/"
              className="font-mono text-micro uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              Start
            </Link>
            {breadcrumbs.map((crumb, i) => {
              const isLast = i === breadcrumbs.length - 1;
              return (
                <span key={`${crumb.label}-${i}`} className="flex items-center gap-1.5">
                  <ChevronRight
                    className="h-3 w-3 text-border"
                    aria-hidden="true"
                  />
                  {isLast || !crumb.href ? (
                    <span
                      aria-current={isLast ? "page" : undefined}
                      className="font-mono text-micro uppercase tracking-wider text-foreground"
                    >
                      {crumb.label}
                    </span>
                  ) : (
                    <Link
                      to={crumb.href}
                      className="font-mono text-micro uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </span>
              );
            })}
          </nav>

          <header className="section-y max-w-[56rem]">
            <p className="signal-label mb-6">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              {kicker}
            </p>

            <h1
              className={
                headingLevel === "tool"
                  ? "text-headline font-semibold text-foreground"
                  : "font-serif text-display font-semibold text-foreground"
              }
            >
              {title}
            </h1>

            <p className="mt-5 max-w-[46ch] text-lead text-muted-foreground">
              {lead}
            </p>

            {description && (
              <p className="mt-4 max-w-[50ch] text-base leading-relaxed text-foreground/65">
                {description}
              </p>
            )}
          </header>
        </div>
      </div>

      <main>{children}</main>
    </>
  );
};

export default SubpageShell;

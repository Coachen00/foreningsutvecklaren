import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import type { Area } from "@/content/areas";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

interface AreaShellProps {
  area: Area;
  subtitle?: string;
  children: React.ReactNode;
}

const AreaShell = ({ area, subtitle, children }: AreaShellProps) => {
  useDocumentTitle(
    subtitle ? `${subtitle} · ${area.shortTitle}` : area.title,
    area.metaDescription
  );
  const Icon = area.icon;
  const isSubpage = Boolean(subtitle);

  return (
    <>
      <div className="border-b border-border bg-card pitch-lines" id="main-content">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
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
            <ChevronRight
              className="h-3 w-3 text-border"
              aria-hidden="true"
            />
            {isSubpage ? (
              <>
                <Link
                  to={area.path}
                  className="font-mono text-micro uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
                >
                  {area.shortTitle}
                </Link>
                <ChevronRight
                  className="h-3 w-3 text-border"
                  aria-hidden="true"
                />
                <span
                  aria-current="page"
                  className="font-mono text-micro uppercase tracking-wider text-foreground"
                >
                  {subtitle}
                </span>
              </>
            ) : (
              <span
                aria-current="page"
                className="font-mono text-micro uppercase tracking-wider text-foreground"
              >
                {area.shortTitle}
              </span>
            )}
          </nav>

          {/* Hero content */}
          <header className="section-y max-w-[56rem]">
            {/* Area marker */}
            <p className="signal-label mb-6">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              Område {area.number} · {area.kicker}
            </p>

            {/* Title — Lora for top-level areas, Work Sans for subpages */}
            <h1
              className={
                isSubpage
                  ? "text-headline font-semibold text-foreground"
                  : "font-serif text-display font-semibold text-foreground"
              }
            >
              {subtitle ?? area.title}
            </h1>

            {/* Lead */}
            <p className="mt-5 max-w-[46ch] text-lead text-muted-foreground">
              {isSubpage
                ? area.subpages.find(
                    (s) => s.title === subtitle
                  )?.heroLead ?? area.heroLead
                : area.heroLead}
            </p>

            {/* Support — only on area root */}
            {!isSubpage && (
              <p className="mt-4 max-w-[50ch] text-base leading-relaxed text-foreground/65">
                {area.heroSupport}
              </p>
            )}
          </header>
        </div>
      </div>

      <main id={isSubpage ? undefined : "main-content"}>{children}</main>
    </>
  );
};

export default AreaShell;

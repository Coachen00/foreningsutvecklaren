import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import type { Area } from "@/content/areas";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { Reveal } from "@/components/motion";
import { AmbientField } from "@/components/three";

interface AreaShellProps {
  area: Area;
  subtitle?: string;
  /** Override the default breadcrumb header's h1/lead block (e.g. with an EditorialHero). Breadcrumb still renders. */
  hero?: React.ReactNode;
  children: React.ReactNode;
}

const AreaShell = ({ area, subtitle, hero, children }: AreaShellProps) => {
  useDocumentTitle(
    subtitle ? `${subtitle} · ${area.shortTitle}` : area.title,
    area.metaDescription
  );
  const Icon = area.icon;
  const isSubpage = Boolean(subtitle);

  return (
    <>
      <div className="relative isolate overflow-hidden border-b border-border bg-card pitch-lines" id="main-content">
        <div className="absolute inset-0 -z-10"><AmbientField className="opacity-70" /></div>
        <div className="container relative mx-auto px-4 sm:px-6">
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
          {!hero && (
            <Reveal>
              <header className="section-y max-w-[56rem]">
                {/* Area marker */}
                <p className="signal-label mb-6">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent/10 text-accent">
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  Område {area.number} · {area.kicker}
                </p>

                <h1 className="text-display font-semibold text-foreground">
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
            </Reveal>
          )}
        </div>
      </div>

      {hero}

      <main id={isSubpage ? undefined : "main-content"}>{children}</main>
    </>
  );
};

export default AreaShell;

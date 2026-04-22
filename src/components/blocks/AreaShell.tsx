import type { Area } from "@/content/areas";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

interface AreaShellProps {
  area: Area;
  subtitle?: string;
  children: React.ReactNode;
}

const AreaShell = ({ area, subtitle, children }: AreaShellProps) => {
  useDocumentTitle(subtitle ? `${subtitle} · ${area.shortTitle}` : area.metaTitle, area.metaDescription);
  const Icon = area.icon;

  return (
    <>
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              Område {area.number} · {area.kicker}
            </p>
            <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              {subtitle ?? area.title}
            </h1>
            <p className="text-lg text-foreground/80 md:text-xl">{area.heroLead}</p>
            {!subtitle && (
              <p className="mt-4 text-base text-muted-foreground md:text-lg">{area.heroSupport}</p>
            )}
          </div>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default AreaShell;

import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const RUTE_LABELS: Record<string, string> = {
  foreningsutveckling: "Föreningslyftet",
  foreningslyftet: "Föreningslyftet",
  "en-battre-vag": "En bättre väg",
  "fu-skola": "FU Skola",
  "skola-samverkan": "Skola & förening",
  kvalitetsklubb: "Kvalitetsklubb",
  portalen: "Föreningsportalen",
  uppdrag: "Uppdrag",
  arbetsuppgifter: "Arbetsuppgifter",
  case: "Case",
  uppdateringar: "Uppdateringar",
  partners: "Partners",
  "jamstalldhet-och-trygghet": "Jämställdhet & trygghet",
  spelarutbildning: "Spelarutbildning",
};

const labelFor = (slug: string) =>
  RUTE_LABELS[slug] ??
  slug
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");

interface Crumb {
  label: string;
  href: string;
  current: boolean;
}

const Breadcrumb = ({ className }: { className?: string }) => {
  const { pathname } = useLocation();

  if (pathname === "/" || pathname === "") return null;

  const segments = pathname.split("/").filter(Boolean);

  const crumbs: Crumb[] = segments.map((seg, i) => {
    const href = "/" + segments.slice(0, i + 1).join("/");
    return {
      label: labelFor(seg),
      href,
      current: i === segments.length - 1,
    };
  });

  return (
    <nav
      aria-label="Brödsmulor"
      className={cn(
        "border-b border-border/60 bg-background",
        className,
      )}
    >
      <div className="container mx-auto flex items-center gap-1.5 px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="font-mono text-micro uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
        >
          Hem
        </Link>
        {crumbs.map((c) => (
          <span key={c.href} className="flex items-center gap-1.5">
            <ChevronRight
              className="h-3 w-3 text-border"
              aria-hidden="true"
            />
            {c.current ? (
              <span
                aria-current="page"
                className="font-mono text-micro uppercase tracking-wider text-signal-gold"
              >
                {c.label}
              </span>
            ) : (
              <Link
                to={c.href}
                className="font-mono text-micro uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
              >
                {c.label}
              </Link>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumb;

import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { sections } from "@/data/sections";
import { cn } from "@/lib/utils";

const GlobalNav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close overlay on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Esc to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link
            to="/"
            className="group flex items-center gap-2 text-base font-semibold tracking-tight text-foreground"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-primary transition-transform group-hover:scale-125" />
            Fotbollsnyttan
            <span className="hidden text-muted-foreground sm:inline">· Göteborg</span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="global-nav-overlay"
            aria-label={open ? "Stäng meny" : "Öppna meny"}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            <span className="hidden sm:inline">{open ? "Stäng" : "Meny"}</span>
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      <div
        id="global-nav-overlay"
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-50 bg-background transition-opacity duration-300",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="text-base font-semibold tracking-tight text-foreground">
            Fotbollsnyttan
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Stäng meny"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-accent"
          >
            Stäng <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="container mx-auto px-4 pb-16 pt-6 md:pt-12">
          <p className="mb-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Navigera
          </p>
          <ul className="grid gap-1 md:grid-cols-2 lg:grid-cols-3">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  cn(
                    "group flex items-baseline justify-between gap-4 rounded-lg px-3 py-3 transition-colors hover:bg-accent",
                    isActive && "bg-accent",
                  )
                }
                aria-current={location.pathname === "/" ? "page" : undefined}
              >
                <span className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-muted-foreground">00</span>
                  <span className="font-serif text-2xl text-foreground">Hub</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </NavLink>
            </li>
            {sections.map((s) => (
              <li key={s.slug}>
                <NavLink
                  to={s.path}
                  className={({ isActive }) =>
                    cn(
                      "group flex items-baseline justify-between gap-4 rounded-lg px-3 py-3 transition-colors hover:bg-accent",
                      isActive && "bg-accent",
                    )
                  }
                  aria-current={location.pathname === s.path ? "page" : undefined}
                >
                  <span className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-muted-foreground">{s.number}</span>
                    <span className="font-serif text-2xl text-foreground">{s.title}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default GlobalNav;

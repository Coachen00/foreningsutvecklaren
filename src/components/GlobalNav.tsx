import { useState } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, LogOut } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { PRIMARY_ASSIGNMENTS } from "@/content/primaryAssignments";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";

const isPathActive = (pathname: string, path: string) =>
  pathname === path || pathname.startsWith(path + "/");

const SECONDARY_LINK = { path: "/uppdrag", label: "Uppdrag" };

const GlobalNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signOut, session } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [signingOut, setSigningOut] = useState(false);
  const isHome = location.pathname === "/";

  const handleSignOut = async () => {
    if (signingOut) return;
    setSigningOut(true);
    try {
      await signOut();
    } finally {
      setMobileOpen(false);
      navigate("/login", { replace: true });
    }
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Hoppa till innehållet
      </a>

      <header
        role="banner"
        className="sticky top-0 z-40 border-b border-border/50 bg-background/92 backdrop-blur-md supports-[backdrop-filter]:bg-background/80"
        style={{ height: "var(--nav-height)" }}
      >
        <div className="container mx-auto flex h-full items-center justify-between gap-4 px-4 sm:px-6">
          {/* Logo */}
          <Link
            to="/"
            aria-current={isHome ? "page" : undefined}
            className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-foreground transition-opacity duration-200 hover:opacity-60"
          >
            <span
              className="inline-flex h-[7px] w-[7px] rounded-full bg-primary transition-transform duration-300 group-hover:scale-[1.6]"
              aria-hidden="true"
            />
            Arbetsdetektiven
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Huvudnavigering" className="hidden md:block">
            <ul className="flex items-center gap-0.5" role="list">
              {PRIMARY_ASSIGNMENTS.map((item) => {
                const active = isPathActive(location.pathname, item.path);
                return (
                  <li key={item.id}>
                    <NavLink
                      to={item.path}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative rounded-md px-3.5 py-2 text-[0.8125rem] font-medium transition-colors duration-150",
                        "text-foreground/55 hover:text-foreground hover:bg-muted",
                        active && "text-foreground bg-muted",
                      )}
                    >
                      {item.navLabel}
                    </NavLink>
                  </li>
                );
              })}
              {/* Secondary link — visually quieter, flyttad till höger om primära */}
              <li className="ml-2 border-l border-border/60 pl-2">
                <NavLink
                  to={SECONDARY_LINK.path}
                  aria-current={
                    isPathActive(location.pathname, SECONDARY_LINK.path)
                      ? "page"
                      : undefined
                  }
                  className={cn(
                    "rounded-md px-3 py-2 text-[0.75rem] font-medium transition-colors duration-150",
                    "text-muted-foreground hover:text-foreground hover:bg-muted",
                    isPathActive(location.pathname, SECONDARY_LINK.path) &&
                      "text-foreground",
                  )}
                >
                  {SECONDARY_LINK.label}
                </NavLink>
              </li>
              {session && (
                <li className="ml-1">
                  <button
                    type="button"
                    onClick={handleSignOut}
                    disabled={signingOut}
                    aria-label="Logga ut"
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-[0.75rem] font-medium transition-colors duration-150",
                      "text-muted-foreground hover:text-foreground hover:bg-muted",
                      "disabled:cursor-not-allowed disabled:opacity-50",
                    )}
                  >
                    <LogOut className="h-3.5 w-3.5" aria-hidden="true" />
                    Logga ut
                  </button>
                </li>
              )}
            </ul>
          </nav>

          {/* Mobile trigger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-md text-foreground/60 transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
                aria-label={mobileOpen ? "Stäng meny" : "Öppna meny"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation"
              >
                {mobileOpen ? (
                  <X className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Menu className="h-5 w-5" aria-hidden="true" />
                )}
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              id="mobile-navigation"
              className="w-[min(20rem,90vw)] p-0 flex flex-col"
              aria-describedby={undefined}
            >
              <SheetTitle className="sr-only">Navigering</SheetTitle>

              <div className="flex items-center justify-between border-b border-border px-5 py-4 shrink-0">
                <Link
                  to="/"
                  className="flex items-center gap-2.5 text-sm font-semibold text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="inline-flex h-[7px] w-[7px] rounded-full bg-primary" aria-hidden="true" />
                  Arbetsdetektiven
                </Link>
              </div>

              <nav
                aria-label="Mobilnavigering"
                className="flex-1 overflow-y-auto py-4 px-3"
              >
                <p className="mb-2 px-3 font-mono text-micro uppercase tracking-wider text-muted-foreground">
                  Tre huvuduppdrag
                </p>
                <ul className="space-y-0.5" role="list">
                  {PRIMARY_ASSIGNMENTS.map((item) => {
                    const Icon = item.icon;
                    const isActive = isPathActive(location.pathname, item.path);
                    return (
                      <li key={item.id}>
                        <NavLink
                          to={item.path}
                          aria-current={isActive ? "page" : undefined}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            "flex items-start gap-3 rounded-md px-3 py-3 transition-colors",
                            "text-foreground/65 hover:bg-muted hover:text-foreground",
                            isActive && "bg-muted text-foreground",
                          )}
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary mt-0.5">
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <span className="min-w-0">
                            <span className="block font-mono text-micro uppercase tracking-wider text-muted-foreground mb-0.5">
                              {item.kicker}
                            </span>
                            <span className="block text-sm font-medium leading-tight">
                              {item.navLabel}
                            </span>
                          </span>
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>

                <p className="mt-6 mb-2 px-3 font-mono text-micro uppercase tracking-wider text-muted-foreground">
                  Stöd & struktur
                </p>
                <ul className="space-y-0.5" role="list">
                  <li>
                    <NavLink
                      to={SECONDARY_LINK.path}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive: a }) =>
                        cn(
                          "block rounded-md px-3 py-2 text-sm transition-colors",
                          "text-muted-foreground hover:text-foreground hover:bg-muted",
                          a && "text-foreground bg-muted",
                        )
                      }
                    >
                      {SECONDARY_LINK.label}
                    </NavLink>
                  </li>
                </ul>
              </nav>

              <div className="shrink-0 border-t border-border px-5 py-4 space-y-3">
                {session && (
                  <button
                    type="button"
                    onClick={handleSignOut}
                    disabled={signingOut}
                    className={cn(
                      "inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
                      "text-muted-foreground hover:bg-muted hover:text-foreground",
                      "disabled:cursor-not-allowed disabled:opacity-50",
                    )}
                  >
                    <LogOut className="h-4 w-4" aria-hidden="true" />
                    Logga ut
                  </button>
                )}
                <p className="font-mono text-micro uppercase tracking-wider text-muted-foreground">
                  GFF · Göteborgs Fotbollförbund
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
};

export default GlobalNav;

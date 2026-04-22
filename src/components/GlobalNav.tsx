import { NavLink, Link, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "@/content/siteStructure";
import { cn } from "@/lib/utils";

const GlobalNav = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto flex h-16 items-center justify-between gap-6 px-4">
        <Link
          to="/"
          aria-current={isHome ? "page" : undefined}
          className="group flex items-center gap-2 text-base font-semibold tracking-tight text-foreground"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-primary transition-transform group-hover:scale-125" />
          Arbetsdetektiven
        </Link>

        <nav aria-label="Huvudnavigering">
          <ul className="flex items-center gap-1 md:gap-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.slug}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground",
                      isActive && "bg-accent text-foreground",
                    )
                  }
                >
                  {item.navLabel}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default GlobalNav;

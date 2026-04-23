import { NAV_ITEMS } from "@/content/siteStructure";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-[1fr_auto] sm:gap-16">
          {/* Identity */}
          <div className="max-w-[36ch]">
            <div className="flex items-center gap-2.5 mb-3">
              <span
                className="inline-flex h-[7px] w-[7px] rounded-full bg-primary"
                aria-hidden="true"
              />
              <span className="text-sm font-semibold text-foreground">
                Arbetsdetektiven
              </span>
            </div>
            <p className="text-small text-muted-foreground leading-relaxed">
              En karta över uppdraget inom Göteborgs Fotbollförbund — kärnuppgifter,
              föreningsutveckling och samverkan.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Sidfotnavigering">
            <p className="mb-3 font-mono text-micro uppercase tracking-wider text-muted-foreground">
              Områden
            </p>
            <ul className="space-y-2" role="list">
              {NAV_ITEMS.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={item.path}
                    className="text-small text-foreground/65 transition-colors hover:text-foreground"
                  >
                    {item.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-small text-muted-foreground">
            Fotbollsnyttan Göteborg · Kommittén för föreningsutveckling (GFF)
          </p>
          <p className="font-mono text-micro text-muted-foreground/60">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

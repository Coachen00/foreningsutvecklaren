import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { PortalLink } from "@/content/portalen";

interface Props {
  links: PortalLink[];
  ariaLabel: string;
}

const cardClass =
  "group flex h-full min-h-[13rem] flex-col p-6 card-gradient transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const PortalCard = ({ link }: { link: PortalLink }) => (
  <>
    <p className="font-mono text-micro uppercase tracking-wider text-signal-gold">
      {link.eyebrow}
    </p>
    <h3 className="mt-3 text-base font-semibold leading-tight text-foreground">
      {link.label}
    </h3>
    <p className="mt-3 text-small leading-relaxed text-muted-foreground">
      {link.description}
    </p>
    <span className="mt-auto inline-flex items-center gap-2 pt-5 font-mono text-micro uppercase tracking-wider text-primary transition-colors group-hover:text-accent">
      {link.external ? "Öppna" : "Gå vidare"}
      {link.external ? (
        <>
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
          <span className="sr-only">(öppnas i ny flik)</span>
        </>
      ) : (
        <ArrowRight
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </span>
  </>
);

const PortalHubBlock = ({ links, ariaLabel }: Props) => (
  <nav aria-label={ariaLabel}>
    <ul
      className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 xl:grid-cols-3"
      role="list"
    >
      {links.map((link) => (
        <li key={link.id} className="bg-card">
          {link.external ? (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cardClass}
            >
              <PortalCard link={link} />
            </a>
          ) : (
            <Link to={link.href} className={cardClass}>
              <PortalCard link={link} />
            </Link>
          )}
        </li>
      ))}
    </ul>
  </nav>
);

export default PortalHubBlock;

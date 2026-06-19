import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface RelatedItem {
  label: string;
  href: string;
  kind?: "internal" | "external";
  hint?: string;
}

interface Props {
  title?: string;
  kicker?: string;
  items: RelatedItem[];
  className?: string;
}

const AsideRelated = ({
  title = "Vidare läsning",
  kicker = "Relaterat",
  items,
  className,
}: Props) => {
  if (items.length === 0) return null;

  return (
    <aside
      aria-label={title}
      className={cn("not-prose", className)}
    >
      <p className="mb-2 font-mono text-micro uppercase tracking-wider text-signal-gold">
        {kicker}
      </p>
      <h3 className="mb-5 text-subhead font-semibold text-foreground">
        {title}
      </h3>
      <ul className="space-y-px border-t border-border" role="list">
        {items.map((it) => {
          const external = it.kind === "external";
          const Inner = (
            <span className="flex items-start gap-3 py-3 group">
              <span className="flex-1 min-w-0">
                <span className="block text-sm font-medium text-foreground leading-snug group-hover:text-primary transition-colors">
                  {it.label}
                </span>
                {it.hint && (
                  <span className="mt-0.5 block text-small text-muted-foreground leading-relaxed">
                    {it.hint}
                  </span>
                )}
              </span>
              <ArrowUpRight
                className={cn(
                  "h-3.5 w-3.5 shrink-0 mt-1 text-muted-foreground transition-all duration-200",
                  "group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
                  !external && "rotate-90",
                )}
                aria-hidden="true"
              />
            </span>
          );

          return (
            <li
              key={it.href + it.label}
              className="border-b border-border last:border-b-0"
            >
              {external ? (
                <a
                  href={it.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {Inner}
                  <span className="sr-only"> (öppnas i nytt fönster)</span>
                </a>
              ) : (
                <Link
                  to={it.href}
                  className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {Inner}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default AsideRelated;

import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { COMMITTEES } from "@/content/committees";

/**
 * COMMITTEES — Samhällsforumet och Föreningskommittén.
 *
 * Två kort som beskriver forum jag deltar i — inte egna toppkategorier,
 * men viktiga som korslänkar in i resten av sajten.
 */
const CommitteeBlock = () => (
  <div
    className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2"
    role="list"
  >
    {COMMITTEES.map((c) => (
      <article key={c.id} role="listitem" className="flex flex-col bg-card p-7 lg:p-8">
        <p className="font-mono text-micro uppercase tracking-wider text-primary">
          {c.role}
        </p>
        <h3 className="mt-3 font-serif text-subhead font-semibold leading-snug text-foreground">
          {c.name}
        </h3>
        <p className="mt-4 text-small leading-relaxed text-muted-foreground">
          {c.description}
        </p>
        <p className="mt-5 text-small leading-relaxed text-foreground/85">
          {c.myParticipation}
        </p>

        {c.crossLinks.length > 0 && (
          <div className="mt-auto pt-6 border-t border-border">
            <p className="font-mono text-micro uppercase tracking-wider text-muted-foreground">
              Korslänkar
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2" role="list">
              {c.crossLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="group inline-flex items-baseline gap-1.5 text-small font-medium text-foreground hover:text-primary"
                  >
                    <span className="underline-offset-4 group-hover:underline">
                      {link.label}
                    </span>
                    <ArrowUpRight
                      className="h-3 w-3 shrink-0 self-center text-muted-foreground transition-colors group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    ))}
  </div>
);

export default CommitteeBlock;

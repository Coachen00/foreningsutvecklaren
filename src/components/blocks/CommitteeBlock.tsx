import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import { COMMITTEES } from "@/content/committees";

/**
 * COMMITTEES — Samhällsforumet och Föreningskommittén.
 *
 * Två kort som beskriver forum jag deltar i — inte egna toppkategorier,
 * men viktiga som korslänkar in i resten av sajten.
 */
const CommitteeBlock = () => (
  <ul
    className="grid grid-cols-1 gap-4 md:grid-cols-2"
    role="list"
  >
    {COMMITTEES.map((c, index) => (
      <li
        key={c.id}
        className="signal-card card-gradient flex h-full flex-col rounded-xl border border-border p-7 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-md lg:p-8"
        style={{ "--signal": index === 0 ? "var(--signal-blue)" : "var(--signal-green)" } as CSSProperties}
      >
        <p className="signal-label" style={{ "--signal": index === 0 ? "var(--signal-blue)" : "var(--signal-green)" } as CSSProperties}>
          {c.role}
        </p>
        <h3 className="mt-3 text-subhead font-semibold leading-snug text-foreground">
          {c.name}
        </h3>
        <p className="mt-4 text-small leading-relaxed text-muted-foreground">
          {c.description}
        </p>
        <p className="mt-5 text-small leading-relaxed text-foreground/85">
          {c.myParticipation}
        </p>

        {c.crossLinks.length > 0 && (
          <div className="mt-auto border-t border-border pt-6">
            <p className="signal-label" style={{ "--signal": "var(--signal-gold)" } as CSSProperties}>
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
      </li>
    ))}
  </ul>
);

export default CommitteeBlock;

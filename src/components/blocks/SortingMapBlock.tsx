import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";
import { StaggerGroup, StaggerItem } from "@/components/motion";
import { SORTING_RULES } from "@/content/sortingRules";

/**
 * SORTING MAP — "Var hör detta hemma?"
 *
 * Visar de åtta sorteringsreglerna som ett tydligt orienteringsschema:
 *   fråga → primär placering → eventuell sekundär placering / korslänk
 *
 * Inte en checklista, utan en visuell karta som hjälper besökaren förstå
 * hur sajtens sorteringslogik fungerar.
 */
const SortingMapBlock = () => (
  <StaggerGroup
    as="ul"
    className="grid grid-cols-1 gap-4 md:grid-cols-2"
  >
    {SORTING_RULES.map((rule, index) => {
      const signals = [
        "var(--signal-green)",
        "var(--signal-blue)",
        "var(--signal-gold)",
        "var(--signal-coral)",
      ];
      return (
      <StaggerItem as="li" key={rule.number} className="flex">
      <div
        className="signal-card flex w-full flex-col gap-4 rounded-md border border-border bg-card p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-md lg:p-7"
        style={{ "--signal": signals[index % signals.length] } as CSSProperties}
      >
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-micro tabular-nums text-muted-foreground">
            {rule.number}
          </span>
          <p className="font-serif text-base font-semibold leading-snug text-foreground">
            {rule.question}
          </p>
        </div>

        <div className="flex flex-col gap-2 border-l-2 border-primary/40 pl-4">
          <p className="font-mono text-micro uppercase tracking-wider text-muted-foreground">
            Lägg under
          </p>
          {rule.destination.href ? (
            <Link
              to={rule.destination.href}
              className="group inline-flex items-baseline gap-1.5 self-start text-base font-medium text-foreground hover:text-primary"
            >
              <span className="underline-offset-4 group-hover:underline">
                {rule.destination.label}
              </span>
              <ArrowRight
                className="h-3.5 w-3.5 shrink-0 self-center text-muted-foreground transition-colors group-hover:text-primary"
                aria-hidden="true"
              />
            </Link>
          ) : (
            <p className="text-base font-medium text-foreground">
              {rule.destination.label}
            </p>
          )}

          {rule.also && (
            <p className="text-small text-muted-foreground">
              {rule.also.label}
            </p>
          )}

          {rule.note && (
            <p className="mt-1 text-small italic text-muted-foreground">
              {rule.note}
            </p>
          )}
        </div>
      </div>
      </StaggerItem>
      );
    })}
  </StaggerGroup>
);

export default SortingMapBlock;

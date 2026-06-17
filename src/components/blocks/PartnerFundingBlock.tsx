import {
  PARTNER_FUNDING_GROUPS,
  PARTNER_FUNDING_NARRATIVE,
} from "@/content/partnerFunding";
import type { CSSProperties } from "react";

/**
 * PARTNER FUNDING — partners i fyra roller plus finansieringsnarrativ.
 *
 * Lägger fokus på finansiering som kapacitetsbyggande, inte bidragssökande.
 * Detaljerade summor per förening hanteras inte här — det är medvetet.
 */
const PartnerFundingBlock = () => (
  <div className="space-y-12">
    {/* Narrativ — så fungerar det */}
    <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_1.3fr] md:gap-16 lg:gap-24">
      <div>
        <p className="signal-label" style={{ "--signal": "var(--signal-gold)" } as CSSProperties}>
          Positionering
        </p>
        <p className="mt-4 font-serif text-subhead font-semibold leading-snug text-foreground">
          {PARTNER_FUNDING_NARRATIVE.positioning}
        </p>
      </div>
      <div className="self-end">
        <ul
          className="space-y-3 border-l-2 border-border pl-5 text-small leading-relaxed text-muted-foreground"
          role="list"
        >
          {PARTNER_FUNDING_NARRATIVE.guardrails.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>

    {/* Fyra roller */}
    <ul
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      role="list"
    >
      {PARTNER_FUNDING_GROUPS.map((group, index) => {
        const signals = [
          "var(--signal-blue)",
          "var(--signal-green)",
          "var(--signal-gold)",
          "var(--signal-coral)",
        ];
        return (
        <li
          key={group.id}
          className="signal-card flex flex-col gap-4 rounded-md border border-border bg-card p-6 shadow-xs lg:p-7"
          style={{ "--signal": signals[index] } as CSSProperties}
        >
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-micro uppercase tracking-wider text-muted-foreground">
              Roll {group.number}
            </span>
          </div>
          <h3 className="font-serif text-base font-semibold leading-tight text-foreground">
            {group.label}
          </h3>
          <p className="text-small leading-relaxed text-muted-foreground">
            {group.shortDescription}
          </p>
          <ul className="mt-1 space-y-1 text-small text-foreground/80" role="list">
            {group.examples.map((ex) => (
              <li key={ex} className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-primary/50"
                />
                <span>{ex}</span>
              </li>
            ))}
          </ul>
        </li>
        );
      })}
    </ul>
  </div>
);

export default PartnerFundingBlock;

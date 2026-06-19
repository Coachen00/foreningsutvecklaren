import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";
import { StaggerGroup, StaggerItem } from "@/components/motion";
import type { EffectStage } from "@/content/effectChain";

interface Props {
  stages: EffectStage[];
  className?: string;
}

/**
 * EFFECT CHAIN — fyra stegs effektlogik visualiserad som flödeskedja.
 *
 * Layout-resonemang:
 *   • Översta raden visar de fyra stegen som etiketter med pilar emellan —
 *     ett snabbt visuellt sammanhang som förklarar att resurser leder till
 *     aktiviteter, leder till output, leder till effekt.
 *   • Under följer detaljerade kort med exempel per steg.
 *
 * Det viktiga är att pilen "→" är en del av designen, inte dekoration.
 * Den visar att detta INTE är en lista — det är en kausalkedja.
 */
const EffectChain = ({ stages, className }: Props) => (
  <div className={cn("space-y-6", className)}>
    {/* Pilkedja — överblick */}
    <div>
      <ol
        className="grid grid-cols-2 gap-3 rounded-md border border-border bg-card px-5 py-4 shadow-xs sm:flex sm:items-center"
        role="list"
      >
        {stages.map((stage, i) => (
          <li key={stage.number} className="contents">
            <div className="inline-flex items-baseline gap-2">
              <span className="font-mono text-micro tabular-nums text-muted-foreground">
                {stage.number}
              </span>
              <span className="text-base font-semibold text-foreground">
                {stage.label}
              </span>
            </div>
            {i < stages.length - 1 && (
              <ArrowRight
                className="hidden h-4 w-4 shrink-0 text-accent/70 sm:block"
                aria-hidden="true"
              />
            )}
          </li>
        ))}
      </ol>
    </div>

    {/* Detaljerade kort */}
    <StaggerGroup className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {stages.map((stage, index) => {
        const Icon = stage.icon;
        const signals = [
          "var(--signal-blue)",
          "var(--signal-green)",
          "var(--signal-gold)",
          "var(--signal-coral)",
        ];
        return (
          <StaggerItem key={stage.number} className="flex">
          <article
            className="signal-card group flex w-full flex-col rounded-md border border-border bg-card p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-md"
            style={{ "--signal": signals[index] } as CSSProperties}
          >
            <header className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-accent/15 group-hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </span>
              <span className="font-mono text-micro uppercase tracking-wider text-muted-foreground">
                Steg {stage.number}
              </span>
            </header>

            <h3 className="mt-4 text-base font-semibold leading-snug text-foreground">
              {stage.title}
            </h3>
            <p className="mt-2 text-small leading-relaxed text-muted-foreground">
              {stage.description}
            </p>

            <ul
              className="mt-5 space-y-1.5 text-[0.8125rem] leading-relaxed text-foreground/80"
              role="list"
            >
              {stage.examples.map((ex) => (
                <li key={ex} className="flex gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-primary/50"
                  />
                  <span>{ex}</span>
                </li>
              ))}
            </ul>
          </article>
          </StaggerItem>
        );
      })}
    </StaggerGroup>
  </div>
);

export default EffectChain;

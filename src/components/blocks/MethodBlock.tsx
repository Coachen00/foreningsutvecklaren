import { ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";
import {
  METHOD_MATRIX,
  METHOD_OVERVIEW,
  METHOD_PRINCIPLES,
  METHOD_RHYTHM,
  METHOD_STAGES,
  METHOD_WORK_MODES,
} from "@/content/method";
import { cn } from "@/lib/utils";

const weightClass = {
  high: "w-full bg-primary",
  medium: "w-3/4 bg-signal-blue",
  low: "w-1/2 bg-signal-gold",
};

const stageSignals = [
  "var(--signal-blue)",
  "var(--signal-green)",
  "var(--signal-gold)",
  "var(--signal-coral)",
  "var(--signal-blue)",
  "var(--signal-green)",
];

const MethodBlock = () => (
  <section
    aria-labelledby="metod-heading"
    className="border-b border-border bg-background pitch-lines"
  >
    <div className="container mx-auto px-4 sm:px-6">
      <div className="section-y-lg">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1.45fr] md:gap-16 lg:gap-24">
          <div>
            <p className="signal-label mb-5" style={{ "--signal": "var(--signal-green)" } as CSSProperties}>
              {METHOD_OVERVIEW.eyebrow}
            </p>
            <h1
              id="metod-heading"
              className="text-display font-semibold leading-[1.05] text-foreground"
            >
              {METHOD_OVERVIEW.title}
            </h1>
          </div>
          <div className="self-end">
            <p className="max-w-[48ch] text-lead text-foreground/85">
              {METHOD_OVERVIEW.lead}
            </p>
            <p className="mt-4 max-w-[50ch] text-base leading-relaxed text-muted-foreground">
              {METHOD_OVERVIEW.support}
            </p>
          </div>
        </div>

        <aside className="pull-quote mt-12 max-w-[58rem] p-6 sm:p-8">
          <p className="text-subhead font-semibold leading-snug text-foreground">
            Om metoden fungerar ska läsaren snabbt förstå: var hör frågan hemma,
            vem äger nästa steg och vad räknas som effekt?
          </p>
        </aside>

        <div className="mt-14 lg:mt-20">
          <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-[0.9fr_1.45fr] md:gap-16 lg:gap-24">
            <div>
              <p className="signal-label" style={{ "--signal": "var(--signal-blue)" } as CSSProperties}>
                Processgraf
              </p>
              <h2 className="mt-2 text-headline font-semibold text-foreground">
                Från fråga till lärande
              </h2>
            </div>
            <p className="max-w-[46ch] self-end text-small leading-relaxed text-muted-foreground">
              Varje steg ska lämna ett spår: placering, mandat, underlag, val,
              rytm eller lärande.
            </p>
          </div>

          <ol
            className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-6"
            role="list"
          >
            {METHOD_STAGES.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <li
                  key={stage.number}
                  className="signal-card relative bg-card p-6 transition-colors hover:bg-muted/40"
                  style={{ "--signal": stageSignals[index] } as CSSProperties}
                >
                  {index < METHOD_STAGES.length - 1 && (
                    <ArrowRight
                      className="absolute right-5 top-6 hidden h-4 w-4 text-muted-foreground/45 lg:block"
                      aria-hidden="true"
                    />
                  )}
                  <header className="flex items-start gap-3 lg:block">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div className="lg:mt-5">
                      <p className="font-mono text-micro tabular-nums text-muted-foreground">
                        {stage.number} · {stage.kicker}
                      </p>
                      <h3 className="mt-1 text-base font-semibold leading-tight text-foreground">
                        {stage.title}
                      </h3>
                    </div>
                  </header>
                  <p className="mt-4 text-small leading-relaxed text-muted-foreground">
                    {stage.description}
                  </p>
                  <p className="mt-5 border-t border-border pt-4 text-[0.8125rem] leading-relaxed text-foreground/85">
                    <span className="font-semibold text-foreground">Output: </span>
                    {stage.output}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1.15fr)_minmax(21rem,0.85fr)]">
          <section>
            <p className="signal-label mb-5" style={{ "--signal": "var(--signal-green)" } as CSSProperties}>
              Arbetssätt
            </p>
            <ul
              className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2"
              role="list"
            >
              {METHOD_WORK_MODES.map((mode) => {
                const Icon = mode.icon;
                return (
                  <li key={mode.title} className="bg-card p-6 transition-colors hover:bg-muted/40">
                    <div className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent/15 text-accent">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="font-mono text-micro uppercase tracking-wider text-muted-foreground">
                          {mode.label}
                        </p>
                        <h3 className="mt-1 text-base font-semibold leading-tight text-foreground">
                          {mode.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-4 text-small leading-relaxed text-muted-foreground">
                      {mode.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2" role="list">
                      {mode.examples.map((example) => (
                        <li
                          key={example}
                          className="rounded-sm border border-border bg-background px-2.5 py-1 font-mono text-micro uppercase tracking-wider text-muted-foreground"
                        >
                          {example}
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </section>

          <section className="card-gradient rounded-xl border border-border p-6 transition-all hover:border-accent/40 hover:shadow-md">
            <p className="signal-label" style={{ "--signal": "var(--signal-gold)" } as CSSProperties}>
              Arbetsrytm
            </p>
            <h2 className="mt-2 text-subhead font-semibold text-foreground">
              Vad som ska bära mest vikt
            </h2>
            <p className="mt-3 text-small leading-relaxed text-muted-foreground">
              Rollen ska bygga riktning, kapacitet och lärande, inte bara fler
              aktiviteter.
            </p>
            <div className="mt-6 space-y-5">
              {METHOD_RHYTHM.map((item) => (
                <article key={item.title}>
                  <div className="mb-2 flex items-baseline justify-between gap-4">
                    <h3 className="text-sm font-semibold leading-tight text-foreground">
                      {item.title}
                    </h3>
                    <span className="font-mono text-micro uppercase tracking-wider text-muted-foreground">
                      {item.weight === "high"
                        ? "Hög"
                        : item.weight === "medium"
                        ? "Mellan"
                        : "Riktad"}
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-sm bg-muted">
                    <div
                      className={cn("h-full rounded-sm", weightClass[item.weight])}
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 xl:grid-cols-[minmax(21rem,0.8fr)_minmax(0,1.2fr)]">
          <section className="card-gradient rounded-xl border border-border p-6 transition-all hover:border-accent/40 hover:shadow-md lg:p-7">
            <p className="signal-label" style={{ "--signal": "var(--signal-blue)" } as CSSProperties}>
              Beslutsmatris
            </p>
            <h2 className="mt-2 text-subhead font-semibold text-foreground">
              Välj metod efter behov och kapacitet
            </h2>
            <p className="mt-3 text-small leading-relaxed text-muted-foreground">
              Två frågor räcker: hur tydligt är behovet, och hur mycket kan
              föreningen bära själv?
            </p>
            <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
              {METHOD_MATRIX.map((item) => (
                <article key={item.id} className="bg-background p-4 transition-colors hover:bg-muted/40">
                  <p className="font-mono text-micro uppercase tracking-wider text-accent">
                    {item.context}
                  </p>
                  <h3 className="mt-2 text-sm font-semibold leading-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted-foreground">
                    {item.action}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <p className="signal-label mb-5" style={{ "--signal": "var(--signal-green)" } as CSSProperties}>
              Principer för metodutveckling
            </p>
            <ul
              className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2"
              role="list"
            >
              {METHOD_PRINCIPLES.map((principle) => (
                <li key={principle.title} className="bg-card p-6 transition-colors hover:bg-muted/40">
                  <h3 className="text-base font-semibold leading-snug text-foreground">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-small leading-relaxed text-muted-foreground">
                    {principle.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  </section>
);

export default MethodBlock;

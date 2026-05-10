import { EFFECT_LOGIC } from "@/content/harvestedSuccesses";

const EffectLogicSummary = () => (
  <section
    aria-labelledby="effect-logic-heading"
    className="section-y bg-card"
  >
    <div className="container mx-auto px-4 sm:px-6">
      <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-[1fr_1.2fr] md:gap-12 lg:gap-16">
        <div>
          <p className="mb-3 font-mono text-micro uppercase tracking-wider text-primary">
            Effektlogik
          </p>
          <h2
            id="effect-logic-heading"
            className="text-headline font-semibold text-foreground"
          >
            Resurser blir effekt
          </h2>
        </div>
        <p className="self-end text-lead text-muted-foreground">
          Den röda tråden från det som stoppas in till det som stannar kvar.
          Samma fyra steg gäller för alla tre huvuduppdragen.
        </p>
      </div>

      <ol
        role="list"
        className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4"
      >
        {EFFECT_LOGIC.map((entry, i) => (
          <li
            key={entry.label}
            className="flex h-full flex-col gap-3 bg-card p-6"
          >
            <p className="font-mono text-micro uppercase tracking-wider text-muted-foreground">
              {String(i + 1).padStart(2, "0")} · {entry.label}
            </p>
            <p className="text-small leading-relaxed text-foreground/85">
              {entry.body}
            </p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default EffectLogicSummary;

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CURRENT_STATE } from "@/content/currentState";
import { cn } from "@/lib/utils";

/**
 * CURRENT STATE — startsidans Nuläge-dashboard.
 *
 * Editorial layout med stark typografisk hierarki:
 *   • stor rubrik och kort ingress (rollbeskrivning)
 *   • tre stora huvudkort (de tre största arbetsområdena)
 *   • "Just nu"-rad med pågående fokus
 *   • fyra kompakta effektlogikkort (Resurser → Aktiviteter → Output → Effekt)
 */
const CurrentStateBlock = () => {
  const { eyebrow, title, role, topMissions, focus, effect } = CURRENT_STATE;

  return (
    <section
      aria-labelledby="nulage-heading"
      className="border-b border-border bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="section-y-lg">
          {/* Header */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16 lg:gap-24">
            <div>
              <p className="mb-4 inline-flex items-center gap-2.5 font-mono text-micro uppercase tracking-wider text-primary">
                <span
                  className="inline-flex h-[5px] w-[5px] rounded-full bg-primary"
                  aria-hidden="true"
                />
                {eyebrow}
              </p>
              <h2
                id="nulage-heading"
                className="font-serif text-display font-semibold leading-[1.05] text-foreground"
              >
                {title}
              </h2>
            </div>
            <div className="self-end">
              <p className="font-mono text-micro uppercase tracking-wider text-muted-foreground">
                {role.label}
              </p>
              <p className="mt-3 max-w-[52ch] text-lead text-foreground/85">
                {role.body}
              </p>
            </div>
          </div>

          {/* Tre största arbetsområden */}
          <div className="mt-14 lg:mt-20">
            <p className="mb-5 font-mono text-micro uppercase tracking-wider text-primary">
              Tre största arbetsområden just nu
            </p>
            <ul
              className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2"
              role="list"
            >
              {topMissions.map((m, i) => (
                <li
                  key={m.id}
                  className={cn(
                    "bg-background",
                    // Markera En bättre väg som störst — den är priority 1, full bredd
                    i === 0 && "md:col-span-2",
                  )}
                >
                  <Link
                    to={m.path}
                    className={cn(
                      "group relative flex h-full flex-col bg-card p-6 lg:p-8",
                      "transition-colors duration-200",
                      "hover:bg-primary hover:text-primary-foreground",
                      "focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring",
                      i === 0 && "md:p-9 lg:p-12",
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute right-6 top-5 font-mono text-[3rem] font-bold leading-none text-border/60 transition-colors duration-200 group-hover:text-primary-foreground/15 select-none lg:text-[3.5rem]"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <p className="mb-2 font-mono text-micro uppercase tracking-wider text-muted-foreground transition-colors duration-200 group-hover:text-primary-foreground/60">
                      {m.kicker}
                    </p>

                    <h3
                      className={cn(
                        "mb-3 font-serif font-semibold text-foreground transition-colors duration-200 group-hover:text-primary-foreground",
                        i === 0 ? "text-headline" : "text-subhead",
                      )}
                    >
                      {m.title}
                    </h3>

                    <p
                      className={cn(
                        "mb-6 max-w-[52ch] text-foreground/75 transition-colors duration-200 group-hover:text-primary-foreground/80",
                        i === 0 ? "text-lead" : "text-small",
                      )}
                    >
                      {m.summary}
                    </p>

                    <span className="mt-auto inline-flex items-center gap-2 font-mono text-micro font-medium uppercase tracking-wider text-primary transition-colors duration-200 group-hover:text-primary-foreground">
                      Gå till uppdraget
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pågående fokus */}
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16 lg:gap-24">
            <div>
              <p className="mb-3 font-mono text-micro uppercase tracking-wider text-primary">
                {focus.eyebrow}
              </p>
              <p className="text-small text-muted-foreground">{focus.intro}</p>
            </div>
            <ul
              className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2"
              role="list"
            >
              {focus.items.map((item) => (
                <li key={item.label} className="bg-card p-5">
                  <p className="font-semibold text-base leading-tight text-foreground">
                    {item.label}
                  </p>
                  <p className="mt-2 text-small leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Effektlogik — kompakt teaser. Full version finns i sektion 4 (EffectChain). */}
          <div className="mt-14">
            <div className="mb-6 grid grid-cols-1 gap-2 md:grid-cols-[1fr_1.4fr] md:gap-16 lg:gap-24">
              <div>
                <p className="font-mono text-micro uppercase tracking-wider text-primary">
                  {effect.eyebrow}
                </p>
                <p className="mt-2 font-serif text-subhead font-semibold text-foreground">
                  Resurser → Aktiviteter → Output → Effekt
                </p>
              </div>
              <p className="self-end text-small text-muted-foreground">
                {effect.intro}
              </p>
            </div>
            <ol
              className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4"
              role="list"
            >
              {effect.stages.map((stage) => {
                const Icon = stage.icon;
                return (
                  <li
                    key={stage.number}
                    className="flex items-center gap-3 bg-card p-5"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-micro tabular-nums text-muted-foreground">
                        {stage.number}
                      </span>
                      <span className="block font-semibold text-base leading-tight text-foreground">
                        {stage.label}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentStateBlock;

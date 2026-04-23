import { PRIMARY_ASSIGNMENTS } from "@/content/primaryAssignments";
import { ACTIVITIES } from "@/content/activities";
import { PARTNERS } from "@/content/partners";

const HomeHero = () => {
  return (
    <section aria-labelledby="hero-heading" className="relative border-b border-border bg-card overflow-hidden">
      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="section-y-lg max-w-[56rem]">
          {/* Eyebrow */}
          <p className="animate-fade-up mb-7 inline-flex items-center gap-2.5 font-mono text-micro uppercase tracking-wider text-primary">
            <span
              className="inline-flex h-[5px] w-[5px] rounded-full bg-primary"
              aria-hidden="true"
            />
            GFF · Göteborgs Fotbollförbund
          </p>

          {/* H1 — Lora display, the only place on the site */}
          <h1
            id="hero-heading"
            className="animate-fade-up animate-delay-75 font-serif text-display font-semibold text-foreground"
          >
            Tre huvuduppdrag
            <br className="hidden sm:block" />
            bär arbetet framåt.
          </h1>

          {/* Lead */}
          <p className="animate-fade-up animate-delay-150 mt-6 max-w-[52ch] text-lead text-muted-foreground">
            Uppdraget inom Göteborgs Fotbollförbund vilar på tre spår:
            Föreningslyftet, En bättre väg och FU Skola. Tillsammans bygger de
            struktur, inkludering och en bro mellan skola och föreningsliv.
          </p>

          {/* Supporting */}
          <p className="animate-fade-up animate-delay-200 mt-3 font-medium text-base text-foreground/80">
            Tre uppdrag, en tråd — närvaro, struktur och samverkan.
          </p>

          {/* Metrics strip */}
          <dl className="animate-fade-up animate-delay-300 mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border pt-8">
            <div>
              <dt className="font-mono text-micro uppercase tracking-wider text-muted-foreground">
                Huvuduppdrag
              </dt>
              <dd className="mt-1 text-2xl font-semibold tabular-nums text-foreground">
                {PRIMARY_ASSIGNMENTS.length}
              </dd>
            </div>
            <div className="h-8 w-px bg-border hidden sm:block" aria-hidden="true" />
            <div>
              <dt className="font-mono text-micro uppercase tracking-wider text-muted-foreground">
                Kärnuppgifter
              </dt>
              <dd className="mt-1 text-2xl font-semibold tabular-nums text-foreground">
                {ACTIVITIES.filter((a) => a.scope === "core").length}
              </dd>
            </div>
            <div className="h-8 w-px bg-border hidden sm:block" aria-hidden="true" />
            <div>
              <dt className="font-mono text-micro uppercase tracking-wider text-muted-foreground">
                Partners
              </dt>
              <dd className="mt-1 text-2xl font-semibold tabular-nums text-foreground">
                {PARTNERS.length}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[2px] w-24 bg-primary"
      />
    </section>
  );
};

export default HomeHero;

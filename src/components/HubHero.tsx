import heroBanner from "@/assets/hero-banner.jpg";

const HubHero = () => {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/95 via-foreground/85 to-foreground/55" />
      </div>

      <div className="container relative mx-auto px-4 py-24 md:py-36 lg:py-44">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-primary-foreground/70">
          Onboarding · Kommittén för föreningsutveckling (GFF)
        </p>
        <h1 className="max-w-4xl font-serif text-5xl font-bold leading-[1.05] text-primary-foreground md:text-6xl lg:text-7xl">
          Hela stan
          <br />
          på samma plan.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-primary-foreground/85 md:text-xl">
          En översikt över Fotbollsnyttan i Göteborg – syfte, metod, satsningar
          och människorna som driver arbetet framåt.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-primary-foreground/60">
          <span className="inline-flex h-px w-10 bg-primary-foreground/40" />
          9 sektioner · 60 sekunder per ingång
        </div>
      </div>
    </section>
  );
};

export default HubHero;

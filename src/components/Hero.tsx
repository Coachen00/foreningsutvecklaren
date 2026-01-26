import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Fotbollsplan i Göteborg"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl font-serif">
            Hela stan på samma plan
          </h1>
          <p className="mb-8 text-lg text-primary-foreground/90 md:text-xl">
            Onboarding – Kommittén för föreningsutveckling (GFF).
            <br />
            <span className="text-primary-foreground/70">
              Fokus: Fotbollsnyttan + koppling till En bättre väg och Idrottsklivet.
            </span>
          </p>
          <a
            href="#varfor"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#varfor")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            Läs mer
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

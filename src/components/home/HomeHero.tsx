const HomeHero = () => {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-20 md:py-28 lg:py-32">
        <div className="max-w-4xl">
          <p className="mb-4 text-xs font-mono uppercase tracking-wider text-primary">
            Arbetsdetektiven · GFF
          </p>
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
            Så här ser uppdraget ut – i vardagen.
          </h1>
          <p className="mb-4 text-lg text-foreground/80 md:text-2xl">
            En karta över rollen som stöttar föreningar i Göteborg: från träningsbesök
            och ledarsamtal till kvalitetsklubb, fotboll i skolan och En bättre väg.
          </p>
          <p className="text-base text-muted-foreground md:text-lg">
            Tre områden, en tråd: närvaro, struktur och samverkan.
          </p>
        </div>
      </div>
    </header>
  );
};

export default HomeHero;

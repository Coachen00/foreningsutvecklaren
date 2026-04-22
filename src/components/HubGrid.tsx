import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { sections } from "@/data/sections";
import { cn } from "@/lib/utils";

const sizeClasses: Record<"lg" | "md" | "sm", string> = {
  lg: "md:col-span-2 md:row-span-2 min-h-[280px] md:min-h-[340px]",
  md: "md:col-span-2 min-h-[220px]",
  sm: "min-h-[200px]",
};

const HubGrid = () => {
  return (
    <section
      aria-labelledby="hub-heading"
      className="container mx-auto px-4 pb-24 pt-12 md:pb-32 md:pt-20"
    >
      <div className="mb-10 flex items-end justify-between gap-6 md:mb-14">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Översikt · 9 destinationer
          </p>
          <h2 id="hub-heading" className="font-serif text-3xl text-foreground md:text-4xl">
            Välj ingång
          </h2>
        </div>
        <p className="hidden max-w-sm text-sm text-muted-foreground md:block">
          Varje sektion är en egen sida. Klicka för att gå djupare i ett område.
        </p>
      </div>

      <ul className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 md:gap-4">
        {sections.map((s) => {
          const Icon = s.icon;
          return (
            <li key={s.slug} className={cn(sizeClasses[s.size])}>
              <Link
                to={s.path}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:bg-accent md:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {s.number} · {s.kicker}
                  </span>
                  <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>

                <div>
                  <h3
                    className={cn(
                      "font-serif text-foreground",
                      s.size === "lg"
                        ? "text-3xl md:text-4xl"
                        : s.size === "md"
                          ? "text-2xl md:text-3xl"
                          : "text-xl md:text-2xl",
                    )}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 text-muted-foreground",
                      s.size === "lg" ? "max-w-md text-base" : "text-sm",
                    )}
                  >
                    {s.lead}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-foreground/70 transition-colors group-hover:text-primary">
                    Öppna
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default HubGrid;

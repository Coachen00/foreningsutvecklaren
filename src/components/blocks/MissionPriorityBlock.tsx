import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import { MISSION_AREAS } from "@/content/missionAreas";
import { cn } from "@/lib/utils";

/**
 * MISSION PRIORITY — tre huvuduppdrag i prioriterad ordning.
 *
 * En bättre väg är priority 1 och renderas som hero-kort (full bredd,
 * större typografi, längre lista). FU Skola och Föreningslyftet är
 * priority 2 och visas i en jämbördig 2-kolumns grid under.
 */
const MissionPriorityBlock = () => {
  const primary = MISSION_AREAS.find((m) => m.priority === "primary")!;
  const secondary = MISSION_AREAS.filter((m) => m.priority === "secondary");
  const missionSignal = {
    "en-battre-vag": "var(--signal-green)",
    "fu-skola": "var(--signal-blue)",
    foreningslyftet: "var(--signal-gold)",
  };

  return (
    <div className="space-y-4">
      {/* PRIMARY — En bättre väg som hero */}
      <article
        className="signal-card overflow-hidden rounded-md border border-border bg-card shadow-xs"
        style={{ "--signal": missionSignal[primary.id] } as CSSProperties}
      >
        <div className="grid grid-cols-1 gap-6 p-7 md:grid-cols-[1.1fr_1.4fr] md:gap-12 md:p-10 lg:gap-16 lg:p-12">
          <div>
            <p className="signal-label" style={{ "--signal": missionSignal[primary.id] } as CSSProperties}>
              {primary.bearing}
            </p>
            <h3 className="mt-4 font-serif text-headline font-semibold leading-[1.05] text-foreground">
              {primary.title}
            </h3>
            <p className="mt-2 font-mono text-micro uppercase tracking-wider text-muted-foreground">
              {primary.kicker}
            </p>

            <p className="mt-7 max-w-[38ch] text-lead text-foreground/85">
              {primary.lead}
            </p>

            <Link
              to={primary.path}
              className="mt-8 inline-flex items-center gap-2 font-mono text-micro font-medium uppercase tracking-wider text-primary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
            >
              Gå till {primary.title}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div>
            <p className="font-mono text-micro uppercase tracking-wider text-muted-foreground">
              Det här hör hit
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2" role="list">
              {primary.contains.map((item) => (
                <li
                  key={item}
                  className="rounded-sm border border-border bg-background px-3 py-2 text-small leading-snug text-foreground/85"
                >
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {primary.crossLinks.length > 0 && (
              <div className="mt-7 border-t border-border pt-5">
                <p className="font-mono text-micro uppercase tracking-wider text-muted-foreground">
                  Korslänkar
                </p>
                <ul className="mt-3 space-y-2" role="list">
                  {primary.crossLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="group inline-flex items-baseline gap-2 text-small text-foreground hover:text-primary"
                      >
                        <span className="font-medium underline-offset-4 group-hover:underline">
                          {link.label}
                        </span>
                        <span className="text-muted-foreground">— {link.hint}</span>
                        <ArrowUpRight
                          className="h-3 w-3 shrink-0 self-center text-muted-foreground transition-colors group-hover:text-primary"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </article>

      {/* SECONDARY — FU Skola + Föreningslyftet sida-vid-sida */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {secondary.map((mission) => (
          <article
            key={mission.id}
            className="signal-card flex flex-col rounded-md border border-border bg-card p-7 shadow-xs lg:p-9"
            style={{ "--signal": missionSignal[mission.id] } as CSSProperties}
          >
            <p className="signal-label" style={{ "--signal": missionSignal[mission.id] } as CSSProperties}>
              {mission.bearing}
            </p>
            <h3 className="mt-3 font-serif text-subhead font-semibold leading-tight text-foreground">
              {mission.title}
            </h3>
            <p className="mt-2 font-mono text-micro uppercase tracking-wider text-muted-foreground">
              {mission.kicker}
            </p>
            <p className="mt-5 max-w-[42ch] text-base leading-relaxed text-foreground/80">
              {mission.lead}
            </p>

            <p className="mt-7 font-mono text-micro uppercase tracking-wider text-muted-foreground">
              Det här hör hit
            </p>
            <ul className="mt-3 flex flex-wrap gap-2" role="list">
              {mission.contains.slice(0, 5).map((item) => (
                <li
                  key={item}
                  className="rounded-sm border border-border bg-background px-2.5 py-1.5 text-small leading-snug text-foreground/80"
                >
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to={mission.path}
              className={cn(
                "mt-auto pt-7 inline-flex items-center gap-2",
                "font-mono text-micro font-medium uppercase tracking-wider text-primary",
                "hover:text-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4",
              )}
            >
              Gå till {mission.title}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default MissionPriorityBlock;

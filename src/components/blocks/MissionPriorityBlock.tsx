import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";
import { MISSION_AREAS } from "@/content/missionAreas";

const missionSignal = {
  "en-battre-vag": "var(--signal-green)",
  "fu-skola": "var(--signal-blue)",
  foreningslyftet: "var(--signal-gold)",
};

const chipText = (item: string) => item.split(" — ")[0];

const MissionPriorityBlock = () => (
  <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
    {MISSION_AREAS.map((mission) => {
      const Icon = mission.icon;
      return (
        <Link
          key={mission.id}
          to={mission.path}
          className="signal-card group flex min-h-[19rem] flex-col rounded-md border border-border bg-card p-7 shadow-xs transition-[background,border-color,transform] hover:-translate-y-0.5 hover:border-primary/35 hover:bg-primary-subtle/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          style={{ "--signal": missionSignal[mission.id] } as CSSProperties}
        >
          <div className="flex items-start justify-between gap-6">
            <p
              className="signal-label"
              style={{ "--signal": missionSignal[mission.id] } as CSSProperties}
            >
              {mission.bearing}
            </p>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Icon className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>

          <h3 className="mt-6 font-serif text-subhead font-semibold leading-tight text-foreground">
            {mission.title}
          </h3>
          <p className="mt-3 max-w-[31ch] text-base leading-relaxed text-foreground/75">
            {mission.lead}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2" role="list">
            {mission.contains.slice(0, 3).map((item) => (
              <li
                key={item}
                className="rounded-full border border-border bg-background px-2.5 py-1.5 text-small leading-snug text-foreground/80"
              >
                {chipText(item)}
              </li>
            ))}
          </ul>

          <span className="mt-auto inline-flex items-center gap-2 pt-7 font-mono text-micro font-medium uppercase tracking-wider text-primary">
            Öppna spåret
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </Link>
      );
    })}
  </div>
);

export default MissionPriorityBlock;

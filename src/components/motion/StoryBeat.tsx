import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export type Beat = {
  /** Two-digit beat number, e.g. "01" */
  no: string;
  title: string;
  body?: string;
  /** Signal token name: gold | blue | green | coral */
  color?: "gold" | "blue" | "green" | "coral";
};

const colorVar: Record<NonNullable<Beat["color"]>, string> = {
  gold: "var(--signal-gold)",
  blue: "var(--signal-blue)",
  green: "var(--signal-green)",
  coral: "var(--signal-coral)",
};

/**
 * Cinematic numbered timeline (01–NN). Each beat reveals on scroll, alternates
 * side on desktop, and carries a colored marker border — mirrors Gunnilse's
 * CinematicPitchHero story beats.
 */
export function StoryBeat({ beats, className }: { beats: Beat[]; className?: string }) {
  return (
    <ol className={cn("relative space-y-12 md:space-y-20", className)} role="list">
      {beats.map((beat, i) => {
        const signal = colorVar[beat.color ?? "gold"];
        const flip = i % 2 === 1;
        return (
          <li key={beat.no}>
            <Reveal
              delay={0.05}
              className={cn(
                "grid gap-5 md:grid-cols-2 md:gap-12",
                flip && "md:[&>*:first-child]:order-2",
              )}
            >
              <div
                className="border-l-2 pl-5 md:pl-7"
                style={{ borderColor: `hsl(${signal})` }}
              >
                <span
                  className="num-display block"
                  style={{ color: `hsl(${signal} / 0.55)` }}
                >
                  {beat.no}
                </span>
                <h3 className="mt-2 text-foreground">{beat.title}</h3>
              </div>
              {beat.body && (
                <p className="self-center max-w-[48ch] text-muted-foreground">
                  {beat.body}
                </p>
              )}
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}

export default StoryBeat;

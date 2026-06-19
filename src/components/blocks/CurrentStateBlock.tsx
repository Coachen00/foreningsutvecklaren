import type { CSSProperties } from "react";
import { CURRENT_STATE } from "@/content/currentState";
import { StaggerGroup, StaggerItem } from "@/components/motion";

/**
 * Browse-first overview: startsidan ska ge karta och nyfikenhet.
 * Fördjupning bor på länkarna, inte här.
 */
const CurrentStateBlock = () => {
  const { role, topMissions, focus } = CURRENT_STATE;
  const signalClass = [
    "[--signal:var(--signal-green)]",
    "[--signal:var(--signal-blue)]",
    "[--signal:var(--signal-gold)]",
  ];
  const promise = [
    "Hitta var insatsen gör störst nytta.",
    "Koppla ihop förening, skola och samhälle.",
    "Göra stödet synligt, följbart och användbart.",
  ];

  return (
    <section
      aria-labelledby="nulage-heading"
      className="border-b border-border bg-background pitch-lines"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="section-y">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1.4fr] md:gap-16 lg:gap-24">
            <div>
              <p className="signal-label mb-5" style={{ "--signal": "var(--signal-coral)" } as CSSProperties}>
                På 30 sekunder
              </p>
              <h2
                id="nulage-heading"
                className="max-w-[9ch] text-display font-semibold leading-[1.05] text-foreground"
              >
                Vad är det?
              </h2>
            </div>
            <div className="self-end">
              <p className="font-mono text-micro uppercase tracking-wider text-muted-foreground">
                {role.label}
              </p>
              <p className="mt-3 max-w-[34ch] text-lead text-foreground/85">
                En roll som ser till att stöd, relationer och kvalitet hamnar där fotbollen kan göra mest nytta.
              </p>
            </div>
          </div>

          <StaggerGroup as="ul" className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-3">
            {promise.map((text, index) => (
              <StaggerItem
                as="li"
                key={text}
                className={`signal-card card-gradient rounded-xl border border-border p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-md ${signalClass[index]}`}
              >
                <p className="font-mono text-micro tabular-nums text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 text-subhead font-semibold leading-snug text-foreground">
                  {text}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-[0.7fr_1.3fr] md:items-start">
            <p className="signal-label" style={{ "--signal": "var(--signal-gold)" } as CSSProperties}>
              Just nu
            </p>
            <ul className="flex flex-wrap gap-2" role="list">
              {focus.items.map((item) => (
                <li
                  key={item.label}
                  className="rounded-full border border-border bg-card px-3.5 py-2 text-small font-medium text-foreground"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 max-w-[46ch] text-small leading-relaxed text-muted-foreground">
            Tre huvudspår visar vägen vidare: {topMissions.map((m) => m.title).join(", ")}.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CurrentStateBlock;

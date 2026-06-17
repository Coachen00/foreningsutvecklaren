import type { CSSProperties } from "react";
import { CURRENT_STATE } from "@/content/currentState";

/**
 * Browse-first overview: startsidan ska ge karta och nyfikenhet.
 * Fördjupning bor på länkarna, inte här.
 */
const CurrentStateBlock = () => {
  const { role, topMissions, focus } = CURRENT_STATE;
  const signals = ["var(--signal-green)", "var(--signal-blue)", "var(--signal-gold)"];
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
                className="max-w-[9ch] font-serif text-display font-semibold leading-[1.05] text-foreground"
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

          <ul className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-3" role="list">
            {promise.map((text, index) => (
              <li
                key={text}
                className="signal-card rounded-md border border-border bg-card p-6 shadow-xs"
                style={{ "--signal": signals[index] } as CSSProperties}
              >
                <p className="font-mono text-micro tabular-nums text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 font-serif text-subhead font-semibold leading-snug text-foreground">
                  {text}
                </p>
              </li>
            ))}
          </ul>

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

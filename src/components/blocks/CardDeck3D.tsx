import { useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, type PanInfo } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { MISSION_AREAS } from "@/content/missionAreas";
import { AREAS } from "@/content/areas";

interface DeckCard {
  key: string;
  group: string;
  number: string;
  title: string;
  desc: string;
  chips: string[];
  signal: string;
  Icon: typeof ArrowRight;
  path: string;
}

const MISSION_SIGNAL: Record<string, string> = {
  "en-battre-vag": "var(--signal-green)",
  "fu-skola": "var(--signal-blue)",
  foreningslyftet: "var(--signal-gold)",
};

const AREA_SIGNAL: Record<string, string> = {
  uppdrag: "var(--signal-gold)",
  foreningsutveckling: "var(--signal-green)",
  "skola-samverkan": "var(--signal-blue)",
};

const CARDS: DeckCard[] = [
  ...MISSION_AREAS.map((m) => ({
    key: `mission-${m.id}`,
    group: "Huvuduppdrag",
    number: m.number,
    title: m.title,
    desc: m.lead,
    chips: m.contains.slice(0, 3),
    signal: MISSION_SIGNAL[m.id] ?? "var(--accent)",
    Icon: m.icon,
    path: m.path,
  })),
  ...AREAS.map((a) => ({
    key: `area-${a.slug}`,
    group: "Stödområde",
    number: a.number,
    title: a.shortTitle,
    desc: a.heroLead,
    chips: a.subpages.map((s) => s.navLabel).slice(0, 3),
    signal: AREA_SIGNAL[a.slug] ?? "var(--accent)",
    Icon: a.icon,
    path: a.path,
  })),
];

const N = CARDS.length;
const VISIBLE = 4; // hur många kort bakom fronten som syns
const SWIPE = 90; // px-tröskel för att räknas som drag

const CardDeck3D = () => {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  const go = (dir: 1 | -1) => setActive((a) => (a + dir + N) % N);
  const next = () => go(1);
  const prev = () => go(-1);

  const handleDragEnd = (_e: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE || info.velocity.x < -500) next();
    else if (info.offset.x > SWIPE || info.velocity.x > 500) prev();
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-full max-w-md"
        style={{ height: "27rem", perspective: reduce ? undefined : "1400px" }}
        role="group"
        aria-roledescription="kortlek"
        aria-label="Områden som kort — dra eller använd pilarna för att bläddra"
      >
        {CARDS.map((card, i) => {
          const depth = (i - active + N) % N; // 0 = fronten
          const isFront = depth === 0;
          const hidden = depth > VISIBLE;
          const { Icon } = card;

          return (
            <motion.div
              key={card.key}
              className="absolute inset-0"
              style={{
                zIndex: N - depth,
                pointerEvents: isFront ? "auto" : "none",
                cursor: isFront ? "grab" : "default",
                transformStyle: "preserve-3d",
              }}
              animate={
                reduce
                  ? { opacity: hidden ? 0 : isFront ? 1 : 0.4 }
                  : {
                      y: depth * 16,
                      z: -depth * 80,
                      scale: 1 - depth * 0.05,
                      rotate: depth === 0 ? 0 : depth % 2 ? 1.6 : -1.6,
                      opacity: hidden ? 0 : 1 - depth * 0.12,
                    }
              }
              transition={
                reduce
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 320, damping: 34 }
              }
              drag={isFront && !reduce ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.55}
              whileDrag={{ cursor: "grabbing" }}
              onDragEnd={handleDragEnd}
              aria-hidden={!isFront}
            >
              <Link
                to={card.path}
                tabIndex={isFront ? undefined : -1}
                style={{ "--signal": card.signal } as CSSProperties}
                className="signal-card card-gradient group flex h-full flex-col rounded-2xl border border-border p-8 shadow-md transition-colors hover:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <div className="flex items-start justify-between gap-6">
                  <p className="signal-label">{card.group}</p>
                  <span
                    className="num-display !text-[2.75rem] leading-none"
                    aria-hidden="true"
                  >
                    {card.number}
                  </span>
                </div>

                <span className="mt-5 flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>

                <h3 className="mt-5 text-subhead font-semibold leading-tight text-foreground">
                  {card.title}
                </h3>
                <p className="mt-3 max-w-[34ch] text-base leading-relaxed text-foreground/75">
                  {card.desc}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2" role="list">
                  {card.chips.map((chip) => (
                    <li
                      key={chip}
                      className="rounded-full border border-border bg-background px-2.5 py-1.5 text-small leading-snug text-foreground/80"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>

                <span className="mt-auto inline-flex items-center gap-2 pt-7 font-mono text-micro font-medium uppercase tracking-wider text-accent">
                  Öppna spåret
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Kontroller */}
      <div className="mt-8 flex items-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Föregående kort"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-accent/50 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>

        <ul className="flex items-center gap-2" role="list">
          {CARDS.map((card, i) => (
            <li key={card.key}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Gå till kort ${i + 1} av ${N}: ${card.title}`}
                aria-current={i === active}
                className="block h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                style={{
                  width: i === active ? "1.6rem" : "0.625rem",
                  background:
                    i === active
                      ? `hsl(${card.signal})`
                      : "hsl(var(--border))",
                }}
              />
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={next}
          aria-label="Nästa kort"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-accent/50 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <p className="mt-3 font-mono text-micro uppercase tracking-wider text-muted-foreground">
        Dra korten i sidled · {active + 1} / {N}
      </p>

      <p className="sr-only" aria-live="polite">
        Kort {active + 1} av {N}: {CARDS[active].title}
      </p>
    </div>
  );
};

export default CardDeck3D;

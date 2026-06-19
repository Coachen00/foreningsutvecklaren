import { useState } from "react";
import { cn } from "@/lib/utils";
import type { YearWheelMonth, Intensity } from "@/content/yearWheel";

type View = "linje" | "hjul";

interface Props {
  months: YearWheelMonth[];
  /** Default-vy. Användaren kan växla med toggle. */
  defaultView?: View;
  /** Visa togglen för att byta vy. */
  showToggle?: boolean;
  /** Initialt vald månad i hjul-vyn (1-baserat index, default: aktuell månad). */
  initialMonthIndex?: number;
  className?: string;
}

const intensityDot: Record<Intensity, string> = {
  hög: "bg-primary",
  medel: "bg-primary/50",
  låg: "bg-primary/20",
};

const intensityLabel: Record<Intensity, string> = {
  hög: "Hög intensitet",
  medel: "Medel",
  låg: "Lågintensiv",
};

/**
 * YEAR WHEEL — månadscykel i två lägen.
 *
 * Två synssätt på samma data:
 *   • LINJE — horisontell tidslinje, läsbar och lätt att skanna
 *   • HJUL — roterande cirkel där ett år är ett varv. Mer "årshjul" till
 *     karaktären men mindre läsbart på smala skärmar (faller därför
 *     tillbaka till linje på mobil).
 */
const YearWheel = ({
  months,
  defaultView = "linje",
  showToggle = true,
  initialMonthIndex,
  className,
}: Props) => {
  const currentMonthIndex = initialMonthIndex
    ? initialMonthIndex - 1
    : new Date().getMonth();
  const safeStart = Math.max(0, Math.min(months.length - 1, currentMonthIndex));
  const [view, setView] = useState<View>(defaultView);
  const [activeIdx, setActiveIdx] = useState(safeStart);
  const active = months[activeIdx];

  return (
    <div className={cn("space-y-6", className)}>
      {showToggle && (
        <div
          role="tablist"
          aria-label="Visning av årshjul"
          className="inline-flex items-center gap-0.5 rounded-md border border-border bg-card p-0.5"
        >
          {(["linje", "hjul"] as View[]).map((v) => {
            const selected = view === v;
            return (
              <button
                key={v}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setView(v)}
                className={cn(
                  "rounded-sm px-3.5 py-1.5 font-mono text-micro uppercase tracking-wider transition-colors",
                  selected
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {v === "linje" ? "Tidslinje" : "Årshjul"}
              </button>
            );
          })}
        </div>
      )}

      {view === "linje" ? (
        <LinjeView
          months={months}
          active={active}
          activeIdx={activeIdx}
          onSelect={setActiveIdx}
        />
      ) : (
        <HjulView
          months={months}
          active={active}
          activeIdx={activeIdx}
          onSelect={setActiveIdx}
        />
      )}
    </div>
  );
};

/* ────────────────────────────────────────────────────────────
   LINJE — horisontell tidslinje
   ──────────────────────────────────────────────────────────── */

interface SubProps {
  months: YearWheelMonth[];
  active: YearWheelMonth;
  activeIdx: number;
  onSelect: (idx: number) => void;
}

const LinjeView = ({ months, active, activeIdx, onSelect }: SubProps) => {
  return (
    <div className="border border-border bg-card">
      {/* Tidslinje — kompakt månadsremsa */}
      <ol
        role="list"
        className="grid grid-cols-6 sm:grid-cols-12 border-b border-border"
      >
        {months.map((m, i) => {
          const selected = i === activeIdx;
          return (
            <li key={m.number} className="contents">
              <button
                type="button"
                onClick={() => onSelect(i)}
                aria-pressed={selected}
                aria-label={`${m.name} — ${m.focus}`}
                className={cn(
                  "group relative flex flex-col items-start gap-1.5 border-b border-r border-border px-3 py-3.5 text-left transition-colors",
                  "sm:border-b-0",
                  /* sista i varje rad får ingen höger-border */
                  "[&:nth-child(6n)]:border-r-0 sm:[&:nth-child(6n)]:border-r sm:last:border-r-0",
                  selected
                    ? "bg-primary-subtle"
                    : "hover:bg-muted/60",
                )}
              >
                <span
                  className={cn(
                    "font-mono text-micro tabular-nums",
                    selected ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {m.number}
                </span>
                <span
                  className={cn(
                    "text-sm font-semibold leading-tight",
                    selected
                      ? "text-foreground"
                      : "text-foreground/85 group-hover:text-foreground",
                  )}
                >
                  {m.short}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "mt-0.5 block h-1.5 w-1.5 rounded-full",
                    intensityDot[m.intensity],
                  )}
                />
                {selected && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-px h-px bg-accent"
                  />
                )}
              </button>
            </li>
          );
        })}
      </ol>

      <ActiveMonthDetail month={active} />
      <IntensityLegend />
    </div>
  );
};

/* ────────────────────────────────────────────────────────────
   HJUL — roterande cirkel
   ──────────────────────────────────────────────────────────── */

const HjulView = ({ months, active, activeIdx, onSelect }: SubProps) => {
  // SVG-cirkel: 12 segment runt en cirkel, varje segment är en månad.
  // Året startar vid kl 12 och rör sig medurs.
  const size = 360;
  const cx = size / 2;
  const cy = size / 2;
  const outer = 168;
  const inner = 110;
  const labelR = 138;

  const segmentPath = (i: number) => {
    const start = (i / 12) * Math.PI * 2 - Math.PI / 2;
    const end = ((i + 1) / 12) * Math.PI * 2 - Math.PI / 2;
    const x1 = cx + Math.cos(start) * outer;
    const y1 = cy + Math.sin(start) * outer;
    const x2 = cx + Math.cos(end) * outer;
    const y2 = cy + Math.sin(end) * outer;
    const x3 = cx + Math.cos(end) * inner;
    const y3 = cy + Math.sin(end) * inner;
    const x4 = cx + Math.cos(start) * inner;
    const y4 = cy + Math.sin(start) * inner;
    return `M ${x1} ${y1} A ${outer} ${outer} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${inner} ${inner} 0 0 0 ${x4} ${y4} Z`;
  };

  const labelPos = (i: number) => {
    const angle = ((i + 0.5) / 12) * Math.PI * 2 - Math.PI / 2;
    return {
      x: cx + Math.cos(angle) * labelR,
      y: cy + Math.sin(angle) * labelR,
    };
  };

  const intensityFill: Record<Intensity, string> = {
    hög: "hsl(var(--primary) / 0.18)",
    medel: "hsl(var(--primary) / 0.09)",
    låg: "hsl(var(--primary) / 0.04)",
  };

  return (
    <div className="border border-border bg-card">
      <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[auto_1fr] md:items-center">
        {/* Cirkel */}
        <div className="mx-auto">
          <svg
            viewBox={`0 0 ${size} ${size}`}
            width={size}
            height={size}
            role="img"
            aria-label="Årscykel som cirkel"
            className="max-w-full"
          >
            {/* Segment */}
            {months.map((m, i) => {
              const selected = i === activeIdx;
              return (
                <g key={m.number}>
                  <path
                    d={segmentPath(i)}
                    fill={
                      selected
                        ? "hsl(var(--primary))"
                        : intensityFill[m.intensity]
                    }
                    stroke={selected ? "hsl(var(--accent) / 0.7)" : "hsl(var(--background))"}
                    strokeWidth={2}
                    className="cursor-pointer transition-opacity hover:opacity-80"
                    onClick={() => onSelect(i)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        onSelect(i);
                      }
                    }}
                  />
                </g>
              );
            })}

            {/* Etiketter */}
            {months.map((m, i) => {
              const { x, y } = labelPos(i);
              const selected = i === activeIdx;
              return (
                <text
                  key={`label-${m.number}`}
                  x={x}
                  y={y}
                  dy="0.32em"
                  textAnchor="middle"
                  className={cn(
                    "pointer-events-none select-none font-mono text-[10px] uppercase tracking-wider",
                  )}
                  style={{
                    fill: selected
                      ? "hsl(var(--primary-foreground))"
                      : "hsl(var(--foreground))",
                    fontWeight: selected ? 600 : 500,
                  }}
                >
                  {m.short}
                </text>
              );
            })}

            {/* Mittencirkel */}
            <circle
              cx={cx}
              cy={cy}
              r={inner - 6}
              fill="hsl(var(--background))"
              stroke="hsl(var(--accent) / 0.35)"
            />

            {/* Mittentext */}
            <text
              x={cx}
              y={cy - 18}
              textAnchor="middle"
              className="font-mono text-[10px] uppercase tracking-wider"
              style={{ fill: "hsl(var(--muted-foreground))" }}
            >
              Månad {active.number}
            </text>
            <text
              x={cx}
              y={cy + 8}
              textAnchor="middle"
              style={{
                fill: "hsl(var(--foreground))",
                fontFamily: "var(--font-serif)",
                fontSize: 22,
                fontWeight: 600,
              }}
            >
              {active.name}
            </text>
            <text
              x={cx}
              y={cy + 30}
              textAnchor="middle"
              style={{
                fill: "hsl(var(--primary))",
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {intensityLabel[active.intensity]}
            </text>
          </svg>
        </div>

        {/* Beskrivning av aktiv månad */}
        <div className="min-w-0">
          <p className="font-mono text-micro uppercase tracking-wider text-primary">
            {active.focus}
          </p>
          <h3 className="mt-2 font-serif text-subhead font-semibold text-foreground">
            {active.name}
          </h3>
          <p className="mt-3 max-w-prose text-base leading-relaxed text-foreground/80">
            {active.description}
          </p>
          <IntensityLegend className="mt-6" inset />
        </div>
      </div>
    </div>
  );
};

/* ────────────────────────────────────────────────────────────
   Delkomponenter
   ──────────────────────────────────────────────────────────── */

const ActiveMonthDetail = ({ month }: { month: YearWheelMonth }) => (
  <div className="grid gap-2 px-6 py-6 sm:grid-cols-[8rem_1fr] sm:gap-8 sm:px-7 sm:py-7">
    <div>
      <p className="font-mono text-micro uppercase tracking-wider text-primary">
        Månad {month.number}
      </p>
      <h3 className="mt-1 font-serif text-subhead font-semibold text-foreground">
        {month.name}
      </h3>
      <p className="mt-2 font-mono text-micro uppercase tracking-wider text-muted-foreground">
        {intensityLabel[month.intensity]}
      </p>
    </div>
    <div>
      <p className="text-base font-semibold text-foreground">{month.focus}</p>
      <p className="mt-2 max-w-prose text-base leading-relaxed text-foreground/80">
        {month.description}
      </p>
    </div>
  </div>
);

const IntensityLegend = ({
  className,
  inset = false,
}: {
  className?: string;
  inset?: boolean;
}) => (
  <div
    className={cn(
      "flex flex-wrap items-center gap-x-5 gap-y-2",
      !inset && "border-t border-border bg-background px-6 py-4 sm:px-7",
      className,
    )}
  >
    <span className="font-mono text-micro uppercase tracking-wider text-muted-foreground">
      Intensitet
    </span>
    {(["hög", "medel", "låg"] as Intensity[]).map((i) => (
      <span
        key={i}
        className="inline-flex items-center gap-2 text-[0.75rem] text-muted-foreground"
      >
        <span
          aria-hidden="true"
          className={cn("h-2 w-2 rounded-full", intensityDot[i])}
        />
        {intensityLabel[i]}
      </span>
    ))}
  </div>
);

export default YearWheel;

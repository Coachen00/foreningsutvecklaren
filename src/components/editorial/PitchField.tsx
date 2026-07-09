import { cn } from "@/lib/utils";

interface PitchFieldProps {
  className?: string;
  particles?: boolean;
}

const DOTS = Array.from({ length: 10 }, (_, i) => ({
  left: `${8 + ((i * 37) % 92)}%`,
  top: `${10 + ((i * 53) % 82)}%`,
  delay: `${(i % 5) * 1.4}s`,
}));

export function PitchField({ className, particles = true }: PitchFieldProps) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      <div className="absolute inset-0 pitch-lines opacity-40" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, hsl(var(--pitch) / 0.35), transparent 70%)",
        }}
      />
      <svg
        className="absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 opacity-100"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="18" stroke="hsl(var(--accent) / 0.12)" strokeWidth="0.4" />
        <line x1="0" y1="50" x2="100" y2="50" stroke="hsl(var(--accent) / 0.12)" strokeWidth="0.4" />
      </svg>
      {particles &&
        DOTS.map((dot, i) => (
          <span
            key={i}
            className="animate-float-particle absolute h-1 w-1 rounded-full bg-accent"
            style={{ left: dot.left, top: dot.top, animationDelay: dot.delay }}
          />
        ))}
    </div>
  );
}

export default PitchField;

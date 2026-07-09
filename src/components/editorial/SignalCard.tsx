import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type Tone = "green" | "red" | "gold" | "blue";

interface SignalCardProps {
  tone: Tone;
  label: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const TONE_VAR: Record<Tone, string> = {
  green: "var(--zone-attack)",
  red: "var(--zone-defense)",
  gold: "var(--accent)",
  blue: "var(--primary)",
};

export function SignalCard({ tone, label, children, className }: SignalCardProps) {
  const style = { "--signal": TONE_VAR[tone] } as CSSProperties;

  return (
    <div
      className={cn("signal-card rounded-xl border border-border p-6", className)}
      style={{ ...style, background: "hsl(var(--signal) / 0.06)" }}
    >
      <p className="label-mono" style={{ color: "hsl(var(--signal))" }}>
        {label}
      </p>
      <div className="mt-3 text-small text-muted-foreground">{children}</div>
    </div>
  );
}

export default SignalCard;

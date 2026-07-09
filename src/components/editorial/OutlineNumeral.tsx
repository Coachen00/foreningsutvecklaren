import { cn } from "@/lib/utils";

interface OutlineNumeralProps {
  value: string;
  side?: "left" | "right";
}

export function OutlineNumeral({ value, side = "left" }: OutlineNumeralProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute top-0 select-none font-black leading-none text-[clamp(9rem,26vw,22rem)]",
        side === "left" ? "-left-[0.05em]" : "-right-[0.05em]",
      )}
      style={{
        color: "transparent",
        WebkitTextStroke: "1px hsl(var(--accent) / 0.18)",
      }}
    >
      {value}
    </span>
  );
}

export default OutlineNumeral;

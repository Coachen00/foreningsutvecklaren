import { useRef } from "react";
import { Link } from "react-router-dom";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  to: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Pekar-reaktivt kort: guld-glöd följer muspekaren + lätt 3D-tilt.
 * Allt via CSS-variabler (.glow-card) → billigt, och avstängt vid reduced-motion.
 */
export function GlowLink({ to, className, children }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    el.style.setProperty("--rx", `${((y / r.height - 0.5) * -4).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${((x / r.width - 0.5) * 4).toFixed(2)}deg`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <Link
      ref={ref}
      to={to}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn("glow-card", className)}
    >
      {children}
    </Link>
  );
}

export default GlowLink;

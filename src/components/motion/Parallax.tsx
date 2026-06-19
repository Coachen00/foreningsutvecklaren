import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type ParallaxProps = {
  children: React.ReactNode;
  /** Total travel in px across the scroll range (default 60). Negative = opposite direction. */
  distance?: number;
  className?: string;
};

/**
 * Scroll-bound vertical parallax. The element drifts `distance` px as it
 * passes through the viewport. Honors prefers-reduced-motion (static).
 */
export function Parallax({ children, distance = 60, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} className={cn(className)} style={{ y }}>
      {children}
    </motion.div>
  );
}

export default Parallax;

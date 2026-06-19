import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: React.ReactNode;
  /** Delay in seconds before the reveal starts */
  delay?: number;
  /** Vertical lift distance in px (default 18) */
  y?: number;
  /** Animation duration in seconds (default 0.7) */
  duration?: number;
  as?: "div" | "section" | "article" | "li" | "span";
  className?: string;
} & Omit<HTMLMotionProps<"div">, "ref">;

/**
 * Scroll-triggered fade + lift. Mirrors the Gunnilse "lugn in-view reveal":
 * opacity 0→1, y 18→0, 0.7s easeOut, triggers 80px before entering view.
 * Honors prefers-reduced-motion (renders static).
 */
export function Reveal({
  children,
  delay = 0,
  y = 18,
  duration = 0.7,
  as = "div",
  className,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...(rest as Record<string, unknown>)}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export default Reveal;

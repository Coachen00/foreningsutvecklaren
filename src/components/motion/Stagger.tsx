import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

type GroupProps = {
  children: React.ReactNode;
  /** Seconds between each child's entrance (default 0.08) */
  stagger?: number;
  className?: string;
  as?: "div" | "ul" | "ol";
};

type ItemProps = {
  children: React.ReactNode;
  y?: number;
  className?: string;
  as?: "div" | "li";
  style?: React.CSSProperties;
  role?: string;
};

/**
 * Container that reveals its <StaggerItem> children in sequence as it enters
 * view. Honors prefers-reduced-motion (renders static).
 */
export function StaggerGroup({ children, stagger = 0.08, className, as = "div" }: GroupProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({ children, y = 16, className, as = "div", style, role }: ItemProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} style={style} role={role}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={cn(className)}
      style={style}
      role={role}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      }}
    >
      {children}
    </MotionTag>
  );
}

import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ModelName } from "./models";

const Canvas3D = lazy(() => import("./Canvas3D"));

type Scene3DProps = {
  model: ModelName;
  /** Accessible description of what the 3D object represents */
  label: string;
  className?: string;
  interactive?: boolean;
};

/** Soft radial glow + ring used while loading and as the reduced-motion fallback. */
function StaticFallback({ label }: { label: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="grid h-full w-full place-items-center"
    >
      <div className="relative h-32 w-32">
        <div className="absolute inset-0 rounded-full bg-accent/15 blur-2xl" />
        <div className="absolute inset-4 rounded-full border border-accent/40" />
        <div className="absolute inset-10 rounded-full bg-gradient-to-br from-accent/70 to-primary/50" />
      </div>
    </div>
  );
}

/**
 * Public 3D mount. Renders the WebGL canvas only when:
 *  - the user has not requested reduced motion, AND
 *  - the element has scrolled into view (IntersectionObserver gate).
 * Otherwise shows a designed static fallback. three.js is lazy-loaded so it
 * never blocks the initial route.
 */
export function Scene3D({ model, label, className, interactive = true }: Scene3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (reduce || !ref.current) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin: "120px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduce]);

  const mount = !reduce && inView;

  return (
    <div ref={ref} className={cn("relative aspect-square w-full", className)}>
      {mount ? (
        <Suspense fallback={<StaticFallback label={label} />}>
          <Canvas3D model={model} interactive={interactive} />
        </Suspense>
      ) : (
        <StaticFallback label={label} />
      )}
    </div>
  );
}

export default Scene3D;

import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const AmbientFieldCanvas = lazy(() => import("./AmbientFieldCanvas"));

/**
 * Dekorativ ambient nod-bakgrund för "Living Pitch".
 * - Statiskt glöd-baslager finns alltid (billigt, även vid reduced-motion).
 * - WebGL-fältet lazy-laddas och mountas först när lagret skrollats in.
 * - Decorative → aria-hidden + pointer-events-none.
 */
export function AmbientField({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    if (reduce || !ref.current) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMount(true);
          obs.disconnect();
        }
      },
      { rootMargin: "150px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduce]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      {/* Statiskt glöd-baslager — alltid, ger djup även utan WebGL */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 22% 28%, hsl(var(--accent) / 0.10), transparent 70%), radial-gradient(55% 45% at 80% 75%, hsl(var(--primary) / 0.14), transparent 70%)",
        }}
      />
      {!reduce && mount && (
        <Suspense fallback={null}>
          <AmbientFieldCanvas />
        </Suspense>
      )}
    </div>
  );
}

export default AmbientField;

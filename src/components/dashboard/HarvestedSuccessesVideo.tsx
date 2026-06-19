import { useEffect, useRef, useState } from "react";
import {
  HARVESTED_SUCCESSES,
  SUCCESS_VIDEO,
} from "@/content/harvestedSuccesses";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

const HarvestedSuccessesVideo = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (reducedMotion || !sectionRef.current || !("IntersectionObserver" in window)) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (reducedMotion) {
      v.pause();
    } else {
      v.play().catch(() => undefined);
    }
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="harvested-successes"
      aria-labelledby="harvested-successes-heading"
      className={cn(
        "relative isolate overflow-hidden bg-background text-white motion-safe:transition-[opacity,transform] motion-safe:duration-700 motion-safe:ease-out",
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
      )}
    >
      {!videoFailed ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          autoPlay
          muted
          loop
          playsInline
          poster={SUCCESS_VIDEO.posterUrl}
          aria-hidden="true"
          onError={() => setVideoFailed(true)}
        >
          <source src={SUCCESS_VIDEO.videoUrl} type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-background via-primary/15 to-background"
          aria-hidden="true"
        />
      )}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black/85"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_1.2fr] md:gap-12 lg:gap-16">
          <div>
            <p className="mb-3 font-mono text-micro uppercase tracking-wider text-primary-foreground/80">
              {SUCCESS_VIDEO.eyebrow}
            </p>
            <h2
              id="harvested-successes-heading"
              className="font-serif text-headline font-semibold leading-tight"
            >
              {SUCCESS_VIDEO.title}
            </h2>
          </div>
          <p className="self-end text-lead text-white/80">{SUCCESS_VIDEO.lead}</p>
        </div>

        <ul
          role="list"
          className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {HARVESTED_SUCCESSES.map((s) => (
            <li
              key={s.id}
              className="flex h-full flex-col gap-3 rounded-md border border-white/15 bg-black/30 p-6 backdrop-blur-sm sm:p-7"
            >
              <p className="font-mono text-micro uppercase tracking-wider text-primary-foreground/80">
                {s.metric}
              </p>
              <h3 className="font-serif text-2xl font-medium leading-tight">
                {s.title}
              </h3>
              <p className="text-small leading-relaxed text-white/75">
                {s.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HarvestedSuccessesVideo;

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowDown, Pause, Play } from "lucide-react";
import {
  CAMPAIGN_TIMELINE,
  computeTimelineProgress,
  formatActivityDate,
} from "@/content/campaignTimeline";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

const HeroNumber = ({
  value,
  unit,
  caption,
}: {
  value: number;
  unit: string;
  caption: string;
}) => (
  <div>
    <div className="font-serif text-[clamp(3.5rem,12vw,8rem)] font-medium leading-none tracking-tight text-white">
      {value}
      <span className="ml-2 align-baseline font-mono text-base uppercase tracking-[0.18em] text-white/60">
        {unit}
      </span>
    </div>
    <p className="mt-3 max-w-[28ch] font-mono text-micro uppercase tracking-wider text-white/70">
      {caption}
    </p>
  </div>
);

const LoggedInHeroCountdown = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [paused, setPaused] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  const reducedMotion = usePrefersReducedMotion();

  const [progress, setProgress] = useState(() => computeTimelineProgress());
  const recompute = useCallback(
    () => setProgress(computeTimelineProgress()),
    [],
  );

  useEffect(() => {
    if (typeof document === "undefined") return;
    const onVisibility = () => {
      if (!document.hidden) recompute();
    };
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("focus", recompute);
    // En lätt timer för dygnsövergångar när fliken är aktiv
    const interval = window.setInterval(recompute, 60_000);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("focus", recompute);
      window.clearInterval(interval);
    };
  }, [recompute]);

  const { latestActivity, nextActivity, heroEyebrow, heroTitle, heroLead } =
    CAMPAIGN_TIMELINE;

  useEffect(() => {
    if (reducedMotion && videoRef.current) {
      videoRef.current.pause();
      setPaused(true);
    }
  }, [reducedMotion]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => undefined);
      setPaused(false);
    } else {
      v.pause();
      setPaused(true);
    }
  };

  const scrollToNext = () => {
    document
      .getElementById("harvested-successes")
      ?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <section
      aria-labelledby="hero-countdown-heading"
      className="relative isolate overflow-hidden bg-foreground text-white"
      style={{ minHeight: "calc(100dvh - var(--nav-height))" }}
    >
      {/* Bakgrundsvideo */}
      {!videoFailed ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay={!reducedMotion}
          muted
          loop
          playsInline
          poster={CAMPAIGN_TIMELINE.heroPosterUrl}
          aria-hidden="true"
          onError={() => setVideoFailed(true)}
        >
          <source src={CAMPAIGN_TIMELINE.heroVideoUrl} type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-primary/40"
          aria-hidden="true"
        />
      )}

      {/* Mörk overlay för textläsbarhet */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/75"
        aria-hidden="true"
      />

      {/* Innehåll */}
      <div className="relative z-10 flex min-h-[calc(100vh-var(--nav-height))] flex-col">
        <div className="container mx-auto flex flex-1 flex-col justify-center px-4 py-16 sm:px-6 sm:py-20">
          <p className="mb-4 font-mono text-micro uppercase tracking-[0.22em] text-primary-foreground/80">
            <span className="mr-2 inline-flex h-[7px] w-[7px] translate-y-[-1px] rounded-full bg-primary align-middle" />
            {heroEyebrow}
          </p>
          <h1
            id="hero-countdown-heading"
            className="max-w-[18ch] font-serif text-[clamp(2.25rem,6vw,4.25rem)] font-medium leading-[1.05] tracking-tight"
          >
            {heroTitle}
          </h1>
          <p className="mt-5 max-w-[52ch] text-lead text-white/80">{heroLead}</p>

          {/* Nedräkning */}
          <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 sm:mt-16 md:grid-cols-2">
            <HeroNumber
              value={progress.daysSinceLatest}
              unit={progress.daysSinceLatest === 1 ? "dag" : "dagar"}
              caption={`sedan ${latestActivity.name.toLowerCase()} (${formatActivityDate(latestActivity.date)})`}
            />
            <HeroNumber
              value={progress.daysUntilNext}
              unit={progress.daysUntilNext === 1 ? "dag" : "dagar"}
              caption={`till ${nextActivity.name.toLowerCase()} (${formatActivityDate(nextActivity.date)})`}
            />
          </div>

          {/* Progressbar */}
          <div className="mt-12 max-w-2xl">
            <div className="mb-2 flex items-baseline justify-between gap-3 font-mono text-micro uppercase tracking-wider text-white/60">
              <span>Senaste</span>
              <span className="whitespace-nowrap">
                {progress.progressPercent}% av resan
              </span>
              <span>Nästa</span>
            </div>
            <div
              className="h-[3px] w-full rounded-full bg-white/15"
              role="progressbar"
              aria-valuenow={progress.progressPercent}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Andel av tiden mellan stora aktiviteter som passerat"
            >
              <div
                className="h-full rounded-full bg-primary motion-safe:transition-[width] motion-safe:duration-700"
                style={{ width: `${progress.progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Kontroller — pause + scroll-indikator */}
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 pb-8 sm:px-6 sm:pb-12">
          <button
            type="button"
            onClick={togglePlay}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/30 px-3.5 py-2 font-mono text-micro uppercase tracking-wider text-white/85 backdrop-blur-sm transition-colors",
              "hover:border-white/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60",
            )}
            aria-label={paused ? "Spela bakgrundsvideo" : "Pausa bakgrundsvideo"}
          >
            {paused ? (
              <Play className="h-3.5 w-3.5" aria-hidden="true" />
            ) : (
              <Pause className="h-3.5 w-3.5" aria-hidden="true" />
            )}
            {paused ? "Spela video" : "Pausa video"}
          </button>

          <button
            type="button"
            onClick={scrollToNext}
            className={cn(
              "group inline-flex items-center gap-2 font-mono text-micro uppercase tracking-wider text-white/80 transition-colors",
              "hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-md px-2 py-1",
            )}
          >
            Skördade framgångar
            <ArrowDown
              className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LoggedInHeroCountdown;

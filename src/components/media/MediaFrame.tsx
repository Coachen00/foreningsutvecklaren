import { useState } from "react";
import { Film, Play, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

type MediaFrameProps = {
  /** Video source. Omit (or set comingSoon) to show the designed placeholder. */
  videoUrl?: string;
  posterUrl?: string;
  caption?: string;
  /** Small uppercase label, e.g. "KAPITEL 02 · CASE" */
  chapterLabel?: string;
  /** Force the "kommande" placeholder even if a URL exists */
  comingSoon?: boolean;
  className?: string;
};

type State = "placeholder" | "loading" | "playing" | "error";

/** Shared chrome: dashed/solid framed surface in the card gradient. */
function Frame({
  children,
  dashed,
  label,
}: {
  children: React.ReactNode;
  dashed?: boolean;
  label?: string;
}) {
  return (
    <div
      className={cn(
        "card-gradient relative flex aspect-video w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-xl border text-center",
        dashed ? "border-dashed border-border" : "border-border",
      )}
      role="img"
      aria-label={label}
    >
      {children}
    </div>
  );
}

/**
 * Unified film + placeholder surface. Five states:
 *  - placeholder ("kommande"): no URL / comingSoon — dashed frame, glyph, copy
 *  - loading: poster blur-up + skeleton shimmer while metadata loads
 *  - playing: the video element with controls
 *  - error: load failed — distinct from "coming soon"
 *  (empty === placeholder; there is never a blank box.)
 */
export function MediaFrame({
  videoUrl,
  posterUrl,
  caption,
  chapterLabel,
  comingSoon,
  className,
}: MediaFrameProps) {
  const hasVideo = Boolean(videoUrl) && !comingSoon;
  const [state, setState] = useState<State>(hasVideo ? "loading" : "placeholder");

  const figure = (inner: React.ReactNode) => (
    <figure className={cn("w-full", className)}>
      {inner}
      {caption && (
        <figcaption className="mt-3 text-small text-muted-foreground">{caption}</figcaption>
      )}
    </figure>
  );

  if (!hasVideo || state === "placeholder") {
    return figure(
      <Frame dashed label="Filmen publiceras inom kort">
        {chapterLabel && (
          <span className="signal-label" style={{ "--signal": "var(--signal-gold)" } as React.CSSProperties}>
            {chapterLabel}
          </span>
        )}
        <Film className="h-9 w-9 text-accent" strokeWidth={1.5} aria-hidden="true" />
        <p className="px-6 text-small text-foreground">Filmen publiceras inom kort.</p>
        <span className="pitch-lines absolute inset-0 -z-10 opacity-20" aria-hidden="true" />
      </Frame>,
    );
  }

  if (state === "error") {
    return figure(
      <Frame dashed label="Filmen kunde inte laddas">
        <AlertTriangle className="h-9 w-9 text-destructive" strokeWidth={1.5} aria-hidden="true" />
        <p className="px-6 text-small text-foreground">Filmen kunde inte laddas just nu.</p>
      </Frame>,
    );
  }

  return figure(
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border">
      {state === "loading" && (
        <div className="absolute inset-0 z-10 grid place-items-center bg-card/60 backdrop-blur-sm">
          <div className="animate-pulse-soft flex items-center gap-2 text-muted-foreground">
            <Play className="h-5 w-5 text-accent" aria-hidden="true" />
            <span className="text-small">Laddar film…</span>
          </div>
        </div>
      )}
      <video
        className="h-full w-full bg-background object-cover"
        controls
        preload="metadata"
        poster={posterUrl}
        onLoadedData={() => setState("playing")}
        onError={() => setState("error")}
      >
        <source src={videoUrl} type="video/mp4" />
        Din webbläsare kan inte spela upp filmen.
      </video>
    </div>,
  );
}

export default MediaFrame;

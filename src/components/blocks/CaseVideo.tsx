import { useState } from "react";
import { Film } from "lucide-react";

interface Props {
  videoUrl: string;
  posterUrl?: string;
  caption: string;
}

/**
 * Inbäddad case-film med kontroller. Saknas filmen (eller fel format) visas en
 * fallback-yta i stället för en trasig spelare. Self-hostad mp4 i public/videos/.
 */
const CaseVideo = ({ videoUrl, posterUrl, caption }: Props) => {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="overflow-hidden rounded-md border border-border bg-card">
      {!failed ? (
        <video
          className="aspect-video w-full bg-foreground"
          controls
          preload="metadata"
          poster={posterUrl}
          onError={() => setFailed(true)}
        >
          <source src={videoUrl} type="video/mp4" />
          Din webbläsare kan inte spela upp filmen.
        </video>
      ) : (
        <div
          className="flex aspect-video w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-foreground via-primary/15 to-foreground text-white/80"
          role="img"
          aria-label="Filmen är inte tillgänglig ännu"
        >
          <Film className="h-8 w-8" aria-hidden="true" />
          <p className="px-6 text-center text-small">
            Filmen publiceras inom kort.
          </p>
        </div>
      )}
      <figcaption className="border-t border-border px-5 py-4 text-small leading-relaxed text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
};

export default CaseVideo;

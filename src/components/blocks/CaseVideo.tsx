import MediaFrame from "@/components/media/MediaFrame";

interface Props {
  videoUrl: string;
  posterUrl?: string;
  caption: string;
  chapterLabel?: string;
}

/**
 * Case-film. Delegerar till det enade MediaFrame-systemet (5 tillstånd:
 * platshållare/laddar/spelar/fel + kommande). Self-hostad mp4 i public/videos/.
 */
const CaseVideo = ({ videoUrl, posterUrl, caption, chapterLabel }: Props) => (
  <MediaFrame
    videoUrl={videoUrl}
    posterUrl={posterUrl}
    caption={caption}
    chapterLabel={chapterLabel}
  />
);

export default CaseVideo;

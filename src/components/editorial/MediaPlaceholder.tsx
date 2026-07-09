import { LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";

interface MediaPlaceholderProps {
  caption?: string;
  className?: string;
  children?: React.ReactNode;
}

export function MediaPlaceholder({ caption, className, children }: MediaPlaceholderProps) {
  return (
    <div
      className={cn(
        "grid min-h-[16rem] place-items-center rounded-2xl border border-dashed border-border/70",
        className,
      )}
    >
      {children ?? (
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/15 text-accent" aria-hidden="true">
            <LayoutGrid className="h-5 w-5" />
          </span>
          {caption && <span className="text-small text-muted-foreground">{caption}</span>}
        </div>
      )}
    </div>
  );
}

export default MediaPlaceholder;

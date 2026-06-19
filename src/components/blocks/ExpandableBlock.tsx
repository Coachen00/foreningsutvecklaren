import { useId, useState } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  kicker?: string;
  defaultOpen?: boolean;
  id?: string;
  className?: string;
  /**
   * Tar bort 80ch-prose-constrainten på innehållet. Använd för block
   * som behöver hela sidans bredd (årshjul, tabeller, kort-grids).
   */
  wide?: boolean;
  children: React.ReactNode;
}

/**
 * Expand/collapse-block med smooth grid-rows-animation.
 *
 * Knapp + region-mönster (semantiskt likvärdigt med <details>/<summary>) —
 * native <details> kan inte animera content-höjd eftersom webbläsaren
 * sätter display:none vid stängning. Här animeras grid-template-rows
 * 0fr → 1fr för en smidig övergång.
 */
const ExpandableBlock = ({
  title,
  kicker,
  defaultOpen = false,
  id,
  className,
  wide = false,
  children,
}: Props) => {
  const [open, setOpen] = useState(defaultOpen);
  const reactId = useId();
  const contentId = `${id ?? reactId}-content`;
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "border-t border-border first:border-t-0",
        className,
      )}
    >
      <h2 id={headingId} className="m-0">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={contentId}
          className={cn(
            "group flex w-full items-baseline gap-4 py-5 text-left",
            "transition-colors duration-150 hover:text-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            "rounded-sm",
          )}
        >
          <ChevronRight
            className={cn(
              "h-4 w-4 shrink-0 self-center text-muted-foreground transition-[transform,color] duration-200 group-hover:text-foreground",
              open && "rotate-90 text-accent",
            )}
            aria-hidden="true"
          />
          <span className="flex-1 min-w-0">
            {kicker && (
              <span className="mb-1.5 block font-mono text-micro uppercase tracking-wider text-signal-gold">
                {kicker}
              </span>
            )}
            <span className="block text-subhead font-semibold text-foreground">
              {title}
            </span>
          </span>
        </button>
      </h2>

      <div
        id={contentId}
        role="region"
        aria-labelledby={headingId}
        aria-hidden={!open}
        className="grid transition-[grid-template-rows] duration-200 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div
            className={cn(
              "ml-8 border-l border-accent/30 pl-6 pb-6 pt-1",
              open && "animate-fade-in",
            )}
          >
            <div
              className={cn(
                "text-foreground/80 leading-relaxed",
                wide ? "max-w-none" : "max-w-[80ch]",
              )}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpandableBlock;

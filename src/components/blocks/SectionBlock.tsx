import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion";

type Variant = "default" | "muted" | "accent" | "flush";

interface SectionBlockProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  variant?: Variant;
  /** Narrow constrains the title/lead to reading width */
  narrow?: boolean;
  /** Split puts eyebrow+title in left col, lead in right (desktop) */
  split?: boolean;
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const variantClass: Record<Variant, string> = {
  default: "bg-background",
  muted: "bg-card pitch-lines",
  accent: "bg-primary-subtle",
  flush: "bg-background border-t border-border",
};

const SectionBlock = ({
  eyebrow,
  title,
  lead,
  variant = "default",
  narrow = false,
  split = false,
  children,
  id,
  className,
}: SectionBlockProps) => {
  return (
    <section
      id={id}
      className={cn("section-y", variantClass[variant], className)}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section header */}
        <Reveal>
        {split ? (
          <div className="mb-12 grid grid-cols-1 gap-6 border-b border-border pb-8 md:grid-cols-[minmax(14rem,0.78fr)_minmax(0,1.22fr)] md:gap-12 lg:gap-20">
            <div className="max-w-[30rem]">
              {eyebrow && (
                <p className="signal-label mb-4" style={{ "--signal": "var(--signal-blue)" } as React.CSSProperties}>
                  {eyebrow}
                </p>
              )}
              <h2
                id={id ? `${id}-heading` : undefined}
                className="font-serif text-headline font-semibold text-foreground"
              >
                {title}
              </h2>
            </div>
            {lead && (
              <p className="max-w-[52ch] self-end text-base leading-relaxed text-muted-foreground md:text-[1.0625rem]">
                {lead}
              </p>
            )}
          </div>
        ) : (
          <div
            className={cn(
              "mb-12 border-b border-border pb-8",
              narrow ? "w-reading" : "max-w-[52rem]",
            )}
          >
            {eyebrow && (
              <p className="signal-label mb-4" style={{ "--signal": "var(--signal-blue)" } as React.CSSProperties}>
                {eyebrow}
              </p>
            )}
            <h2
              id={id ? `${id}-heading` : undefined}
              className="font-serif text-headline font-semibold text-foreground"
            >
              {title}
            </h2>
            {lead && (
              <p className="mt-4 max-w-[54ch] text-base leading-relaxed text-muted-foreground md:text-[1.0625rem]">
                {lead}
              </p>
            )}
          </div>
        )}
        </Reveal>

        <Reveal delay={0.08}>{children}</Reveal>
      </div>
    </section>
  );
};

export default SectionBlock;

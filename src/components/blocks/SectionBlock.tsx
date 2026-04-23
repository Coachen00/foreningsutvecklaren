import { cn } from "@/lib/utils";

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
  muted: "bg-card",
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
        {split ? (
          <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-[1fr_1.2fr] md:gap-12 lg:gap-16">
            <div>
              {eyebrow && (
                <p className="mb-3 font-mono text-micro uppercase tracking-wider text-primary">
                  {eyebrow}
                </p>
              )}
              <h2
                id={id ? `${id}-heading` : undefined}
                className="text-headline font-semibold text-foreground"
              >
                {title}
              </h2>
            </div>
            {lead && (
              <p className="self-end text-lead text-muted-foreground">{lead}</p>
            )}
          </div>
        ) : (
          <div className={cn("mb-10", narrow ? "w-reading" : "max-w-[44rem]")}>
            {eyebrow && (
              <p className="mb-3 font-mono text-micro uppercase tracking-wider text-primary">
                {eyebrow}
              </p>
            )}
            <h2
              id={id ? `${id}-heading` : undefined}
              className="text-headline font-semibold text-foreground"
            >
              {title}
            </h2>
            {lead && (
              <p className="mt-3 text-lead text-muted-foreground">{lead}</p>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
};

export default SectionBlock;

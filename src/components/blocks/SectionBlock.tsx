import { cn } from "@/lib/utils";

type Variant = "default" | "muted" | "accent";

interface SectionBlockProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  variant?: Variant;
  children: React.ReactNode;
  id?: string;
}

const variantClass: Record<Variant, string> = {
  default: "bg-background",
  muted: "bg-card",
  accent: "bg-accent/30",
};

const SectionBlock = ({
  eyebrow,
  title,
  lead,
  variant = "default",
  children,
  id,
}: SectionBlockProps) => {
  return (
    <section id={id} className={cn("py-16 md:py-20", variantClass[variant])}>
      <div className="container mx-auto px-4">
        <div className="mb-10 max-w-2xl">
          {eyebrow && (
            <p className="mb-2 text-xs font-mono uppercase tracking-wider text-primary">
              {eyebrow}
            </p>
          )}
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
          {lead && <p className="mt-3 text-base text-muted-foreground md:text-lg">{lead}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};

export default SectionBlock;

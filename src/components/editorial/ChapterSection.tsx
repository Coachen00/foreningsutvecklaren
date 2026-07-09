import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion";
import { Eyebrow } from "./Eyebrow";
import { OutlineNumeral } from "./OutlineNumeral";

interface ChapterSectionProps {
  number?: string;
  kicker?: string;
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  lead?: React.ReactNode;
  children: React.ReactNode;
  id?: string;
  align?: "center" | "left";
  className?: string;
}

export function ChapterSection({
  number,
  kicker,
  eyebrow,
  title,
  lead,
  children,
  id,
  align = "center",
  className,
}: ChapterSectionProps) {
  const headingId = id ? `${id}-heading` : undefined;
  // ponytail: eyebrow prop overrides the "KAPITEL {number}" default so callers
  // can pass a custom section label (e.g. "Områdena") without duplicating text.
  const eyebrowContent = eyebrow ?? kicker ?? (number ? `KAPITEL ${number}` : undefined);
  const numeralSide = number ? (Number.parseInt(number, 10) % 2 === 0 ? "right" : "left") : undefined;
  const centered = align === "center";

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("section-y relative isolate overflow-hidden", className)}
    >
      {number && numeralSide && <OutlineNumeral value={number} side={numeralSide} />}
      <div className="container relative mx-auto px-4 sm:px-6">
        <Reveal>
          <div className={cn("mb-10", centered && "mx-auto text-center")}>
            {eyebrowContent && (
              <Eyebrow align={centered ? "center" : "left"} className="mb-4">
                {eyebrowContent}
              </Eyebrow>
            )}
            <h2 id={headingId} className="text-headline font-black text-foreground md:text-display">
              {title}
            </h2>
            {lead && <p className={cn("p-lead mt-4 max-w-[46ch]", centered && "mx-auto")}>{lead}</p>}
          </div>
        </Reveal>
        <Reveal delay={0.08}>{children}</Reveal>
      </div>
    </section>
  );
}

export default ChapterSection;

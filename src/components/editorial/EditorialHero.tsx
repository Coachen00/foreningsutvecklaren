import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/motion";
import { Eyebrow } from "./Eyebrow";
import { PitchField } from "./PitchField";

interface EditorialHeroProps {
  eyebrow?: React.ReactNode;
  titleTop: React.ReactNode;
  titleGold: React.ReactNode;
  subhead?: React.ReactNode;
  lead?: React.ReactNode;
  scrollHint?: string;
  backdrop?: React.ReactNode;
  children?: React.ReactNode;
}

export function EditorialHero({
  eyebrow,
  titleTop,
  titleGold,
  subhead,
  lead,
  scrollHint,
  backdrop,
  children,
}: EditorialHeroProps) {
  return (
    <section
      aria-label="Hero"
      className="relative isolate flex min-h-[calc(100vh-var(--nav-height))] flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">{backdrop ?? <PitchField />}</div>

      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center sm:px-6">
        <Reveal>
          {eyebrow && (
            <Eyebrow align="center" className="mb-6">
              {eyebrow}
            </Eyebrow>
          )}
          <h1 className="mx-auto">
            <span className="h-hero block text-foreground">{titleTop}</span>
            <span className="h-hero block text-gradient-accent">{titleGold}</span>
          </h1>
          {subhead && (
            <p className="mt-6 text-subhead font-bold text-foreground md:text-headline">{subhead}</p>
          )}
          {lead && <p className="p-lead mx-auto mt-5 max-w-[52ch]">{lead}</p>}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>

      {scrollHint && (
        <Reveal delay={0.2} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="label-mono">{scrollHint}</span>
          <ChevronDown className="h-4 w-4 animate-bounce text-accent motion-reduce:animate-none" aria-hidden="true" />
        </Reveal>
      )}
    </section>
  );
}

export default EditorialHero;

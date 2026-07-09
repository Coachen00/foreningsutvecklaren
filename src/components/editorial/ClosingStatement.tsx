import { Reveal } from "@/components/motion";
import { Eyebrow } from "./Eyebrow";

interface ClosingStatementProps {
  line1: React.ReactNode;
  line2: React.ReactNode;
  eyebrow?: React.ReactNode;
}

export function ClosingStatement({ line1, line2, eyebrow }: ClosingStatementProps) {
  return (
    <section aria-label="Avslutning" className="section-y">
      <Reveal className="container mx-auto px-4 text-center sm:px-6">
        <p className="text-headline font-black text-foreground md:text-display">{line1}</p>
        <p className="text-headline font-black text-foreground md:text-display">{line2}</p>
        {eyebrow && (
          <Eyebrow align="center" className="mt-8">
            {eyebrow}
          </Eyebrow>
        )}
      </Reveal>
    </section>
  );
}

export default ClosingStatement;

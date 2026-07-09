import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion";

interface PullQuoteProps {
  children: React.ReactNode;
  className?: string;
}

export function PullQuote({ children, className }: PullQuoteProps) {
  return (
    <Reveal className={cn("mx-auto max-w-[28rem] text-center", className)}>
      <span className="mx-auto mb-4 block h-px w-12 bg-accent/50" aria-hidden="true" />
      <p className="quote-hero mx-auto max-w-[24ch] text-muted-foreground/90">
        &#8221;{children}&#8221;
      </p>
    </Reveal>
  );
}

export default PullQuote;

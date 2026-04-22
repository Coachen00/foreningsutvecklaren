import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Area } from "@/content/areas";

interface Props {
  next: Area;
  prev?: Area | null;
  label?: string;
}

const NextPageCTA = ({ next, prev, label = "Nästa område" }: Props) => {
  return (
    <nav
      aria-label="Fortsätt läsa"
      className="border-t border-border bg-card"
    >
      <div className="container mx-auto flex flex-col gap-6 px-4 py-12 md:flex-row md:items-center md:justify-between md:py-16">
        {prev ? (
          <Link
            to={prev.path}
            className="group text-sm text-muted-foreground hover:text-primary"
          >
            <span className="block text-xs font-mono uppercase tracking-wider">
              Föregående
            </span>
            <span className="mt-1 block font-serif text-lg text-foreground group-hover:text-primary">
              ← {prev.shortTitle}
            </span>
          </Link>
        ) : (
          <span />
        )}
        <Link
          to={next.path}
          className="group inline-flex items-center gap-3 rounded-lg bg-primary px-6 py-4 text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <span>
            <span className="block text-xs font-mono uppercase tracking-wider opacity-80">
              {label}
            </span>
            <span className="mt-1 block font-serif text-lg">{next.title}</span>
          </span>
          <ArrowRight
            className="h-5 w-5 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </nav>
  );
};

export default NextPageCTA;

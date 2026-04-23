import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface NextPageTarget {
  path: string;
  title: string;
  shortTitle?: string;
}

interface Props {
  next: NextPageTarget;
  prev?: NextPageTarget | null;
  label?: string;
}

const NextPageCTA = ({ next, prev, label = "Nästa uppdrag" }: Props) => {
  return (
    <nav
      aria-label="Sidobläddring"
      className="border-t border-border bg-card"
    >
      <div className="container mx-auto flex flex-col gap-4 px-4 sm:px-6 py-10 sm:flex-row sm:items-stretch sm:justify-between sm:py-12">
        {prev ? (
          <Link
            to={prev.path}
            className="group flex items-center gap-3 rounded-md border border-border bg-background px-5 py-4 transition-colors hover:border-primary/40 hover:bg-primary-subtle sm:basis-[44%]"
          >
            <ArrowLeft
              className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-x-1 group-hover:text-primary"
              aria-hidden="true"
            />
            <span>
              <span className="block font-mono text-micro uppercase tracking-wider text-muted-foreground">
                Föregående
              </span>
              <span className="mt-1 block text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                {prev.shortTitle ?? prev.title}
              </span>
            </span>
          </Link>
        ) : (
          <div aria-hidden="true" />
        )}

        <Link
          to={next.path}
          className="group flex items-center justify-between gap-3 rounded-md bg-primary px-6 py-4 text-primary-foreground transition-colors hover:bg-primary/90 sm:basis-[52%]"
        >
          <span>
            <span className="block font-mono text-micro uppercase tracking-wider opacity-70">
              {label}
            </span>
            <span className="mt-1 block text-base font-semibold">
              {next.title}
            </span>
          </span>
          <ArrowRight
            className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </nav>
  );
};

export default NextPageCTA;

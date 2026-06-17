import { ArrowUpRight, Inbox, AlertCircle, RotateCcw } from "lucide-react";
import { type HarvestItem, formatUpdateDate } from "@/lib/harvest";

interface Props {
  items: HarvestItem[];
  isLoading: boolean;
  isError: boolean;
  onRetry?: () => void;
}

const SkeletonCard = () => (
  <li className="flex flex-col gap-3 bg-card px-6 py-5" aria-hidden="true">
    <div className="h-3 w-24 rounded bg-muted" />
    <div className="h-4 w-3/4 rounded bg-muted" />
    <div className="h-3 w-full rounded bg-muted" />
    <div className="h-3 w-5/6 rounded bg-muted" />
  </li>
);

const UpdatesFeedBlock = ({ items, isLoading, isError, onRetry }: Props) => {
  if (isLoading) {
    return (
      <ul
        className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
        aria-busy="true"
        aria-label="Laddar uppdateringar"
        role="list"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </ul>
    );
  }

  if (isError) {
    return (
      <div
        role="alert"
        className="flex flex-col items-center gap-4 rounded-md border border-destructive/30 bg-destructive/5 px-6 py-12 text-center"
      >
        <AlertCircle className="h-7 w-7 text-destructive" aria-hidden="true" />
        <div>
          <p className="text-base font-semibold text-foreground">
            Kunde inte hämta uppdateringarna
          </p>
          <p className="mt-1 text-small text-muted-foreground">
            Något gick fel vid hämtningen. Försök igen om en stund.
          </p>
        </div>
        {onRetry && (
          <button
            type="button"
            onClick={onRetry}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-small font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Försök igen
          </button>
        )}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-md border border-dashed border-border px-6 py-12 text-center">
        <Inbox className="h-7 w-7 text-muted-foreground" aria-hidden="true" />
        <div>
          <p className="text-base font-semibold text-foreground">
            Inga uppdateringar än
          </p>
          <p className="mt-1 max-w-[42ch] text-small text-muted-foreground">
            Här samlas skördat arbete från andra föreningar efter hand som det
            granskats och godkänts.
          </p>
        </div>
      </div>
    );
  }

  return (
    <ul
      className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
      role="list"
    >
      {items.map((item) => {
        const date = formatUpdateDate(item.publishedAt);
        return (
          <li key={item.id} className="bg-card">
            <a
              href={item.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full min-h-[12rem] flex-col p-6 transition-colors hover:bg-primary-subtle/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <p className="flex items-center gap-2 font-mono text-micro uppercase tracking-wider text-primary">
                {item.sourceName}
                {date && (
                  <>
                    <span className="text-border" aria-hidden="true">
                      ·
                    </span>
                    <span className="text-muted-foreground">{date}</span>
                  </>
                )}
              </p>
              <h3 className="mt-3 font-serif text-base font-semibold leading-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-small leading-relaxed text-muted-foreground">
                {item.summary}
              </p>
              <span className="mt-auto inline-flex items-center gap-2 pt-5 font-mono text-micro uppercase tracking-wider text-primary">
                Läs hos källan
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
                <span className="sr-only">(öppnas i ny flik)</span>
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default UpdatesFeedBlock;

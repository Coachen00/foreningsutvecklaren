import { useId, useState } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TrainingCase } from "@/content/trainingCases";
import RichContent from "@/components/blocks/RichContent";

const TrainingCaseBlock = ({ data }: { data: TrainingCase }) => {
  const [open, setOpen] = useState(false);
  const reactId = useId();
  const contentId = `${reactId}-vagledning`;

  const impactRows = [
    ["Resurser", data.impact.resources],
    ["Aktiviteter", data.impact.activities],
    ["Mål", data.impact.goal],
    ["Effekt", data.impact.effect],
  ] as const;

  return (
    <article className="border border-border bg-card p-6 lg:p-8">
      {/* Nivå + ämne */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 font-mono text-micro uppercase tracking-wider text-primary">
          Nivå {data.level} · {data.levelLabel}
        </span>
        <span className="font-mono text-micro uppercase tracking-wider text-muted-foreground">
          {data.area}
        </span>
      </div>

      {/* Case-nummer + titel */}
      <p className="mt-4 font-mono text-micro uppercase tracking-wider text-muted-foreground">
        Case {data.number}
      </p>
      <h3 className="mt-1 font-serif text-subhead font-semibold leading-snug text-foreground">
        {data.title}
      </h3>

      {/* Summering */}
      <div className="mt-4 flex flex-col gap-3 text-small leading-relaxed text-muted-foreground">
        {data.summary.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {/* Utmanande fråga — framträdande, alltid synlig */}
      <div className="mt-6 border-l-2 border-primary bg-primary-subtle/40 p-4">
        <p className="font-mono text-micro uppercase tracking-wider text-primary">
          Utmanande fråga
        </p>
        <p className="mt-2 text-base font-semibold leading-snug text-foreground">
          {data.challenge}
        </p>
      </div>

      {/* Dolt facit — tänk själv först */}
      <h4 className="m-0 mt-6">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={contentId}
          className="group flex w-full items-center gap-2 rounded-sm text-left font-mono text-micro uppercase tracking-wider text-primary transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <ChevronRight
            className={cn(
              "h-4 w-4 shrink-0 transition-transform duration-200",
              open && "rotate-90",
            )}
            aria-hidden="true"
          />
          {open ? "Dölj vägledning" : "Visa vägledning"}
        </button>
      </h4>

      <div
        id={contentId}
        role="region"
        aria-hidden={!open}
        className="grid transition-[grid-template-rows] duration-200 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className={cn("pt-5", open && "animate-fade-in")}>
            <p className="mb-3 font-mono text-micro uppercase tracking-wider text-muted-foreground">
              Ledtrådar att använda i svaret
            </p>
            <RichContent blocks={data.hints} />

            <div className="mt-6 grid gap-4 border-t border-border pt-5 sm:grid-cols-2">
              {impactRows.map(([label, value]) => (
                <div key={label}>
                  <p className="font-mono text-micro uppercase tracking-wider text-primary">
                    {label}
                  </p>
                  <p className="mt-1 text-small leading-relaxed text-muted-foreground">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TrainingCaseBlock;

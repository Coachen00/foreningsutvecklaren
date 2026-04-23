import { CORE_ACTIVITIES } from "@/content/activities";

interface Props {
  title?: string;
  lead?: string;
}

const CoreMissionBlock = ({
  title = "Kärnuppdraget",
  lead = "Fyra återkommande arbetsformer som tillsammans bygger närvaro, förtroende och utveckling i föreningarna.",
}: Props) => {
  return (
    <div>
      {(title || lead) && (
        <div className="mb-8 max-w-[44rem]">
          {title && (
            <h3 className="text-subhead font-semibold text-foreground">{title}</h3>
          )}
          {lead && (
            <p className="mt-2 text-small text-muted-foreground">{lead}</p>
          )}
        </div>
      )}

      <ol
        className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4 border border-border"
        role="list"
      >
        {CORE_ACTIVITIES.map((a, idx) => (
          <li
            key={a.id}
            className="relative flex flex-col gap-3 bg-card p-6 lg:p-7 border-b border-border last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0"
          >
            {/* Number */}
            <span
              aria-hidden="true"
              className="font-mono text-[2.5rem] font-bold leading-none text-border select-none"
            >
              {String(idx + 1).padStart(2, "0")}
            </span>

            {/* Content */}
            <div className="flex flex-col gap-2">
              <h4 className="text-base font-semibold leading-tight text-foreground">
                {a.title}
              </h4>
              <p className="text-small text-muted-foreground leading-relaxed">
                {a.description}
              </p>
            </div>

            {/* Cadence — bottom */}
            {a.cadence && (
              <p className="mt-auto pt-4 border-t border-border font-mono text-micro uppercase tracking-wider text-primary">
                {a.cadence}
              </p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default CoreMissionBlock;

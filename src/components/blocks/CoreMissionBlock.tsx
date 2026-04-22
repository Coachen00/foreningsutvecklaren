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
      <div className="mb-8 max-w-2xl">
        <p className="mb-2 text-xs font-mono uppercase tracking-wider text-primary">
          Det här är uppdraget
        </p>
        <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
          {title}
        </h2>
        <p className="mt-3 text-base text-muted-foreground md:text-lg">{lead}</p>
      </div>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {CORE_ACTIVITIES.map((a, idx) => (
          <li
            key={a.id}
            className="relative flex flex-col gap-2 rounded-lg border border-border bg-background p-6"
          >
            <span className="text-xs font-mono text-muted-foreground">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <h3 className="text-lg font-semibold text-foreground">{a.title}</h3>
            <p className="text-sm text-foreground/80">{a.description}</p>
            {a.cadence && (
              <p className="mt-auto pt-3 text-xs font-mono text-primary">{a.cadence}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoreMissionBlock;

import {
  CORE_ACTIVITIES,
  OCCASIONAL_ACTIVITIES,
  type Activity,
} from "@/content/activities";
import { StaggerGroup, StaggerItem } from "@/components/motion";

interface Props {
  title?: string;
  lead?: string;
  /** Override för aktivitetslistan. Standard: core + occasional (4 st). */
  activities?: Activity[];
}

const CoreMissionBlock = ({
  title = "Kärnuppdraget",
  lead = "Återkommande arbetsformer som bygger närvaro, förtroende och utveckling i föreningarna. Utvecklingsdialogerna med föreningens nyckelpersoner är navet — observationerna görs riktat när det finns ett konkret skäl.",
  activities = [...CORE_ACTIVITIES, ...OCCASIONAL_ACTIVITIES],
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

      <StaggerGroup
        as="ol"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {activities.map((a, idx) => (
          <StaggerItem
            as="li"
            key={a.id}
            className="group relative flex h-full flex-col gap-3 rounded-xl border border-border card-gradient p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-md lg:p-7"
          >
            {/* Number */}
            <span
              aria-hidden="true"
              className="num-display select-none text-[2.5rem] leading-none text-border transition-colors group-hover:text-accent/70"
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
              <p className="mt-auto border-t border-border pt-4 font-mono text-micro uppercase tracking-wider text-accent">
                {a.cadence}
              </p>
            )}
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  );
};

export default CoreMissionBlock;

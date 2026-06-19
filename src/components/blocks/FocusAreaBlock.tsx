import { cn } from "@/lib/utils";
import { StaggerGroup, StaggerItem } from "@/components/motion";
import type { FocusArea } from "@/content/kvalitetsklubb";

interface Props {
  areas: FocusArea[];
  className?: string;
}

/**
 * FOCUS AREA BLOCK — fyra stora kort i 2×2 grid med fokuspunkter under.
 *
 * Detta är SvFF:s officiella struktur för Kvalitetsklubb. Korten har
 * tillräckligt med tyngd för att visa hierarkin: fokusområde är överordnat,
 * fokuspunkterna är underordnade.
 */
const FocusAreaBlock = ({ areas, className }: Props) => (
  <StaggerGroup
    as="div"
    className={cn(
      "grid gap-4",
      "sm:grid-cols-2",
      className,
    )}
  >
    {areas.map((area, idx) => {
      const Icon = area.icon;
      return (
        <StaggerItem
          as="div"
          key={area.id}
          className="group flex h-full flex-col rounded-xl border border-border card-gradient p-7 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-md"
        >
          <header className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent transition-colors">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-mono text-micro uppercase tracking-wider text-muted-foreground">
                Fokusområde {String(idx + 1).padStart(2, "0")} · {area.kicker}
              </p>
              <h3 className="mt-1 text-subhead font-semibold text-foreground">
                {area.name}
              </h3>
            </div>
          </header>

          <p className="mt-5 text-base leading-relaxed text-foreground/80">
            {area.summary}
          </p>

          <div className="mt-6 border-t border-border pt-5">
            <p className="mb-4 font-mono text-micro uppercase tracking-wider text-muted-foreground">
              Fokuspunkter · {area.points.length}
            </p>
            <ul className="space-y-3.5" role="list">
              {area.points.map((point) => (
                <li key={point.title}>
                  <p className="text-sm font-semibold leading-tight text-foreground">
                    {point.title}
                  </p>
                  <p className="mt-1 text-small leading-relaxed text-muted-foreground">
                    {point.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </StaggerItem>
      );
    })}
  </StaggerGroup>
);

export default FocusAreaBlock;

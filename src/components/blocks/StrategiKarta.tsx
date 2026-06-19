import { cn } from "@/lib/utils";
import { StaggerGroup, StaggerItem } from "@/components/motion";
import {
  STRATEGI_MAPPING,
  SVFF_STRATEGIC_AREAS,
  type MappingRow,
  type StrategicArea,
} from "@/content/strategikarta";

interface Props {
  className?: string;
  /** Visa SvFF:s 14 strategiska områden som chip-grid ovanför mapping. */
  showSvffAreas?: boolean;
}

/**
 * STRATEGI KARTA — kopplar SvFF:s nationella förändringsresor till GFF:s
 * lokala arbete och praktisk effekt.
 *
 * Två lager:
 *   1. Chip-grid med SvFF:s 14 strategiska områden, där förändringsresor
 *      relevanta för Föreningslyftet markeras.
 *   2. En 4-kolumns mappningstabell: nivå · nationell · lokal · effekt.
 */
const StrategiKarta = ({ className, showSvffAreas = true }: Props) => (
  <div className={cn("space-y-8", className)}>
    {showSvffAreas && (
      <div>
        <p className="signal-label mb-4" style={{ "--signal": "var(--signal-gold)" } as React.CSSProperties}>
          SvFF · 14 strategiska områden 2024–2027
        </p>
        <StaggerGroup as="ul" className="flex flex-wrap gap-2">
          {SVFF_STRATEGIC_AREAS.map((area) => (
            <StrategicChip key={area.name} area={area} />
          ))}
        </StaggerGroup>
        <p className="mt-3 text-small text-muted-foreground">
          Markerade områden är förändringsresor som direkt formar GFF:s lokala
          arbete med Föreningslyftet, Kvalitetsklubb och En bättre väg.
        </p>
      </div>
    )}

    <div className="overflow-hidden rounded-md border border-border">
      <table className="w-full text-left text-sm">
        <thead className="bg-background">
          <tr className="border-b border-border">
            <th
              scope="col"
              className="px-5 py-3 font-mono text-micro uppercase tracking-wider text-muted-foreground"
            >
              Nivå
            </th>
            <th
              scope="col"
              className="hidden px-5 py-3 font-mono text-micro uppercase tracking-wider text-muted-foreground sm:table-cell"
            >
              Nationell SvFF-logik
            </th>
            <th
              scope="col"
              className="px-5 py-3 font-mono text-micro uppercase tracking-wider text-muted-foreground"
            >
              Lokal GFF-tillämpning
            </th>
            <th
              scope="col"
              className="hidden px-5 py-3 font-mono text-micro uppercase tracking-wider text-muted-foreground md:table-cell"
            >
              Praktisk effekt
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border bg-card">
          {STRATEGI_MAPPING.map((row) => (
            <MappingRowComp key={row.level} row={row} />
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const StrategicChip = ({ area }: { area: StrategicArea }) => (
  <StaggerItem
    as="li"
    className={cn(
      "rounded-sm border px-3 py-1.5 text-[0.8125rem] font-medium transition-all hover:-translate-y-0.5",
      area.emphasized
        ? "border-accent/45 bg-accent/10 text-foreground glow-accent"
        : "border-border bg-card text-muted-foreground hover:border-accent/30",
    )}
  >
    {area.name}
  </StaggerItem>
);

const MappingRowComp = ({ row }: { row: MappingRow }) => (
  <tr className="align-top">
    <th
      scope="row"
      className="px-5 py-4 font-mono text-micro uppercase tracking-wider text-primary"
    >
      {row.level}
    </th>
    <td className="hidden px-5 py-4 text-foreground/80 leading-relaxed sm:table-cell">
      {row.national}
    </td>
    <td className="px-5 py-4 font-medium text-foreground leading-relaxed">
      {row.local}
      {/* På smal skärm: visa nationell + effekt staplade under */}
      <span className="mt-2 block text-small text-muted-foreground sm:hidden">
        ← {row.national}
      </span>
      <span className="mt-1 block text-small text-muted-foreground md:hidden">
        → {row.effect}
      </span>
    </td>
    <td className="hidden px-5 py-4 text-muted-foreground leading-relaxed md:table-cell">
      {row.effect}
    </td>
  </tr>
);

export default StrategiKarta;

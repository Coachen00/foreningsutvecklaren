import type { Partner, PartnerRole } from "@/content/partners";
import type { AreaSlug } from "@/content/siteStructure";
import { PARTNERS } from "@/content/partners";

interface Props {
  areaSlug?: AreaSlug;
  title?: string;
  lead?: string;
}

const roleLabel: Record<PartnerRole, string> = {
  ansvarig: "Ansvarig",
  strategisk: "Strategisk",
  operativ: "Operativ",
  mottagare: "Mottagare",
};

const roleOrder: PartnerRole[] = ["ansvarig", "strategisk", "operativ", "mottagare"];

const PartnerMapBlock = ({ areaSlug }: Props) => {
  const list: Partner[] = areaSlug
    ? PARTNERS.filter((p) => p.linkedAreas.includes(areaSlug))
    : PARTNERS;

  const grouped = roleOrder.map((role) => ({
    role,
    partners: list.filter((p) => p.role === role),
  }));

  return (
    <div className="space-y-8">
      {grouped.map((group) =>
        group.partners.length === 0 ? null : (
          <div key={group.role}>
            <p className="mb-3 text-xs font-mono uppercase tracking-wider text-primary">
              {roleLabel[group.role]}
            </p>
            <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {group.partners.map((p) => (
                <li
                  key={p.id}
                  className="rounded-lg border border-border bg-background p-5"
                >
                  <h3 className="mb-1 font-semibold text-foreground">{p.name}</h3>
                  <p className="text-sm text-foreground/80">{p.shortDescription}</p>
                </li>
              ))}
            </ul>
          </div>
        ),
      )}
    </div>
  );
};

export default PartnerMapBlock;

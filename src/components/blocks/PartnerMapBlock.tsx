import type { Partner, PartnerRole } from "@/content/partners";
import type { AreaSlug } from "@/content/siteStructure";
import { PARTNERS } from "@/content/partners";
import { StaggerGroup, StaggerItem } from "@/components/motion";

interface Props {
  areaSlug?: AreaSlug;
}

const roleLabel: Record<PartnerRole, string> = {
  ansvarig: "Ansvarig",
  strategisk: "Sätter riktning",
  operativ: "Gör arbetet",
  mottagare: "Mottagare",
};

const roleDescription: Record<PartnerRole, string> = {
  ansvarig: "Äger och driver uppdraget",
  strategisk: "Sätter riktning och gör stöd möjligt",
  operativ: "Gör arbetet och stöttar föreningen",
  mottagare: "Tar emot och verkar",
};

const rolePillClass: Record<PartnerRole, string> = {
  ansvarig: "bg-primary text-primary-foreground",
  strategisk: "bg-foreground/8 text-foreground border border-border",
  operativ: "bg-foreground/5 text-foreground/75 border border-border",
  mottagare: "bg-muted text-muted-foreground border border-border",
};

const roleOrder: PartnerRole[] = ["ansvarig", "strategisk", "operativ", "mottagare"];

const PartnerMapBlock = ({ areaSlug }: Props) => {
  const list: Partner[] = areaSlug
    ? PARTNERS.filter((p) => p.linkedAreas.includes(areaSlug))
    : PARTNERS;

  const grouped = roleOrder
    .map((role) => ({
      role,
      partners: list.filter((p) => p.role === role),
    }))
    .filter((g) => g.partners.length > 0);

  return (
    <StaggerGroup className="space-y-0 border border-border divide-y divide-border">
      {grouped.map((group) => (
        <StaggerItem key={group.role} className="grid grid-cols-1 md:grid-cols-[14rem_1fr] gap-0">
          {/* Role column */}
          <div className="flex flex-col justify-start gap-1 border-b border-border bg-muted px-6 py-5 md:border-b-0 md:border-r md:py-6">
            <p className="signal-label" style={{ "--signal": "var(--signal-gold)" } as React.CSSProperties}>
              {roleLabel[group.role]}
            </p>
            <p className="text-small text-muted-foreground leading-snug">
              {roleDescription[group.role]}
            </p>
          </div>

          {/* Partners column */}
          <ul
            className="grid grid-cols-1 sm:grid-cols-2 gap-0 divide-y divide-border sm:divide-y-0 sm:divide-x"
            role="list"
          >
            {group.partners.map((p) => (
              <li
                key={p.id}
                className="group flex flex-col gap-1.5 bg-card px-6 py-5 transition-colors hover:bg-accent/[0.06] sm:py-6"
              >
                <p className="font-semibold text-base text-foreground leading-tight transition-colors group-hover:text-accent">
                  {p.name}
                </p>
                <p className="text-small text-muted-foreground leading-relaxed">
                  {p.shortDescription}
                </p>
              </li>
            ))}
          </ul>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
};

export default PartnerMapBlock;

import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { StaggerGroup, StaggerItem } from "@/components/motion";
import type { KlubbRole } from "@/content/kvalitetsklubb";

interface Props {
  roles: KlubbRole[];
  className?: string;
}

/**
 * KLUBB ROLES BLOCK — tre likvärdiga roller på rad.
 *
 * Visuellt skild från RolePair (som visar 2 roller i 2 kolumner) genom att
 * lägga metafor-citatet i större typsnitt — varje roll har en pedagogisk
 * "etikett" som hjälper besökaren minnas vad de gör.
 */
const KlubbRolesBlock = ({ roles, className }: Props) => (
  <StaggerGroup
    className={cn(
      "grid gap-px overflow-hidden rounded-xl border border-border bg-border",
      "md:grid-cols-3",
      className,
    )}
  >
    {roles.map((role) => {
      const Icon = role.icon;
      return (
        <StaggerItem key={role.id} as="div" className="flex h-full flex-col bg-card p-7 transition-colors hover:bg-muted/40">
          <header>
            <span
              aria-hidden="true"
              className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/15 text-accent"
            >
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-subhead font-semibold text-foreground">
              {role.title}
            </h3>
            <p className="mt-1 text-base italic text-muted-foreground">
              "{role.metaphor}"
            </p>
          </header>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            {role.description}
          </p>

          <div className="mt-6 border-t border-border pt-5">
            <p className="signal-label mb-3" style={{ "--signal": "var(--signal-gold)" } as CSSProperties}>
              Ansvar
            </p>
            <ul className="space-y-2 text-small text-foreground/80" role="list">
              {role.responsibilities.map((r) => (
                <li key={r} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-accent"
                  />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </StaggerItem>
      );
    })}
  </StaggerGroup>
);

export default KlubbRolesBlock;

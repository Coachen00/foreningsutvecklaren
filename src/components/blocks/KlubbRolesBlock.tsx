import { cn } from "@/lib/utils";
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
  <div
    className={cn(
      "grid gap-px overflow-hidden rounded-md border border-border bg-border",
      "md:grid-cols-3",
      className,
    )}
  >
    {roles.map((role) => {
      const Icon = role.icon;
      return (
        <article key={role.id} className="flex flex-col bg-card p-7">
          <header>
            <span
              aria-hidden="true"
              className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary"
            >
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-serif text-subhead font-semibold text-foreground">
              {role.title}
            </h3>
            <p className="mt-1 font-serif text-base italic text-muted-foreground">
              "{role.metaphor}"
            </p>
          </header>

          <p className="mt-5 text-base leading-relaxed text-foreground/80">
            {role.description}
          </p>

          <div className="mt-6 border-t border-border pt-5">
            <p className="mb-3 font-mono text-micro uppercase tracking-wider text-muted-foreground">
              Ansvar
            </p>
            <ul className="space-y-2 text-small text-foreground/85" role="list">
              {role.responsibilities.map((r) => (
                <li key={r} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-primary"
                  />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      );
    })}
  </div>
);

export default KlubbRolesBlock;

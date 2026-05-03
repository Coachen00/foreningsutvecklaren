import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { AssignmentRole, DoDontGroup } from "@/content/roles";

/* ───────────────────────────────────────────────────────────
   ROLE PAIR — två likvärdiga roller sida vid sida
   ─────────────────────────────────────────────────────────── */

interface RolePairProps {
  roles: AssignmentRole[];
  className?: string;
}

export const RolePair = ({ roles, className }: RolePairProps) => (
  <div
    className={cn(
      "grid gap-4 sm:grid-cols-2 sm:gap-5",
      className,
    )}
  >
    {roles.map((role) => {
      const Icon = role.icon;
      return (
        <article
          key={role.id}
          className="flex flex-col border border-border bg-card p-7 transition-shadow hover:shadow-sm"
        >
          <header className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="font-mono text-micro uppercase tracking-wider text-muted-foreground">
                {role.kicker}
              </p>
              <h3 className="mt-1 font-serif text-subhead font-semibold text-foreground">
                {role.title}
              </h3>
            </div>
          </header>

          <p className="mt-5 text-base leading-relaxed text-foreground/80">
            {role.summary}
          </p>

          <div className="mt-6 border-t border-border pt-5">
            <p className="mb-3 font-mono text-micro uppercase tracking-wider text-muted-foreground">
              Ansvarsområden
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

/* ───────────────────────────────────────────────────────────
   DO / DONT — gränsdragning
   ─────────────────────────────────────────────────────────── */

interface DoDontProps {
  doGroup: DoDontGroup;
  dontGroup: DoDontGroup;
  className?: string;
}

export const DoDontPair = ({ doGroup, dontGroup, className }: DoDontProps) => (
  <div
    className={cn(
      "grid gap-px overflow-hidden rounded-md border border-border bg-border",
      "sm:grid-cols-2",
      className,
    )}
  >
    {/* DO */}
    <DoDontColumn group={doGroup} variant="do" />
    {/* DONT */}
    <DoDontColumn group={dontGroup} variant="dont" />
  </div>
);

const DoDontColumn = ({
  group,
  variant,
}: {
  group: DoDontGroup;
  variant: "do" | "dont";
}) => {
  const isDo = variant === "do";
  const Icon = isDo ? Check : X;

  return (
    <div className="bg-card p-7">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className={cn(
            "flex h-7 w-7 items-center justify-center rounded-md",
            isDo
              ? "bg-primary/10 text-primary"
              : "bg-muted text-muted-foreground",
          )}
        >
          <Icon className="h-4 w-4" strokeWidth={2.5} />
        </span>
        <p
          className={cn(
            "font-mono text-micro uppercase tracking-wider",
            isDo ? "text-primary" : "text-muted-foreground",
          )}
        >
          {group.kicker}
        </p>
      </div>

      <h3 className="mt-4 font-serif text-subhead font-semibold text-foreground">
        {group.title}
      </h3>
      <p className="mt-2 text-small leading-relaxed text-muted-foreground">
        {group.description}
      </p>

      <ul className="mt-5 space-y-3 text-base leading-relaxed text-foreground/85" role="list">
        {group.items.map((item) => (
          <li key={item.text} className="flex gap-3">
            <Icon
              className={cn(
                "mt-1 h-3.5 w-3.5 shrink-0",
                isDo ? "text-primary" : "text-muted-foreground/60",
              )}
              strokeWidth={2.5}
              aria-hidden="true"
            />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

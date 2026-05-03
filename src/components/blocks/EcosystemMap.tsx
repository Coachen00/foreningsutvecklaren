import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ECOSYSTEM_NODES,
  ECOSYSTEM_METAPHOR,
  type EcosystemNode,
} from "@/content/ecosystem";

interface Props {
  className?: string;
  /** Visa metafor-introt ovanför korten. Default true. */
  showMetaphor?: boolean;
}

/**
 * ECOSYSTEM MAP — den skarpa positioneringen.
 *
 * Varje system har en specifik roll i den lokala helheten. Designen
 * är en orienteringskarta — inte en hierarki. Sex jämbördiga noder,
 * var och en med sin unika funktion.
 *
 * Layout: 2 kolumner på sm, 3 på lg. Korten är lugna med starka
 * etiketter ("Infrastrukturen", "Riktad resursförstärkning", osv).
 */
const EcosystemMap = ({ className, showMetaphor = true }: Props) => (
  <div className={cn("space-y-10", className)}>
    {showMetaphor && (
      <div className="border-l-accent">
        <p className="font-mono text-micro uppercase tracking-wider text-primary">
          {ECOSYSTEM_METAPHOR.kicker}
        </p>
        <h3 className="mt-2 font-serif text-headline font-semibold text-foreground">
          {ECOSYSTEM_METAPHOR.title}
        </h3>
        <p className="mt-4 max-w-prose text-lead text-muted-foreground">
          {ECOSYSTEM_METAPHOR.body}
        </p>
      </div>
    )}

    <div
      className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
      role="list"
    >
      {ECOSYSTEM_NODES.map((node) => (
        <NodeCard key={node.id} node={node} />
      ))}
    </div>
  </div>
);

const NodeCard = ({ node }: { node: EcosystemNode }) => {
  const Icon = node.icon;
  const inner = (
    <article className="group flex h-full flex-col bg-card p-7 transition-colors duration-150 hover:bg-primary-subtle/40">
      <header className="flex items-center justify-between">
        <span
          aria-hidden="true"
          className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary"
        >
          <Icon className="h-4 w-4" />
        </span>
        {node.href && (
          <ArrowUpRight
            className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary"
            aria-hidden="true"
          />
        )}
      </header>

      <p className="mt-5 font-mono text-micro uppercase tracking-wider text-primary">
        {node.role}
      </p>
      <h4 className="mt-2 font-serif text-subhead font-semibold leading-snug text-foreground">
        {node.name}
      </h4>
      <p className="mt-3 text-small leading-relaxed text-muted-foreground">
        {node.description}
      </p>
    </article>
  );

  return (
    <div role="listitem" className="contents">
      {node.href ? (
        <Link
          to={node.href}
          className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          {inner}
        </Link>
      ) : (
        inner
      )}
    </div>
  );
};

export default EcosystemMap;

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { UppdragHubItem } from "@/content/uppdragHub";

interface Props {
  items: UppdragHubItem[];
}

const UppdragHubBlock = ({ items }: Props) => (
  <nav aria-label="Karta över uppdragets stödytor">
    <ul
      className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 xl:grid-cols-3"
      role="list"
    >
      {items.map((item) => (
        <li key={item.id} className="bg-card">
          <Link
            to={item.href}
            className="group flex h-full min-h-[13rem] flex-col p-6 transition-colors hover:bg-primary-subtle/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <p className="font-mono text-micro uppercase tracking-wider text-primary">
              {item.eyebrow}
            </p>
            <h3 className="mt-3 font-serif text-base font-semibold leading-tight text-foreground">
              {item.label}
            </h3>
            <p className="mt-3 text-small leading-relaxed text-muted-foreground">
              {item.description}
            </p>
            <span className="mt-auto inline-flex items-center gap-2 pt-5 font-mono text-micro uppercase tracking-wider text-primary">
              Öppna
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default UppdragHubBlock;

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface TocSection {
  id: string;
  title: string;
  level: 2 | 3;
}

interface Props {
  sections: TocSection[];
  className?: string;
  title?: string;
}

const TableOfContents = ({ sections, className, title = "På denna sida" }: Props) => {
  const [activeId, setActiveId] = useState<string | null>(
    sections[0]?.id ?? null,
  );

  useEffect(() => {
    if (sections.length === 0) return;
    if (typeof IntersectionObserver === "undefined") return;

    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 0.25, 0.5, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  if (sections.length === 0) return null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
    setActiveId(id);
  };

  return (
    <aside
      aria-label={title}
      className={cn(
        "hidden md:block",
        "sticky top-[calc(var(--nav-height)+2rem)]",
        "max-h-[calc(100vh-var(--nav-height)-4rem)] overflow-y-auto",
        className,
      )}
    >
      <p className="mb-3 font-mono text-micro uppercase tracking-wider text-muted-foreground">
        {title}
      </p>
      <ul className="space-y-1.5 border-l border-border" role="list">
        {sections.map((s) => {
          const active = activeId === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={(e) => handleClick(e, s.id)}
                aria-current={active ? "location" : undefined}
                className={cn(
                  "block -ml-px border-l-2 py-1 text-sm leading-snug transition-colors duration-150",
                  s.level === 3 ? "pl-6 text-[0.8125rem]" : "pl-4",
                  active
                    ? "border-primary text-foreground font-medium"
                    : "border-transparent text-muted-foreground hover:text-foreground",
                )}
              >
                {s.title}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default TableOfContents;

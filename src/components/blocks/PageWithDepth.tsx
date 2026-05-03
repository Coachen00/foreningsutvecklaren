import TableOfContents, {
  type TocSection,
} from "@/components/blocks/TableOfContents";
import { cn } from "@/lib/utils";

interface Props {
  /** Sections för Table of Contents (sticky right på desktop). */
  toc?: TocSection[];
  /** Aside-innehåll, t.ex. <AsideRelated />. */
  aside?: React.ReactNode;
  /** Huvudinnehåll. */
  children: React.ReactNode;
  className?: string;
  /** Container variant. Standard renderar med container + section-y. */
  bare?: boolean;
}

/**
 * Layout-wrapper för fördjupningssidor.
 * - Desktop (lg+): två kolumner, huvudinnehåll vänster, TOC + aside höger.
 * - Mobil/tablet: stack — innehåll först, aside underst.
 *
 * Renderar ingen egen <main>; placeras inom AssignmentShell/AreaShell.
 */
const PageWithDepth = ({
  toc,
  aside,
  children,
  className,
  bare = false,
}: Props) => {
  const hasSidebar = (toc && toc.length > 0) || Boolean(aside);

  const Inner = (
    <div
      className={cn(
        "grid gap-12 lg:gap-16",
        hasSidebar
          ? "lg:grid-cols-[minmax(0,1fr)_18rem]"
          : "lg:grid-cols-[minmax(0,1fr)]",
        className,
      )}
    >
      {/* Huvudinnehåll — bredd ger plats åt block som årshjul, tabeller och kort-grids.
          Textinnehåll inom ExpandableBlock håller sig till läsbredd via egen 80ch-constraint. */}
      <div className="min-w-0 max-w-[64rem]">{children}</div>

      {/* Höger kolumn — endast desktop */}
      {hasSidebar && (
        <div className="hidden lg:flex flex-col gap-10">
          {toc && toc.length > 0 && <TableOfContents sections={toc} />}
          {aside}
        </div>
      )}

      {/* Mobil/tablet: aside underst */}
      {aside && (
        <div className="lg:hidden border-t border-border pt-10 mt-4">
          {aside}
        </div>
      )}
    </div>
  );

  if (bare) return Inner;

  return (
    <section className="section-y">
      <div className="container mx-auto px-4 sm:px-6">{Inner}</div>
    </section>
  );
};

export default PageWithDepth;

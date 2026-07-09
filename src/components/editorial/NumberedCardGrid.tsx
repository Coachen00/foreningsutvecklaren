import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { StaggerGroup, StaggerItem } from "@/components/motion";

interface CardItem {
  number?: string;
  title: React.ReactNode;
  body: React.ReactNode;
  href?: string;
}

interface NumberedCardGridProps {
  items: CardItem[];
  columns?: 2 | 3 | 4;
}

const COLS: Record<2 | 3 | 4, string> = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

const cardClass =
  "card-gradient group flex h-full flex-col gap-3 rounded-xl border border-border p-6 transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

function CardContent({ number, title, body }: CardItem) {
  return (
    <>
      {number && <span className="label-mono">{number}</span>}
      <span className="text-subhead font-bold text-foreground">{title}</span>
      <span className="text-small text-muted-foreground">{body}</span>
    </>
  );
}

export function NumberedCardGrid({ items, columns = 3 }: NumberedCardGridProps) {
  return (
    <StaggerGroup as="ul" className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2", COLS[columns])}>
      {items.map((item, i) => {
        const key = item.href ?? `${i}-${String(item.title)}`;
        const isExternal = item.href?.startsWith("http");
        return (
          <StaggerItem as="li" key={key} className="min-h-full">
            {item.href ? (
              isExternal ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className={cardClass}>
                  <CardContent {...item} />
                </a>
              ) : (
                <Link to={item.href} className={cardClass}>
                  <CardContent {...item} />
                </Link>
              )
            ) : (
              <div className={cardClass}>
                <CardContent {...item} />
              </div>
            )}
          </StaggerItem>
        );
      })}
    </StaggerGroup>
  );
}

export default NumberedCardGrid;

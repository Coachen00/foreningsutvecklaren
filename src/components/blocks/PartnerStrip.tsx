import { PARTNERS } from "@/content/partners";

interface Props {
  ids?: string[];
  title?: string;
}

const PartnerStrip = ({ ids, title = "I samverkan med" }: Props) => {
  const list = ids ? PARTNERS.filter((p) => ids.includes(p.id)) : PARTNERS;
  if (list.length === 0) return null;

  return (
    <div>
      <p className="mb-4 text-xs font-mono uppercase tracking-wider text-muted-foreground">
        {title}
      </p>
      <ul className="flex flex-wrap gap-2">
        {list.map((p) => (
          <li
            key={p.id}
            className="rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground"
          >
            {p.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PartnerStrip;

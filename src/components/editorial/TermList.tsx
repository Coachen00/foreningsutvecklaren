interface TermListProps {
  items: { term: React.ReactNode; desc: React.ReactNode }[];
}

export function TermList({ items }: TermListProps) {
  return (
    <dl className="grid gap-x-8 gap-y-5 border-t border-border sm:grid-cols-[minmax(6rem,10rem)_1fr]">
      {items.map((item, i) => (
        <div className="contents" key={i}>
          <dt className="border-b border-border py-4 text-subhead font-bold text-accent">{item.term}</dt>
          <dd className="border-b border-border py-4 text-body text-muted-foreground">{item.desc}</dd>
        </div>
      ))}
    </dl>
  );
}

export default TermList;

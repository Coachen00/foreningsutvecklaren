interface TableRow {
  label: string;
  fotbollsnyttan: string;
  enBattreVag: string;
  idrottsklivet: string;
}

interface ComparisonTableProps {
  rows: TableRow[];
}

const ComparisonTable = ({ rows }: ComparisonTableProps) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-[700px]">
        <thead>
          <tr className="bg-accent">
            <th className="p-4 text-left font-semibold text-foreground"></th>
            <th className="p-4 text-left font-semibold text-foreground">
              <span className="text-primary">Fotbollsnyttan</span>
              <span className="block text-sm font-normal text-muted-foreground">(GFF)</span>
            </th>
            <th className="p-4 text-left font-semibold text-foreground">
              En bättre väg
              <span className="block text-sm font-normal text-muted-foreground">(SvFF)</span>
            </th>
            <th className="p-4 text-left font-semibold text-foreground">
              Idrottsklivet
              <span className="block text-sm font-normal text-muted-foreground">(RF)</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.label}
              className={index % 2 === 0 ? "bg-card" : "bg-background"}
            >
              <td className="p-4 font-medium text-foreground">{row.label}</td>
              <td className="p-4 text-foreground/90">{row.fotbollsnyttan}</td>
              <td className="p-4 text-foreground/90">{row.enBattreVag}</td>
              <td className="p-4 text-foreground/90">{row.idrottsklivet}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;

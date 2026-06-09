import type { ContentBlock } from "@/content/trainingCases";

/**
 * Renderar en lista av ContentBlock (stycken, listor, citat, tabeller).
 * Liten egen renderare så vi slipper en markdown-dependency.
 */
const RichContent = ({ blocks }: { blocks: ContentBlock[] }) => (
  <div className="flex flex-col gap-4 text-small leading-relaxed text-muted-foreground">
    {blocks.map((block, i) => {
      switch (block.kind) {
        case "p":
          return <p key={i}>{block.text}</p>;
        case "ol":
          return (
            <ol key={i} className="ml-5 list-decimal space-y-1.5">
              {block.items.map((it, j) => (
                <li key={j}>{it}</li>
              ))}
            </ol>
          );
        case "ul":
          return (
            <ul key={i} className="ml-5 list-disc space-y-1.5">
              {block.items.map((it, j) => (
                <li key={j}>{it}</li>
              ))}
            </ul>
          );
        case "quote":
          return (
            <blockquote
              key={i}
              className="border-l-2 border-primary/40 pl-4 italic text-foreground/80"
            >
              {block.text}
            </blockquote>
          );
        case "table":
          return (
            <div key={i} className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr>
                    {block.headers.map((h, j) => (
                      <th
                        key={j}
                        scope="col"
                        className="border-b border-border px-3 py-2 font-mono text-micro uppercase tracking-wider text-primary"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, r) => (
                    <tr key={r}>
                      {row.map((cell, c) => (
                        <td
                          key={c}
                          className="border-b border-border/60 px-3 py-2 align-top"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
      }
    })}
  </div>
);

export default RichContent;

import SectionLayout from "@/components/SectionLayout";
import { getSection } from "@/data/sections";
import { ArrowUp } from "lucide-react";

const directions = [
  { t: "Inkludering", d: "alla ska kunna delta" },
  { t: "Föreningsutveckling", d: "stärka kapacitet och organisation" },
  { t: "Meningsfull fritid", d: "skapa trygga mötesplatser" },
  { t: "Hållbarhet", d: "långsiktigt stabil verksamhet" },
  { t: "Samverkan", d: "mellan föreningar, kommun och näringsliv" },
];

const increase = [
  "Ideella ledare i föreningarna",
  "Utbildade ledare",
  "Flickor och pojkar som spelar fotboll",
  "Välorganiserade föreningar",
];

const GemensammaMal = () => {
  const meta = getSection("gemensamma-mal");
  return (
    <SectionLayout meta={meta}>
      <div className="grid gap-12 lg:grid-cols-[3fr,2fr]">
        <div>
          <h2 className="mb-6 font-serif text-2xl text-foreground">Övergripande inriktning</h2>
          <ul className="divide-y divide-border border-y border-border">
            {directions.map((d, i) => (
              <li key={d.t} className="flex items-baseline gap-6 py-5">
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                <div>
                  <p className="font-serif text-xl text-foreground">{d.t}</p>
                  <p className="mt-1 text-muted-foreground">{d.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <aside className="rounded-2xl border border-border bg-card p-8">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Vi strävar efter att öka
          </p>
          <h3 className="mb-6 font-serif text-2xl text-foreground">Fyra tal som ska upp</h3>
          <ul className="space-y-4">
            {increase.map((i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <ArrowUp className="h-4 w-4" />
                </span>
                <span className="text-foreground">{i}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </SectionLayout>
  );
};

export default GemensammaMal;

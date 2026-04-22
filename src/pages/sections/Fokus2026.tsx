import SectionLayout from "@/components/SectionLayout";
import { getSection } from "@/data/sections";

const focus = [
  "Endast polisens utsatta områden",
  "Arbeta tillsammans med föreningar",
  "Föreningarnas nytta i centrum",
];

const purposes = [
  "Skapa en gemensam riktning för Fotbollsnyttan i Göteborg",
  "Tydliggöra arbetssätt, ansvar och prioriteringar",
  "Stärka föreningarnas nytta och samhällsroll",
];

const Fokus2026 = () => {
  const meta = getSection("fokus-2026");
  return (
    <SectionLayout meta={meta}>
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-8">
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Tre tydliga val
          </p>
          <ul className="space-y-5">
            {focus.map((f, i) => (
              <li key={f} className="flex items-baseline gap-4">
                <span className="font-mono text-sm text-primary">0{i + 1}</span>
                <span className="font-serif text-2xl text-foreground">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-serif text-2xl text-foreground">
            Syfte med visionsarbetet
          </h2>
          <ul className="space-y-4">
            {purposes.map((p) => (
              <li key={p} className="flex items-start gap-3 border-t border-border pt-4">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span className="text-lg text-foreground/90">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Fokus2026;

import SectionLayout from "@/components/SectionLayout";
import { getSection } from "@/data/sections";

const koppling = [
  "Fotbollsnyttan fungerar som lokalt ramverk och uppföljningsmodell",
  "Resurser från En bättre väg kan knytas till våra sex mål",
  "Gemensam satsning på att minska trösklar och öka deltagande",
];

const mal = [
  "Starkare föreningsnärvaro i områdena",
  "Fler barn och ungdomar i organiserad fotboll",
  "Fler ledare från lokalområdena",
  "Bättre samverkan mellan föreningar, kommun och näringsliv",
];

const EnBattreVag = () => {
  const meta = getSection("en-battre-vag");
  return (
    <SectionLayout meta={meta}>
      <div className="grid gap-12 lg:grid-cols-[3fr,2fr]">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Syfte
          </p>
          <p className="mb-10 max-w-2xl text-lg text-foreground/90">
            En bättre väg är Svenska Fotbollförbundets satsning för att stärka
            fotbollen i prioriterade områden. Genom att koppla ihop lokala
            föreningar med resurser och nyckelroller skapas förutsättningar för
            en starkare föreningsnärvaro.
          </p>

          <h2 className="mb-5 font-serif text-2xl text-foreground">
            Koppling till Fotbollsnyttan
          </h2>
          <ul className="space-y-4">
            {koppling.map((k) => (
              <li key={k} className="flex items-start gap-4 border-t border-border pt-4">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span className="text-foreground">{k}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="rounded-2xl border border-border bg-card p-8">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            2026–2027
          </p>
          <h3 className="mb-6 font-serif text-2xl text-foreground">Mål</h3>
          <ol className="space-y-4">
            {mal.map((m, i) => (
              <li key={m} className="flex items-start gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                  {i + 1}
                </span>
                <span className="text-foreground">{m}</span>
              </li>
            ))}
          </ol>
          <div className="mt-8 border-t border-border pt-4">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Ansökan:</span> Via
              fotbollens kanal lokalt i samarbete med GFF och RF-SISU.
            </p>
          </div>
        </aside>
      </div>
    </SectionLayout>
  );
};

export default EnBattreVag;

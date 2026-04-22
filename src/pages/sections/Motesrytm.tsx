import SectionLayout from "@/components/SectionLayout";
import CalloutBox from "@/components/CalloutBox";
import { getSection } from "@/data/sections";
import strukturMindmap from "@/assets/struktur-mindmap.png";

const meetings = [
  { date: "26/1", label: "Uppstart", primary: true },
  { date: "16/2", label: "kl 12.00–13.30" },
  { date: "13/4", label: "kl 12.00–13.30" },
  { date: "15/6", label: "kl 12.00–13.30" },
];

const Motesrytm = () => {
  const meta = getSection("motesrytm");
  return (
    <SectionLayout meta={meta}>
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Arbetssätt
          </p>
          <h2 className="mb-6 font-serif text-2xl text-foreground">Rytmen som bär arbetet</h2>
          <CalloutBox>
            Varje arbetsgrupp tar fram en MÅLBILD (önskat läge) och driver arbetet i en enkel rytm:
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>Arbetsgruppsträff varannan vecka (60 min)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Återsamling var 8:e vecka (90 min) – synka riktning, prioriteringar och beroenden
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>Minst två arbetsmöten mellan varje kommittémöte</span>
              </li>
            </ul>
            <p className="mt-4 font-medium">
              Varje möte avslutas med: 3 beslut/next actions + ansvarig + datum.
            </p>
          </CalloutBox>
        </div>

        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Kalender
          </p>
          <h2 className="mb-6 font-serif text-2xl text-foreground">Kommittémöten 2026</h2>
          <ol className="space-y-3">
            {meetings.map((m) => (
              <li
                key={m.date}
                className={`flex items-center gap-4 rounded-xl border p-4 ${
                  m.primary
                    ? "border-primary/30 bg-accent"
                    : "border-border bg-card"
                }`}
              >
                <span
                  className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full font-mono text-sm font-semibold ${
                    m.primary
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-foreground"
                  }`}
                >
                  {m.date}
                </span>
                <span className="text-foreground">{m.label}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <section aria-labelledby="struktur" className="mt-20">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Översikt
        </p>
        <h2 id="struktur" className="mb-6 font-serif text-2xl text-foreground">
          Struktur EBV / Fotbollsnyttan
        </h2>
        <div className="overflow-hidden rounded-2xl border border-border bg-card p-3">
          <img
            src={strukturMindmap}
            alt="Mindmap över struktur för EBV och Fotbollsnyttan med tre arbetsgrupper: Partners & ansökningar, Koordination och Idrottspolitik"
            loading="lazy"
            className="h-auto w-full"
          />
        </div>
      </section>
    </SectionLayout>
  );
};

export default Motesrytm;

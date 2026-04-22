import SectionLayout from "@/components/SectionLayout";
import CalloutBox from "@/components/CalloutBox";
import { getSection } from "@/data/sections";

const points = [
  "Minska skillnader i förutsättningar mellan stadsdelar.",
  "Stärka föreningar och fotbollsmiljöer så att de håller över tid.",
  "Göra nyttan tydlig med data + berättelser så resurser hamnar rätt.",
];

const Varfor = () => {
  const meta = getSection("varfor");
  return (
    <SectionLayout meta={meta}>
      <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
        <div>
          <h2 className="mb-6 font-serif text-2xl text-foreground">Tre drivkrafter</h2>
          <ul className="space-y-5">
            {points.map((p, i) => (
              <li key={p} className="flex items-start gap-5 border-t border-border pt-5">
                <span className="font-mono text-sm text-muted-foreground">0{i + 1}</span>
                <p className="text-lg text-foreground">{p}</p>
              </li>
            ))}
          </ul>
        </div>
        <aside className="lg:pt-12">
          <CalloutBox variant="highlight">
            <p className="font-serif text-xl leading-snug">
              Vi gör samhällsnyttan synlig, mätbar och genomförbar.
            </p>
          </CalloutBox>
        </aside>
      </div>
    </SectionLayout>
  );
};

export default Varfor;

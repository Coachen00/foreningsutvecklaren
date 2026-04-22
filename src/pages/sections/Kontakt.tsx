import SectionLayout from "@/components/SectionLayout";
import { getSection } from "@/data/sections";
import { Mail, Users, Megaphone } from "lucide-react";

const ways = [
  {
    icon: Users,
    title: "Bidra som förening",
    text: "Är ni en förening i ett prioriterat område? Hör av er om samverkan, behov eller idéer.",
  },
  {
    icon: Megaphone,
    title: "Bidra som partner",
    text: "Företag, stiftelser och offentliga aktörer som vill stötta arbetet på lång sikt.",
  },
  {
    icon: Mail,
    title: "Veta mer",
    text: "Vill du bara förstå helheten bättre? Vi guidar gärna.",
  },
];

const Kontakt = () => {
  const meta = getSection("kontakt");
  return (
    <SectionLayout meta={meta}>
      <div className="grid gap-6 md:grid-cols-3">
        {ways.map((w) => {
          const Icon = w.icon;
          return (
            <div
              key={w.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <Icon className="mb-5 h-6 w-6 text-primary" />
              <h2 className="mb-2 font-serif text-xl text-foreground">{w.title}</h2>
              <p className="text-muted-foreground">{w.text}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-accent p-8 md:p-12">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Kontakt
        </p>
        <p className="font-serif text-3xl text-foreground md:text-4xl">
          Hör av dig till{" "}
          <span className="text-primary">[NAMN/MEJL]</span>
        </p>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Kommittén för föreningsutveckling (GFF) – Fotbollsnyttan Göteborg.
        </p>
      </div>
    </SectionLayout>
  );
};

export default Kontakt;

import SectionLayout from "@/components/SectionLayout";
import MetricChip from "@/components/MetricChip";
import CalloutBox from "@/components/CalloutBox";
import { getSection } from "@/data/sections";
import {
  Users,
  Building2,
  Shield,
  Heart,
  GraduationCap,
  Network,
} from "lucide-react";

const sixGoals = [
  { icon: Users, label: "Deltagande" },
  { icon: Building2, label: "Anläggning" },
  { icon: Shield, label: "Trygghet" },
  { icon: Heart, label: "Sociala effekter" },
  { icon: GraduationCap, label: "Ledarskap" },
  { icon: Network, label: "Systemnivå" },
];

const insatser = [
  "Föreningsstöd (kapacitet/organisation)",
  "Sänkta trösklar (kostnad/transport/utrustning)",
  "Ledarstöd/utbildning",
  "Samverkan med kommun/skola/CSR",
];

const hur = [
  "Behov → insats → uppföljning → förbättring (vi itererar, inte gissar).",
  "Tydliga paket som går att leverera och följa upp.",
  "Mätning + berättelser (kvantitativt + kvalitativt).",
];

const VadOchHur = () => {
  const meta = getSection("vad-och-hur");
  return (
    <SectionLayout meta={meta}>
      {/* Vad */}
      <section aria-labelledby="vad" className="mb-20">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Vad
        </p>
        <h2 id="vad" className="mb-3 font-serif text-3xl text-foreground">
          Sex mål – ett ramverk
        </h2>
        <p className="mb-8 max-w-2xl text-lg text-muted-foreground">
          Fotbollsnyttan paketerar insatser och följer upp dem via sex mål.
        </p>

        <div className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {sixGoals.map((g) => (
            <MetricChip key={g.label} icon={g.icon} label={g.label} />
          ))}
        </div>

        <h3 className="mb-4 font-serif text-xl text-foreground">Typinsatser</h3>
        <ul className="grid gap-3 md:grid-cols-2">
          {insatser.map((i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
            >
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              <span className="text-foreground">{i}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Hur */}
      <section aria-labelledby="hur">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Hur
        </p>
        <h2 id="hur" className="mb-8 font-serif text-3xl text-foreground">
          Så jobbar vi
        </h2>
        <ul className="mb-8 space-y-5">
          {hur.map((h, i) => (
            <li key={h} className="flex items-start gap-5 border-t border-border pt-5">
              <span className="font-mono text-sm text-muted-foreground">0{i + 1}</span>
              <p className="text-lg text-foreground">{h}</p>
            </li>
          ))}
        </ul>
        <CalloutBox title="Så gör vi">
          Om något är otydligt skriver vi "(Behöver beslutas/tydliggöras)" och tar beslut.
        </CalloutBox>
      </section>
    </SectionLayout>
  );
};

export default VadOchHur;

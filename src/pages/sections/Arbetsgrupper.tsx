import SectionLayout from "@/components/SectionLayout";
import WorkGroupCard from "@/components/WorkGroupCard";
import { getSection } from "@/data/sections";
import { Handshake, Cog, BarChart3 } from "lucide-react";

const workGroups = [
  {
    icon: Handshake,
    title: "Partners & ansökningar",
    owner: "Joel",
    effectGoal: "Säker och samlad hantering av partners och ansökningar",
    responsibilities: [
      "Kartlägga möjliga finansiärer (företag, stiftelser, offentlig nivå)",
      "Prioritera vilka ansökningar som ska göras och när",
      "Samordna underlag från föreningar, GFF och RF-SISU",
      "Säkerställa återrapportering och uppföljning mot övergripande effektmål",
    ],
    teamMembers: "Joel · Gis · Kerime",
  },
  {
    icon: Cog,
    title: "Koordination",
    owner: "Elin & TG",
    effectGoal: "En tydlig ingång för föreningar och partners + samordnade insatser och mindre stuprör",
    responsibilities: [
      "Hålla ihop årshjul och övergripande kalender",
      "Kalla till och leda relevanta nätverksträffar",
      "Säkerställa dokumentation, minnesanteckningar och spridning",
      "Följa upp att beslut leder till genomförda aktiviteter",
    ],
    teamMembers: "Elin · TG · Elisabeth",
  },
  {
    icon: BarChart3,
    title: "Idrottspolitik",
    owner: "Patrik",
    effectGoal:
      "Stark och samlad idrottspolitisk röst för fotbollen i prioriterade områden + bättre villkor (anläggning, tider, stöd, samverkan)",
    responsibilities: [
      "Hålla ihop budskap och berättelser kring fotbollens samhällsnytta",
      "Bygga och vårda relationer med politiker, tjänstepersoner och nyckelpartners",
      "Samordna inspel från föreningar inför dialog- och beslutsprocesser",
      "Lyfta föreningarnas erfarenheter från områdena i rätt forum",
    ],
    teamMembers: "Patrik · Isabel · Ny ordförande/representant från styrelsen",
  },
];

const Arbetsgrupper = () => {
  const meta = getSection("arbetsgrupper");
  return (
    <SectionLayout meta={meta}>
      <div className="mb-10 rounded-2xl border border-border bg-card p-6">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Ordförande
        </p>
        <p className="mt-1 font-serif text-2xl text-foreground">Elin Jageteg</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {workGroups.map((g) => (
          <WorkGroupCard key={g.title} {...g} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default Arbetsgrupper;

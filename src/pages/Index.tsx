import {
  Users,
  Building2,
  Shield,
  Heart,
  GraduationCap,
  Network,
  Cog,
  Handshake,
  BarChart3,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import MetricChip from "@/components/MetricChip";
import CalloutBox from "@/components/CalloutBox";
import InfoCard from "@/components/InfoCard";
import WorkGroupCard from "@/components/WorkGroupCard";
import ComparisonTable from "@/components/ComparisonTable";
import StepList from "@/components/StepList";
import Footer from "@/components/Footer";

const sixGoals = [
  { icon: Users, label: "Deltagande" },
  { icon: Building2, label: "Anläggning" },
  { icon: Shield, label: "Trygghet" },
  { icon: Heart, label: "Sociala effekter" },
  { icon: GraduationCap, label: "Ledarskap" },
  { icon: Network, label: "Systemnivå" },
];

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
    effectGoal: "Stark och samlad idrottspolitisk röst för fotbollen i prioriterade områden + bättre villkor (anläggning, tider, stöd, samverkan)",
    responsibilities: [
      "Hålla ihop budskap och berättelser kring fotbollens samhällsnytta",
      "Bygga och vårda relationer med politiker, tjänstepersoner och nyckelpartners",
      "Samordna inspel från föreningar inför dialog- och beslutsprocesser",
      "Lyfta föreningarnas erfarenheter från områdena i rätt forum",
    ],
    teamMembers: "Patrik · Isabel · Ny ordförande/representant från styrelsen",
  },
];

const comparisonRows = [
  {
    label: "Syfte",
    fotbollsnyttan: "Ramverk i Göteborg: nytta + uppföljning.",
    enBattreVag: "Riktad fotbollssatsning i utsatta områden.",
    idrottsklivet: "Nationell satsning för idrott i utsatta områden.",
  },
  {
    label: "Driver",
    fotbollsnyttan: "GFF + partners.",
    enBattreVag: "SvFF lokalt i samarbete med RF m.fl.",
    idrottsklivet: "RF nationellt + RF-SISU lokalt + SF/IF.",
  },
  {
    label: "Stödform",
    fotbollsnyttan: "Paketerade insatser kopplade till 6 mål.",
    enBattreVag: "Resurser till nyckelroller + insatser.",
    idrottsklivet: "Verksamhetsstöd (RF-SISU) + projektstöd (SF).",
  },
  {
    label: "Ansökan",
    fotbollsnyttan: "Lokalt upplägg.",
    enBattreVag: "Via fotbollens kanal lokalt.",
    idrottsklivet: "Varierar via RF-SISU och/eller SF (lokalt).",
  },
  {
    label: "Mål 26–27",
    fotbollsnyttan: "Utveckling mot jämlik fotboll i hela staden.",
    enBattreVag: "Starkare föreningsnärvaro i områdena.",
    idrottsklivet: "Fler deltagare, stabil verksamhet, fler ledare.",
  },
];

const steps = [
  { number: 1, text: "Få access + läs in dig på de 6 målen." },
  { number: 2, text: "Välj arbetsgrupp och ett första case." },
  {
    number: 3,
    text: "Sätt dig in i din arbetsgrupps målbild och ansvarslista – och boka in varannan-vecka-mötet + 8-veckors-återsamlingen i kalendern.",
  },
  {
    number: 4,
    text: "Följ med ut (1 besök/avstämning) + skriv 3 observationer.",
  },
  { number: 5, text: "Knyt caset till 2 indikatorer + nästa steg." },
  {
    number: 6,
    text: "Leverera 1 konkret förbättring (mall/checklista/partnerkontakt).",
  },
  { number: 7, text: "(Behöver beslutas/tydliggöras)", placeholder: true },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* Section 1: Varför finns vi? */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader id="varfor" title="Varför finns vi?" />
          <ul className="mb-8 space-y-4">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
              <span className="text-foreground">
                Minska skillnader i förutsättningar mellan stadsdelar.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
              <span className="text-foreground">
                Stärka föreningar och fotbollsmiljöer så att de håller över tid.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
              <span className="text-foreground">
                Göra nyttan tydlig med data + berättelser så resurser hamnar rätt.
              </span>
            </li>
          </ul>
          <CalloutBox variant="highlight">
            Vi gör samhällsnyttan synlig, mätbar och genomförbar.
          </CalloutBox>
        </div>
      </section>

      {/* Section 2: Vad gör vi? */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            id="vad"
            title="Vad gör vi?"
            subtitle="Fotbollsnyttan är vårt ramverk: vi paketerar insatser och följer upp dem via sex mål."
          />
          <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {sixGoals.map((goal) => (
              <MetricChip key={goal.label} icon={goal.icon} label={goal.label} />
            ))}
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              Typinsatser
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span className="text-foreground">
                  Föreningsstöd (kapacitet/organisation)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span className="text-foreground">
                  Sänkta trösklar (kostnad/transport/utrustning)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span className="text-foreground">Ledarstöd/utbildning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span className="text-foreground">
                  Samverkan med kommun/skola/CSR
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Hur jobbar vi? */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader id="hur" title="Hur jobbar vi?" />
          <ul className="mb-8 space-y-4">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
              <span className="text-foreground">
                Behov → insats → uppföljning → förbättring (vi itererar, inte
                gissar).
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
              <span className="text-foreground">
                Tydliga paket som går att leverera och följa upp.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
              <span className="text-foreground">
                Mätning + berättelser (kvantitativt + kvalitativt).
              </span>
            </li>
          </ul>
          <CalloutBox title="Så gör vi">
            Om något är otydligt skriver vi "(Behöver beslutas/tydliggöras)" och
            tar beslut.
          </CalloutBox>
        </div>
      </section>

      {/* Section 4: Så hänger satsningarna ihop */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader id="satsningarna" title="Så hänger satsningarna ihop" />
          <ComparisonTable rows={comparisonRows} />
        </div>
      </section>

      {/* Section 5: Tre arbetsgrupper */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader id="arbetsgrupper" title="Tre arbetsgrupper" />
          <div className="mb-8 grid gap-6 lg:grid-cols-3">
            {workGroups.map((group) => (
              <WorkGroupCard
                key={group.title}
                icon={group.icon}
                title={group.title}
                owner={group.owner}
                effectGoal={group.effectGoal}
                responsibilities={group.responsibilities}
                teamMembers={group.teamMembers}
              />
            ))}
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <p className="text-foreground">
              <span className="font-semibold">Ordförande:</span> Elin Jageteg
            </p>
          </div>
        </div>
      </section>

      {/* Section 5B: Arbetsstruktur */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader id="arbetsstruktur" title="Arbetsstruktur" />
          <CalloutBox title="Arbetssätt">
            Varje arbetsgrupp tar fram en MÅLBILD (önskat läge) och driver arbetet i en enkel rytm:
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>Arbetsgruppsträff varannan vecka (60 min)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>Återsamling var 8:e vecka (90 min) – synka riktning, prioriteringar och beroenden.</span>
              </li>
            </ul>
            <p className="mt-3 font-medium">
              Varje möte ska avslutas med: 3 beslut/next actions + ansvarig + datum.
            </p>
          </CalloutBox>
        </div>
      </section>

      {/* Section 6: Start här – 7 dagar */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            id="start"
            title="Start här – 7 dagar"
            subtitle="Din första vecka i kommittén"
          />
          <StepList steps={steps} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

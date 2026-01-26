import { useState } from "react";
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
import WorkGroupCard from "@/components/WorkGroupCard";
import ComparisonTable from "@/components/ComparisonTable";
import InitiativeCard, { type Initiative } from "@/components/InitiativeCard";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import strukturMindmap from "@/assets/struktur-mindmap.png";

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

const initiatives: Initiative[] = [
  {
    title: "Idrottsklivet i Västra Götaland (Göteborg)",
    actor: "RF-SISU Västra Götaland",
    area: "Göteborg (lokalt områdesarbete)",
    format: "Stöd till föreningar + inkluderande verksamhet/mottagarkapacitet",
    purpose: "Stärka idrottens närvaro i utsatta områden genom lokalt stöd och samverkan.",
    areaType: "Övrigt",
    initiativeType: "Stöd",
  },
  {
    title: "Skola som arena",
    actor: "Göteborgs Stad",
    area: "25 skolor i Göteborg (områden med utmanade uppväxtvillkor)",
    format: "Skolan som mötesplats + aktiviteter före/efter skoltid i samverkan",
    purpose: "Utjämna skillnader i barns uppväxtvillkor genom nära, trygg fritid.",
    areaType: "Övrigt",
    initiativeType: "Koordination",
  },
  {
    title: "Lights On (inom/kring Skola som arena)",
    actor: "Göteborgs Stad / samverkansaktörer",
    area: "Exempel: skolor i Göteborg (t.ex. Ellen Keyskolan)",
    format: "Gratisaktiviteter med vuxennärvaro före/efter skoltid",
    purpose: "Trygg, aktiv fritid med låga trösklar nära skolan.",
    areaType: "Övrigt",
    initiativeType: "Verksamhet",
  },
  {
    title: "Aktiv Göteborg",
    actor: "IFK Göteborg (i samverkan)",
    area: "Biskopsgården & Hammarkullen",
    format: "Veckoträffar – fotboll + stöd kopplat till utbildning/arbete",
    purpose: "Kombinera fotboll med väg in i studier/arbete.",
    areaType: "Hisingen",
    initiativeType: "Verksamhet",
  },
  {
    title: "IFK Cruyff Courts",
    actor: "IFK Göteborg + Johan Cruyff Foundation",
    area: "Exempel: Bergsjön, Hammarkullen, Biskopsgården",
    format: "Fotbollsplaner/courts i områden med stort behov",
    purpose: "Skapa plats för rörelse, gemenskap och positiv närvaro.",
    areaType: "Nordost",
    initiativeType: "Plats",
  },
  {
    title: "Fotboll med GAIS i Biskopsgården",
    actor: "GAIS + Brämaregårdens FC + Bostadsbolaget m.fl.",
    area: "Biskopsgården",
    format: "Fotbollsverksamhet/fotbollsskola + ledarstöd i samverkan",
    purpose: "Sänka trösklar och skapa regelbunden aktivitet lokalt.",
    areaType: "Hisingen",
    initiativeType: "Verksamhet",
  },
  {
    title: "Starkare föreningsliv i Nordost",
    actor: "ÖIS Fotboll + Idrotts- och föreningsförvaltningen + lokala föreningar",
    area: "Nordost",
    format: "Föreningsstärkande projekt (3-årigt) + samverkan",
    purpose: "Fler vägar in i idrott och föreningsliv för barn och unga i nordöstra Göteborg.",
    areaType: "Nordost",
    initiativeType: "Stöd",
  },
  {
    title: "Gothia Cup Foundation",
    actor: "Gothia Cup",
    area: "Göteborg + internationellt",
    format: "Skapar möjligheter att delta oavsett bakgrund (fotboll som gemensam nämnare)",
    purpose: "Inkludering och möjligheter för unga via fotboll och möten.",
    areaType: "Övrigt",
    initiativeType: "Verksamhet",
  },
  {
    title: "BK Häcken + Göteborgs Stadsmission",
    actor: "BK Häcken + Göteborgs Stadsmission",
    area: "Göteborg (bred social hållbarhet)",
    format: "Långsiktigt partnerskap – aktiviteter/engagemang för människor i utsatthet",
    purpose: "Social inkludering med fotbollens och föreningslivets kraft.",
    areaType: "Hisingen",
    initiativeType: "Verksamhet",
  },
];

const areaFilters = ["Alla", "Hisingen", "Nordost", "Sydväst", "Övrigt"] as const;
const typeFilters = ["Alla", "Verksamhet", "Plats", "Koordination", "Stöd"] as const;

const Index = () => {
  const [areaFilter, setAreaFilter] = useState<string>("Alla");
  const [typeFilter, setTypeFilter] = useState<string>("Alla");

  const filteredInitiatives = initiatives.filter((i) => {
    const matchesArea = areaFilter === "Alla" || i.areaType === areaFilter;
    const matchesType = typeFilter === "Alla" || i.initiativeType === typeFilter;
    return matchesArea && matchesType;
  });
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

      {/* Section: Kommitté 2026 – fokus & avgränsning */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader 
            id="fokus2026" 
            title="Kommitté 2026 – fokus & avgränsning" 
            subtitle="Från referensgrupp till kommitté (styrelsebeslut)"
          />
          <ul className="mb-8 space-y-4">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
              <span className="text-foreground font-medium">
                Fokus 2026: endast polisens utsatta områden
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
              <span className="text-foreground font-medium">
                Arbeta tillsammans med föreningar
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
              <span className="text-foreground font-medium">
                Föreningarnas nytta i centrum
              </span>
            </li>
          </ul>
          <div className="rounded-lg border border-border bg-background p-5">
            <h3 className="mb-3 text-lg font-semibold text-foreground">Syfte med visionsarbetet</h3>
            <ul className="space-y-2 text-foreground/90">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>Skapa en gemensam riktning för Fotbollsnyttan i Göteborg</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>Tydliggöra arbetssätt, ansvar och prioriteringar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>Stärka föreningarnas nytta och samhällsroll</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section: Gemensamma mål */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader 
            id="gemensamma-mal" 
            title="Gemensamma mål (En bättre väg + VP)" 
          />
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-foreground">Övergripande inriktning</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-foreground">Inkludering – alla ska kunna delta</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-foreground">Föreningsutveckling – stärka kapacitet och organisation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-foreground">Meningsfull fritid – skapa trygga mötesplatser</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-foreground">Hållbarhet – långsiktigt stabil verksamhet</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-foreground">Samverkan – mellan föreningar, kommun och näringsliv</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4 text-lg font-semibold text-foreground">Vi strävar efter att öka</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">↑</span>
                  <span className="text-foreground">Ideella ledare i föreningarna</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">↑</span>
                  <span className="text-foreground">Utbildade ledare</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">↑</span>
                  <span className="text-foreground">Flickor och pojkar som spelar fotboll</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">↑</span>
                  <span className="text-foreground">Välorganiserade föreningar</span>
                </li>
              </ul>
            </div>
          </div>
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
          
          {/* Subsection: Andra pågående insatser */}
          <div className="mt-16">
            <h3 className="mb-2 text-xl font-semibold text-foreground">
              Andra pågående fotbollsbaserade samhällsinsatser i Göteborg (2026)
            </h3>
            <p className="mb-6 text-muted-foreground">
              Här är exempel på insatser som pågår och som berör samma målgrupper/områden. 
              <span className="italic"> (Exempel från öppna källor – kompletteras vid behov.)</span>
            </p>
            
            {/* Filter chips */}
            <div className="mb-6 flex flex-wrap gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground">Område:</span>
                {areaFilters.map((filter) => (
                  <Badge
                    key={filter}
                    variant={areaFilter === filter ? "default" : "outline"}
                    className="cursor-pointer transition-colors"
                    onClick={() => setAreaFilter(filter)}
                  >
                    {filter}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground">Typ:</span>
                {typeFilters.map((filter) => (
                  <Badge
                    key={filter}
                    variant={typeFilter === filter ? "default" : "outline"}
                    className="cursor-pointer transition-colors"
                    onClick={() => setTypeFilter(filter)}
                  >
                    {filter}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Initiative cards grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredInitiatives.map((initiative) => (
                <InitiativeCard key={initiative.title} initiative={initiative} />
              ))}
            </div>
            
            {filteredInitiatives.length === 0 && (
              <p className="text-center text-muted-foreground py-8">
                Inga insatser matchar valda filter.
              </p>
            )}
          </div>
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

      {/* Section 5B: Styrning & mötesrytm */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader id="motesrytm" title="Styrning & mötesrytm" />
          
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <CalloutBox title="Arbetssätt">
                Varje arbetsgrupp tar fram en MÅLBILD (önskat läge) och driver arbetet i en enkel rytm:
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>Arbetsgruppsträff varannan vecka (60 min)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>Återsamling var 8:e vecka (90 min) – synka riktning, prioriteringar och beroenden</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>Minst två arbetsmöten mellan varje kommittémöte</span>
                  </li>
                </ul>
                <p className="mt-3 font-medium">
                  Varje möte ska avslutas med: 3 beslut/next actions + ansvarig + datum.
                </p>
              </CalloutBox>
            </div>
            
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="mb-4 text-lg font-semibold text-foreground">Kommittémöten 2026</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4 rounded-lg bg-accent p-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">26/1</span>
                  <span className="text-foreground font-medium">Uppstart</span>
                </div>
                <div className="flex items-center gap-4 rounded-lg bg-card p-3 border border-border">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">16/2</span>
                  <span className="text-foreground">kl 12.00–13.30</span>
                </div>
                <div className="flex items-center gap-4 rounded-lg bg-card p-3 border border-border">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">13/4</span>
                  <span className="text-foreground">kl 12.00–13.30</span>
                </div>
                <div className="flex items-center gap-4 rounded-lg bg-card p-3 border border-border">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">15/6</span>
                  <span className="text-foreground">kl 12.00–13.30</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mindmap */}
          <div className="mt-10">
            <h3 className="mb-4 text-lg font-semibold text-foreground">Översikt: Struktur EBV / Fotbollsnyttan</h3>
            <div className="overflow-hidden rounded-lg border border-border bg-background p-2">
              <img 
                src={strukturMindmap} 
                alt="Mindmap över struktur för EBV och Fotbollsnyttan med tre arbetsgrupper: Partners & ansökningar, Koordination och Idrottspolitik" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: En bättre väg */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader 
            id="enbattrevag" 
            title="En bättre väg" 
            subtitle="Riktad fotbollssatsning i utsatta områden – i samverkan med SvFF"
          />
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-foreground">Syfte</h3>
              <p className="mb-6 text-foreground/90">
                En bättre väg är Svenska Fotbollförbundets satsning för att stärka fotbollen i prioriterade områden. 
                Genom att koppla ihop lokala föreningar med resurser och nyckelroller skapas förutsättningar för 
                en starkare föreningsnärvaro.
              </p>
              
              <h3 className="mb-4 text-lg font-semibold text-foreground">Koppling till Fotbollsnyttan</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-foreground">
                    Fotbollsnyttan fungerar som lokalt ramverk och uppföljningsmodell
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-foreground">
                    Resurser från En bättre väg kan knytas till våra sex mål
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-foreground">
                    Gemensam satsning på att minska trösklar och öka deltagande
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4 text-lg font-semibold text-foreground">Mål 2026–2027</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">1</span>
                  <span className="text-foreground">
                    Starkare föreningsnärvaro i områdena
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">2</span>
                  <span className="text-foreground">
                    Fler barn och ungdomar i organiserad fotboll
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">3</span>
                  <span className="text-foreground">
                    Fler ledare från lokalområdena
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">4</span>
                  <span className="text-foreground">
                    Bättre samverkan mellan föreningar, kommun och näringsliv
                  </span>
                </li>
              </ul>
              
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Ansökan:</span> Via fotbollens kanal lokalt i samarbete med GFF och RF-SISU.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

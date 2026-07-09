import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import AreaShell from "@/components/blocks/AreaShell";
import ActivityListBlock from "@/components/blocks/ActivityListBlock";
import WorkMethodBlock from "@/components/blocks/WorkMethodBlock";
import NextPageCTA from "@/components/blocks/NextPageCTA";
import { AmbientField } from "@/components/three";
import { getArea } from "@/content/areas";
import { PRIMARY_ASSIGNMENTS } from "@/content/primaryAssignments";
import {
  CORE_ACTIVITIES,
  OCCASIONAL_ACTIVITIES,
  EXTENDED_ACTIVITIES,
} from "@/content/activities";
import { EditorialHero, ChapterSection, PitchField } from "@/components/editorial";

const METHOD_STEPS = [
  {
    title: "Planering",
    description:
      "Vilka utvecklingsdialoger, styrelseavstämningar och observationer ligger i kalendern – och varför.",
  },
  {
    title: "Genomförande",
    description:
      "Närvaro i rätt forum: med föreningens utvecklare, styrelsefunktioner eller på plats i verksamheten.",
  },
  { title: "Dokumentation", description: "Kort notering i systemet så att det går att följa över tid." },
  { title: "Reflektion", description: "Vad såg vi, vad tar vi med oss, vad justerar vi?" },
];

const Arbetsuppgifter = () => {
  const area = getArea("uppdrag");
  const subpage = area.subpages.find((s) => s.slug === "arbetsuppgifter")!;
  const next = PRIMARY_ASSIGNMENTS[0];

  return (
    <div className="min-h-screen bg-background">
      <GlobalNav />
      <AreaShell
        area={area}
        subtitle={subpage.title}
        hero={
          <EditorialHero
            eyebrow={`Område ${area.number} · ${area.kicker}`}
            titleTop="Arbetsuppgifter i"
            titleGold="detalj"
            lead={subpage.heroLead}
            backdrop={<PitchField />}
          />
        }
      >
        <ChapterSection
          id="loepande-navet"
          number="01"
          eyebrow="Det löpande navet"
          title="Det som görs konsekvent"
          lead="Två arbetsformer som är navet i uppdraget. Det är här relationen till föreningens nyckelpersoner byggs."
        >
          <ActivityListBlock activities={CORE_ACTIVITIES} columns={2} />
        </ChapterSection>

        <div className="relative isolate">
          <div className="absolute inset-0 -z-10">
            <AmbientField className="opacity-50" />
          </div>
          <ChapterSection
            id="riktade-observationer"
            number="02"
            eyebrow="När det passar"
            title="Riktade observationer"
            lead="Träningsbesök och matchbesök görs när det finns ett konkret utvecklingsskäl — inte som rutin. Värdet ligger i att de är medvetna, förankrade och leder till nästa steg."
          >
            <ActivityListBlock activities={OCCASIONAL_ACTIVITIES} columns={2} />
          </ChapterSection>
        </div>

        <ChapterSection
          id="laengre-insatser"
          number="03"
          eyebrow="Fördjupning"
          title="Längre insatser"
          lead="Arbete som sträcker sig över säsong eller flera år. Ofta i förlängningen av dialogen med utvecklare, styrelse och andra nyckelpersoner."
        >
          <ActivityListBlock activities={EXTENDED_ACTIVITIES} columns={3} />
        </ChapterSection>

        <ChapterSection
          id="arbetsrytm"
          number="04"
          eyebrow="Process"
          title="Hur varje insats rullar"
          lead="Samma arbetsrytm oavsett om det gäller föreningssamtal, styrelsebeslut eller spelarutbildning."
        >
          <WorkMethodBlock steps={METHOD_STEPS} />
        </ChapterSection>
      </AreaShell>
      <NextPageCTA next={next} label="Första huvuduppdraget" />
      <Footer />
    </div>
  );
};

export default Arbetsuppgifter;

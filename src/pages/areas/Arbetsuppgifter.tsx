import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import AreaShell from "@/components/blocks/AreaShell";
import SectionBlock from "@/components/blocks/SectionBlock";
import ActivityListBlock from "@/components/blocks/ActivityListBlock";
import WorkMethodBlock from "@/components/blocks/WorkMethodBlock";
import NextPageCTA from "@/components/blocks/NextPageCTA";
import { getArea } from "@/content/areas";
import { PRIMARY_ASSIGNMENTS } from "@/content/primaryAssignments";
import { CORE_ACTIVITIES, EXTENDED_ACTIVITIES } from "@/content/activities";

const METHOD_STEPS = [
  { title: "Planering", description: "Vilka besök, samtal och träffar ligger i kalendern – och varför." },
  { title: "Genomförande", description: "Närvaro där arbetet faktiskt sker." },
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
      <AreaShell area={area} subtitle={subpage.title}>
        <SectionBlock
          eyebrow="Kärnuppgifter"
          title="Det som görs löpande"
          lead="Fyra arbetsformer som återkommer. Det är här relationen till föreningen byggs."
        >
          <ActivityListBlock activities={CORE_ACTIVITIES} columns={2} />
        </SectionBlock>

        <SectionBlock
          variant="muted"
          eyebrow="Fördjupning"
          title="Längre insatser"
          lead="Arbete som sträcker sig över säsong eller flera år. Ofta i förlängningen av kärnuppgifterna."
        >
          <ActivityListBlock activities={EXTENDED_ACTIVITIES} columns={3} />
        </SectionBlock>

        <SectionBlock
          eyebrow="Process"
          title="Hur varje insats rullar"
          lead="Samma arbetsrytm oavsett om det är ett träningsbesök eller en spelarutbildningsprocess."
        >
          <WorkMethodBlock steps={METHOD_STEPS} />
        </SectionBlock>
      </AreaShell>
      <NextPageCTA next={next} label="Första huvuduppdraget" />
      <Footer />
    </div>
  );
};

export default Arbetsuppgifter;

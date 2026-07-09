import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import AreaShell from "@/components/blocks/AreaShell";
import PartnerFundingBlock from "@/components/blocks/PartnerFundingBlock";
import PartnerMapBlock from "@/components/blocks/PartnerMapBlock";
import NextPageCTA from "@/components/blocks/NextPageCTA";
import { AmbientField } from "@/components/three";
import { getArea } from "@/content/areas";
import { PRIMARY_ASSIGNMENTS } from "@/content/primaryAssignments";
import { EditorialHero, ChapterSection, PitchField } from "@/components/editorial";

const Partners = () => {
  const area = getArea("uppdrag");
  const subpage = area.subpages.find((s) => s.slug === "partners")!;
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
            titleTop="Partners och"
            titleGold="ansvarskedja"
            lead={subpage.heroLead}
            backdrop={<PitchField />}
          />
        }
      >
        <ChapterSection
          id="fyra-roller"
          number="01"
          eyebrow="Fyra roller"
          title="Partnerskap som blir verklig hjälp"
          lead="Här syns vem som bidrar med riktning, pengar, kunskap eller genomförande — och hur stödet når föreningarna."
        >
          <PartnerFundingBlock />
        </ChapterSection>

        <div className="relative isolate">
          <div className="absolute inset-0 -z-10">
            <AmbientField className="opacity-50" />
          </div>
          <ChapterSection
            id="ansvarskedjan"
            number="02"
            eyebrow="Ansvarskedjan"
            title="Vem gör vad i vardagen"
            lead="Den praktiska ansvarskedjan visar vem som sätter riktningen, vem som stöttar och vem som gör jobbet lokalt."
          >
            <PartnerMapBlock />
          </ChapterSection>
        </div>
      </AreaShell>
      <NextPageCTA next={next} label="Första huvuduppdraget" />
      <Footer />
    </div>
  );
};

export default Partners;

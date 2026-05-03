import { GraduationCap, Trophy, Layers } from "lucide-react";
import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import SubpageShell from "@/components/blocks/SubpageShell";
import PageWithDepth from "@/components/blocks/PageWithDepth";
import ExpandableBlock from "@/components/blocks/ExpandableBlock";
import AsideRelated from "@/components/blocks/AsideRelated";
import NextPageCTA from "@/components/blocks/NextPageCTA";
import { getPrimaryAssignment } from "@/content/primaryAssignments";
import type { TocSection } from "@/components/blocks/TableOfContents";

const SECTIONS: TocSection[] = [
  { id: "vision", title: "Världsledande spelarutbildning", level: 2 },
  { id: "sup", title: "Spelarutbildningsplanen (SUP)", level: 2 },
  { id: "fotbollslyftet", title: "Fotbollslyftet", level: 2 },
  { id: "futsal", title: "Futsal", level: 2 },
  { id: "drop-out", title: "Drop out & spelarkarusellen", level: 2 },
];

const Spelarutbildning = () => {
  const next = getPrimaryAssignment("foreningslyftet");

  return (
    <div className="min-h-screen bg-background">
      <GlobalNav />
      <SubpageShell
        breadcrumbs={[
          { label: "Uppdrag", href: "/uppdrag" },
          { label: "Spelarutbildning" },
        ]}
        kicker="Våra spelare · Fördjupning"
        icon={GraduationCap}
        title="Spelarutbildning"
        lead="Världsledande spelarutbildning är ingen slogan — det är en arbetslogik som ska gå att se på en träning."
        description="SvFF:s spelarutbildningsplan, Fotbollslyftet, futsal och arbetet med drop out. En sammanhållen sektion för det som handlar om spelaren själv."
        metaDescription="Spelarutbildning i GFF — SvFF:s spelarutbildningsplan (SUP), Fotbollslyftet med FU IF och zonutvecklare, futsal och arbete mot drop out."
      >
        <PageWithDepth
          toc={SECTIONS}
          aside={
            <AsideRelated
              kicker="Hänger ihop med"
              title="Vidare läsning"
              items={[
                {
                  label: "Föreningslyftet",
                  href: "/foreningsutveckling",
                  hint: "Strukturen som bär utbildningen",
                },
                {
                  label: "FU Skola",
                  href: "/fu-skola",
                  hint: "Skolan som första kontakt med fotbollen",
                },
                {
                  label: "Jämställdhet & trygghet",
                  href: "/foreningsutveckling/jamstalldhet-och-trygghet",
                  hint: "Värdegrund som genomsyrar utbildningen",
                },
                {
                  label: "Arbetsuppgifter",
                  href: "/uppdrag/arbetsuppgifter",
                  hint: "Det som görs i vardagen",
                },
              ]}
            />
          }
        >
          <ExpandableBlock
            id="vision"
            kicker="Visionen"
            title="Världsledande spelarutbildning — för alla"
            defaultOpen
            className="animate-fade-up animate-delay-100"
          >
            <p className="text-lead">
              SvFF:s strategi pekar på en världsledande spelarutbildning för
              alla spelare — från bredd till elit. Det är en målbild som ska
              bli synlig i vardagen, inte bara i pärmen.
            </p>
            <p className="mt-4">
              I GFF:s verksamhetsplan 2026–27 konkretiseras visionen: fler
              föreningar med fotbollsutvecklare i förening (FU IF) och
              zonutvecklare, implementering av Fotbollslyftet Vision och
              fortsatt införande av utbildningskrav för ledare.
            </p>
          </ExpandableBlock>

          <ExpandableBlock
            id="sup"
            kicker="SUP"
            title="Spelarutbildningsplanen i praktiken"
            defaultOpen
            wide
            className="animate-fade-up animate-delay-150"
          >
            <p>
              Spelarutbildningsplanen (SUP) är SvFF:s gemensamma karta för
              spelarens resa. Värdet uppstår först när planen översätts till
              träningsupplägg, ledardialoger och säsongsplanering på klubbnivå.
            </p>
            <div className="mt-6 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3 not-prose">
              {[
                {
                  icon: GraduationCap,
                  title: "Implementering",
                  description:
                    "Från dokument till träningsyta. Stöd till föreningar att översätta SUP i sin vardag.",
                },
                {
                  icon: Layers,
                  title: "Utbildningstrappa",
                  description:
                    "SvFF D, UEFA C, UEFA B, futsal C, målvaktsutbildningar — en samlad utbildningstrappa för ledare.",
                },
                {
                  icon: Trophy,
                  title: "Uppföljning",
                  description:
                    "Antal föreningar med implementerad SUP följs i verksamhetsplanen.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="bg-card p-6">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-serif text-base font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-small leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </ExpandableBlock>

          <ExpandableBlock
            id="fotbollslyftet"
            kicker="Fotbollslyftet"
            title="FU IF och zonutvecklare"
            defaultOpen={false}
            className="animate-fade-up animate-delay-200"
          >
            <p>
              Fotbollslyftet är GFF:s och SvFF:s satsning på att anställa och
              utbilda fotbollsutvecklare i förening (FU IF) och zonutvecklare
              (ZU). Det är en strukturell investering i lokala personer som
              kan bära spelarutbildningen över tid.
            </p>
            <ul className="mt-5 space-y-2 text-base leading-relaxed text-foreground/85" role="list">
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-primary" />
                <span>Antal FU IF med utbildning ska öka.</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-primary" />
                <span>Antal föreningar som arbetar med FU i förening ska öka.</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-primary" />
                <span>Visionen för Fotbollslyftet — inklusive zonutvecklare — ska implementeras lokalt.</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-primary" />
                <span>Större föreningar samarbetar med mindre i samma område.</span>
              </li>
            </ul>
          </ExpandableBlock>

          <ExpandableBlock
            id="futsal"
            kicker="Futsal"
            title="Futsal som del av helheten"
            defaultOpen={false}
          >
            <p>
              Verksamhetsplanen lyfter futsal som en egen pelare. GFF arbetar
              för mer resurser till futsal och en regional lösning för
              futsaltävlingar — med egen spelarutbildningsplan och
              tävlingsstruktur.
            </p>
            <p className="mt-4">
              Futsal är inte ett komplement till elvamannafotbollen — det är
              en parallell väg in i fotbollsfamiljen som passar olika
              spelartyper och olika säsonger. På sajten kommer futsal lyftas
              fram med egen rättighet, inte som notis.
            </p>
          </ExpandableBlock>

          <ExpandableBlock
            id="drop-out"
            kicker="Drop out"
            title="Spelarkarusellen och de som slutar"
            defaultOpen={false}
          >
            <p>
              Verksamhetsplanen pekar på att antalet lag i seriespel i drop
              out-zonen ska öka — och att GFF ska arbeta för att förhindra
              kollaps i föreningar.
            </p>
            <p className="mt-4">
              Insatserna kring drop out hänger ihop med övriga uppdrag:
              integrationssammandrag, skolsamverkan via FU Skola,
              fritidsverksamhet och unga ledarskapsprogram. Det är genom
              broarna mellan skola, förening och samhälle som de som riskerar
              att försvinna fångas upp.
            </p>
          </ExpandableBlock>
        </PageWithDepth>
      </SubpageShell>
      <NextPageCTA next={next} label="Vidare till uppdragen" />
      <Footer />
    </div>
  );
};

export default Spelarutbildning;

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
        lead="Världsledande spelarutbildning är ingen slogan — det ska märkas på träningen."
        description="SUP, Fotbollslyftet, futsal och arbetet med spelare som riskerar att sluta."
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
                  hint: "Föreningen som bär utbildningen",
                },
                {
                  label: "FU Skola",
                  href: "/fu-skola",
                  hint: "Skolan som första kontakt med fotbollen",
                },
                {
                  label: "Jämställdhet & trygghet",
                  href: "/foreningsutveckling/jamstalldhet-och-trygghet",
                  hint: "Trygg miljö runt spelaren",
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
              Spelarutbildning ska märkas på planen: i övningar, samtal och
              hur ledare möter spelare.
            </p>
            <p className="mt-4">
              GFF följer detta genom fler FU IF, zonutvecklare och tydligare
              utbildningskrav för ledare.
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
              SUP är kartan. Den blir värdefull först när den syns i
              träningsupplägg, ledarsamtal och säsongsplanering.
            </p>
            <div className="mt-6 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3 not-prose">
              {[
                {
                  icon: GraduationCap,
                  title: "Från plan till träning",
                  description:
                    "Stöd till föreningar att göra SUP synlig i vardagen.",
                },
                {
                  icon: Layers,
                  title: "Utbildningstrappa",
                  description:
                    "En tydlig väg för ledare: från SvFF D till mer specialiserade utbildningar.",
                },
                {
                  icon: Trophy,
                  title: "Uppföljning",
                  description:
                    "Antal föreningar som använder SUP följs upp.",
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
              Fotbollslyftet bygger på lokala personer som kan bära
              spelarutbildningen över tid.
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
                <span>Fotbollslyftet och zonutvecklare ska fungera lokalt.</span>
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
            title="Futsal som egen väg"
            defaultOpen={false}
          >
            <p>
              Futsal är en egen väg in i fotbollen, med egna tävlingar och egen
              spelarutbildning.
            </p>
            <p className="mt-4">
              Det passar andra spelartyper, andra säsonger och andra vägar in.
            </p>
          </ExpandableBlock>

          <ExpandableBlock
            id="drop-out"
            kicker="Drop out"
            title="Spelarkarusellen och de som slutar"
            defaultOpen={false}
          >
            <p>
              Fler spelare ska vilja fortsätta. Fler lag ska hålla ihop.
            </p>
            <p className="mt-4">
              Därför hänger arbetet ihop med FU Skola, fritidsverksamhet och
              unga ledare. Broarna fångar upp dem som annars försvinner.
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

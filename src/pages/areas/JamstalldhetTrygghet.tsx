import { ShieldCheck, Scale, Users, Flag } from "lucide-react";
import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import SubpageShell from "@/components/blocks/SubpageShell";
import PageWithDepth from "@/components/blocks/PageWithDepth";
import ExpandableBlock from "@/components/blocks/ExpandableBlock";
import AsideRelated from "@/components/blocks/AsideRelated";
import GoalsBlock from "@/components/blocks/GoalsBlock";
import NextPageCTA from "@/components/blocks/NextPageCTA";
import { JAMSTALLDHET_GOALS } from "@/content/goals";
import { getPrimaryAssignment } from "@/content/primaryAssignments";
import type { TocSection } from "@/components/blocks/TableOfContents";

const SECTIONS: TocSection[] = [
  { id: "varfor", title: "Varför det spelar roll", level: 2 },
  { id: "jamstalldhet", title: "Jämställdhet i siffror", level: 2 },
  { id: "trygg-fotboll", title: "Trygg fotboll & matchklimat", level: 2 },
  { id: "domarlyftet", title: "Domarlyftet", level: 2 },
  { id: "natverk", title: "Nätverk för kvinnor", level: 2 },
  { id: "barnperspektiv", title: "Barnens perspektiv", level: 2 },
];

const JamstalldhetTrygghet = () => {
  const next = getPrimaryAssignment("foreningslyftet");

  return (
    <div className="min-h-screen bg-background">
      <GlobalNav />
      <SubpageShell
        breadcrumbs={[
          { label: "Föreningslyftet", href: "/foreningsutveckling" },
          { label: "Jämställdhet & trygghet" },
        ]}
        kicker="Värdegrund · Genomgående tema"
        icon={ShieldCheck}
        title="Jämställdhet och trygghet"
        lead="Barn och ledare stannar där miljön är trygg, rättvis och värd att komma tillbaka till."
        description="Mål, program och nätverk som gör fotbollen tryggare och mer jämställd."
        metaDescription="Jämställdhet och trygghet i GFF — 50/50-representation, fler kvinnliga domare, Trygg fotboll, matchklimatpolicy, Domarlyftet och Styrelselyftet."
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
                  hint: "Arbetssätt och kultur i föreningarna",
                },
                {
                  label: "En bättre väg",
                  href: "/en-battre-vag",
                  hint: "Riktat stöd där behoven är stora",
                },
                {
                  label: "FU Skola",
                  href: "/fu-skola",
                  hint: "Bron mellan skola och förening",
                },
                {
                  label: "Spelarutbildning",
                  href: "/uppdrag/spelarutbildning",
                  hint: "SUP, Fotbollslyftet och futsal",
                },
              ]}
            />
          }
        >
          <ExpandableBlock
            id="varfor"
            kicker="Poängen"
            title="Varför det spelar roll"
            defaultOpen
            className="animate-fade-up animate-delay-100"
          >
            <p className="text-lead">
              Trygghet och jämställdhet är inte sidospår. De avgör om barn,
              ledare och domare vill vara kvar.
            </p>
            <p className="mt-4">
              Därför finns arbetet både i Föreningslyftet, En bättre väg och
              FU Skola.
            </p>
          </ExpandableBlock>

          <ExpandableBlock
            id="jamstalldhet"
            kicker="Mål"
            title="Jämställdhet i siffror"
            defaultOpen
            wide
            className="animate-fade-up animate-delay-150"
          >
            <p>
              Målen gör arbetet lättare att följa: representation, rekrytering
              och tryggare miljöer.
            </p>
            <div className="mt-6 not-prose">
              <GoalsBlock goals={JAMSTALLDHET_GOALS} columns={4} />
            </div>
          </ExpandableBlock>

          <ExpandableBlock
            id="trygg-fotboll"
            kicker="Trygg fotboll"
            title="Matchklimat och trygg miljö"
            defaultOpen={false}
            wide
            className="animate-fade-up animate-delay-200"
          >
            <p>
              Ett gott matchklimat är en del av spelet. Matchvärdar, guider,
              föräldramaterial och tydliga förväntningar gör miljön tryggare.
            </p>
            <div className="mt-6 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3 not-prose">
              {[
                {
                  icon: Scale,
                  kicker: "Halvering",
                  title: "Disciplinnämndens ärenden",
                  description:
                    "Mål: halvera antalet ärenden i DPN under planperioden.",
                },
                {
                  icon: ShieldCheck,
                  kicker: "Inga avbrutna",
                  title: "Stoppa ordningsstörningar",
                  description:
                    "Förhindra att matcher avbryts på grund av ordningsstörningar.",
                },
                {
                  icon: Users,
                  kicker: "Vuxennärvaro",
                  title: "Föräldrar och ledare",
                  description:
                    "Material och tydliga förväntningar på vuxna runt planen.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="bg-card p-6">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <p className="mt-4 font-mono text-micro uppercase tracking-wider text-primary">
                      {item.kicker}
                    </p>
                    <h3 className="mt-1 font-serif text-base font-semibold text-foreground">
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
            id="domarlyftet"
            kicker="Domarlyftet"
            title="Rekrytera, utbilda och behålla domare"
            defaultOpen={false}
          >
            <p>
              Fler domare stannar när de får stöd, mentorskap och bättre
              matchmiljö.
            </p>
            <ul className="mt-5 space-y-2.5 text-base leading-relaxed text-foreground/85" role="list">
              {[
                "Tränar- och domarutbildningar — SvFF D, UEFA C, UEFA B, futsal C, målvaktsutbildningar.",
                "Fadderprogram för nybörjardomare som tar emot de första matcherna.",
                "Mentorskap och nätverk för aktiva domare.",
                "90 % av nuvarande kvinnliga domare ska fortsätta.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <Flag
                    className="mt-1 h-3.5 w-3.5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ExpandableBlock>

          <ExpandableBlock
            id="natverk"
            kicker="Nätverk"
            title="Styrelselyftet och nätverk för kvinnor"
            defaultOpen={false}
          >
            <p>
              Kvinnliga ledare behöver utbildning, nätverk och vägar in i
              styrelserummen.
            </p>
            <p className="mt-4">
              Målet är inte bara en bättre siffra. Det är ledarskap som håller
              över tid.
            </p>
          </ExpandableBlock>

          <ExpandableBlock
            id="barnperspektiv"
            kicker="Barnperspektivet"
            title="Spela – Lek – Lär och Barnkonventionen"
            defaultOpen={false}
          >
            <p>
              Barnkonventionen och Spela – Lek – Lär påminner vuxna om vad
              fotbollen är till för.
            </p>
            <p className="mt-4">
              I praktiken betyder det att åldersanpassning, glädje och
              utveckling går före resultat — och att vuxna runt fotbollen
              har ett eget ansvar att läsa av och agera när miljön inte
              håller.
            </p>
          </ExpandableBlock>
        </PageWithDepth>
      </SubpageShell>
      <NextPageCTA next={next} label="Tillbaka till Föreningslyftet" />
      <Footer />
    </div>
  );
};

export default JamstalldhetTrygghet;

import { ArrowRight } from "lucide-react";
import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import AreaShell from "@/components/blocks/AreaShell";
import PartnerStrip from "@/components/blocks/PartnerStrip";
import GlowLink from "@/components/blocks/GlowLink";
import { StaggerGroup, StaggerItem } from "@/components/motion";
import { EditorialHero, ChapterSection, PitchField } from "@/components/editorial";
import { getArea } from "@/content/areas";
import { PRIMARY_ASSIGNMENTS } from "@/content/primaryAssignments";

/**
 * Sekundär kontextsida. De två primära uppdragen En bättre väg och FU Skola
 * har egna dedikerade sidor – den här sidan binder ihop dem berättelsemässigt
 * för den som vill förstå helheten.
 */
const SkolaSamverkan = () => {
  const area = getArea("skola-samverkan");
  const relevant = PRIMARY_ASSIGNMENTS.filter(
    (p) => p.id === "en-battre-vag" || p.id === "fu-skola",
  );

  return (
    <div className="min-h-screen bg-background">
      <GlobalNav />
      <AreaShell
        area={area}
        hero={
          <EditorialHero
            eyebrow={`Område ${area.number} · ${area.kicker}`}
            titleTop="Skola,"
            titleGold="förening och sociala satsningar"
            lead={
              <>
                {area.heroLead}
                <span className="mt-3 block text-small">{area.heroSupport}</span>
              </>
            }
            backdrop={<PitchField />}
          />
        }
      >
        <ChapterSection
          id="snabb-karta"
          number="01"
          eyebrow="Snabb karta"
          title="Skola, förening och samhälle"
          lead="En bättre väg visar var behoven är störst. FU Skola visar hur skolan blir vägen in. Här ser du hur allt hänger ihop."
        >
          <StaggerGroup className="mb-8 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-3">
            <StaggerItem className="bg-card p-6">
              <article>
                <p className="font-mono text-micro uppercase tracking-wider text-primary">
                  Riktat område
                </p>
                <p className="mt-2 text-small leading-relaxed text-muted-foreground">
                  Behoven är störst. Då hör arbetet hemma i En bättre väg.
                </p>
              </article>
            </StaggerItem>
            <StaggerItem className="bg-card p-6">
              <article>
                <p className="font-mono text-micro uppercase tracking-wider text-primary">
                  Skolan som bro
                </p>
                <p className="mt-2 text-small leading-relaxed text-muted-foreground">
                  Skolan är vägen in. Då hör arbetet hemma i FU Skola.
                </p>
              </article>
            </StaggerItem>
            <StaggerItem className="bg-card p-6">
              <article>
                <p className="font-mono text-micro uppercase tracking-wider text-primary">
                  Samverkansbild
                </p>
                <p className="mt-2 text-small leading-relaxed text-muted-foreground">
                  Vem gör vad? Här syns kedjan mellan skola, förening och stöd.
                </p>
              </article>
            </StaggerItem>
          </StaggerGroup>

          <StaggerGroup as="ul" className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {relevant.map((p) => {
              const Icon = p.icon;
              return (
                <StaggerItem as="li" key={p.id}>
                  <GlowLink
                    to={p.path}
                    className="group relative flex h-full flex-col overflow-hidden rounded-md border border-border bg-card p-7 transition-colors hover:border-primary/40"
                  >
                    <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <p className="mb-2 font-mono text-micro uppercase tracking-wider text-muted-foreground">
                      Huvuduppdrag · {p.kicker}
                    </p>
                    <h3 className="mb-3 text-subhead font-semibold text-foreground group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="mb-6 text-small text-foreground/75">{p.lead}</p>
                    <span className="mt-auto inline-flex items-center gap-2 font-mono text-micro uppercase tracking-wider text-primary">
                      Gå till uppdraget
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </GlowLink>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </ChapterSection>

        <div className="relative isolate">
          <div className="absolute inset-0 -z-10">
            <PitchField particles={false} />
          </div>
          <ChapterSection
            id="alla-led"
            number="02"
            eyebrow="Tillsammans"
            title="Alla led behövs"
            lead="Barnen märker skillnad först när skola, förening, kommun, förbund och civilsamhälle drar åt samma håll."
          >
            <PartnerStrip
              ids={["gff", "svff", "rf-sisu", "goteborgs-stad", "foreningar", "skolor", "gis"]}
            />
          </ChapterSection>
        </div>
      </AreaShell>

      <Footer />
    </div>
  );
};

export default SkolaSamverkan;

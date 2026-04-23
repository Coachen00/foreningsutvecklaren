import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import AreaShell from "@/components/blocks/AreaShell";
import SectionBlock from "@/components/blocks/SectionBlock";
import PartnerStrip from "@/components/blocks/PartnerStrip";
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
      <AreaShell area={area}>
        <SectionBlock
          eyebrow="Två huvuduppdrag"
          title="Här möts skola, samhälle och fotboll"
          lead="Två av de tre primära uppdragen har sin hemvist här: En bättre väg och FU Skola. Sidan ger sammanhanget – uppdragen har sina egna sidor."
        >
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2" role="list">
            {relevant.map((p) => {
              const Icon = p.icon;
              return (
                <li key={p.id}>
                  <Link
                    to={p.path}
                    className="group flex h-full flex-col rounded-md border border-border bg-card p-7 transition-colors hover:border-primary/40"
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
                  </Link>
                </li>
              );
            })}
          </ul>
        </SectionBlock>

        <SectionBlock
          variant="muted"
          eyebrow="Samverkan"
          title="Alla led behövs"
          lead="Det här arbetet fungerar bara när skola, förening, kommun, förbund och civilsamhälle drar åt samma håll."
        >
          <PartnerStrip
            ids={["gff", "svff", "rf-sisu", "goteborgs-stad", "foreningar", "skolor", "gis"]}
          />
        </SectionBlock>
      </AreaShell>
      <Footer />
    </div>
  );
};

export default SkolaSamverkan;

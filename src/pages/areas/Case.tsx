import { Link } from "react-router-dom";
import { GraduationCap, ArrowRight, PlayCircle, HelpCircle } from "lucide-react";
import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import SubpageShell from "@/components/blocks/SubpageShell";
import SectionBlock from "@/components/blocks/SectionBlock";
import NextPageCTA from "@/components/blocks/NextPageCTA";
import { CASES } from "@/content/cases";

const Case = () => (
  <div className="min-h-screen bg-background">
    <GlobalNav />
    <SubpageShell
      breadcrumbs={[{ label: "Case" }]}
      kicker="Lärande · Case"
      icon={GraduationCap}
      title="Case ur föreningsutvecklingen"
      lead="Korta, verkliga exempel på hur föreningar utvecklats — i text, film och ett quiz som befäster lärandet."
      description="Varje case tar några minuter. Titta, läs och testa dig själv."
      metaDescription="Case ur föreningsutvecklingen: korta exempel i text och film, avslutade med ett quiz. Lär av hur andra föreningar gått från problem till struktur och kultur."
    >
      <SectionBlock
        eyebrow="Välj ett case"
        title="Att lära av"
        lead="Klicka på ett case för att läsa, se filmen och göra quizet."
      >
        <ul
          className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2"
          role="list"
        >
          {CASES.map((c) => (
            <li key={c.slug} className="bg-card">
              <Link
                to={`/case/${c.slug}`}
                className="group flex h-full min-h-[14rem] flex-col p-6 transition-colors hover:bg-primary-subtle/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:p-7"
              >
                <p className="font-mono text-micro uppercase tracking-wider text-primary">
                  {c.kicker}
                </p>
                <h3 className="mt-3 font-serif text-xl font-semibold leading-tight text-foreground">
                  {c.title}
                </h3>
                <p className="mt-3 text-small leading-relaxed text-muted-foreground">
                  {c.summary}
                </p>
                <span className="mt-4 flex items-center gap-4 font-mono text-micro uppercase tracking-wider text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <PlayCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    Film
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <HelpCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    {c.quiz.length} {c.quiz.length === 1 ? "fråga" : "frågor"}
                  </span>
                </span>
                <span className="mt-auto inline-flex items-center gap-2 pt-5 font-mono text-micro uppercase tracking-wider text-primary">
                  Öppna caset
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </SectionBlock>
    </SubpageShell>
    <NextPageCTA
      next={{ path: "/portalen", title: "Föreningsportalen", shortTitle: "Portalen" }}
      label="Tillbaka till hubben"
    />
    <Footer />
  </div>
);

export default Case;

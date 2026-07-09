import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight, PlayCircle, HelpCircle } from "lucide-react";
import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import NextPageCTA from "@/components/blocks/NextPageCTA";
import { StaggerGroup, StaggerItem } from "@/components/motion";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { EditorialHero, ChapterSection, PitchField } from "@/components/editorial";
import { CASES } from "@/content/cases";

const Case = () => {
  useDocumentTitle(
    "Case ur föreningsutvecklingen",
    "Case ur föreningsutvecklingen: korta exempel i text och film, avslutade med ett quiz. Lär av hur andra föreningar gått från problem till tydliga arbetssätt och bättre kultur.",
  );

  return (
    <div className="min-h-screen bg-background">
      <GlobalNav />

      <main id="main-content">
        <nav
          aria-label="Brödsmula"
          className="container mx-auto flex flex-wrap items-center gap-1.5 px-4 pt-6 sm:px-6"
        >
          <Link
            to="/"
            className="font-mono text-micro uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
          >
            Start
          </Link>
          <ChevronRight className="h-3 w-3 text-border" aria-hidden="true" />
          <span
            aria-current="page"
            className="font-mono text-micro uppercase tracking-wider text-foreground"
          >
            Case
          </span>
        </nav>

        <EditorialHero
          eyebrow="LÄRANDE · CASE"
          titleTop="Case ur"
          titleGold="föreningsutvecklingen"
          lead="Korta, verkliga exempel på hur föreningar utvecklats — i text, film och ett quiz som befäster lärandet. Varje case tar några minuter."
          scrollHint="CASEBIBLIOTEK"
          backdrop={<PitchField />}
        />

        <ChapterSection
          number="01"
          eyebrow="Casebibliotek"
          title="Tillgängliga case"
          lead="Klicka på ett case för att läsa, se filmen och göra quizet."
        >
          <StaggerGroup as="ul" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {CASES.map((c) => (
              <StaggerItem as="li" key={c.slug} className="min-h-full">
                <Link
                  to={`/case/${c.slug}`}
                  className="card-gradient group flex h-full min-h-[14rem] flex-col rounded-xl border border-border p-6 transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:p-7"
                >
                  <span className="label-mono">{c.kicker}</span>
                  <h3 className="mt-3 text-subhead font-bold leading-tight text-foreground">
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
              </StaggerItem>
            ))}
          </StaggerGroup>
        </ChapterSection>
      </main>

      <NextPageCTA
        next={{ path: "/portalen", title: "Föreningsportalen", shortTitle: "Portalen" }}
        label="Tillbaka till hubben"
      />
      <Footer />
    </div>
  );
};

export default Case;

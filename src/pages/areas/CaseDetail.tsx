import { Link, Navigate, useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import CaseVideo from "@/components/blocks/CaseVideo";
import QuizBlock from "@/components/blocks/QuizBlock";
import NextPageCTA from "@/components/blocks/NextPageCTA";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { EditorialHero, ChapterSection, PitchField } from "@/components/editorial";
import { CASES, getCase } from "@/content/cases";

// ponytail: splits the last word of a case title as the gold accent word —
// generic so every case (present + future) gets the "one gold word" treatment
// without hand-picking a split per title.
const splitGoldWord = (title: string) => {
  const words = title.split(" ");
  const titleGold = words.pop() ?? title;
  return { titleTop: words.join(" "), titleGold };
};

const CaseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const current = slug ? getCase(slug) : undefined;

  // Hook must run unconditionally — the early-return redirect below happens
  // after, so title/description fall back to undefined when there's no case.
  useDocumentTitle(
    current?.title,
    current ? `${current.summary} Case ur föreningsutvecklingen – text, film och quiz.` : undefined,
  );

  if (!current) {
    return <Navigate to="/case" replace />;
  }

  const index = CASES.findIndex((c) => c.slug === current.slug);
  const nextCase = CASES[index + 1];
  const { titleTop, titleGold } = splitGoldWord(current.title);

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
          <Link
            to="/case"
            className="font-mono text-micro uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
          >
            Case
          </Link>
          <ChevronRight className="h-3 w-3 text-border" aria-hidden="true" />
          <span
            aria-current="page"
            className="font-mono text-micro uppercase tracking-wider text-foreground"
          >
            {current.title}
          </span>
        </nav>

        <EditorialHero
          eyebrow={current.kicker}
          titleTop={titleTop}
          titleGold={titleGold}
          lead={current.intro}
          scrollHint="FILMEN"
          backdrop={<PitchField />}
        />

        <ChapterSection number="01" eyebrow="Filmen" title="Se vad som hände">
          <div className="mx-auto max-w-[46rem]">
            <CaseVideo
              videoUrl={current.videoUrl}
              posterUrl={current.posterUrl}
              caption={current.videoCaption}
            />
          </div>
        </ChapterSection>

        <ChapterSection
          number="02"
          eyebrow="Bakgrund"
          title="Så gick det till"
          className="bg-card pitch-lines"
        >
          <div className="mx-auto max-w-[46rem] space-y-5">
            {current.body.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-foreground/85">
                {paragraph}
              </p>
            ))}
          </div>
        </ChapterSection>

        <ChapterSection number="03" eyebrow="Befäst lärandet" title="Quiz">
          <div className="mx-auto max-w-[46rem]">
            <QuizBlock storageKey={current.slug} questions={current.quiz} />
          </div>
        </ChapterSection>
      </main>

      <NextPageCTA
        next={
          nextCase
            ? { path: `/case/${nextCase.slug}`, title: nextCase.title, shortTitle: "Nästa case" }
            : { path: "/case", title: "Alla case", shortTitle: "Case" }
        }
        label={nextCase ? "Nästa case" : "Tillbaka till listan"}
      />
      <Footer />
    </div>
  );
};

export default CaseDetail;

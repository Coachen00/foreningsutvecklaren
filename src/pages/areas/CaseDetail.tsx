import { Navigate, useParams } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import SubpageShell from "@/components/blocks/SubpageShell";
import SectionBlock from "@/components/blocks/SectionBlock";
import CaseVideo from "@/components/blocks/CaseVideo";
import QuizBlock from "@/components/blocks/QuizBlock";
import NextPageCTA from "@/components/blocks/NextPageCTA";
import { CASES, getCase } from "@/content/cases";

const CaseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const current = slug ? getCase(slug) : undefined;

  if (!current) {
    return <Navigate to="/case" replace />;
  }

  const index = CASES.findIndex((c) => c.slug === current.slug);
  const nextCase = CASES[index + 1];

  return (
    <div className="min-h-screen bg-background">
      <GlobalNav />
      <SubpageShell
        breadcrumbs={[{ label: "Case", href: "/case" }, { label: current.title }]}
        kicker={current.kicker}
        icon={GraduationCap}
        title={current.title}
        lead={current.intro}
        metaDescription={`${current.summary} Case ur föreningsutvecklingen – text, film och quiz.`}
      >
        <SectionBlock eyebrow="Filmen" title="Se vad som hände" narrow>
          <CaseVideo
            videoUrl={current.videoUrl}
            posterUrl={current.posterUrl}
            caption={current.videoCaption}
          />
        </SectionBlock>

        <SectionBlock
          variant="muted"
          eyebrow="Bakgrund"
          title="Så gick det till"
          narrow
        >
          <div className="space-y-5">
            {current.body.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-foreground/85"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock eyebrow="Befäst lärandet" title="Quiz" narrow>
          <QuizBlock storageKey={current.slug} questions={current.quiz} />
        </SectionBlock>
      </SubpageShell>

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

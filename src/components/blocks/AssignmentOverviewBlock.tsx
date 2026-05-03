import { ASSIGNMENT_OVERVIEW } from "@/content/assignmentOverview";

/**
 * ASSIGNMENT OVERVIEW — arbetsbeskrivningen i en mening + stödjande paragraf.
 *
 * Editorial pull-quote-stil: stor serif-mening som ankrar berättelsen,
 * följd av en kort förklarande text om hur de tre huvuduppdragen relaterar.
 */
const AssignmentOverviewBlock = () => {
  const { eyebrow, oneLine, support } = ASSIGNMENT_OVERVIEW;

  return (
    <section
      aria-labelledby="overview-heading"
      className="border-b border-border bg-card"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="section-y">
          <p className="mb-6 font-mono text-micro uppercase tracking-wider text-primary">
            {eyebrow}
          </p>
          <h2
            id="overview-heading"
            className="max-w-[40ch] font-serif text-headline font-semibold leading-[1.15] text-foreground"
          >
            {oneLine}
          </h2>
          <p className="mt-8 max-w-[60ch] text-lead text-muted-foreground">
            {support}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AssignmentOverviewBlock;

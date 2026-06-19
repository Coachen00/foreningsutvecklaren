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
      className="border-b border-border bg-card pitch-lines"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="section-y">
          <div className="pull-quote max-w-[64rem] p-6 sm:p-8 lg:p-10">
            <p className="signal-label mb-6">{eyebrow}</p>
            <h2
              id="overview-heading"
              className="max-w-[36ch] text-headline font-semibold leading-[1.12] text-foreground"
            >
              {oneLine}
            </h2>
            <p className="mt-7 max-w-[52ch] text-base leading-relaxed text-muted-foreground md:text-[1.0625rem]">
              {support}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssignmentOverviewBlock;

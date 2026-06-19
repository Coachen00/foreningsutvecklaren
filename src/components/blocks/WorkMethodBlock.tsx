import { StaggerGroup, StaggerItem } from "@/components/motion";

interface MethodStep {
  title: string;
  description: string;
}

interface Props {
  steps: MethodStep[];
}

const WorkMethodBlock = ({ steps }: Props) => {
  return (
    <StaggerGroup
      as="ol"
      className="relative grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4"
    >
      {steps.map((step, idx) => {
        const isLast = idx === steps.length - 1;
        return (
          <StaggerItem
            key={step.title}
            as="li"
            className="relative -ml-px -mt-px flex flex-col gap-3 border border-border bg-card p-7 transition-colors first:mt-0 hover:bg-muted/40 sm:first:ml-0"
          >
            {/* Step number — large decorative */}
            <div className="mb-1 flex items-end justify-between gap-2">
              <span className="select-none font-mono text-[2rem] font-bold leading-none text-accent/70" aria-hidden="true">
                {String(idx + 1).padStart(2, "0")}
              </span>
              {/* Connector arrow — desktop only, not on last */}
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="mb-0.5 hidden h-5 w-5 shrink-0 items-center justify-center text-border/60 lg:flex"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              )}
            </div>

            <h4 className="text-base font-semibold text-foreground">{step.title}</h4>
            <p className="text-small leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </StaggerItem>
        );
      })}
    </StaggerGroup>
  );
};

export default WorkMethodBlock;

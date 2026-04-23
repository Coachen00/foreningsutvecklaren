interface MethodStep {
  title: string;
  description: string;
}

interface Props {
  steps: MethodStep[];
}

const WorkMethodBlock = ({ steps }: Props) => {
  return (
    <ol
      className="relative grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4"
      role="list"
    >
      {steps.map((step, idx) => {
        const isLast = idx === steps.length - 1;
        return (
          <li
            key={step.title}
            className="relative flex flex-col gap-3 border border-border bg-card p-7 -mt-px -ml-px first:mt-0 sm:first:ml-0"
          >
            {/* Step number — large decorative */}
            <div className="flex items-end justify-between gap-2 mb-1">
              <span className="font-mono text-[2rem] font-bold leading-none text-border/80 select-none" aria-hidden="true">
                {String(idx + 1).padStart(2, "0")}
              </span>
              {/* Connector arrow — desktop only, not on last */}
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="hidden lg:flex h-5 w-5 shrink-0 items-center justify-center text-border/60 mb-0.5"
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
            <p className="text-small text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </li>
        );
      })}
    </ol>
  );
};

export default WorkMethodBlock;

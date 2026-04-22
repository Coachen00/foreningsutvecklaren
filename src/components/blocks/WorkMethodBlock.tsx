interface MethodStep {
  title: string;
  description: string;
}

interface Props {
  steps: MethodStep[];
}

const WorkMethodBlock = ({ steps }: Props) => {
  return (
    <ol className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, idx) => (
        <li
          key={step.title}
          className="relative flex flex-col gap-2 border-t border-border bg-background p-6 md:border-l md:border-t-0 md:first:border-l-0"
        >
          <span className="text-xs font-mono text-muted-foreground">
            Steg {String(idx + 1).padStart(2, "0")}
          </span>
          <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
          <p className="text-sm text-foreground/80">{step.description}</p>
        </li>
      ))}
    </ol>
  );
};

export default WorkMethodBlock;

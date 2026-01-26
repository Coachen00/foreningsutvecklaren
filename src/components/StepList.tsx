import { CheckCircle, Circle } from "lucide-react";

interface Step {
  number: number;
  text: string;
  placeholder?: boolean;
}

interface StepListProps {
  steps: Step[];
}

const StepList = ({ steps }: StepListProps) => {
  return (
    <div className="space-y-4">
      {steps.map((step) => (
        <div
          key={step.number}
          className={`flex items-start gap-4 rounded-lg p-4 ${
            step.placeholder
              ? "border border-dashed border-border bg-muted/20"
              : "bg-card shadow-sm"
          }`}
        >
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
            {step.number}
          </div>
          <div className="flex-1 pt-1">
            <p
              className={
                step.placeholder ? "text-muted-foreground italic" : "text-foreground"
              }
            >
              {step.text}
            </p>
          </div>
          {step.placeholder ? (
            <Circle className="h-5 w-5 text-muted" />
          ) : (
            <CheckCircle className="h-5 w-5 text-primary" />
          )}
        </div>
      ))}
    </div>
  );
};

export default StepList;

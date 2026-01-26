import { Info } from "lucide-react";

interface CalloutBoxProps {
  title?: string;
  children: React.ReactNode;
  variant?: "info" | "highlight";
}

const CalloutBox = ({ title, children, variant = "info" }: CalloutBoxProps) => {
  return (
    <div
      className={`rounded-lg border-l-4 p-5 ${
        variant === "highlight"
          ? "border-l-primary bg-accent"
          : "border-l-primary/50 bg-card"
      }`}
    >
      {title && (
        <div className="mb-2 flex items-center gap-2">
          <Info className="h-5 w-5 text-primary" />
          <span className="font-semibold text-foreground">{title}</span>
        </div>
      )}
      <p className="text-foreground/90">{children}</p>
    </div>
  );
};

export default CalloutBox;

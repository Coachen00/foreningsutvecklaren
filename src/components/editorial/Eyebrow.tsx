import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  align?: "center" | "left";
}

const Hairline = () => <span className="h-px w-8 bg-accent/50" aria-hidden="true" />;

export function Eyebrow({ children, className, align = "left" }: EyebrowProps) {
  if (align === "center") {
    return (
      <p className={cn("label-mono flex items-center justify-center gap-3", className)}>
        <Hairline />
        {children}
        <Hairline />
      </p>
    );
  }

  return <p className={cn("label-mono", className)}>{children}</p>;
}

export default Eyebrow;

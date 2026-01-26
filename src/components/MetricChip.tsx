import { LucideIcon } from "lucide-react";

interface MetricChipProps {
  icon: LucideIcon;
  label: string;
}

const MetricChip = ({ icon: Icon, label }: MetricChipProps) => {
  return (
    <div className="flex items-center gap-3 rounded-lg bg-accent px-4 py-3 transition-all hover:shadow-md">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
        <Icon className="h-5 w-5 text-accent-foreground" />
      </div>
      <span className="font-medium text-foreground">{label}</span>
    </div>
  );
};

export default MetricChip;

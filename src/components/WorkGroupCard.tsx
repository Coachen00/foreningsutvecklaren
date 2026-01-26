import { LucideIcon } from "lucide-react";

interface WorkGroupCardProps {
  icon?: LucideIcon;
  title: string;
  owner: string;
  effectGoal: string;
  responsibilities: string[];
  teamMembers: string;
}

const WorkGroupCard = ({
  icon: Icon,
  title,
  owner,
  effectGoal,
  responsibilities,
  teamMembers,
}: WorkGroupCardProps) => {
  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
      {Icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent">
          <Icon className="h-6 w-6 text-accent-foreground" />
        </div>
      )}
      <h3 className="mb-3 text-lg font-semibold text-foreground">{title}</h3>
      
      <div className="mb-3">
        <span className="text-sm font-medium text-muted-foreground">Ägare: </span>
        <span className="text-sm text-foreground">{owner}</span>
      </div>
      
      <div className="mb-4">
        <span className="text-sm font-medium text-muted-foreground">Effektmål: </span>
        <span className="text-sm text-foreground">{effectGoal}</span>
      </div>
      
      <div className="mb-4">
        <p className="mb-2 text-sm font-medium text-muted-foreground">Ansvar:</p>
        <ul className="space-y-1.5">
          {responsibilities.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              <span className="text-sm text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="border-t border-border pt-3">
        <span className="text-sm font-medium text-muted-foreground">Arbetsgrupp: </span>
        <span className="text-sm text-foreground">{teamMembers}</span>
      </div>
    </div>
  );
};

export default WorkGroupCard;

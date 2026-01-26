import { Badge } from "@/components/ui/badge";

export interface Initiative {
  title: string;
  actor: string;
  area: string;
  format: string;
  purpose: string;
  areaType?: "Hisingen" | "Nordost" | "Sydväst" | "Övrigt";
  initiativeType?: "Verksamhet" | "Plats" | "Koordination" | "Stöd";
}

interface InitiativeCardProps {
  initiative: Initiative;
}

const InitiativeCard = ({ initiative }: InitiativeCardProps) => {
  return (
    <div className="rounded-lg border border-border bg-background p-5 shadow-sm transition-all hover:shadow-md">
      <h4 className="mb-3 text-base font-semibold text-foreground leading-tight">
        {initiative.title}
      </h4>
      <div className="space-y-2 text-sm">
        <div className="flex items-start gap-2">
          <span className="font-medium text-muted-foreground min-w-[55px]">Aktör:</span>
          <span className="text-foreground">{initiative.actor}</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="font-medium text-muted-foreground min-w-[55px]">Område:</span>
          <span className="text-foreground">{initiative.area}</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="font-medium text-muted-foreground min-w-[55px]">Format:</span>
          <span className="text-foreground">{initiative.format}</span>
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-border">
        <p className="text-sm text-foreground/90 italic">
          <span className="font-medium not-italic text-muted-foreground">Syfte: </span>
          {initiative.purpose}
        </p>
      </div>
      {(initiative.areaType || initiative.initiativeType) && (
        <div className="mt-3 flex flex-wrap gap-2">
          {initiative.areaType && (
            <Badge variant="outline" className="text-xs">
              {initiative.areaType}
            </Badge>
          )}
          {initiative.initiativeType && (
            <Badge variant="secondary" className="text-xs">
              {initiative.initiativeType}
            </Badge>
          )}
        </div>
      )}
    </div>
  );
};

export default InitiativeCard;

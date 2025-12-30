import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface LeadStatusFilterProps {
  value: string;
  onValueChange: (value: string) => void;
}

export const LeadStatusFilter = ({ value, onValueChange }: LeadStatusFilterProps) => {
  const isActive = value !== "all";
  
  return (
    <Select value={value || "all"} onValueChange={onValueChange}>
      <SelectTrigger 
        className={cn(
          "w-44",
          isActive && "border-primary ring-1 ring-primary/20"
        )}
      >
        <div className="flex items-center gap-2">
          <SelectValue placeholder="All Statuses" />
          {isActive && (
            <Badge variant="secondary" className="h-5 px-1.5 text-xs">
              1
            </Badge>
          )}
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Statuses</SelectItem>
        <SelectItem value="New">New</SelectItem>
        <SelectItem value="Attempted">Attempted</SelectItem>
        <SelectItem value="Follow-up">Follow-up</SelectItem>
        <SelectItem value="Qualified">Qualified</SelectItem>
        <SelectItem value="Disqualified">Disqualified</SelectItem>
        <SelectItem value="Converted">Converted</SelectItem>
      </SelectContent>
    </Select>
  );
};

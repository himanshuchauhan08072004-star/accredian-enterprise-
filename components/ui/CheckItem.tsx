import { CircleCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckItemProps {
  label: string;
  className?: string;
}

export function CheckItem({ label, className }: CheckItemProps) {
  return (
    <li className={cn("text-foreground/75 flex items-center gap-2 text-sm font-medium", className)}>
      <CircleCheck size={18} className="shrink-0 text-emerald-500" aria-hidden="true" />
      {label}
    </li>
  );
}

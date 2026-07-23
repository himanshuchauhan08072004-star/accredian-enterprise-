import { SearchCheck, ClipboardList, PackageOpen } from "lucide-react";
import type { DeliveryStep } from "@/types";

export const DELIVERY_STEPS: DeliveryStep[] = [
  {
    id: "skill-gap-analysis",
    step: 1,
    icon: SearchCheck,
    title: "Skill Gap Analysis",
    description: "Assess team skill gaps and development needs upfront.",
  },
  {
    id: "customized-training-plan",
    step: 2,
    icon: ClipboardList,
    title: "Customized Training Plan",
    description: "Create a defined roadmap addressing organizational goals.",
  },
  {
    id: "flexible-program-delivery",
    step: 3,
    icon: PackageOpen,
    title: "Flexible Program Delivery",
    description: "Deliver adaptable programs aligned with your team's needs.",
  },
];

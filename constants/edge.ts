import {
  Lightbulb,
  MessagesSquare,
  RefreshCcw,
  Cpu,
  LayoutGrid,
  Target,
  PackageCheck,
} from "lucide-react";
import type { EdgeFeature } from "@/types";

export const EDGE_FEATURES: EdgeFeature[] = [
  {
    id: "tailored-solutions",
    icon: Lightbulb,
    title: "Tailored Solutions",
    description: "Programs customized to your organization's goals and challenges.",
  },
  {
    id: "expert-guidance",
    icon: MessagesSquare,
    title: "Expert Guidance",
    description: "Learn from industry leaders with real-world success.",
  },
  {
    id: "innovative-framework",
    icon: RefreshCcw,
    title: "Innovative Framework",
    description: "Proprietary methods for impactful, application-driven results.",
  },
  {
    id: "advanced-technology",
    icon: Cpu,
    title: "Advanced Technology",
    description: "State-of-the-art LMS for seamless learning experiences.",
  },
  {
    id: "diverse-offerings",
    icon: LayoutGrid,
    title: "Diverse Offerings",
    description: "Courses across industries, skill levels, and emerging fields.",
  },
  {
    id: "proven-impact",
    icon: Target,
    title: "Proven Impact",
    description: "Trusted by leading organizations for measurable ROI.",
  },
  {
    id: "flexible-delivery",
    icon: PackageCheck,
    title: "Flexible Delivery",
    description: "Online and offline options tailored to your needs.",
  },
];

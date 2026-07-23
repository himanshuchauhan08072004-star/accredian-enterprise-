import {
  BookOpenCheck,
  Factory,
  Layers,
  TrendingUp,
  Code2,
  Briefcase,
  Sprout,
  Award,
} from "lucide-react";
import type { AudienceSegment } from "@/types";

export interface CourseSegment {
  id: string;
  icon: typeof BookOpenCheck;
  title: string;
  description: string;
  gradient: string;
}

export const COURSE_SEGMENTS: CourseSegment[] = [
  {
    id: "program-specific",
    icon: BookOpenCheck,
    title: "Program Specific",
    description: "Executive, extensive, or short-form learning tracks.",
    gradient: "from-brand-500 to-brand-700",
  },
  {
    id: "industry-specific",
    icon: Factory,
    title: "Industry Specific",
    description: "IT, Manufacturing, BFSI, Retail, Healthcare & more.",
    gradient: "from-accent-500 to-brand-700",
  },
  {
    id: "topic-specific",
    icon: Layers,
    title: "Topic Specific",
    description: "Mentorship, design, execution, cybersecurity, finance.",
    gradient: "from-emerald-500 to-brand-700",
  },
  {
    id: "level-specific",
    icon: TrendingUp,
    title: "Level Specific",
    description: "Entry-level to C-suite, tailored by seniority.",
    gradient: "from-orange-500 to-brand-700",
  },
];

export const AUDIENCE_SEGMENTS: AudienceSegment[] = [
  {
    id: "tech-professionals",
    icon: Code2,
    title: "Tech Professionals",
    description: "Sharpen hands-on technical skills through applied learning.",
  },
  {
    id: "non-tech-professionals",
    icon: Briefcase,
    title: "Non-Tech Professionals",
    description: "Bridge digital fluency into everyday business decisions.",
  },
  {
    id: "emerging-professionals",
    icon: Sprout,
    title: "Emerging Professionals",
    description: "Build strong foundations early in your career.",
  },
  {
    id: "senior-professionals",
    icon: Award,
    title: "Senior Professionals",
    description: "Strengthen leadership, strategic & advanced practices.",
  },
];

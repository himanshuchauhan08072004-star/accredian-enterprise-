import { Rocket, Bot, Crown, BarChart3, Cog, Building2, ShieldCheck } from "lucide-react";
import type { DomainExpertise } from "@/types";

export const DOMAIN_EXPERTISE: DomainExpertise[] = [
  { id: "product-innovation", icon: Rocket, title: "Product & Innovation Hub" },
  { id: "gen-ai-mastery", icon: Bot, title: "Gen-AI Mastery" },
  { id: "leadership-elevation", icon: Crown, title: "Leadership Elevation" },
  { id: "tech-data-insights", icon: BarChart3, title: "Tech & Data Insights" },
  { id: "operations-excellence", icon: Cog, title: "Operations Excellence" },
  { id: "digital-enterprise", icon: Building2, title: "Digital Enterprise" },
  { id: "fintech-lab", icon: ShieldCheck, title: "Fintech Innovation Lab" },
];

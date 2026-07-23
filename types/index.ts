import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface PartnerLogo {
  id: string;
  name: string;
  logoSrc: string;
}

export interface EdgeFeature {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface DomainExpertise {
  id: string;
  icon: LucideIcon;
  title: string;
}

export interface CourseCategory {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
}

export interface AudienceSegment {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface CatFrameworkStep {
  id: string;
  title: string;
  description: string;
}

export interface DeliveryStep {
  id: string;
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export type FaqCategory = "course" | "delivery" | "misc";

export interface FaqItem {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface LeadFormValues {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

import type { NavLink } from "@/types";

export const SITE_CONFIG = {
  name: "Accredian",
  tagline: "Credentials That Matter",
  description:
    "Enterprise learning solutions that cultivate high-performance teams through expert-led, outcome-driven training.",
  url: "https://accredian-enterprise.vercel.app",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Stats", href: "#stats" },
  { label: "Clients", href: "#clients" },
  { label: "Accredian Edge", href: "#edge" },
  { label: "CAT Framework", href: "#cat-framework" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQs", href: "#faqs" },
  { label: "Testimonials", href: "#testimonials" },
];

export const CONTACT_INFO = {
  email: "enterprise@accredian.com",
  address: "4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana",
} as const;

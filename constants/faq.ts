import type { FaqItem } from "@/types";

export const FAQ_CATEGORIES = [
  { id: "course", label: "About the Course" },
  { id: "delivery", label: "About the Delivery" },
  { id: "misc", label: "Miscellaneous" },
] as const;

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "corporate-programs",
    category: "course",
    question: "What types of corporate training programs does Accredian offer?",
    answer:
      "We offer programs spanning leadership development, Gen-AI mastery, technology & data, operations excellence, and digital transformation — each customizable to your organization's goals.",
  },
  {
    id: "domain-specializations",
    category: "course",
    question: "What domain specializations are available?",
    answer:
      "Our domain tracks cover Product & Innovation, Gen-AI, Leadership, Tech & Data Insights, Operations, Digital Enterprise, and Fintech Innovation.",
  },
  {
    id: "course-duration",
    category: "course",
    question: "How long do the training programs typically run?",
    answer:
      "Program length varies from focused 2-day intensives to extensive 12-week executive tracks, based on the depth and scope your team needs.",
  },
  {
    id: "online-offline",
    category: "delivery",
    question: "Are programs available online, offline, or both?",
    answer:
      "Both. Every program can be delivered fully online, in-person at your office, or as a blended hybrid format depending on your team's preference.",
  },
  {
    id: "lms-access",
    category: "delivery",
    question: "How do learners access course materials?",
    answer:
      "Learners get access through our state-of-the-art LMS, with structured modules, recorded sessions, and progress tracking built in.",
  },
  {
    id: "custom-scheduling",
    category: "delivery",
    question: "Can training schedules be customized around our team's availability?",
    answer:
      "Yes, we design flexible delivery calendars, including weekend or after-hours cohorts, to minimize disruption to your operations.",
  },
  {
    id: "measuring-roi",
    category: "misc",
    question: "How is training impact and ROI measured?",
    answer:
      "We track skill-gap closure, assessment scores, and post-training performance indicators, then share a measurable impact report with your team.",
  },
  {
    id: "enterprise-pricing",
    category: "misc",
    question: "How does enterprise pricing work?",
    answer:
      "Pricing is based on cohort size, program depth, and delivery format. Reach out through the enquiry form and our team will share a tailored quote.",
  },
];

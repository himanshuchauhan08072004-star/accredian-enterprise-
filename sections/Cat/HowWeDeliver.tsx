"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DELIVERY_STEPS } from "@/constants/delivery";

export function HowWeDeliver() {
  return (
    <section
      id="how-it-works"
      aria-label="How we deliver results"
      className="bg-surface-muted/60 py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          title={
            <>
              How We Deliver{" "}
              <span className="from-brand-600 to-accent-600 bg-gradient-to-r bg-clip-text text-transparent">
                Results
              </span>{" "}
              That Matter?
            </>
          }
          description="A structured three-step approach to skill development."
        />

        <div className="relative mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div
            aria-hidden="true"
            className="border-brand-200 absolute top-8 right-[16%] left-[16%] hidden h-px border-t border-dashed sm:block"
          />
          {DELIVERY_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="border-surface-border relative rounded-(--radius-card) border bg-white p-6 text-center shadow-sm"
              >
                <span className="bg-brand-600 absolute top-3 right-3 flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold text-white">
                  {step.step}
                </span>
                <span className="from-brand-500 to-brand-700 relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br shadow-[0_12px_24px_-8px_rgba(38,71,214,0.45)]">
                  <Icon size={26} className="text-white" aria-hidden="true" />
                </span>
                <p className="text-foreground mt-4 font-bold">{step.title}</p>
                <p className="text-foreground/65 mt-1.5 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

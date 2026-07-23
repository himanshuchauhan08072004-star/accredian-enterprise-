"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CAT_STEPS } from "@/constants/cat";

const NODE_POSITIONS = [
  { top: "0%", left: "50%" }, // Concept — top
  { top: "78%", left: "8%" }, // Application — bottom-left
  { top: "78%", left: "92%" }, // Tools — bottom-right
];

export function CatFramework() {
  return (
    <section id="cat-framework" aria-label="The CAT Framework" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Methodology"
          title={
            <>
              The{" "}
              <span className="from-brand-600 to-accent-600 bg-gradient-to-r bg-clip-text text-transparent">
                CAT
              </span>{" "}
              Framework
            </>
          }
          description="Our proven approach to learning excellence."
        />

        {/* Desktop cyclic diagram */}
        <div className="relative mx-auto mt-20 hidden h-80 w-80 md:block">
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, rotate: -8 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-brand-200 absolute inset-6 rounded-full border-2 border-dashed"
          />
          {CAT_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="absolute w-44 -translate-x-1/2 text-center"
              style={NODE_POSITIONS[index]}
            >
              <div className="from-brand-500 to-brand-700 mx-auto flex h-24 w-24 flex-col items-center justify-center rounded-full bg-gradient-to-br shadow-[0_16px_32px_-10px_rgba(38,71,214,0.5)]">
                <span className="text-lg font-extrabold text-white">{step.title}</span>
              </div>
              <p className="text-foreground/65 mx-auto mt-3 text-xs leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile stacked list */}
        <div className="mt-12 flex flex-col gap-6 md:hidden">
          {CAT_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="border-surface-border flex items-center gap-4 rounded-2xl border bg-white p-4 shadow-sm"
            >
              <span className="from-brand-500 to-brand-700 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-sm font-extrabold text-white">
                {step.title}
              </span>
              <p className="text-foreground/60 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

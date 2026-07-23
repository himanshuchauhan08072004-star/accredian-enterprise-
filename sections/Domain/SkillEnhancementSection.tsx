"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { AUDIENCE_SEGMENTS } from "@/constants/courses";

export function SkillEnhancementSection() {
  return (
    <Container className="mt-24">
      <div className="from-brand-600 via-brand-700 to-brand-900 relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br px-6 py-12 sm:px-10 sm:py-14 lg:px-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="bg-accent-400/20 pointer-events-none absolute -bottom-20 left-1/3 h-56 w-56 rounded-full blur-3xl"
        />

        <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <p className="text-brand-100 text-xs font-bold tracking-[0.18em] uppercase">
              Who Should Join?
            </p>
            <h2 className="mt-3 text-3xl leading-tight font-extrabold text-white sm:text-4xl">
              Strategic Skill Enhancement
            </h2>
            <p className="text-brand-100/80 mt-4 max-w-sm">
              Every role has a growth path. Our programs meet professionals exactly where they are.
            </p>

            {/* Abstract avatar duo, replacing stock photography */}
            <div className="mt-8 hidden items-center gap-3 sm:flex" aria-hidden="true">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/40 bg-white/15 text-sm font-bold text-white backdrop-blur">
                RA
              </span>
              <span className="-ml-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/40 bg-white/15 text-sm font-bold text-white backdrop-blur">
                SK
              </span>
              <div className="ml-2 h-px max-w-24 flex-1 bg-white/25" />
              <span className="text-brand-100/70 text-xs font-medium">
                Learners across 20+ industries
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {AUDIENCE_SEGMENTS.map((segment, index) => {
              const Icon = segment.icon;
              return (
                <motion.div
                  key={segment.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <p className="mt-3 text-sm font-bold text-white">{segment.title}</p>
                  <p className="text-brand-100/75 mt-1 text-xs leading-relaxed">
                    {segment.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}

"use client";

import { motion } from "framer-motion";
import { StatCard } from "@/components/ui/StatCard";
import { Container } from "@/components/ui/Container";
import { STAT_ITEMS } from "@/constants/stats";

export function Stats() {
  return (
    <section id="stats" aria-label="Our impact in numbers" className="py-20 sm:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-6"
        >
          {STAT_ITEMS.map((stat) => (
            <StatCard key={stat.id} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

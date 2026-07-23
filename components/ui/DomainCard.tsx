"use client";

import { motion } from "framer-motion";
import type { DomainExpertise } from "@/types";

export function DomainCard({ icon: Icon, title }: Omit<DomainExpertise, "id">) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="border-surface-border hover:border-brand-200 flex items-center gap-3 rounded-2xl border bg-white px-5 py-4 shadow-sm transition-shadow duration-200 hover:shadow-[0_12px_28px_-12px_rgba(38,71,214,0.25)]"
    >
      <span className="bg-brand-50 text-brand-700 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
        <Icon size={19} aria-hidden="true" />
      </span>
      <p className="text-foreground text-sm font-semibold">{title}</p>
    </motion.div>
  );
}

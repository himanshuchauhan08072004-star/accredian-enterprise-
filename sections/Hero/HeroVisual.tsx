"use client";

import { motion } from "framer-motion";
import { Award, TrendingUp, Users } from "lucide-react";

const PROGRESS_ROWS = [
  { label: "Leadership Elevation", value: 92, color: "bg-brand-500" },
  { label: "Gen-AI Mastery", value: 78, color: "bg-accent-500" },
  { label: "Tech & Data Insights", value: 85, color: "bg-emerald-500" },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto flex h-[420px] w-full max-w-md items-center justify-center lg:h-[480px] lg:max-w-none">
      {/* Ambient gradient blobs */}
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.08, 1], rotate: [0, 8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="from-brand-300/50 to-accent-400/40 absolute -top-10 -right-6 h-64 w-64 rounded-full bg-gradient-to-br blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="from-brand-200/60 absolute -bottom-8 -left-4 h-56 w-56 rounded-full bg-gradient-to-tr to-transparent blur-3xl"
      />

      {/* Central dashboard card */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className="glass relative z-10 w-full max-w-sm rounded-(--radius-card) p-6 shadow-[0_30px_60px_-20px_rgba(16,26,66,0.28)]"
      >
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-foreground text-sm font-bold">Team Progress</p>
            <p className="text-foreground/45 text-xs">This quarter</p>
          </div>
          <div className="flex -space-x-2.5" aria-hidden="true">
            {["A", "R", "S", "K"].map((initial, i) => (
              <span
                key={initial}
                style={{ zIndex: 4 - i }}
                className="from-brand-500 to-accent-500 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br text-xs font-bold text-white"
              >
                {initial}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {PROGRESS_ROWS.map((row, index) => (
            <div key={row.label}>
              <div className="text-foreground/60 mb-1.5 flex items-center justify-between text-xs font-medium">
                <span>{row.label}</span>
                <span className="text-foreground/80 font-bold">{row.value}%</span>
              </div>
              <div className="bg-surface-muted h-1.5 w-full overflow-hidden rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${row.value}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.15, ease: "easeOut" }}
                  className={`h-full rounded-full ${row.color}`}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating stat chips */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute top-6 -left-2 z-20 hidden items-center gap-2.5 rounded-2xl px-4 py-3 shadow-lg sm:flex"
      >
        <span className="bg-brand-100 text-brand-700 flex h-9 w-9 items-center justify-center rounded-xl">
          <Users size={18} aria-hidden="true" />
        </span>
        <div>
          <p className="text-foreground text-sm font-extrabold">10K+</p>
          <p className="text-foreground/50 text-[11px]">Professionals trained</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="glass absolute -right-2 bottom-8 z-20 hidden items-center gap-2.5 rounded-2xl px-4 py-3 shadow-lg sm:flex"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
          <TrendingUp size={18} aria-hidden="true" />
        </span>
        <div>
          <p className="text-foreground text-sm font-extrabold">98%</p>
          <p className="text-foreground/50 text-[11px]">Satisfaction rate</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="glass absolute bottom-0 left-1/3 z-20 hidden items-center gap-2 rounded-2xl px-3.5 py-2.5 shadow-lg md:flex"
      >
        <Award size={16} className="text-accent-600" aria-hidden="true" />
        <p className="text-foreground/80 text-xs font-bold">Industry Certified</p>
      </motion.div>
    </div>
  );
}

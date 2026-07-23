"use client";

import { motion } from "framer-motion";
import { EDGE_FEATURES } from "@/constants/edge";
import { cn } from "@/lib/utils";

export function EdgeTimelineMobile() {
  return (
    <div className="relative lg:hidden">
      <div
        aria-hidden="true"
        className="border-brand-200 absolute top-2 bottom-2 left-7 w-px border-l border-dashed"
      />
      <ul className="flex flex-col gap-8">
        {EDGE_FEATURES.map((feature, index) => {
          const Icon = feature.icon;
          const isEven = index % 2 === 0;

          return (
            <motion.li
              key={feature.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="relative flex gap-5 pl-0"
            >
              <span
                className={cn(
                  "relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br shadow-[0_10px_24px_-8px_rgba(38,71,214,0.45)]",
                  isEven ? "from-brand-500 to-brand-700" : "from-accent-500 to-brand-600",
                )}
              >
                <Icon size={22} className="text-white" aria-hidden="true" />
              </span>
              <div className="pt-2.5">
                <p className="text-foreground text-base font-bold">{feature.title}</p>
                <p className="text-foreground/65 mt-1 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}

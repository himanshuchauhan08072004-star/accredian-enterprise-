"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { EDGE_FEATURES } from "@/constants/edge";
import { cn } from "@/lib/utils";

export function EdgeTimelineDesktop() {
  return (
    <div className="hidden lg:block">
      <div className="flex items-start justify-between gap-1 xl:gap-2">
        {EDGE_FEATURES.map((feature, index) => {
          const isEven = index % 2 === 0;
          const Icon = feature.icon;

          return (
            <div key={feature.id} className="flex items-start">
              <div className="flex w-32 flex-col items-center xl:w-36">
                {/* Top label slot */}
                <div className="flex h-24 items-end justify-center px-1 text-center">
                  {isEven && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                    >
                      <p className="text-foreground text-sm font-bold">{feature.title}</p>
                      <p className="text-foreground/60 mt-1 text-xs leading-snug">
                        {feature.description}
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Connector dot */}
                <motion.div
                  initial={{ scale: 0.4, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={cn(
                    "relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br shadow-[0_10px_24px_-8px_rgba(38,71,214,0.45)]",
                    isEven ? "from-brand-500 to-brand-700" : "from-accent-500 to-brand-600",
                  )}
                >
                  <Icon size={22} className="text-white" aria-hidden="true" />
                  <span
                    aria-hidden="true"
                    className={cn(
                      "border-brand-200 absolute h-10 w-px border-l border-dashed",
                      isEven ? "top-full mt-0" : "bottom-full mb-0",
                    )}
                  />
                </motion.div>

                {/* Bottom label slot */}
                <div className="flex h-24 items-start justify-center px-1 pt-0 text-center">
                  {!isEven && (
                    <motion.div
                      initial={{ opacity: 0, y: -12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                    >
                      <p className="text-foreground text-sm font-bold">{feature.title}</p>
                      <p className="text-foreground/60 mt-1 text-xs leading-snug">
                        {feature.description}
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>

              {index < EDGE_FEATURES.length - 1 && (
                <ChevronRight
                  size={18}
                  aria-hidden="true"
                  className="text-brand-200 mt-[38px] shrink-0"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

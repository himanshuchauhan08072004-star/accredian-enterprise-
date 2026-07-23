"use client";

import { useCountUp } from "@/hooks/useCountUp";
import type { StatItem } from "@/types";

export function StatCard({ value, suffix, label }: Omit<StatItem, "id">) {
  const { ref, value: liveValue } = useCountUp(value);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="bg-brand-50 inline-flex items-center justify-center rounded-full px-6 py-3">
        <span className="text-brand-700 text-3xl font-extrabold tabular-nums sm:text-4xl">
          {liveValue.toLocaleString()}
          {suffix}
        </span>
      </div>
      <p className="text-foreground/60 mt-4 max-w-[220px] text-sm font-medium">{label}</p>
    </div>
  );
}

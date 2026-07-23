import { cn } from "@/lib/utils";
import type { Partner } from "@/constants/partners";

const BRAND_STYLES: Record<string, string> = {
  reliance: "font-serif italic text-slate-700",
  hcl: "font-sans font-extrabold italic text-sky-700",
  ibm: "font-mono font-black tracking-tighter text-blue-800",
  crif: "font-sans font-bold text-cyan-700",
  adp: "font-sans font-black italic text-red-600",
  bayer: "font-sans font-bold text-emerald-700",
};

export function PartnerTile({ id, name }: Partner) {
  return (
    <div
      className="border-surface-border flex h-20 w-40 shrink-0 items-center justify-center rounded-2xl border bg-white opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:shadow-md hover:grayscale-0 sm:w-44"
      role="img"
      aria-label={`${name} logo`}
    >
      <span className={cn("text-xl sm:text-2xl", BRAND_STYLES[id])}>{name}</span>
    </div>
  );
}

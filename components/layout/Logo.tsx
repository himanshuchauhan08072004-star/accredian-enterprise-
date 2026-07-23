import Link from "next/link";
import { SITE_CONFIG } from "@/constants/site";

export function Logo() {
  return (
    <Link
      href="#home"
      className="focus-visible:outline-brand-500 flex flex-col rounded-sm leading-none focus-visible:outline-2 focus-visible:outline-offset-4"
      aria-label={`${SITE_CONFIG.name} home`}
    >
      <span className="from-brand-600 to-accent-600 bg-gradient-to-r bg-clip-text text-2xl font-extrabold tracking-tight text-transparent">
        {SITE_CONFIG.name}
      </span>
      <span className="text-foreground/50 text-[11px] font-medium tracking-[0.16em] uppercase">
        {SITE_CONFIG.tagline}
      </span>
    </Link>
  );
}

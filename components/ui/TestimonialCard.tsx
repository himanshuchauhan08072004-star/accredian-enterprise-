import { Quote } from "lucide-react";
import type { Testimonial } from "@/types";

export function TestimonialCard({ quote, author, role, company }: Testimonial) {
  return (
    <div className="border-surface-border flex h-full flex-col rounded-(--radius-card) border bg-white p-7 shadow-sm">
      <Quote size={28} className="text-brand-200" aria-hidden="true" />
      <p className="text-foreground/70 mt-4 flex-1 text-[15px] leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="border-surface-border mt-6 flex items-center gap-3 border-t pt-5">
        <span className="from-brand-500 to-accent-500 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white">
          {company.slice(0, 2).toUpperCase()}
        </span>
        <div>
          <p className="text-foreground text-sm font-bold">{author}</p>
          <p className="text-foreground/50 text-xs">
            {role} · {company}
          </p>
        </div>
      </div>
    </div>
  );
}

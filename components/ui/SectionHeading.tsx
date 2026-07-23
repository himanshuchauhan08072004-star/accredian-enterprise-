import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto text-center" : "text-left",
        "max-w-2xl",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-brand-600 mb-3 text-xs font-bold tracking-[0.18em] uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="text-foreground text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && <p className="text-foreground/65 mt-3">{description}</p>}
    </div>
  );
}

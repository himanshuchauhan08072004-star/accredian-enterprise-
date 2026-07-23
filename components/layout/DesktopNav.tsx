"use client";

import { motion } from "framer-motion";
import { NAV_LINKS } from "@/constants/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

export function DesktopNav() {
  const activeId = useActiveSection(NAV_LINKS.map((link) => link.href.replace("#", "")));

  return (
    <ul className="hidden items-center gap-1 lg:flex" role="list">
      {NAV_LINKS.map((link) => {
        const isActive = activeId === link.href.replace("#", "");
        return (
          <li key={link.href} className="relative">
            <a
              href={link.href}
              className={cn(
                "relative block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                isActive ? "text-brand-700" : "text-foreground/65 hover:text-foreground",
              )}
              aria-current={isActive ? "true" : undefined}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-pill"
                  className="bg-brand-50 absolute inset-0 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

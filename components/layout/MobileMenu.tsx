"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { NAV_LINKS } from "@/constants/site";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-brand-950/40 fixed inset-0 z-40 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            key="panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className="fixed inset-y-0 right-0 z-50 flex w-[82%] max-w-xs flex-col bg-white p-6 shadow-2xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="text-brand-700 text-lg font-bold">Menu</span>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="text-foreground/60 hover:bg-surface-muted hover:text-foreground rounded-full p-2"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-1">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index + 0.1 }}
                  className="text-foreground/75 hover:bg-brand-50 hover:text-brand-700 rounded-xl px-4 py-3 text-base font-medium"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <Button
              href="#lead-form"
              variant="primary"
              size="md"
              className="w-full"
              onClick={onClose}
            >
              Enquire Now
            </Button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

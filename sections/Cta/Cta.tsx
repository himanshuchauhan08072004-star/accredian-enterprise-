"use client";

import { motion } from "framer-motion";
import { Headset, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Cta() {
  return (
    <section aria-label="Contact our team" className="py-6">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="from-brand-600 to-accent-600 relative flex flex-col items-center gap-6 overflow-hidden rounded-[1.75rem] bg-gradient-to-r px-6 py-10 text-center sm:flex-row sm:justify-between sm:px-10 sm:text-left"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -right-10 h-56 w-56 rounded-full bg-white/10 blur-3xl"
          />

          <div className="relative flex flex-col items-center gap-4 sm:flex-row sm:items-center">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white">
              <Headset size={26} aria-hidden="true" />
            </span>
            <div>
              <p className="text-lg font-extrabold text-white sm:text-xl">
                Want to Learn More About Our Training Solutions?
              </p>
              <p className="mt-1 text-sm text-white/75">
                Get expert guidance for your team&apos;s success.
              </p>
            </div>
          </div>

          <Button
            href="#lead-form"
            variant="secondary"
            size="lg"
            className="relative shrink-0"
            icon={<ArrowRight size={18} aria-hidden="true" />}
          >
            Contact Us
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}

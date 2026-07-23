"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { PartnerTile } from "@/components/ui/PartnerTile";
import { PARTNERS } from "@/constants/partners";

export function Partners() {
  // Duplicate list for a seamless infinite marquee loop
  const marqueeItems = [...PARTNERS, ...PARTNERS];

  return (
    <section
      id="clients"
      aria-label="Our partners"
      className="border-surface-border bg-surface-muted/60 border-y py-20 sm:py-24"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-foreground text-3xl font-extrabold tracking-tight sm:text-4xl">
            Our Proven{" "}
            <span className="from-brand-600 to-accent-600 bg-gradient-to-r bg-clip-text text-transparent">
              Partnerships
            </span>
          </h2>
          <p className="text-foreground/65 mx-auto mt-3 max-w-md">
            Successful collaborations with the industry&apos;s best.
          </p>
        </motion.div>
      </Container>

      <div className="group relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex w-max gap-6 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {marqueeItems.map((partner, index) => (
            <PartnerTile key={`${partner.id}-${index}`} id={partner.id} name={partner.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

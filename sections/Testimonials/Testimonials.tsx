"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { TESTIMONIALS } from "@/constants/testimonials";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[0] as HTMLElement | undefined;
    const cardWidth = card ? card.offsetWidth + 20 : track.clientWidth;
    track.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[0] as HTMLElement | undefined;
    const cardWidth = card ? card.offsetWidth + 20 : track.clientWidth;
    setActiveIndex(Math.round(track.scrollLeft / cardWidth));
  };

  return (
    <section id="testimonials" aria-label="Testimonials" className="py-20 sm:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Client Voices"
            title={
              <>
                Testimonials From{" "}
                <span className="from-brand-600 to-accent-600 bg-gradient-to-r bg-clip-text text-transparent">
                  Our Partners
                </span>
              </>
            }
            description="What our clients are saying."
            align="left"
          />

          <div className="flex shrink-0 gap-2">
            <button
              onClick={() => scrollByCard(-1)}
              aria-label="Previous testimonial"
              className="border-surface-border text-foreground/60 hover:bg-brand-50 hover:text-brand-700 flex h-11 w-11 items-center justify-center rounded-full border transition-colors"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              onClick={() => scrollByCard(1)}
              aria-label="Next testimonial"
              className="border-surface-border text-foreground/60 hover:bg-brand-50 hover:text-brand-700 flex h-11 w-11 items-center justify-center rounded-full border transition-colors"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        <motion.div
          ref={trackRef}
          onScroll={handleScroll}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex snap-x snap-mandatory [scrollbar-width:none] gap-5 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden"
        >
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="w-[85%] shrink-0 snap-start sm:w-[calc(50%-10px)]">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </motion.div>

        <div
          className="mt-2 flex justify-center gap-1.5"
          role="tablist"
          aria-label="Testimonial slides"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <span
              key={testimonial.id}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                index === activeIndex ? "bg-brand-600 w-6" : "bg-surface-border w-1.5",
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

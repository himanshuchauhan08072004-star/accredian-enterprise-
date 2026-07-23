"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AccordionItem } from "@/components/ui/AccordionItem";
import { Button } from "@/components/ui/Button";
import { FAQ_CATEGORIES, FAQ_ITEMS } from "@/constants/faq";
import { cn } from "@/lib/utils";
import type { FaqCategory } from "@/types";

export function Faq() {
  const [activeCategory, setActiveCategory] = useState<FaqCategory>("course");
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  const visibleItems = FAQ_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="faqs" aria-label="Frequently asked questions" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Got Questions"
          title={
            <>
              Frequently Asked{" "}
              <span className="from-brand-600 to-accent-600 bg-gradient-to-r bg-clip-text text-transparent">
                Questions
              </span>
            </>
          }
          align="left"
          className="mx-0"
        />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[0.32fr_0.68fr] lg:gap-12">
          {/* Category tabs */}
          <div
            role="tablist"
            aria-label="FAQ categories"
            className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
          >
            {FAQ_CATEGORIES.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveCategory(category.id);
                    const firstMatch = FAQ_ITEMS.find((item) => item.category === category.id);
                    setOpenId(firstMatch?.id ?? null);
                  }}
                  className={cn(
                    "relative shrink-0 rounded-xl px-5 py-3.5 text-left text-sm font-semibold whitespace-nowrap transition-colors duration-200",
                    isActive
                      ? "bg-brand-600 text-white shadow-[0_10px_24px_-10px_rgba(38,71,214,0.55)]"
                      : "bg-surface-muted text-foreground/60 hover:text-foreground",
                  )}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Accordion */}
          <div>
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col gap-3"
            >
              {visibleItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openId === item.id}
                  onToggle={() => setOpenId(openId === item.id ? null : item.id)}
                />
              ))}
            </motion.div>

            <Button href="#lead-form" size="lg" className="mt-8">
              Enquire Now
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

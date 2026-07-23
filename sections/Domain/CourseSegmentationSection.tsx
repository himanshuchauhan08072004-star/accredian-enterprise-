"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { COURSE_SEGMENTS } from "@/constants/courses";

export function CourseSegmentationSection() {
  return (
    <Container className="mt-24">
      <SectionHeading
        eyebrow="Course Catalog"
        title={
          <>
            Tailored Course{" "}
            <span className="from-brand-600 to-accent-600 bg-gradient-to-r bg-clip-text text-transparent">
              Segmentation
            </span>
          </>
        }
        description="Explore custom-fit courses designed to address every professional focus."
      />

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {COURSE_SEGMENTS.map((segment, index) => {
          const Icon = segment.icon;
          return (
            <motion.div
              key={segment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group border-surface-border overflow-hidden rounded-(--radius-card) border bg-white shadow-sm transition-shadow duration-300 hover:shadow-[0_20px_40px_-16px_rgba(38,71,214,0.3)]"
            >
              <div
                className={`flex h-32 items-center justify-center bg-gradient-to-br ${segment.gradient}`}
              >
                <Icon size={36} className="text-white/90" aria-hidden="true" />
              </div>
              <div className="p-5">
                <p className="text-foreground font-bold">{segment.title}</p>
                <p className="text-foreground/65 mt-1.5 text-sm leading-relaxed">
                  {segment.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Container>
  );
}

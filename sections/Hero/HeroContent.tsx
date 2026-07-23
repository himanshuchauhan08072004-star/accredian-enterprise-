"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CheckItem } from "@/components/ui/CheckItem";
import { HERO_HIGHLIGHTS, HERO_TRUST_LABEL } from "@/constants/hero";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export function HeroContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-start"
    >
      <motion.div variants={itemVariants}>
        <Badge icon={<Sparkles size={13} aria-hidden="true" />}>
          Enterprise Learning, Reimagined
        </Badge>
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="text-foreground mt-6 text-4xl leading-[1.08] font-extrabold tracking-tight sm:text-5xl lg:text-[3.4rem]"
      >
        Next-Gen{" "}
        <span className="from-brand-600 to-accent-600 bg-gradient-to-r bg-clip-text text-transparent">
          Expertise
        </span>{" "}
        For Your{" "}
        <span className="from-brand-600 to-accent-600 bg-gradient-to-r bg-clip-text text-transparent">
          Enterprise
        </span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-foreground/65 mt-6 max-w-lg text-lg leading-relaxed"
      >
        Cultivate high-performance teams through expert-led learning, built around the real problems
        your organization is solving right now.
      </motion.p>

      <motion.ul variants={itemVariants} className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5">
        {HERO_HIGHLIGHTS.map((label) => (
          <CheckItem key={label} label={label} />
        ))}
      </motion.ul>

      <motion.div variants={itemVariants} className="mt-9 flex flex-wrap items-center gap-4">
        <Button href="#lead-form" size="lg" icon={<ArrowRight size={18} aria-hidden="true" />}>
          Enquire Now
        </Button>
        <Button href="#edge" variant="secondary" size="lg">
          Explore the Edge
        </Button>
      </motion.div>

      <motion.p variants={itemVariants} className="text-foreground/40 mt-10 text-xs font-medium">
        {HERO_TRUST_LABEL}
      </motion.p>
    </motion.div>
  );
}

import { Container } from "@/components/ui/Container";
import { HeroContent } from "@/sections/Hero/HeroContent";
import { HeroVisual } from "@/sections/Hero/HeroVisual";

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative overflow-hidden pt-36 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Subtle backdrop grid for premium texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,var(--surface-border)_1px,transparent_0)] bg-[length:32px_32px] opacity-40"
      />
      <div
        aria-hidden="true"
        className="from-brand-50/80 via-brand-50/20 pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b to-transparent"
      />

      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <HeroContent />
        <HeroVisual />
      </Container>
    </section>
  );
}

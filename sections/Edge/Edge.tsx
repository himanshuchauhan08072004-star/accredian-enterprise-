import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EdgeTimelineDesktop } from "@/sections/Edge/EdgeTimelineDesktop";
import { EdgeTimelineMobile } from "@/sections/Edge/EdgeTimelineMobile";

export function Edge() {
  return (
    <section id="edge" aria-label="The Accredian Edge" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why Accredian"
          title={
            <>
              The Accredian{" "}
              <span className="from-brand-600 to-accent-600 bg-gradient-to-r bg-clip-text text-transparent">
                Edge
              </span>
            </>
          }
          description="Key aspects of our strategic training."
        />

        <div className="mt-16">
          <EdgeTimelineDesktop />
          <EdgeTimelineMobile />
        </div>
      </Container>
    </section>
  );
}

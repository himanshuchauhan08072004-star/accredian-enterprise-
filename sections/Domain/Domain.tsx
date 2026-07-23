import { DomainExpertiseSection } from "@/sections/Domain/DomainExpertiseSection";
import { CourseSegmentationSection } from "@/sections/Domain/CourseSegmentationSection";
import { SkillEnhancementSection } from "@/sections/Domain/SkillEnhancementSection";

export function Domain() {
  return (
    <section aria-label="Domain expertise and course offerings" className="py-20 sm:py-24">
      <DomainExpertiseSection />
      <CourseSegmentationSection />
      <SkillEnhancementSection />
    </section>
  );
}

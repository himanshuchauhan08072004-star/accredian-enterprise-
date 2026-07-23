"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DomainCard } from "@/components/ui/DomainCard";
import { DOMAIN_EXPERTISE } from "@/constants/domains";

export function DomainExpertiseSection() {
  const mainSix = DOMAIN_EXPERTISE.slice(0, 6);
  const featured = DOMAIN_EXPERTISE[6];

  return (
    <Container>
      <SectionHeading
        eyebrow="What We Cover"
        title={
          <>
            Our Domain{" "}
            <span className="from-brand-600 to-accent-600 bg-gradient-to-r bg-clip-text text-transparent">
              Expertise
            </span>
          </>
        }
        description="Specialized programs designed for full innovation."
      />

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mainSix.map((domain) => (
          <DomainCard key={domain.id} icon={domain.icon} title={domain.title} />
        ))}
      </div>

      {featured && (
        <div className="mt-4 flex justify-center">
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <DomainCard icon={featured.icon} title={featured.title} />
          </div>
        </div>
      )}
    </Container>
  );
}

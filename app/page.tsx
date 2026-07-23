import { Hero } from "@/sections/Hero/Hero";
import { Stats } from "@/sections/Stats/Stats";
import { Partners } from "@/sections/Partners/Partners";
import { Edge } from "@/sections/Edge/Edge";
import { Domain } from "@/sections/Domain/Domain";
import { CatFramework } from "@/sections/Cat/CatFramework";
import { HowWeDeliver } from "@/sections/Cat/HowWeDeliver";
import { Faq } from "@/sections/Faq/Faq";
import { Testimonials } from "@/sections/Testimonials/Testimonials";
import { LeadForm } from "@/sections/LeadForm/LeadForm";
import { Cta } from "@/sections/Cta/Cta";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Stats />
      <Partners />
      <Edge />
      <Domain />
      <CatFramework />
      <HowWeDeliver />
      <Faq />
      <Testimonials />
      <LeadForm />
      <Cta />
    </main>
  );
}

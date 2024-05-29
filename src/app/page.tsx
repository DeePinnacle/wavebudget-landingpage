import HeroSection from '@/components/sections/heropage'
import StepsSection from "@/components/sections/steps-section"
import ServicesSection from '@/components/sections/services-section'
import StnSection from '@/components/sections/stn-section'
import CTA from '@/components/sections/cta'
import FAQs from '@/components/sections/faq'
import TestimonialSection from '@/components/sections/testimony-section'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      {/* steps section */}
      <StepsSection />
      {/* services section */}
      <ServicesSection />
      {/* testimony section  */}
      <TestimonialSection />
      {/* stn section */}
      <StnSection />
      {/* cta section */}
      <CTA />
      {/* faqs section  */}
      <FAQs />
    </main>
  );
}

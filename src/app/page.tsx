import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroHome } from "@/components/sections/HeroHome";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { MetricsBar } from "@/components/sections/MetricsBar";
import { ClientWork } from "@/components/sections/ClientWork";
import { SolutionsPreview } from "@/components/sections/SolutionsPreview";
import { FeaturedCaseStudy } from "@/components/sections/FeaturedCaseStudy";
import { OurApproach } from "@/components/sections/OurApproach";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { CTABanner } from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroHome />
        <TrustSignals />
        <MetricsBar />
        <ClientWork />
        <SolutionsPreview />
        <FeaturedCaseStudy />
        <OurApproach />
        <TestimonialSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}

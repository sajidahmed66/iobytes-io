import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { HeroHome } from "@/components/sections/HeroHome";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { MetricsBar } from "@/components/sections/MetricsBar";

// Lazy load below-fold sections for better initial page load
const ClientWork = dynamic(() => import("@/components/sections/ClientWork").then(mod => mod.ClientWork));
const SolutionsPreview = dynamic(() => import("@/components/sections/SolutionsPreview").then(mod => mod.SolutionsPreview));
const FeaturedCaseStudy = dynamic(() => import("@/components/sections/FeaturedCaseStudy").then(mod => mod.FeaturedCaseStudy));
const OurApproach = dynamic(() => import("@/components/sections/OurApproach").then(mod => mod.OurApproach));
const TestimonialSection = dynamic(() => import("@/components/sections/TestimonialSection").then(mod => mod.TestimonialSection));
const CTABanner = dynamic(() => import("@/components/sections/CTABanner").then(mod => mod.CTABanner));
const Footer = dynamic(() => import("@/components/layout/Footer").then(mod => mod.Footer));

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

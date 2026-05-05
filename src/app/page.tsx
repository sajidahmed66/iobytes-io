import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroHome } from "@/components/sections/HeroHome";
import { SolutionsPreview } from "@/components/sections/SolutionsPreview";
import { CaseStudiesPreview } from "@/components/sections/CaseStudiesPreview";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { CTABanner } from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroHome />
        <SolutionsPreview />
        <CaseStudiesPreview />
        <TrustSignals />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}

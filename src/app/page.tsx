import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroHome } from "@/components/sections/HeroHome";
import { CapabilityMarquee } from "@/components/sections/CapabilityMarquee";
import { SolutionsPreview } from "@/components/sections/SolutionsPreview";
import { ClientWork } from "@/components/sections/ClientWork";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { CTABanner } from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroHome />
        <CapabilityMarquee />
        <SolutionsPreview />
        <ClientWork />
        <TrustSignals />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}

import dynamic from "next/dynamic";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { HeroHome } from "@/components/sections/HeroHome";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { MetricsBar } from "@/components/sections/MetricsBar";
import { JsonLd } from "@/components/shared/JsonLd";
import { withTrailingSlash } from "@/lib/seo";

export const metadata: Metadata = {
  title: "iobytes | Every byte engineered for impact",
  description:
    "We design, build, and ship custom software for B2B enterprises then stay accountable to the metrics that move your business.",
  alternates: {
    canonical: withTrailingSlash("/"),
  },
};

const websiteData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "iobytes",
  url: "https://iobytes.io",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://iobytes.io/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

// Lazy load below-fold sections for better initial page load
const ClientWork = dynamic(() =>
  import("@/components/sections/ClientWork").then((mod) => mod.ClientWork)
);
const SolutionsPreview = dynamic(() =>
  import("@/components/sections/SolutionsPreview").then((mod) => mod.SolutionsPreview)
);
const FeaturedCaseStudy = dynamic(() =>
  import("@/components/sections/FeaturedCaseStudy").then((mod) => mod.FeaturedCaseStudy)
);
const OurApproach = dynamic(() =>
  import("@/components/sections/OurApproach").then((mod) => mod.OurApproach)
);
const TestimonialSection = dynamic(() =>
  import("@/components/sections/TestimonialSection").then((mod) => mod.TestimonialSection)
);
const CTABanner = dynamic(() =>
  import("@/components/sections/CTABanner").then((mod) => mod.CTABanner)
);
const Footer = dynamic(() => import("@/components/layout/Footer").then((mod) => mod.Footer));

export default function Home() {
  return (
    <>
      <JsonLd data={websiteData} />
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

import dynamic from "next/dynamic";
import { Container, SectionHeader } from "@/components/ui";
import { Navbar } from "@/components/layout/Navbar";
import { caseStudies } from "@/lib/data/case-studies";
import { CaseStudiesList } from "@/components/shared/CaseStudiesList";
import { Metadata } from "next";

const Footer = dynamic(() => import("@/components/layout/Footer").then(mod => mod.Footer));

export const metadata: Metadata = {
  title: "Portfolio & ROI Proof | iobytes",
  description: "Real outcomes for real enterprises. Verified metrics and attributable results.",
};

export default function PortfolioIndex() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-cream min-h-screen">
        <Container>
          <SectionHeader
            eyebrow="PROOF"
            headline="The Numbers We Hit"
            subheadline="Every metric verified. Every outcome attributable."
            className="mb-12"
          />

          <CaseStudiesList studies={caseStudies} />
        </Container>
      </main>
      <Footer />
    </>
  );
}

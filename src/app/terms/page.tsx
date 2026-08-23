import dynamic from "next/dynamic";
import { Metadata } from "next";
import { Container, GlassCard, SectionHeader } from "@/components/ui";
import { Navbar } from "@/components/layout/Navbar";
import { withTrailingSlash } from "@/lib/seo";

const Footer = dynamic(() => import("@/components/layout/Footer").then((mod) => mod.Footer));

export const metadata: Metadata = {
  title: "Terms of Service | iobytes",
  description: "Terms governing use of the iobytes website and contact forms.",
  alternates: {
    canonical: withTrailingSlash("/terms"),
  },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-cream min-h-screen">
        <Container>
          <SectionHeader
            eyebrow="LEGAL"
            headline="Terms of Service"
            subheadline="Basic terms for using the iobytes website."
            className="mb-12"
          />

          <div className="max-w-3xl space-y-6 text-soft-ink leading-relaxed">
            <GlassCard padding="comfortable">
              <p>
                This website is provided for informational and contact purposes. Content may change over time without notice.
              </p>
            </GlassCard>
            <GlassCard padding="comfortable">
              <p>
                Do not submit confidential, regulated, or mission-critical information through the contact form unless we have agreed in writing to handle it.
              </p>
            </GlassCard>
            <GlassCard padding="comfortable">
              <p>
                Use of this site implies acceptance of these terms and any updates we post in the future.
              </p>
            </GlassCard>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

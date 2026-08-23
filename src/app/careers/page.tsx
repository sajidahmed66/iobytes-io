import dynamic from "next/dynamic";
import Link from "next/link";
import { Metadata } from "next";
import { Container, GlassCard, SectionHeader, AnimatedButton } from "@/components/ui";
import { Navbar } from "@/components/layout/Navbar";
import { withTrailingSlash } from "@/lib/seo";

const Footer = dynamic(() => import("@/components/layout/Footer").then((mod) => mod.Footer));

export const metadata: Metadata = {
  title: "Careers | iobytes",
  description: "Join iobytes and help build outcome-driven software for ambitious enterprises.",
  alternates: {
    canonical: withTrailingSlash("/careers"),
  },
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-cream min-h-screen">
        <Container>
          <SectionHeader
            eyebrow="CAREERS"
            headline="Build What Matters"
            subheadline="We hire people who care about product outcomes, clean systems, and shipping work that changes the numbers."
            className="mb-12"
          />

          <div className="max-w-3xl space-y-6">
            <GlassCard padding="comfortable">
              <p className="text-soft-ink leading-relaxed">
                We do not have a public openings board yet, but we are always happy to hear from engineers, designers, and operators who like ownership.
              </p>
            </GlassCard>
            <GlassCard padding="comfortable">
              <p className="text-soft-ink leading-relaxed">
                If you want to introduce yourself, send a short note to{" "}
                <a href="mailto:contact@iobytes.io" className="text-electric font-semibold">
                  contact@iobytes.io
                </a>
                .
              </p>
            </GlassCard>
            <AnimatedButton asChild>
              <Link href="/contact/">Talk to the team</Link>
            </AnimatedButton>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

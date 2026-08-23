import dynamic from "next/dynamic";
import { Metadata } from "next";
import { Container, GlassCard, SectionHeader } from "@/components/ui";
import { Navbar } from "@/components/layout/Navbar";
import { withTrailingSlash } from "@/lib/seo";

const Footer = dynamic(() => import("@/components/layout/Footer").then((mod) => mod.Footer));

export const metadata: Metadata = {
  title: "Privacy Policy | iobytes",
  description: "How iobytes handles data, cookies, and contact form submissions.",
  alternates: {
    canonical: withTrailingSlash("/privacy"),
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-cream min-h-screen">
        <Container>
          <SectionHeader
            eyebrow="LEGAL"
            headline="Privacy Policy"
            subheadline="How we handle information shared with iobytes."
            className="mb-12"
          />

          <div className="max-w-3xl space-y-6 text-soft-ink leading-relaxed">
            <GlassCard padding="comfortable">
              <p>
                We only collect information that helps us respond to inquiries, evaluate project fit, and improve the site experience.
                That can include contact details, message content, and standard analytics data.
              </p>
            </GlassCard>
            <GlassCard padding="comfortable">
              <p>
                Contact form submissions are used to respond to your request and may be stored for internal follow-up.
                We do not sell personal information.
              </p>
            </GlassCard>
            <GlassCard padding="comfortable">
              <p>
                If you have questions about this policy, reach out at <a href="mailto:contact@iobytes.io" className="text-electric font-semibold">contact@iobytes.io</a>.
              </p>
            </GlassCard>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

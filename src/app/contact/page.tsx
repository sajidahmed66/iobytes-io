import { Container, SectionHeader, GlassCard } from "@/components/ui";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/shared/ContactForm";
import { Mail, MapPin, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a Project",
  description: "Let's engineer your next outcome. Response within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-cream min-h-screen">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column */}
            <div className="space-y-12">
              <SectionHeader
                eyebrow="GET IN TOUCH"
                headline="Let&apos;s Engineer Your Next Outcome"
                subheadline="Tell us what you&apos;re trying to move. We&apos;ll tell you how we&apos;d move it."
              />

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-electric/10 text-electric">
                    <Mail size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-soft-ink mb-1">Email</h4>
                    <a href="mailto:hello@iobytes.io" className="text-xl font-bold text-ink hover:text-electric transition-colors">
                      hello@iobytes.io
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-electric/10 text-electric">
                    <MapPin size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-soft-ink mb-1">Location</h4>
                    <p className="text-xl font-bold text-ink">Remote / Global</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-electric/10 text-electric">
                    <Clock size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-soft-ink mb-1">Response Time</h4>
                    <p className="text-xl font-bold text-ink">Within 24 hours</p>
                  </div>
                </div>
              </div>

              <GlassCard padding="comfortable" className="bg-ink text-cream border-ink">
                <p className="text-lg font-medium leading-relaxed">
                  &ldquo;The fastest way to understand if we&apos;re the right partner is a direct engineering conversation. No sales decks, just problem-solving.&rdquo;
                </p>
              </GlassCard>
            </div>

            {/* Right Column */}
            <GlassCard padding="comfortable" glow className="lg:mt-8">
              <ContactForm />
            </GlassCard>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

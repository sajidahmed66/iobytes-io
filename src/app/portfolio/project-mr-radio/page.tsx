import { Container, AnimatedButton, AnimatedCounter, GlassCard } from "@/components/ui";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/sections/CTABanner";
import { CheckCircle2, Radio, Ship, Globe, Zap, Network } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Mr. Radio | Maritime Surveillance Case Study | iobytes",
  description: "Advancing maritime surveillance via open-source AIS network engineering in the Bay of Bengal.",
};

export default function ProjectMrRadioPage() {
  const techStack = [
    "AIS Receivers", "VHF Radio", "NMEA Protocol", "RF Telemetry", 
    "Edge Computing", "Python", "Automated Data Pipelines", 
    "Network Resilience", "Open-Source Hardware", "Coastal Infrastructure"
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-cream min-h-screen">
        {/* Hero Section */}
        <section className="py-24 border-b border-warm-gray/20">
          <Container>
            <div className="max-w-4xl">
              <div className="inline-block px-3 py-1 bg-electric/10 rounded-full mb-6">
                <span className="text-[12px] font-bold uppercase tracking-wider text-electric">
                  MARITIME INTELLIGENCE
                </span>
              </div>
              <p className="text-soft-ink font-bold mb-4">Project Mr. Radio</p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-ink mb-6">
                Advancing maritime surveillance via <span className="text-electric">open-source AIS</span> network engineering
              </h1>
              <p className="text-xl md:text-2xl text-soft-ink max-w-3xl leading-relaxed">
                Engineering terrestrial AIS stations to capture and broadcast real-time vessel data from the high-density shipping lanes of the Bay of Bengal.
              </p>
            </div>
          </Container>
        </section>

        <Container className="py-24">
          <div className="max-w-3xl mx-auto space-y-24">
            {/* Challenge */}
            <section>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Radio className="text-electric" />
                Challenge
              </h2>
              <div className="prose prose-lg text-soft-ink leading-relaxed">
                <p>
                  Global maritime transparency depends on accurate, real-time vessel tracking &mdash; yet vast coastal regions remain data black zones. The Bay of Bengal, one of the world&apos;s busiest shipping corridors, lacked sufficient terrestrial AIS coverage to support international search-and-rescue operations, logistics optimization, and maritime compliance.
                </p>
                <p className="mt-4">
                  Existing satellite AIS systems couldn&apos;t provide the granular, high-frequency updates needed for vessels near shore. A dedicated terrestrial network was required, built from the ground up in a challenging coastal environment with unreliable power and connectivity.
                </p>
              </div>
            </section>

            {/* Approach */}
            <section>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Ship className="text-electric" />
                Approach
              </h2>
              <div className="prose prose-lg text-soft-ink leading-relaxed mb-8">
                <p>
                  iobytes partnered with AISHub under the strategic initiative Project Mr. Radio to engineer, deploy, and maintain open-source terrestrial AIS stations across the Bangladesh coastline.
                </p>
              </div>
              
              <GlassCard padding="comfortable" className="bg-ink/5 border-ink/5 mb-12">
                <h3 className="text-xl font-bold mb-6 text-ink">Current deployment &mdash; Chittagong Base Station:</h3>
                <ul className="space-y-4">
                  {[
                    "High-availability terrestrial AIS base station strategically positioned at Bangladesh's primary maritime hub",
                    "Continuous VHF decoding: High-frequency radio gateway continuously decoding marine signals from incoming and anchored commercial vessels",
                    "Global data ingestion: Raw spatial data piped directly and securely to the AISHub global repository"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-electric shrink-0 mt-1" size={20} />
                      <span className="text-soft-ink">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>

              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Zap className="text-electric" size={24} />
                Technical Architecture
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-white rounded-2xl border border-warm-gray/20">
                  <h4 className="font-bold mb-3 text-ink">Hardware &amp; RF Telemetry</h4>
                  <p className="text-sm text-soft-ink">Robust open-source AIS receiver configurations optimized for high-gain VHF reception to counter marine signal attenuation.</p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-warm-gray/20">
                  <h4 className="font-bold mb-3 text-ink">Resilient Data Pipelines</h4>
                  <p className="text-sm text-soft-ink">Automated telemetry scripts extracting, parsing, and transmitting NMEA data sentences &mdash; sub-second ingestion with zero packet loss.</p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-warm-gray/20 md:col-span-2">
                  <h4 className="font-bold mb-3 text-ink">Edge Reliability</h4>
                  <p className="text-sm text-soft-ink">Low-power edge hardware configured to handle local network drops and power fluctuations typical of coastal environments without data corruption.</p>
                </div>
              </div>
            </section>

            {/* Expansion Roadmap */}
            <section>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Network className="text-electric" />
                Expansion Roadmap
              </h2>
              
              <div className="space-y-12">
                <div className="relative pl-8 border-l-2 border-electric/20">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-electric" />
                  <h3 className="text-xl font-bold mb-4 text-ink">Phase 2 &mdash; National Grid Expansion</h3>
                  <ul className="space-y-2 text-soft-ink">
                    <li>&bull; Deployment of 5 to 10 additional terrestrial AIS stations along critical coastal nodes</li>
                    <li>&bull; Complete elimination of black zones in the Northern Bay of Bengal</li>
                    <li>&bull; High-fidelity coverage for the region&apos;s densest shipping corridors</li>
                  </ul>
                </div>

                <div className="relative pl-8 border-l-2 border-electric/20">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-warm-gray" />
                  <h3 className="text-xl font-bold mb-4 text-ink">Phase 3 &mdash; Global Enterprise Partnerships</h3>
                  <ul className="space-y-2 text-soft-ink">
                    <li>&bull; Strategic partnerships with international maritime leaders and shipping conglomerates</li>
                    <li>&bull; Integration of terrestrial data feeds into global ship visibility pipelines</li>
                    <li>&bull; Establishing the definitive AIS network infrastructure for South Asian maritime intelligence</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Results */}
            <section>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Globe className="text-electric" />
                Results
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div className="p-6 bg-ink/5 rounded-2xl border border-ink/5">
                  <div className="text-4xl font-bold text-electric mb-1 font-mono">
                    <AnimatedCounter target={1} prefix="<" suffix="s" />
                  </div>
                  <div className="text-sm font-bold uppercase tracking-widest text-soft-ink">
                    Data Ingestion
                  </div>
                </div>
                <div className="p-6 bg-ink/5 rounded-2xl border border-ink/5">
                  <div className="text-4xl font-bold text-electric mb-1 font-mono">
                    <AnimatedCounter target={100} suffix="%" />
                  </div>
                  <div className="text-sm font-bold uppercase tracking-widest text-soft-ink">
                    Packet Integrity
                  </div>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  "Sub-second data ingestion with zero packet loss from coastal AIS stations",
                  "Continuous VHF signal decoding from high-density commercial shipping lanes",
                  "Global data contribution to AISHub international vessel tracking",
                  "Regional maritime safety boost through elimination of tracking black zones"
                ].map((result, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-electric shrink-0 mt-1" size={20} />
                    <span className="text-soft-ink">{result}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Tech Stack */}
            <section>
              <h3 className="text-sm font-bold uppercase tracking-widest text-soft-ink mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span key={tech} className="text-[12px] font-bold uppercase tracking-widest bg-ink/5 px-3 py-1.5 rounded-full text-soft-ink">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Testimonial */}
            <section>
              <GlassCard padding="comfortable" className="relative">
                <blockquote className="text-xl font-medium text-ink leading-relaxed mb-6 italic">
                  &ldquo;Through Project, iobytes bridges local RF engineering with global maritime intelligence. Their Chittagong station feeds real-time data into our global repository, directly improving search-and-rescue visibility and international vessel tracking accuracy.&rdquo;
                </blockquote>
                <cite className="not-italic block font-bold text-soft-ink">
                  &mdash; AISHub Partnership Team
                </cite>
              </GlassCard>
            </section>
          </div>
        </Container>

        {/* Bottom CTA */}
        <section className="py-24 bg-ink text-cream text-center">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Engineer Your Network?</h2>
              <p className="text-cream/60 text-lg md:text-xl mb-10">
                Let&apos;s build infrastructure that connects local data to global intelligence.
              </p>
              <AnimatedButton size="lg" asChild>
                <Link href="/contact">Start a Project</Link>
              </AnimatedButton>
            </div>
          </Container>
        </section>
        
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}

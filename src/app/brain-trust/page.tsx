import { Container, SectionHeader, GlassCard } from "@/components/ui";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { teamData } from "@/lib/data/team";
import { TeamCard } from "@/components/shared/TeamCard";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Brain Trust | iobytes",
  description: "Meet the engineers behind your outcomes. Verified builders with measurable track records.",
};

export default function BrainTrustPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-cream min-h-screen">
        <Container>
          {/* Section 1: Page Header */}
          <SectionHeader
            eyebrow="THE BRAIN TRUST"
            headline="Meet the Engineers Behind Your Outcomes"
            subheadline="Verified builders. Measurable track records."
            className="mb-20 md:mb-32"
          />

          {/* Section 2: Board of Directors */}
          <section className="mb-24 md:mb-32">
            <SectionHeader
              eyebrow="BOARD OF DIRECTORS"
              headline="Governance & Strategic Oversight"
              align="left"
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {teamData.board.map((member, i) => (
                <TeamCard
                  key={`board-${member.name}`}
                  {...member}
                  delay={i * 0.1}
                />
              ))}
            </div>
          </section>

          {/* Section 3: Consultants */}
          <section className="mb-24 md:mb-32">
            <SectionHeader
              eyebrow="CONSULTANTS"
              headline="Specialist Expertise on Demand"
              align="left"
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {teamData.consultants.map((member, i) => (
                <TeamCard
                  key={`consultant-${member.name}`}
                  {...member}
                  showStackOverflow
                  delay={i * 0.1}
                />
              ))}
            </div>
          </section>

          {/* Section 4: Leadership Team */}
          <section className="mb-24 md:mb-32">
            <SectionHeader
              eyebrow="LEADERSHIP TEAM"
              headline="The Engineers Behind Your Outcomes"
              align="left"
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {teamData.leadership.map((member, i) => (
                <TeamCard
                  key={`leadership-${member.name}`}
                  {...member}
                  showStackOverflow
                  delay={i * 0.05}
                />
              ))}
            </div>
          </section>

          {/* Section 5: Join CTA */}
          <div className="mt-20">
            <GlassCard padding="comfortable" className="bg-ink text-cream border-ink overflow-hidden relative group">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric/10 blur-[120px] rounded-full -mr-64 -mt-64 transition-transform duration-1000 group-hover:scale-110" />
              
              <div className="relative z-10 py-12 md:py-16 text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Join the Brain Trust</h2>
                <p className="text-cream/70 text-lg md:text-xl mb-10">
                  We hire engineers who care about outcomes, not just output. If you have a track record of delivering measurable impact, we want to talk.
                </p>
                <Link 
                  href="/contact?subject=careers"
                  className="inline-flex items-center gap-2 bg-electric text-ink px-8 py-4 rounded-full font-bold text-lg hover:bg-electric/90 transition-all hover:scale-105 active:scale-95"
                >
                  View Open Roles
                  <ArrowRight size={20} />
                </Link>
              </div>
            </GlassCard>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

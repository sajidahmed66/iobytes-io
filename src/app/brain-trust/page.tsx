import { Container, SectionHeader, GlassCard, AnimatedButton } from "@/components/ui";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { team } from "@/lib/data/team";
import { Linkedin, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Brain Trust",
  description: "Meet the engineers behind your outcomes. Verified builders with measurable track records.",
};

export default function BrainTrustPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-cream min-h-screen">
        <Container>
          <SectionHeader
            eyebrow="THE BRAIN TRUST"
            headline="Meet the Engineers Behind Your Outcomes"
            subheadline="Verified builders. Measurable track records."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {team.map((member) => (
              <GlassCard key={member.name} padding="comfortable" glow className="group">
                <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-2xl bg-ink/5">
                  {/* Placeholder for images */}
                  <div className="absolute inset-0 flex items-center justify-center text-ink/10 font-bold text-4xl uppercase tracking-widest">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="absolute inset-0 bg-ink/5 group-hover:bg-transparent transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold text-ink mb-1">{member.name}</h3>
                <p className="text-soft-ink mb-4 font-medium">{member.role}</p>
                
                <div className="text-electric font-mono font-bold mb-6 text-lg">
                  {member.metric}
                </div>
                
                <p className="text-soft-ink text-sm leading-relaxed mb-8 flex-grow">
                  {member.bio}
                </p>

                <div className="flex items-center gap-4 border-t border-warm-gray pt-6">
                  {member.linkedin && (
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-soft-ink hover:text-electric transition-colors"
                    >
                      <Linkedin size={20} strokeWidth={1.5} />
                    </a>
                  )}
                  {member.stackoverflow && (
                    <a 
                      href={member.stackoverflow} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-soft-ink hover:text-electric transition-colors"
                    >
                      <Github size={20} strokeWidth={1.5} />
                    </a>
                  )}
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Hiring CTA */}
          <GlassCard padding="comfortable" className="bg-ink text-cream border-ink text-center max-w-4xl mx-auto py-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Join the Brain Trust</h2>
            <p className="text-cream/60 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              We hire engineers who care about outcomes, not just output.
            </p>
            <AnimatedButton asChild>
              <Link href="/contact?subject=Careers">View Open Roles</Link>
            </AnimatedButton>
          </GlassCard>
        </Container>
      </main>
      <Footer />
    </>
  );
}

import dynamic from "next/dynamic";
import { Container, SectionHeader } from "@/components/ui";
import { Navbar } from "@/components/layout/Navbar";
import { TeamBoard } from "@/components/sections/TeamBoard";
import { TeamStats } from "@/components/sections/TeamStats";
import { Metadata } from "next";

// Lazy load below-fold sections
const TeamLeadership = dynamic(() => import("@/components/sections/TeamLeadership").then(mod => mod.TeamLeadership));
const TeamConsultants = dynamic(() => import("@/components/sections/TeamConsultants").then(mod => mod.TeamConsultants));
const TeamJoinCTA = dynamic(() => import("@/components/sections/TeamJoinCTA").then(mod => mod.TeamJoinCTA));
const Footer = dynamic(() => import("@/components/layout/Footer").then(mod => mod.Footer));

export const metadata: Metadata = {
  title: "Our Engineering Team | iobytes",
  description: "Meet the outcome engineers behind your software. A team obsessed with business metrics, not just lines of code.",
  alternates: {
    canonical: "https://iobytes.io/team/",
  },
};

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-cream min-h-screen">
        <Container>
          {/* Header */}
          <SectionHeader
            eyebrow="THE TEAM"
            headline="Engineers Who Ship Results"
            subheadline="Our team doesn't just write code we obsess over the numbers that matter to your business. Revenue increased. Costs reduced. Time-to-market compressed. Every person here has a track record of turning technical work into measurable wins."
            align="left"
            className="mb-12"
          />

          {/* Stats Bar */}
          <TeamStats />

          {/* Sections: Board → Leadership → Consultants → CTA */}
          <TeamBoard />
          <TeamLeadership />
          <TeamConsultants />
          <TeamJoinCTA />
        </Container>
      </main>
      <Footer />
    </>
  );
}

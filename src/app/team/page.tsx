import dynamic from "next/dynamic";
import { Container, SectionHeader } from "@/components/ui";
import { Navbar } from "@/components/layout/Navbar";
import { TeamBoard } from "@/components/sections/TeamBoard";
import { Metadata } from "next";

// Lazy load below-fold sections
const TeamConsultants = dynamic(() => import("@/components/sections/TeamConsultants").then(mod => mod.TeamConsultants));
const TeamLeadership = dynamic(() => import("@/components/sections/TeamLeadership").then(mod => mod.TeamLeadership));
const TeamJoinCTA = dynamic(() => import("@/components/sections/TeamJoinCTA").then(mod => mod.TeamJoinCTA));
const Footer = dynamic(() => import("@/components/layout/Footer").then(mod => mod.Footer));

export const metadata: Metadata = {
  title: "Our Team | iobytes",
  description: "Meet the team behind your outcomes. Verified builders with measurable track records.",
};

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-cream min-h-screen">
        <Container>
          {/* Header */}
          <SectionHeader
            eyebrow="OUR PEOPLE"
            headline="Meet the Team Behind Your Outcomes"
            subheadline="Verified builders. Measurable track records."
            className="mb-20 md:mb-32"
          />

          <TeamBoard />
          <TeamConsultants />
          <TeamLeadership />
          <TeamJoinCTA />
        </Container>
      </main>
      <Footer />
    </>
  );
}

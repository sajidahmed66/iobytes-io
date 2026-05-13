import { Container, SectionHeader } from "@/components/ui";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TeamBoard } from "@/components/sections/TeamBoard";
import { TeamConsultants } from "@/components/sections/TeamConsultants";
import { TeamLeadership } from "@/components/sections/TeamLeadership";
import { TeamJoinCTA } from "@/components/sections/TeamJoinCTA";
import { Metadata } from "next";

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

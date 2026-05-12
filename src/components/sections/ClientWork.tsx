"use client";

import { Container, SectionHeader } from "@/components/ui";
import { ClientCard } from "@/components/shared/ClientCard";

export function ClientWork() {
  return (
    <section className="bg-ink py-24 md:py-[96px] overflow-hidden">
      <Container>
        <SectionHeader
          eyebrow="OUR CLIENT'S WORK"
          headline="The Numbers We Hit"
          subheadline="Real outcomes for real enterprises. Every metric verified."
          align="center"
          theme="dark"
          className="mb-16 md:mb-24"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <ClientCard
            logo="/agroshift.avif"
            industry="AGRICULTURE"
            headline="Faster supply chain visibility from farm to shelf"
            description="End-to-end agricultural logistics platform connecting farmers, distributors, and retailers with real-time inventory tracking."
            metric="3× faster traceability"
            href="/portfolio/agroshift"
            delay={0}
          />
          <ClientCard
            logo="/factorynext.png"
            industry="INDUSTRIAL AUTOMATION"
            headline="35% increase in operational efficiency"
            description="Unified digital command center for industrial automation. Eliminated hardware silos and transitioned isolated systems into a fully integrated Industry 4.0 ecosystem."
            metric="35% operational efficiency"
            href="/portfolio/factorynext"
            delay={0.15}
          />
          <ClientCard
            logo="/bat-bangladesh-logo.png"
            industry="ENVIRONMENTAL MONITORING"
            headline="Real-time environmental intelligence across industrial operations"
            description="End-to-end sensor telemetry platform that transforms raw environmental data into automated alerts, compliance-ready analytics, and 24/7 operational transparency."
            metric="24/7 sensor coverage"
            href="/portfolio/bat"
            delay={0.3}
          />
        </div>
      </Container>
    </section>
  );
}

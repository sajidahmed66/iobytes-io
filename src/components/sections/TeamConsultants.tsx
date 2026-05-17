"use client";

import { SectionHeader } from "@/components/ui";
import { TeamCard } from "@/components/shared/TeamCard";
import { teamData } from "@/lib/data/team";

export function TeamConsultants() {
  return (
    <section className="mb-24 md:mb-32">
      <SectionHeader
        eyebrow="CONSULTANTS"
        headline="Expert Network"
        align="left"
        className="mb-12"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {teamData.consultants.map((member, i) => (
          <TeamCard
            key={`consultant-${member.name}`}
            {...member}
            size="compact"
            showStackOverflow
            delay={i * 0.1}
          />
        ))}
      </div>
    </section>
  );
}

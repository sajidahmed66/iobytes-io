"use client";

import { SectionHeader } from "@/components/ui";
import { TeamCard } from "@/components/shared/TeamCard";
import { teamData } from "@/lib/data/team";

export function TeamLeadership() {
  return (
    <section className="mb-24 md:mb-32">
      <SectionHeader
        eyebrow="LEADERSHIP TEAM"
        headline="Building What Matters"
        align="left"
        className="mb-12"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {teamData.leadership.map((member, i) => (
          <TeamCard
            key={`leadership-${member.name}`}
            {...member}
            size="large"
            showStackOverflow
            delay={i * 0.05}
          />
        ))}
      </div>
    </section>
  );
}

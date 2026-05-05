"use client";

import { useState } from "react";
import { GlassCard, Button } from "@/components/ui";
import { CaseStudy } from "@/types";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const industries = ["All", "Manufacturing", "Agriculture", "Industrial", "Healthcare", "Retail"];

export function CaseStudiesList({ studies }: { studies: CaseStudy[] }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredStudies = studies.filter(
    (study) => activeFilter === "All" || study.industry.includes(activeFilter) || study.industry === activeFilter
  );

  return (
    <>
      {/* Filter Bar */}
      <div className="flex flex-wrap gap-2 mb-16">
        {industries.map((industry) => (
          <Button
            key={industry}
            variant={activeFilter === industry ? "primary" : "ghost"}
            size="sm"
            onClick={() => setActiveFilter(industry)}
            className={activeFilter === industry ? "px-6" : "text-soft-ink hover:text-ink"}
          >
            {industry}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredStudies.map((study) => (
          <Link key={study.slug} href={`/case-studies/${study.slug}`} className="block group">
            <GlassCard glow padding="comfortable" className="h-full flex flex-col hover:shadow-lg">
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-soft-ink">
                  {study.client}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-ink/5 px-2 py-0.5 rounded-full text-soft-ink">
                  {study.industry}
                </span>
              </div>

              <h3 className="text-3xl font-bold text-electric font-mono mb-2">
                {study.metric}
              </h3>
              <p className="text-xl font-bold text-ink mb-4">
                {study.outcome}
              </p>
              
              <p className="text-soft-ink mb-8 flex-grow">
                {study.teaser}
              </p>

              <div className="flex items-center text-sm font-bold text-ink group-hover:text-electric transition-colors">
                Read case study 
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </GlassCard>
          </Link>
        ))}
      </div>
    </>
  );
}

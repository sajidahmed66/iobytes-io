"use client";

import { useState } from "react";
import { GlassCard, Button } from "@/components/ui";
import { CaseStudy } from "@/types";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { blurDataURL } from "@/lib/image-utils";

const industries = ["All", "Manufacturing", "Agriculture", "Industrial", "Healthcare", "Retail", "IT COMPANY", "SOCIAL COMMERCE", "POLITICAL TECH", "MARITIME INTELLIGENCE"];

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
          <Link key={study.slug} href={`/portfolio/${study.slug}/`} className="block group">
            <GlassCard glow padding="comfortable" className="h-full flex flex-col hover:shadow-lg">
              <div className="flex justify-between items-start mb-6">
                <div className="space-y-4">
                  {study.logo ? (
                    <div className="h-8 relative w-24 invert brightness-[200%] contrast-[150%] grayscale">
                      <Image
                        src={study.logo}
                        alt={`${study.client} logo`}
                        fill
                        className="object-contain object-left"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                      />
                    </div>
                  ) : (
                    <span className="text-xs font-bold uppercase tracking-widest text-soft-ink">
                      {study.client}
                    </span>
                  )}
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-ink/5 px-2 py-0.5 rounded-full text-soft-ink block w-fit">
                    {study.industry}
                  </span>
                </div>
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

              <div className="flex items-center text-sm font-semibold text-ink group-hover:text-electric transition-colors">
                Read story 
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </GlassCard>
          </Link>
        ))}
      </div>
    </>
  );
}

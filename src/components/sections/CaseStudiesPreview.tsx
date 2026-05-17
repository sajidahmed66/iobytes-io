"use client";

import { motion } from "framer-motion";
import { Container, SectionHeader, GlassCard, AnimatedButton, AnimatedCounter, badgeVariants } from "@/components/ui";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const caseStudies = [
  {
    client: "BAT",
    metric: "40% efficiency increase",
    outcome: "in order processing",
    industry: "Manufacturing",
    href: "/portfolio/bat",
  },
  {
    client: "Agroshift",
    metric: "3x faster visibility",
    outcome: "in supply chain",
    industry: "Agriculture",
    href: "/portfolio/agroshift",
  },
  {
    client: "Factorynext",
    metric: "$2.3M cost avoidance",
    outcome: "per annum",
    industry: "Industrial IoT",
    href: "/portfolio/factorynext",
  },
];

const stats = [
  { target: 40, suffix: "+", label: "Projects Delivered" },
  { target: 50, prefix: "$", suffix: "M+", label: "Client Value Created" },
  { target: 99.9, suffix: "%", label: "Uptime SLA" },
];

export function CaseStudiesPreview() {
  return (
    <section id="case-studies" className="py-24 bg-ink text-cream">
      <Container>
        <SectionHeader
          eyebrow="PROOF"
          headline="The Numbers We Hit"
          subheadline="Real outcomes for real enterprises. Every metric is verified and attributable."
          className="mb-16"
          eyebrowColor="electric"
        />

        <style jsx global>{`
          #case-studies h2, #case-studies p {
            color: #FAF9F6;
          }
          #case-studies .text-soft-ink {
            color: rgba(250, 249, 246, 0.6);
          }
        `}</style>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard 
                glow 
                padding="comfortable" 
                className="bg-cream/5 border-cream/10 h-full flex flex-col group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-sm font-bold tracking-widest uppercase opacity-60">
                    {study.client}
                  </span>
                  <div className={cn(badgeVariants({ variant: "outline" }), "border-electric text-electric rounded-full text-[10px] py-0 px-2 uppercase font-bold")}>
                    {study.industry}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">
                  <span className="text-electric">{study.metric}</span>
                  <br />
                  <span className="text-cream/90">{study.outcome}</span>
                </h3>

                <div className="mt-auto pt-8 flex items-center text-sm font-semibold group-hover:text-electric transition-colors">
                  Read story
                  <ArrowUpRight size={16} className="ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 py-16 border-y border-cream/10 text-center mb-16">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-bold text-electric mb-2">
                <AnimatedCounter 
                  target={stat.target} 
                  prefix={stat.prefix} 
                  suffix={stat.suffix} 
                />
              </div>
              <p className="text-sm font-medium uppercase tracking-widest text-cream/40">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <AnimatedButton size="lg" asChild>
            <Link href="/portfolio">View All Case Studies</Link>
          </AnimatedButton>
        </div>
      </Container>
    </section>
  );
}

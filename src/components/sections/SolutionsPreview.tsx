"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container, SectionHeader, GlassCard, AnimatedButton } from "@/components/ui";
import { Workflow, Link as LinkIcon, Cloud, Code, Database, RefreshCw, ArrowRight } from "lucide-react";
import Link from "next/link";
import { staggerContainer, itemVariants } from "@/lib/animations";

const solutions = [
  {
    title: "Workflow Automation",
    description: "Automate the repetitive. Reclaim 30% of your team's week.",
    icon: Workflow,
    href: "/solutions#automation",
  },
  {
    title: "System Integration",
    description: "Connect your silos. One source of truth, zero data drift.",
    icon: LinkIcon,
    href: "/solutions#integration",
  },
  {
    title: "Cloud Infrastructure",
    description: "Scale without breaking. Architecture that grows with your revenue.",
    icon: Cloud,
    href: "/solutions#cloud",
  },
  {
    title: "Custom Software",
    description: "Bespoke tools for bespoke problems. No workarounds, no compromises.",
    icon: Code,
    href: "/solutions#custom",
    featured: true,
  },
  {
    title: "Data Engineering",
    description: "Turn raw data into board-ready insights. Fast.",
    icon: Database,
    href: "/solutions#data",
  },
  {
    title: "Legacy Modernization",
    description: "Upgrade without the downtime. Migrate with confidence.",
    icon: RefreshCw,
    href: "/solutions#modernization",
  },
];

export function SolutionsPreview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 bg-cream">
      <Container>
        <SectionHeader
          eyebrow="CAPABILITIES"
          headline="Built to Move Your Numbers"
          subheadline="Every solution is engineered for a specific business outcome—not just shipped and forgotten."
          className="mb-16"
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {solutions.map((solution) => (
            <motion.div
              key={solution.title}
              variants={itemVariants}
              className={solution.featured ? "lg:col-span-2" : ""}
            >
              <GlassCard glow padding="comfortable" className="h-full flex flex-col">
                <div className="p-3 rounded-xl bg-electric/10 w-fit mb-6">
                  <solution.icon className="text-electric" size={24} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">{solution.title}</h3>
                <p className="text-soft-ink mb-8 flex-grow">{solution.description}</p>
                <Link 
                  href={solution.href} 
                  className="inline-flex items-center text-sm font-bold text-ink hover:text-electric transition-colors group"
                  aria-label={`Learn more about ${solution.title}`}
                >
                  Learn more 
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <AnimatedButton variant="secondary" asChild>
            <Link href="/solutions">Explore All Solutions</Link>
          </AnimatedButton>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui";
import { Workflow, Link as LinkIcon, Cloud, Code, Database, RefreshCw, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { staggerContainer, itemVariants } from "@/lib/animations";

const solutions = [
  {
    title: "Workflow Automation",
    description: "Reclaim 30% of your team's week.",
    icon: Workflow,
    href: "/solutions#automation",
  },
  {
    title: "System Integration",
    description: "Connect silos with zero data drift.",
    icon: LinkIcon,
    href: "/solutions#integration",
  },
  {
    title: "Cloud Infrastructure",
    description: "10x scale capacity, zero downtime.",
    icon: Cloud,
    href: "/solutions#cloud",
  },
  {
    title: "Custom Software",
    description: "Bespoke tools for bespoke problems.",
    icon: Code,
    href: "/solutions#custom",
  },
  {
    title: "Data Engineering",
    description: "Turn raw data into board-ready insights.",
    icon: Database,
    href: "/solutions#data",
  },
  {
    title: "Legacy Modernization",
    description: "Upgrade without the migration downtime.",
    icon: RefreshCw,
    href: "/solutions#modernization",
  },
  {
    title: "Security & Compliance",
    description: "Hardened systems for enterprise risk.",
    icon: ShieldCheck,
    href: "/solutions#security",
  },
  {
    title: "Performance Tuning",
    description: "Latency-critical architecture resets.",
    icon: Zap,
    href: "/solutions#performance",
  },
];

export function SolutionsPreview() {
  return (
    <section className="bg-cream border-t border-warm-gray">
      <Container className="px-0 sm:px-0 lg:px-0 max-w-full">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        >
          {solutions.map((solution) => (
            <Link 
              key={solution.title} 
              href={solution.href}
              className="group"
            >
              <motion.div
                variants={itemVariants}
                className="p-8 border-b md:border-r border-warm-gray last:border-b-0 md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0 transition-colors duration-300 hover:bg-electric/[0.03]"
              >
                <div className="mb-6">
                  <solution.icon className="text-electric" size={24} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-ink mb-2">{solution.title}</h3>
                <p className="text-sm text-soft-ink leading-relaxed">{solution.description}</p>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

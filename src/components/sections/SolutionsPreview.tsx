"use client";

import { Container } from "@/components/ui";
import { Workflow, Link as LinkIcon, Cloud, Code, Database, RefreshCw, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const capabilities = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Reclaim 30% of your team's week by eliminating manual bottlenecks."
  },
  {
    icon: LinkIcon,
    title: "System Integration",
    description: "Connect silos with zero data drift across ERP, CRM, and Legacy systems."
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "10x scale capacity and zero downtime with resilient, automated architecture."
  },
  {
    icon: Code,
    title: "Custom Software",
    description: "Bespoke tools for bespoke problems. No workarounds, no compromises."
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Turn raw data into board-ready insights with real-time visibility."
  },
  {
    icon: RefreshCw,
    title: "Legacy Modernization",
    description: "Upgrade aging components without the downtime or risk of data loss."
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    description: "Hardened systems for enterprise risk and regulatory requirements."
  },
  {
    icon: Zap,
    title: "Performance Tuning",
    description: "Latency-critical resets for high-volume enterprise architectures."
  }
];

export function SolutionsPreview() {
  return (
    <section className="bg-cream py-16 md:py-28 border-b border-warm-gray">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16">
          <div className="max-w-xl">
            <span className="inline-block text-[12px] font-bold uppercase tracking-[0.2em] text-electric mb-6">
              Capabilities
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-ink">
              Engineered for Enterprise Scale
            </h2>
          </div>
          <Link
            href="/solutions"
            className="flex items-center text-sm font-semibold text-electric hover:text-ink transition-colors group mt-8 md:mt-0"
          >
            Explore all capabilities <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-warm-gray"
        >
          {capabilities.map((capability) => (
            <motion.div
              key={capability.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                }
              }}
              whileHover={{ backgroundColor: "rgba(85, 179, 232, 0.03)" }}
              className="bg-white border-r border-b border-warm-gray p-8 flex flex-col items-center text-center group transition-colors"
            >
              <div className="mb-6 p-3 rounded-full bg-electric/5 text-electric group-hover:bg-electric group-hover:text-white transition-all duration-300">
                <capability.icon size={24} strokeWidth={1.5} />
              </div>
              <h4 className="text-sm font-bold text-ink mb-4 leading-tight uppercase tracking-widest">
                {capability.title}
              </h4>
              <p className="text-xs text-soft-ink leading-relaxed">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

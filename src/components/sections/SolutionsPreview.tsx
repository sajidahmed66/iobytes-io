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
    <section className="bg-cream py-24 border-b border-warm-gray">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-soft-ink mb-6">
              Capabilities
            </h2>
            <h3 className="text-4xl font-bold tracking-tight text-ink">
              Engineered for Enterprise Scale.
            </h3>
          </div>
          <Link 
            href="/solutions" 
            className="flex items-center text-sm font-bold text-electric hover:text-ink transition-colors group mt-8 md:mt-0"
          >
            EXPLORE ALL CAPABILITIES <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-warm-gray">
          {capabilities.map((capability, i) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white border-r border-b border-warm-gray p-8 flex flex-col items-center text-center group hover:bg-electric/[0.02] transition-colors"
            >
              <div className="mb-6 p-3 rounded-full bg-electric/5 text-electric group-hover:bg-electric group-hover:text-white transition-colors">
                <capability.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold text-ink mb-4 leading-tight uppercase tracking-widest">
                {capability.title}
              </h3>
              <p className="text-xs text-soft-ink leading-relaxed">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

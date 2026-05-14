"use client";

import { Container } from "@/components/ui";
import { OutcomeCard } from "@/components/shared/OutcomeCard";
import { ArrowRight, ShieldCheck, Zap, Activity } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const outcomes = [
  {
    icon: Activity,
    metric: "3×",
    title: "Faster supply chain traceability",
    description: "End-to-end agricultural logistics platform connecting farmers, distributors, and retailers for Agroshift.",
    industry: "Agriculture",
    delay: 0
  },
  {
    icon: Zap,
    metric: "35%",
    title: "Increase in operational efficiency",
    description: "Unified digital command center for industrial automation, eliminating hardware silos for FactoryNext.",
    industry: "Industrial Automation",
    delay: 0.1
  },
  {
    icon: ShieldCheck,
    metric: "24/7",
    title: "Real-time sensor coverage",
    description: "Comprehensive sensor telemetry platform for environmental intelligence across industrial operations for BAT.",
    industry: "Environmental Monitoring",
    delay: 0.2
  }
];

export function ClientWork() {
  return (
    <section className="bg-cream py-32 border-b border-warm-gray">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16"
        >
          <div className="max-w-xl">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-soft-ink mb-6">
              Outcomes That Matter
            </h2>
            <h3 className="text-4xl font-bold tracking-tight text-ink text-balance">
              Measured Results. Proven Impact.
            </h3>
          </div>
          <Link
            href="/portfolio"
            className="flex items-center text-sm font-bold text-electric hover:text-ink transition-colors group mt-8 md:mt-0"
          >
            View all case studies <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.2 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {outcomes.map((outcome) => (
            <OutcomeCard key={outcome.title} {...outcome} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

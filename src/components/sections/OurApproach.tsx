"use client";

import { Container } from "@/components/ui";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "DISCOVER",
    subhead: "Define What Matters",
    description: "We align on outcomes, validate assumptions, and build a roadmap tied to your business metrics."
  },
  {
    number: "2",
    title: "DELIVER",
    subhead: "Engineer With Precision",
    description: "Agile teams deliver secure, scalable solutions with transparency at every step."
  },
  {
    number: "3",
    title: "ACCOUNT",
    subhead: "Drive Measurable Impact",
    description: "We measure success against agreed KPIs and continuously optimize for more impact."
  }
];

export function OurApproach() {
  return (
    <section className="bg-cream py-24 border-b border-warm-gray">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-soft-ink mb-6">
              Our Approach
            </h2>
            <h3 className="text-4xl font-bold tracking-tight text-ink">
              Outcome-First Methodology.
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          {steps.map((step, i) => (
            <motion.div 
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-14 h-14 rounded-full border border-warm-gray flex items-center justify-center text-xl font-bold text-soft-ink group-hover:border-electric group-hover:text-electric transition-colors bg-white">
                  {step.number}
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-[60px] top-[28px] w-full h-[1px] bg-warm-gray -z-10" />
                )}
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-electric">
                    {step.title}
                  </span>
                  <h4 className="text-lg font-bold text-ink">
                    {step.subhead}
                  </h4>
                </div>
              </div>
              <p className="text-sm text-soft-ink leading-relaxed pl-20">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

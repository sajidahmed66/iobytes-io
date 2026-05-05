"use client";

import { Container, SectionHeader, GlassCard } from "@/components/ui";
import { motion } from "framer-motion";

export function TrustSignals() {
  const logos = [1, 2, 3, 4, 5];

  return (
    <section className="py-24 bg-cream overflow-hidden">
      <Container>
        <SectionHeader
          eyebrow="TRUSTED BY"
          headline="Engineering Partners to Industry Leaders"
          subheadline="We embed with teams that don't have room for error."
          align="center"
          className="mb-16"
        />

        {/* Logo Grid */}
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 mb-24">
          {logos.map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.4 }}
              whileHover={{ opacity: 1 }}
              viewport={{ once: true }}
              className="w-32 h-12 bg-ink/10 rounded flex items-center justify-center grayscale transition-all cursor-not-allowed"
            >
              <span className="text-[10px] font-bold tracking-widest text-ink/30">LOGO {i}</span>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <GlassCard padding="comfortable" className="text-center relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-electric text-ink px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
              Verified Partner
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium text-ink leading-relaxed mb-8">
              "iobytes didn't just build our platform—they engineered the outcome we promised our board. That accountability is rare."
            </blockquote>
            <cite className="not-italic">
              <span className="block font-bold text-ink">CTO</span>
              <span className="text-soft-ink text-sm">Fortune 500 Industrial Company</span>
            </cite>
          </GlassCard>
        </motion.div>
      </Container>
    </section>
  );
}

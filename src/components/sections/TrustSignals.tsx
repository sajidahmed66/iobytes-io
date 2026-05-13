"use client";

import Image from "next/image";
import { Container, SectionHeader, GlassCard } from "@/components/ui";
import { motion } from "framer-motion";

export function TrustSignals() {
  const logos = [
    { name: "BAT Bangladesh", src: "/bat-bangladesh-logo.png" },
    { name: "CUET", src: "/cuet_logo.png" },
    { name: "FactoryNext", src: "/factorynext.png" },
    { name: "RR Lifestyle", src: "/RR-LIFESTYLE-PNG.webp" },
    { name: "Agroshift", src: "/agroshift.avif" },
    { name: "ASI Hub", src: "/ais-hub.png" },
    { name: "Kiacom", src: "/kiacom.png" }
  ];

  return (
    <section className="py-24 bg-cream overflow-hidden">
      <Container>
        <SectionHeader
          eyebrow="TRUSTED BY"
          headline="Industry Partners"
          subheadline="We embed with teams that don't have room for error."
          align="center"
          className="mb-16"
        />

        {/* Logo Grid */}
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 mb-24">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative w-32 h-16 flex items-center justify-center transition-all"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
              />
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
              <span className="block font-bold text-ink">Chairman</span>
              <span className="text-soft-ink text-sm">FactoryNext</span>
            </cite>
          </GlassCard>
        </motion.div>
      </Container>
    </section>
  );
}

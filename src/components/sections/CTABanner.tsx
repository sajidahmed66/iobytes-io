"use client";

import { Container, AnimatedButton } from "@/components/ui";
import { motion } from "framer-motion";
import Link from "next/link";

export function CTABanner() {
  return (
    <section className="py-24 bg-ink text-cream relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-electric/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Let's Engineer Your <br /> Next <span className="text-electric">Outcome</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-cream/60 mb-10 max-w-2xl mx-auto"
          >
            Tell us what you're trying to move. We'll tell you how we'd move it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-6"
          >
            <AnimatedButton size="lg" asChild className="px-12">
              <Link href="/contact">Start a Project</Link>
            </AnimatedButton>
            
            <p className="text-sm font-medium text-cream/40 uppercase tracking-widest">
              Response within 24 hours. No pitch decks, just engineering.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { Container, AnimatedButton } from "@/components/ui";
import { Target, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function CTABanner() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-electric via-blue-400 to-electric animate-gradient" />

      {/* Subtle overlay pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:24px_24px]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-8 text-white">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="shrink-0 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20"
            >
              <Target size={32} />
            </motion.div>
            <div className="max-w-md">
              <h2 className="text-2xl font-bold tracking-tight mb-2">
                READY TO ENGINEER WHAT&apos;S NEXT?
              </h2>
              <p className="text-white/80 font-medium leading-tight">
                Let&apos;s build the outcomes that move your business forward.
              </p>
            </div>
          </div>

          <AnimatedButton size="lg" asChild className="rounded-sm px-12 bg-white text-electric hover:bg-white/90 shadow-lg border-none">
            <Link href="/contact" className="flex items-center gap-2 font-bold tracking-wide">
              Schedule a strategy call <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </AnimatedButton>
        </motion.div>
      </Container>
    </section>
  );
}

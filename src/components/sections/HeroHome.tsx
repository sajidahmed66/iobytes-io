"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { AnimatedButton, ROIPill, Container } from "@/components/ui";
import Link from "next/link";
import { TrendingUp, DollarSign, Zap } from "lucide-react";

export function HeroHome() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const pillVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30, scale: shouldReduceMotion ? 1 : 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: shouldReduceMotion ? 0 : 0.8 + i * 0.15,
        type: "spring",
        stiffness: 120,
        damping: 14,
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-cream">
      {/* Background Dot Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-3"
        style={{
          backgroundImage: `radial-gradient(#1A1A1A 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold tracking-tight text-ink mb-6"
          >
            The Outcome <br />
            <span className="text-electric">Engineering</span> Firm
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-soft-ink mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We design, build, and ship custom software for B2B enterprises—then
            stay accountable to the metrics that move your business.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <AnimatedButton size="lg" asChild>
              <Link href="#case-studies">See the Numbers</Link>
            </AnimatedButton>
            <AnimatedButton variant="secondary" size="lg" asChild>
              <Link href="/contact">Start a Project</Link>
            </AnimatedButton>
          </motion.div>
        </motion.div>

        {/* Floating ROI Pills */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none hidden lg:block">
          <motion.div
            custom={0}
            variants={pillVariants}
            initial="hidden"
            animate="visible"
            className="absolute -top-40 left-10"
          >
            <ROIPill 
              icon={TrendingUp} 
              metric="40%" 
              label="Efficiency Increase" 
              className="animate-float"
            />
          </motion.div>

          <motion.div
            custom={1}
            variants={pillVariants}
            initial="hidden"
            animate="visible"
            className="absolute top-20 -right-10"
          >
            <ROIPill 
              icon={DollarSign} 
              metric="$2.3M" 
              label="Cost Avoidance" 
              className="animate-float [animation-delay:1s]"
            />
          </motion.div>

          <motion.div
            custom={2}
            variants={pillVariants}
            initial="hidden"
            animate="visible"
            className="absolute top-60 left-20"
          >
            <ROIPill 
              icon={Zap} 
              metric="3x" 
              label="Faster Deployment" 
              className="animate-float [animation-delay:2s]"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

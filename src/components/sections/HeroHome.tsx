"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { AnimatedButton, Container } from "@/components/ui";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { blurDataURL } from "@/lib/image-utils";

export function HeroHome() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
      filter: shouldReduceMotion ? "blur(0px)" : "blur(8px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const floatVariants: Variants = {
    animate: {
      y: shouldReduceMotion ? 0 : [0, -10, 0],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <section className="relative pt-32 pb-12 lg:pb-20 bg-cream overflow-hidden border-b border-warm-gray">
      {/* Background gradient blurs */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-electric/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-electric/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-electric/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Eyebrow */}
            <motion.div variants={lineVariants} className="flex items-center justify-center lg:justify-start gap-3">
              <div className="w-3 h-3 bg-electric" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-electric">
                Custom Software. Measurable Impact.
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={lineVariants}
              className="text-3xl gap-2 md:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-ink flex flex-col"
            >
              <span className="flex flex-wrap justify-center lg:justify-between gap-x-2 lg:gap-x-0">
                {"We engineer the outcomes".split(" ").map((word, i) => (
                  <span key={i}>{word}</span>
                ))}
              </span>
              <span className="flex flex-wrap justify-center lg:justify-between gap-x-2 lg:gap-x-0">
                {"that transform enterprises".split(" ").map((word, i) => (
                  <span key={i}>{word}</span>
                ))}
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={lineVariants}
              className="text-lg px-4 justify-center   lg:px-0 font-semibold md:text-[20px] text-soft-ink leading-relaxed text-center lg:text-justify"
            >
              We deliver B2B software solutions that solve critical business problems and prove it with the metrics that matter most.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={lineVariants}
              className="flex flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 pt-4"
            >
              <AnimatedButton size="lg" asChild className="rounded-sm px-6 sm:px-8 bg-electric text-[#FAF9F9] hover:bg-electric/90 shadow-none">
                <Link href="/contact" className="flex items-center gap-2">
                  <span className="hidden sm:inline font-bold">Schedule a strategy call</span>
                  <span className="sm:hidden text-sm">Schedule a call</span>
                  <ArrowRight size={18} />
                </Link>
              </AnimatedButton>

              <Link
                href="/portfolio"
                className="flex items-center text-xs sm:text-sm font-semibold text-ink hover:text-electric transition-colors group tracking-wide whitespace-nowrap"
              >
                <span className="hidden sm:inline">Explore our work</span>
                <span className="sm:hidden">Our Work</span>
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Illustration */}
          <div className="hidden lg:flex justify-center items-center">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="relative w-full aspect-square max-w-100"
            >
              <motion.div
                variants={floatVariants}
                animate="animate"
                className="relative w-full h-full"
              >
                <Image
                  src="/illustration1.png"
                  alt="iobytes Outcome Engineering Illustration"
                  fill
                  className="object-contain"
                  priority
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { AnimatedButton, Container } from "@/components/ui";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function HeroHome() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, delay: 0.4, ease: "easeOut" },
    },
  };

  const lines = [
    "WE ENGINEER",
    "THE OUTCOMES",
    "THAT BUILD",
    "ENTERPRISES.",
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 bg-cream overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-20 gap-12 items-center">
          {/* Left Column: 55% */}
          <div className="lg:col-span-11">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <h1 className="flex flex-col">
                {lines.map((line, i) => (
                  <motion.span
                    key={i}
                    variants={lineVariants}
                    className="text-[42px] md:text-[64px] font-[800] leading-[1.05] tracking-tighter text-ink"
                  >
                    {line}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                variants={lineVariants}
                className="text-xl md:text-[20px] text-soft-ink max-w-lg leading-relaxed"
              >
                Custom software for B2B. Accountable to your board.
              </motion.p>

              <motion.div
                variants={lineVariants}
                className="flex flex-row items-center gap-8"
              >
                <AnimatedButton size="lg" asChild className="rounded-full px-8">
                  <Link href="/contact">Start a Project</Link>
                </AnimatedButton>
                <Link
                  href="/portfolio"
                  className="flex items-center text-sm font-bold text-ink hover:text-electric transition-colors group"
                >
                  See our work
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: 45% */}
          <div className="hidden lg:flex lg:col-span-9 justify-center items-center">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="relative w-full aspect-square"
            >
              <Image
                src="/illustration.png"
                alt="iobytes Outcome Engineering Illustration"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

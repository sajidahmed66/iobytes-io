"use client";

import { useState, useEffect, useCallback } from "react";
import { Container } from "@/components/ui";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    "quote": "iobytes transformed how we monitor our warehouse environments. By integrating precise temperature, humidity, and VOC sensors, they gave us realtime control over our tobacco curing and storage processes. A truly brilliant operational upgrade.",
    "attribution": "Supply Chain & Logistics Director",
    "company": "BAT",
    "image": "/bat-bangladesh-logo.png",
    "initials": "BT"
  },
  {
    quote: "We've moved from reactive to proactive. We haven't had an unplanned outage in six months, and the ROI was clear within the first quarter. That level of accountability is rare.",
    attribution: "Head of Operations",
    company: "FactoryNext",
    image: "/factorynext.png",
    initials: "FN"
  },
  {
    "quote": "We replaced scattered DMs with automated Messenger workflows. Now, customers order directly in chat, and everything flows into one admin panel. It's a 24/7 sales engine.",
    "attribution": "Sajal Modumjar",
    "company": "F-commerce page manager & User of BotX",
    "image": null,
    "initials": "BX"
  },
  {
    quote: "Visibility is the foundation of our business. iobytes gave us a clear window into our entire operation, reducing spoilage and building immediate trust with our distributors.",
    attribution: "CEO",
    company: "Agroshift",
    image: "/agroshift.avif",
    initials: "AS"
  },
  {
    quote: "iobytes bridges the gap between complex RF engineering and global data pipelines. Their coastal stations are some of the most resilient and reliable in our entire maritime network.",
    attribution: "Partnership Team",
    company: "AISHub",
    image: "/ais.png",
    initials: "AH"
  }
];

export function TestimonialSection() {
  const shouldReduceMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused || shouldReduceMotion) return;
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide, shouldReduceMotion]);

  return (
    <section className="bg-cream py-16 md:py-32 border-b border-warm-gray overflow-hidden">
      <Container>
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block text-[12px] font-bold uppercase tracking-[0.2em] text-electric mb-6">
            Trusted Voice
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-ink">
            Client Perspectives
          </h2>
        </div>
        <div
          className="max-w-4xl mx-auto relative text-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Decorative quote mark */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[180px] font-serif text-electric/[0.07] leading-none select-none pointer-events-none">
            &ldquo;
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-12 relative z-10"
            >
              <blockquote className="text-3xl md:text-4xl font-medium text-ink leading-tight tracking-tight min-h-[160px] md:min-h-[140px] flex items-center justify-center">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </blockquote>

              <div className="pt-10 border-t border-warm-gray max-w-[280px] mx-auto">
                {/* Avatar */}
                {/* <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden bg-electric/10 border-2 border-electric/20 flex items-center justify-center">
                  {testimonials[currentIndex].image ? (
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].company}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-lg font-bold text-electric">
                      {testimonials[currentIndex].initials}
                    </span>
                  )}
                </div> */}
                <span className="block text-xl font-bold text-ink mb-1">
                  {testimonials[currentIndex].attribution}
                </span>
                <span className="text-sm text-soft-ink uppercase tracking-[0.2em] font-bold">
                  {testimonials[currentIndex].company}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-8 md:gap-12 mt-10 md:mt-16">
            <button
              onClick={prevSlide}
              className="p-2 text-soft-ink/40 hover:text-electric transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={32} strokeWidth={1.5} />
            </button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 transition-all duration-300 rounded-full ${index === currentIndex
                    ? "bg-electric w-8"
                    : "bg-warm-gray w-4 hover:bg-soft-ink/20"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 text-soft-ink/40 hover:text-electric transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={32} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

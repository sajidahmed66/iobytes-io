"use client";

import { useState, useEffect, useCallback } from "react";
import { Container } from "@/components/ui";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "iobytes didn't just build our platform—they engineered the outcome we promised our board. That accountability is rare.",
    attribution: "Chairman",
    company: "FactoryNext"
  },
  {
    quote: "The supply chain visibility iobytes delivered transformed how we operate. Decisions that took weeks now take minutes.",
    attribution: "Executive Leadership",
    company: "Agroshift"
  },
  {
    quote: "iobytes didn't just build our platform—they engineered an ecosystem that scales with our ambition.",
    attribution: "Executive Leadership",
    company: "Kaicom"
  },
  {
    quote: "BotX shifted our social selling from a labor-intensive manual operation to a hands-off, highly profitable sales machine.",
    attribution: "Executive Leadership",
    company: "BotX"
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
    <section className="bg-cream py-24 border-b border-warm-gray overflow-hidden">
      <Container>
        <div
          className="max-w-4xl mx-auto relative text-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Quote Icon */}
          {/* <div className="flex justify-center mb-10 text-electric/20">
            <Quote size={80} fill="currentColor" />
          </div> */}

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="space-y-12"
            >
              <blockquote className="text-3xl md:text-4xl font-medium text-ink leading-tight tracking-tight min-h-[160px] md:min-h-[140px] flex items-center justify-center">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </blockquote>

              <div className="pt-10 border-t border-warm-gray max-w-[240px] mx-auto">
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
          <div className="flex items-center justify-center gap-12 mt-16">
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

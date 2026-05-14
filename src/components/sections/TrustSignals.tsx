"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Container, SectionHeader, GlassCard } from "@/components/ui";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function TrustSignals() {
  const shouldReduceMotion = useReducedMotion();
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const logos = [
    { name: "BAT Bangladesh", src: "/bat-bangladesh-logo.png" },
    { name: "CUET", src: "/cuet_logo.png" },
    { name: "FactoryNext", src: "/factorynext.png" },
    { name: "RR Lifestyle", src: "/RR-LIFESTYLE-PNG.webp" },
    { name: "Agroshift", src: "/agroshift.avif" },
    { name: "ASI Hub", src: "/ais-hub.png" },
    { name: "Kiacom", src: "/kiacom.png" }
  ];

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

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (isCarouselPaused || shouldReduceMotion) return;
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [isCarouselPaused, nextSlide, shouldReduceMotion]);

  // Double logos for seamless loop
  const marqueeLogos = [...logos, ...logos];

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
      </Container>

      {/* Change 1: Logo Marquee */}
      <div 
        className="relative w-full overflow-hidden mb-24"
        onMouseEnter={() => setIsMarqueePaused(true)}
        onMouseLeave={() => setIsMarqueePaused(false)}
      >
        <div
          className="flex whitespace-nowrap"
          style={{ 
            display: "flex",
            width: "fit-content",
            animation: shouldReduceMotion ? "none" : "marquee 30s linear infinite reverse",
            animationPlayState: isMarqueePaused ? "paused" : "running",
          }}
        >
          {marqueeLogos.map((logo, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center mx-12 md:mx-20 w-32 h-16 relative opacity-70 hover:opacity-100 transition-opacity duration-300 shrink-0"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Change 2: Testimonial Carousel */}
      <Container>
        <div 
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsCarouselPaused(true)}
          onMouseLeave={() => setIsCarouselPaused(false)}
        >
          <div className="relative overflow-hidden px-4 md:px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <GlassCard padding="comfortable" className="text-center relative min-h-[320px] md:min-h-[280px] flex flex-col justify-center">
                  <blockquote className="text-2xl md:text-3xl font-medium text-ink leading-relaxed mb-8">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <cite className="not-italic">
                    <span className="block font-bold text-ink">{testimonials[currentIndex].attribution}</span>
                    <span className="text-soft-ink text-sm">{testimonials[currentIndex].company}</span>
                  </cite>
                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-electric" 
                    : "bg-transparent border border-warm-gray"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full text-ink/20 hover:text-electric transition-colors hidden md:block"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={32} strokeWidth={1.5} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full text-ink/20 hover:text-electric transition-colors hidden md:block"
            aria-label="Next testimonial"
          >
            <ChevronRight size={32} strokeWidth={1.5} />
          </button>
        </div>
      </Container>
    </section>
  );
}

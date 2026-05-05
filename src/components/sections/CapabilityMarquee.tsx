"use client";

import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const capabilities = [
  "Workflow Automation",
  "System Integration",
  "Cloud Infrastructure",
  "Custom Software",
  "Data Engineering",
  "Legacy Modernization",
  "Security & Compliance",
  "Performance Tuning",
];

export function CapabilityMarquee() {
  const shouldReduceMotion = useReducedMotion();

  // Double the array to ensure seamless looping
  const marqueeItems = [...capabilities, ...capabilities];

  if (shouldReduceMotion) {
    return (
      <div className="w-full border-y border-warm-gray py-4 bg-cream overflow-hidden">
        <div className="flex flex-wrap justify-center gap-8 px-4">
          {capabilities.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-sm font-bold uppercase tracking-[0.05em] text-ink">
                {item}
              </span>
              {i < capabilities.length - 1 && <span className="text-electric text-lg">•</span>}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full border-y border-warm-gray py-4 bg-cream overflow-hidden">
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex whitespace-nowrap items-center gap-12 group-hover:pause">
          {marqueeItems.map((item, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="text-sm font-bold uppercase tracking-[0.05em] text-ink">
                {item}
              </span>
              <span className="text-electric text-lg">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

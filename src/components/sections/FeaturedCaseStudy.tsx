"use client";

import { Container } from "@/components/ui";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ArrowRight, ShieldCheck, Zap, Clock, BarChart3 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function FeaturedCaseStudy() {
  return (
    <section className="bg-cream py-32 border-b border-warm-gray">
      <Container>
        <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-electric mb-4">
          Featured Case Study
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Column 1: Text Content */}
          <div className="lg:col-span-4 space-y-8">
            <h3 className="text-3xl font-bold tracking-tight text-ink leading-tight">
              Optimizing Global Order Flow for BAT Bangladesh
            </h3>
            
            <div className="grid grid-cols-3 gap-4 border-y border-warm-gray py-6">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-soft-ink mb-1">Industry</span>
                <span className="text-xs font-bold text-ink">Manufacturing</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-soft-ink mb-1">Scale</span>
                <span className="text-xs font-bold text-ink">Global</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-soft-ink mb-1">Engagement</span>
                <span className="text-xs font-bold text-ink">Core Engine</span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-ink">The Challenge</h4>
              <p className="text-sm text-soft-ink leading-relaxed">
                Manual validation steps across 40+ markets created significant delays, with average processing times of 12 minutes per order.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-ink">Our Solution</h4>
              <p className="text-sm text-soft-ink leading-relaxed">
                We engineered a high-throughput validation engine using a rules-as-code philosophy, drastically reducing latency via parallel processing.
              </p>
            </div>

            <Link 
              href="/portfolio/bat" 
              className="inline-flex items-center text-sm font-bold text-electric hover:text-ink transition-colors group"
            >
              View full case study <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Column 2: Chart/Visual */}
          <div className="lg:col-span-5 flex flex-col justify-center bg-white border border-warm-gray p-8 rounded-sm">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-12">
              <h4 className="text-xs font-bold uppercase tracking-widest text-ink">Efficiency Gains</h4>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-warm-gray" />
                  <span className="text-[10px] font-bold text-soft-ink">Before</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-electric" />
                  <span className="text-[10px] font-bold text-soft-ink">Reduced</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-amber" />
                  <span className="text-[10px] font-bold text-soft-ink">Increased</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {[
                { label: "Processing Latency", before: 100, after: 2, diff: "↓ 98%", isPositive: false },
                { label: "Manual Error Rate", before: 80, after: 5, diff: "↓ 94%", isPositive: false },
                { label: "Throughput Capacity", before: 25, after: 100, diff: "↑ 4x", isPositive: true }
              ].map((item) => (
                <div key={item.label} className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-ink">{item.label}</span>
                    <span className={`text-xs font-bold ${item.isPositive ? "text-amber" : "text-electric"}`}>{item.diff}</span>
                  </div>
                  <div className="flex items-end gap-1 h-8">
                    <div className="bg-warm-gray w-full" style={{ height: `${item.before}%` }} />
                    <div className={`w-full ${item.isPositive ? "bg-amber" : "bg-electric"}`} style={{ height: `${item.after}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Metrics Column */}
          <div className="lg:col-span-3 flex flex-col justify-center space-y-12 pl-0 lg:pl-8">
            {[
              { label: "Original Latency", value: 12, suffix: "m", icon: Clock },
              { label: "New Latency", value: 15, suffix: "s", icon: Zap },
              { label: "Efficiency Increase", value: 40, suffix: "%", icon: BarChart3 },
              { label: "Peak Surge Resilience", value: 4, suffix: "x", icon: ShieldCheck }
            ].map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-center gap-6"
              >
                <div className="w-12 h-12 rounded-full border border-warm-gray flex items-center justify-center text-soft-ink">
                  <metric.icon size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-ink tracking-tight">
                    <AnimatedCounter
                      target={metric.value}
                      suffix={metric.suffix}
                      duration={1500}
                    />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-soft-ink">{metric.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

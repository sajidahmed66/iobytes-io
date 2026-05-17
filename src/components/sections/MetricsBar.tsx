"use client";

import { Container } from "@/components/ui";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { value: 50, suffix: "+", label: "enterprise engagements delivered" },
  { value: 98, suffix: "%", label: "client retention" },
  { value: 10, suffix: "+", label: "years of proven delivery" },
];

export function MetricsBar() {
  return (
    <div className="bg-cream border-b border-warm-gray">
      <Container className="py-6">
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2"
            >
              <CheckCircle2 size={16} className="text-electric" />
              <span className="text-[12px] font-medium text-soft-ink tracking-tight">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  duration={1500}
                  className="font-bold text-ink"
                />{" "}
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}

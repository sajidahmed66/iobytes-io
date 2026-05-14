"use client";

import { Container } from "@/components/ui";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  "50+ enterprise engagements delivered",
  "98% client retention",
  "10+ years of proven delivery"
];

export function MetricsBar() {
  return (
    <div className="bg-cream border-b border-warm-gray">
      <Container className="py-4">
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2"
            >
              <CheckCircle2 size={16} className="text-electric" />
              <span className="text-[12px] font-medium text-soft-ink tracking-tight">
                {stat}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}

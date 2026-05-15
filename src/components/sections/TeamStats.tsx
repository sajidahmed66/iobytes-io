"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Clock, Globe, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    value: 50,
    suffix: "+",
    label: "Combined Years Experience",
    icon: Clock
  },
  {
    value: 15,
    suffix: "+",
    label: "Countries Represented",
    icon: Globe
  },
  {
    value: 2,
    prefix: "$",
    suffix: "B+",
    label: "Client Revenue Impact",
    icon: TrendingUp
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Retention",
    icon: Users
  },
];

export function TeamStats() {
  return (
    <div className="py-6 mb-8 md:mb-12 border-y border-warm-gray/20">
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3"
            >
              <Icon size={20} className="text-electric" strokeWidth={1.5} />
              <div className="flex flex-col">
                <AnimatedCounter
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={1500}
                  className="text-[20px] font-bold text-ink"
                />
                <span className="text-[12px] text-soft-ink tracking-tight">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

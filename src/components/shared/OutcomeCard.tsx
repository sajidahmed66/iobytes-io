"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface OutcomeCardProps {
  icon: LucideIcon;
  metric: string;
  title: string;
  description: string;
  industry: string;
  delay?: number;
}

export function OutcomeCard({
  icon: Icon,
  metric,
  title,
  description,
  industry,
  delay = 0,
}: OutcomeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white border border-warm-gray p-8 flex flex-col h-full hover:shadow-md transition-shadow"
    >
      <div className="mb-8">
        <div className="w-12 h-12 rounded-full bg-electric/5 flex items-center justify-center text-electric">
          <Icon size={24} strokeWidth={1.5} />
        </div>
      </div>

      <div className="mb-4">
        <span className="text-5xl font-[900] tracking-tighter text-electric">
          {metric}
        </span>
      </div>

      <h3 className="text-sm font-bold uppercase tracking-widest text-ink mb-4 leading-tight">
        {title}
      </h3>

      <p className="text-sm text-soft-ink leading-relaxed mb-8 flex-grow">
        {description}
      </p>

      <div className="pt-4 border-t border-warm-gray">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-soft-ink">
          {industry}
        </span>
      </div>
    </motion.div>
  );
}

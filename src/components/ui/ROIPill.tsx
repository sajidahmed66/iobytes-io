"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ROIPillProps {
  icon?: LucideIcon;
  metric: string;
  label: string;
  variant?: "outline" | "solid";
  className?: string;
}

export const ROIPill = ({
  icon: Icon,
  metric,
  label,
  variant = "outline",
  className,
}: ROIPillProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 14,
      }}
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-pill border font-medium",
        variant === "outline"
          ? "border-electric text-ink bg-transparent"
          : "bg-electric text-ink border-electric",
        className
      )}
    >
      {Icon && <Icon size={16} className="text-current" strokeWidth={2} />}
      <span className="font-mono">{metric}</span>
      <span className="text-sm opacity-80">{label}</span>
    </motion.div>
  );
};

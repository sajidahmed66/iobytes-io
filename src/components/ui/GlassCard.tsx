"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
  padding?: "default" | "comfortable" | "none";
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, glow = false, padding = "default", children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref as any}
        whileHover={glow ? { scale: 1.01 } : {}}
        className={cn(
          "bg-cream/85 backdrop-blur-glass border border-warm-gray/60 rounded-card transition-all duration-300",
          glow && "hover:border-electric/40 hover:shadow-glow",
          padding === "default" && "p-4",
          padding === "comfortable" && "p-6",
          className
        )}
        {...props as any}
      >
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";

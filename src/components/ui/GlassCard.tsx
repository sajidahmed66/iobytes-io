"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  glow?: boolean;
  hover?: boolean;
  padding?: "tight" | "default" | "comfortable" | "none";
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, glow = false, hover = true, padding = "default", children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { y: -4 } : undefined}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className={cn(
          "bg-cream/85 backdrop-blur-glass border border-warm-gray/60 rounded-card",
          glow && "hover:border-electric/40 hover:shadow-glow hover:shadow-lg",
          padding === "tight" && "p-4",
          padding === "default" && "p-5",
          padding === "comfortable" && "p-6",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";

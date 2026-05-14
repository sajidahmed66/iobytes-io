"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  glow?: boolean;
  padding?: "default" | "comfortable" | "none";
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, glow = false, padding = "default", children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className={cn(
          "bg-cream/85 backdrop-blur-glass border border-warm-gray/60 rounded-card transition-all duration-300 hover:shadow-lg",
          glow && "hover:border-electric/40 hover:shadow-glow",
          padding === "default" && "p-4",
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

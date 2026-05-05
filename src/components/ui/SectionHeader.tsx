"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  align?: "left" | "center";
  eyebrowColor?: "electric" | "soft-ink";
  className?: string;
}

export const SectionHeader = ({
  eyebrow,
  headline,
  subheadline,
  align = "left",
  eyebrowColor = "electric",
  className,
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "text-xs font-bold uppercase tracking-wider block mb-4",
            eyebrowColor === "electric" ? "text-electric" : "text-soft-ink"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-ink mb-6">
        {headline}
      </h2>
      {subheadline && (
        <p className="text-lg md:text-xl text-soft-ink leading-relaxed max-w-2xl mx-auto">
          {subheadline}
        </p>
      )}
    </motion.div>
  );
};

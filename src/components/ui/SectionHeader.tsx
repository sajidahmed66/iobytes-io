"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  align?: "left" | "center";
  subheadlineJustify?: boolean;
  eyebrowColor?: "electric" | "soft-ink";
  theme?: "light" | "dark";
  className?: string;
}

export const SectionHeader = ({
  eyebrow,
  headline,
  subheadline,
  align = "left",
  subheadlineJustify = false,
  eyebrowColor = "electric",
  theme = "light",
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
            "text-[12px] font-bold uppercase tracking-[0.1em] block mb-4",
            eyebrowColor === "electric" ? "text-electric" : "text-soft-ink"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2 className={cn(
        "text-3xl md:text-[48px] font-bold tracking-tight mb-6 leading-tight",
        theme === "dark" ? "text-cream" : "text-ink"
      )}>
        {headline}
      </h2>
      {subheadline && (
        <p className={cn(
          "text-lg md:text-[18px] leading-relaxed max-w-2xl",
          align === "center" && "mx-auto",
          subheadlineJustify && "text-justify",
          theme === "dark" ? "text-soft-ink" : "text-soft-ink"
        )}>
          {subheadline}
        </p>
      )}
    </motion.div>
  );
};

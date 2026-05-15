"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { blurDataURL } from "@/lib/image-utils";

interface ClientCardProps {
  logo: string;
  industry: string;
  headline: string;
  description: string;
  metric: string;
  href: string;
  className?: string;
  delay?: number;
}

export function ClientCard({
  logo,
  industry,
  headline,
  description,
  metric,
  href,
  className,
  delay = 0,
}: ClientCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className={cn(
        "group relative bg-cream/5 backdrop-blur-glass border border-warm-gray/20 rounded-[16px] p-8 overflow-hidden transition-all duration-300 hover:shadow-lg",
        className
      )}
    >
      {/* Left Accent Strip */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[3px] bg-electric opacity-0"
        initial={{ x: -3 }}
        whileHover={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      />

      {/* Content */}
      <div className="space-y-6">
        {/* Logo */}
        <div className="h-10 relative w-[120px] invert brightness-[200%] contrast-[150%] grayscale">
          <Image
            src={logo}
            alt={`${headline} logo`}
            fill
            className="object-contain object-left"
            loading="lazy"
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        </div>

        {/* Industry Tag */}
        <div className="inline-block px-3 py-1 bg-electric/10 rounded-full">
          <span className="text-[12px] font-bold uppercase tracking-wider text-electric">
            {industry}
          </span>
        </div>

        {/* Headline */}
        <h3 className="text-[20px] font-semibold text-cream leading-snug">
          {headline}
        </h3>

        {/* Description */}
        <p className="text-[16px] text-soft-ink leading-relaxed">
          {description}
        </p>

        {/* Metric */}
        <div className="pt-2">
          <div className="text-[24px] font-mono text-electric inline-block border-b border-electric/20 pb-1">
            {metric}
          </div>
        </div>

        {/* Link */}
        <div className="pt-4">
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-cream font-bold group-hover:text-electric transition-colors"
          >
            Read the story
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

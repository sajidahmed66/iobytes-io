"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

interface TeamCardProps {
  name: string;
  role: string;
  metric: string;
  photo: string;
  linkedin?: string;
  stackoverflow?: string;
  showStackOverflow?: boolean;
  delay?: number;
}

// Simple Stack Overflow Icon
const StackOverflowIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M18 13V19H6V13" />
    <path d="M9 16H15" />
    <path d="M9.2 13.2L14.8 14.4" />
    <path d="M10.1 10.7L15.3 12.8" />
    <path d="M11.8 8.6L16.4 11.6" />
  </svg>
);

export function TeamCard({
  name,
  role,
  metric,
  photo,
  linkedin,
  stackoverflow,
  showStackOverflow = false,
  delay = 0,
}: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <GlassCard padding="comfortable" className="h-full flex flex-col group">
        {/* Photo Placeholder / Image */}
        <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-xl bg-ink/5 border border-warm-gray/10">
          <div className="absolute inset-0 flex items-center justify-center text-ink/10 font-bold text-4xl uppercase tracking-widest">
            {name.split(' ').map(n => n[0]).join('')}
          </div>
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-0"
            onLoadingComplete={(img) => img.classList.remove("opacity-0")}
            onError={() => {
              // Keep showing initials on error
            }}
          />
        </div>

        {/* Name & Role */}
        <h3 className="text-[20px] font-bold text-ink leading-tight mb-1">{name}</h3>
        <p className="text-electric font-bold text-[14px] uppercase tracking-wider mb-4">
          {role}
        </p>

        {/* Metric */}
        <p className="text-soft-ink italic text-[15px] leading-relaxed mb-6 flex-grow">
          &ldquo;{metric}&rdquo;
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4 pt-6 border-t border-warm-gray/20">
          {linkedin ? (
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-soft-ink hover:text-electric transition-colors"
              aria-label={`${name} LinkedIn`}
            >
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
          ) : (
            <Linkedin size={18} strokeWidth={1.5} className="text-warm-gray/40" />
          )}

          {showStackOverflow && (
            stackoverflow ? (
              <a 
                href={stackoverflow} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-soft-ink hover:text-electric transition-colors"
                aria-label={`${name} Stack Overflow`}
              >
                <StackOverflowIcon size={18} />
              </a>
            ) : (
              <div className="text-warm-gray/40">
                <StackOverflowIcon size={18} />
              </div>
            )
          )}
        </div>
      </GlassCard>
    </motion.div>
  );
}

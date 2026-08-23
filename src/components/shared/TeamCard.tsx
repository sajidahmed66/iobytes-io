"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Github, Award } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";
import { avatarBlurDataURL } from "@/lib/image-utils";

type CardSize = "default" | "large" | "compact";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  photo: string;
  linkedin?: string;
  stackoverflow?: string;
  github?: string;
  skills?: string[];
  isAlsoBoard?: boolean;
  showStackOverflow?: boolean;
  imagePosition?: string;
  delay?: number;
  size?: CardSize;
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

const sizeConfig = {
  large: {
    aspectRatio: "aspect-[3/4]",
    nameSize: "text-[24px]",
    roleSize: "text-[14px]",
    bioSize: "text-[16px]",
    spacing: "mb-8",
    padding: "comfortable" as const,
    iconSize: 20,
  },
  default: {
    aspectRatio: "aspect-square",
    nameSize: "text-[20px]",
    roleSize: "text-[14px]",
    bioSize: "text-[15px]",
    spacing: "mb-8",
    padding: "comfortable" as const,
    iconSize: 18,
  },
  compact: {
    aspectRatio: "aspect-square",
    nameSize: "text-[18px]",
    roleSize: "text-[12px]",
    bioSize: "text-[14px]",
    spacing: "mb-6",
    padding: "tight" as const,
    iconSize: 16,
  },
};

export function TeamCard({
  name,
  role,
  bio,
  photo,
  linkedin,
  stackoverflow,
  github,
  skills,
  isAlsoBoard,
  showStackOverflow = false,
  imagePosition = "top",
  delay = 0,
  size = "default",
}: TeamCardProps) {
  const config = sizeConfig[size];

  // Map common positions to Tailwind classes, or use custom value
  const getPositionStyle = () => {
    const positionMap: Record<string, string> = {
      top: "top",
      center: "center",
      bottom: "bottom",
    };
    return positionMap[imagePosition] || imagePosition;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className="transition-shadow duration-300 hover:shadow-xl rounded-2xl"
    >
      <GlassCard padding={config.padding} className="h-full flex flex-col group">
        {/* Photo with Board Badge */}
        <div className={cn(
          "relative w-full overflow-hidden rounded-xl bg-ink/5 border border-warm-gray/10",
          config.aspectRatio,
          config.spacing
        )}>
          <div className="absolute inset-0 flex items-center justify-center text-ink/10 font-bold text-4xl uppercase tracking-widest">
            {name.split(' ').map(n => n[0]).join('')}
          </div>
          <Image
            src={photo}
            alt={name}
            fill
            placeholder="blur"
            blurDataURL={avatarBlurDataURL}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ objectPosition: getPositionStyle() }}
          />

          {/* Board Member Badge */}
          {isAlsoBoard && (
            <div className="absolute top-3 right-3 bg-electric/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full flex items-center gap-1">
              <Award size={12} />
              Board Member
            </div>
          )}
        </div>

        {/* Name & Role */}
        <h3 className={cn("font-extrabold text-ink leading-tight mb-1", config.nameSize)}>
          {name}
        </h3>
        <p className={cn("text-electric font-bold uppercase tracking-wider mb-4", config.roleSize)}>
          {role}
        </p>

        {/* Bio */}
        <p className={cn("text-soft-ink leading-relaxed flex-grow", config.bioSize, size === "compact" ? "mb-4" : "mb-6")}>
          {bio}
        </p>

        {/* Skills Badges */}
        {skills && skills.length > 0 && (
          <div className={cn("flex flex-wrap gap-2", size === "compact" ? "mb-4" : "mb-6")}>
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-ink/5 text-soft-ink text-[11px] font-medium px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Social Icons */}
        {/* <div className={cn(
          "flex items-center gap-4 pt-4 border-t border-warm-gray/20",
          size === "compact" && "pt-3"
        )}>
          {linkedin ? (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-soft-ink hover:text-electric transition-colors"
              aria-label={`${name} LinkedIn`}
            >
              <Linkedin size={config.iconSize} strokeWidth={1.5} />
            </a>
          ) : (
            <Linkedin size={config.iconSize} strokeWidth={1.5} className="text-warm-gray/40" />
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-soft-ink hover:text-electric transition-colors"
              aria-label={`${name} GitHub`}
            >
              <Github size={config.iconSize} strokeWidth={1.5} />
            </a>
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
                <StackOverflowIcon size={config.iconSize} />
              </a>
            ) : (
              <div className="text-warm-gray/40">
                <StackOverflowIcon size={config.iconSize} />
              </div>
            )
          )}
        </div> */}
      </GlassCard>
    </motion.div>
  );
}

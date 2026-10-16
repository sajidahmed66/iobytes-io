import { LucideIcon } from "lucide-react";

export interface CaseStudy {
  slug: string;
  client: string;
  logo?: string;
  metric: string;
  outcome: string;
  industry: string;
  teaser: string;
  summary: string;
  challenge: string;
  approach: string;
  results: string[];
  metrics: { target: number; prefix?: string; suffix?: string; label: string }[];
  techStack: string[];
  testimonial: {
    quote: string;
    attribution: string;
  };
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
  stackoverflow?: string;
  linkedin?: string;
  github?: string;
  skills?: string[];
  isAlsoBoard?: boolean;
  imagePosition?: string; // e.g., "top", "center", "bottom", or custom like "50% 30%"
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    role: string;
    bio: string;
    photo: string;
  };
}

export interface Solution {
  title: string;
  description: string;
  icon: string; // Icon name for dynamic lookup or component
  metric: string;
  href: string;
  featured?: boolean;
}

export interface ResearchTrack {
  slug: string;
  title: string;
  outcome: string;
  problem: string;
  approach: string;
  stage: "research" | "prototype" | "pilot";
  icon: LucideIcon;
  link?: { label: string; href: string };
}

export interface ResearchGroup {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  tracks: ResearchTrack[];
}

export interface AppliedResearchItem {
  slug: string;
  title: string;
  outcome: string;
  detail: string;
  icon: LucideIcon;
}

export interface AppliedResearchStat {
  value: string;
  label: string;
}

export interface AppliedResearch {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  nextUp: string;
  stats: AppliedResearchStat[];
  items: AppliedResearchItem[];
  stack: string[];
  caseStudy: { label: string; href: string };
}

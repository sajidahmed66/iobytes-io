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
  metric: string;
  bio: string;
  photo: string;
  stackoverflow?: string;
  linkedin?: string;
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

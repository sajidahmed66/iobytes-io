import { MetadataRoute } from "next";
import { caseStudies } from "@/lib/data/case-studies";
import { posts } from "@/lib/data/insights";
import { withTrailingSlash } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://iobytes.io";

  const staticPages = [
    "",
    "/solutions",
    "/portfolio",
    "/team",
    "/insights",
    "/contact",
    "/careers",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${withTrailingSlash(route)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : route === "/portfolio" ? 0.8 : 0.5,
  }));

  const caseStudyPages = caseStudies.map((study) => ({
    url: `${baseUrl}${withTrailingSlash(`/portfolio/${study.slug}`)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const insightPages = posts.map((post) => ({
    url: `${baseUrl}${withTrailingSlash(`/insights/${post.slug}`)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...caseStudyPages, ...insightPages];
}

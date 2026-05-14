import { Container, SectionHeader, GlassCard } from "@/components/ui";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { posts } from "@/lib/data/insights";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { format } from "date-fns";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Engineering Perspectives",
  description: "How we think about building software that moves numbers.",
};

export default function InsightsPage() {
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-cream min-h-screen">
        <Container>
          <SectionHeader
            eyebrow="INSIGHTS"
            headline="Engineering Perspectives"
            subheadline="How we think about building software that moves numbers."
            className="mb-16"
          />

          {/* Featured Post */}
          {featuredPost && (
            <Link href={`/insights/${featuredPost.slug}`} className="block mb-16 group">
              <GlassCard padding="none" glow className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-[16/10] bg-ink/5 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-ink/5 font-bold text-4xl uppercase tracking-widest">
                      Featured Image
                    </div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-electric mb-6">
                      <span>{featuredPost.category}</span>
                      <span className="w-1 h-1 rounded-full bg-warm-gray" />
                      <span className="text-soft-ink">{featuredPost.readTime}</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-ink mb-6 group-hover:text-electric transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg text-soft-ink mb-8 line-clamp-2">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center text-sm font-bold text-ink">
                      Read more <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </GlassCard>
            </Link>
          )}

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <Link key={post.slug} href={`/insights/${post.slug}`} className="group">
                <GlassCard padding="none" glow className="h-full flex flex-col overflow-hidden">
                  <div className="aspect-[16/10] bg-ink/5 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-ink/5 font-bold text-xl uppercase tracking-widest">
                      Article Image
                    </div>
                    <div className="absolute top-4 left-4 bg-cream/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-ink">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-soft-ink mb-4">
                      <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                      <span>{format(new Date(post.date), 'MMM d, yyyy')}</span>
                    </div>
                    <h3 className="text-xl font-bold text-ink mb-3 group-hover:text-electric transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-soft-ink mb-6 line-clamp-2 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm font-bold text-ink group-hover:text-electric transition-colors pt-4 border-t border-warm-gray">
                      Read article <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

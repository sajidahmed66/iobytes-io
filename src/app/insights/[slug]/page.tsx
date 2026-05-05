import { Container, GlassCard } from "@/components/ui";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { posts } from "@/lib/data/insights";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Insight Not Found" };
  
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function InsightArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-cream min-h-screen">
        <Container>
          <Link 
            href="/insights" 
            className="inline-flex items-center text-sm font-bold text-soft-ink hover:text-ink mb-12 transition-colors group"
          >
            <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Insights
          </Link>

          <article className="max-w-4xl mx-auto">
            <header className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-electric mb-6 block">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-ink mb-8 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center justify-center gap-6 text-sm font-medium text-soft-ink">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-ink/5 flex items-center justify-center text-[10px] font-bold">
                    {post.author.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
                <div>{format(new Date(post.date), 'MMMM d, yyyy')}</div>
              </div>
            </header>

            <div className="aspect-[21/9] bg-ink/5 rounded-3xl mb-16 relative overflow-hidden">
               <div className="absolute inset-0 flex items-center justify-center text-ink/5 font-bold text-4xl uppercase tracking-widest">
                Article Cover
              </div>
            </div>

            <div 
              className="prose prose-lg prose-ink max-w-none mx-auto
                prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-ink
                prose-p:text-soft-ink prose-p:leading-relaxed
                prose-strong:text-ink prose-blockquote:border-electric prose-blockquote:bg-ink/5
                prose-blockquote:py-1 prose-blockquote:rounded-r-xl
                prose-code:font-mono prose-code:bg-ink/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} 
            />

            <footer className="mt-24 pt-12 border-t border-warm-gray">
              <GlassCard padding="comfortable" className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 rounded-2xl bg-ink/5 flex items-center justify-center text-2xl font-bold text-ink/20 shrink-0">
                  {post.author.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-ink mb-1">{post.author.name}</h4>
                  <p className="text-electric text-sm font-bold uppercase tracking-widest mb-3">{post.author.role}</p>
                  <p className="text-soft-ink leading-relaxed">
                    {post.author.bio}
                  </p>
                </div>
              </GlassCard>
            </footer>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}

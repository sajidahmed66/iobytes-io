import { Container, AnimatedButton, AnimatedCounter, GlassCard } from "@/components/ui";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/sections/CTABanner";
import { caseStudies } from "@/lib/data/case-studies";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return { title: "Project Not Found" };
  
  return {
    title: `${study.metric} ${study.outcome} | ${study.client} | iobytes`,
    description: study.summary,
  };
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default async function PortfolioItemPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="bg-cream py-24 border-b border-warm-gray">
          <Container>
            <div className="max-w-4xl">
              <span className="text-xs font-bold uppercase tracking-widest text-electric mb-6 block">
                {study.industry} — {study.client}
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-ink mb-6">
                <span className="text-electric">{study.metric}</span> {study.outcome}
              </h1>
              <p className="text-xl md:text-2xl text-soft-ink max-w-2xl leading-relaxed">
                {study.summary}
              </p>
            </div>
          </Container>
        </section>

        <Container className="py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Content */}
            <div className="lg:col-span-8 space-y-16">
              <section>
                <h3 className="text-2xl font-bold mb-6">Challenge</h3>
                <div className="prose prose-lg text-soft-ink">
                  <p>{study.challenge}</p>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold mb-6">Approach</h3>
                <div className="prose prose-lg text-soft-ink mb-8">
                  <p>{study.approach}</p>
                </div>
                <ul className="space-y-4">
                  {study.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-electric shrink-0 mt-1" size={20} />
                      <span className="text-soft-ink">{result}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-bold mb-8">Results</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                  {study.metrics.map((m, i) => (
                    <div key={i} className="p-6 bg-ink/5 rounded-2xl border border-ink/5">
                      <div className="text-4xl font-bold text-electric mb-1">
                        <AnimatedCounter target={m.target} prefix={m.prefix} suffix={m.suffix} />
                      </div>
                      <div className="text-sm font-bold uppercase tracking-widest text-soft-ink">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <GlassCard padding="comfortable" className="relative mt-12">
                  <blockquote className="text-xl font-medium text-ink leading-relaxed mb-6 italic">
                    &ldquo;{study.testimonial.quote}&rdquo;
                  </blockquote>
                  <cite className="not-italic block font-bold text-soft-ink">
                    — {study.testimonial.attribution}
                  </cite>
                </GlassCard>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <GlassCard padding="comfortable" glow>
                  <div className="mb-8 p-8 bg-ink/5 rounded-xl flex items-center justify-center">
                    {study.logo ? (
                      <div className="h-12 relative w-full invert brightness-0">
                        <Image
                          src={study.logo}
                          alt={`${study.client} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <span className="text-xs font-bold tracking-widest uppercase text-soft-ink/40">
                        {study.client} Logo
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-soft-ink mb-2">Industry</h4>
                      <p className="font-bold text-ink">{study.industry}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-soft-ink mb-2">Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.techStack.map((tech) => (
                          <span key={tech} className="text-[10px] font-bold uppercase tracking-widest bg-ink/5 px-2 py-0.5 rounded-full text-soft-ink">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <AnimatedButton className="w-full" asChild>
                    <Link href="/contact">Start a similar project</Link>
                  </AnimatedButton>
                </GlassCard>
              </div>
            </aside>
          </div>
        </Container>
        
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}

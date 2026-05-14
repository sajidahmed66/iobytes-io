import { Container, GlassCard, AnimatedButton } from "@/components/ui";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Workflow, Link as LinkIcon, Cloud, Code, Database, RefreshCw, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Solutions",
  description: "B2B enterprise software solutions engineered for specific business outcomes.",
};

const solutions = [
  {
    title: "Workflow Automation",
    description: "Eliminate manual bottlenecks. We map your complex internal processes and engineer automated flows that reclaim 30% of your team's week.",
    icon: Workflow,
    metric: "30% time reclaimed",
    href: "/contact?subject=Workflow%20Automation",
  },
  {
    title: "System Integration",
    description: "Stop the data drift. We connect your siloed enterprise systems—ERP, CRM, Legacy—into a single, reliable source of truth.",
    icon: LinkIcon,
    metric: "Zero data drift",
    href: "/contact?subject=System%20Integration",
  },
  {
    title: "Cloud Infrastructure",
    description: "Architecture that scales with your growth. We build resilient, automated infrastructure that maintains performance at 10x current volume.",
    icon: Cloud,
    metric: "10x scale capacity",
    href: "/contact?subject=Cloud%20Infrastructure",
  },
  {
    title: "Custom Software",
    description: "Bespoke tools for bespoke problems. No workarounds, no compromises. We build the exact bridge between your current state and your target outcome.",
    icon: Code,
    metric: "100% fit-to-purpose",
    href: "/contact?subject=Custom%20Software",
    featured: true,
    code: `// Outcome-first logic
if (metric < target) {
  optimize(workflow);
  return result;
}`
  },
  {
    title: "Data Engineering",
    description: "Turn raw data into board-ready insights. We build the pipelines that transform fragmented metrics into strategic decision-making assets.",
    icon: Database,
    metric: "Real-time visibility",
    href: "/contact?subject=Data%20Engineering",
  },
  {
    title: "Legacy Modernization",
    description: "Upgrade without the downtime. We surgically replace aging components with modern alternatives while preserving your critical business logic.",
    icon: RefreshCw,
    metric: "99.9% migration uptime",
    href: "/contact?subject=Legacy%20Modernization",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen">
        <section className="bg-ink text-cream py-24 mb-16">
          <Container>
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                Built to Move <br /> Your <span className="text-electric">Numbers</span>
              </h1>
              <p className="text-xl md:text-2xl text-cream/60 max-w-2xl">
                Six capabilities. One outcome philosophy.
              </p>
            </div>
          </Container>
        </section>

        <Container className="pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution) => (
              <div 
                key={solution.title}
                className={solution.featured ? "lg:col-span-2" : ""}
              >
                <GlassCard glow padding="comfortable" className="h-full flex flex-col group">
                  <div className="flex items-start justify-between mb-8">
                    <div className="p-3 rounded-xl bg-electric/10">
                      <solution.icon className="text-electric" size={32} strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-electric">
                      {solution.metric}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-ink mb-4">{solution.title}</h3>
                  <p className="text-soft-ink mb-8 leading-relaxed flex-grow">
                    {solution.description}
                  </p>

                  {solution.featured && solution.code && (
                    <div className="mb-8 p-6 bg-cream rounded-xl border border-warm-gray shadow-inner">
                      <pre className="font-mono text-sm text-ink/70">
                        <code>{solution.code}</code>
                      </pre>
                    </div>
                  )}

                  <Link 
                    href={solution.href} 
                    className="inline-flex items-center text-sm font-bold text-ink hover:text-electric transition-colors group/link"
                  >
                    Discuss your solution
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </GlassCard>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <AnimatedButton size="lg" asChild>
              <Link href="/contact">Discuss Your Solution</Link>
            </AnimatedButton>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

import dynamic from "next/dynamic";
import { Container, GlassCard, AnimatedButton, SectionHeader } from "@/components/ui";
import { Navbar } from "@/components/layout/Navbar";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { withTrailingSlash } from "@/lib/seo";
import { researchGroups, researchContributors } from "@/lib/data/research";
import { teamData } from "@/lib/data/team";
import { cn } from "@/lib/utils";

const Footer = dynamic(() => import("@/components/layout/Footer").then(mod => mod.Footer));

export const metadata: Metadata = {
  title: "Maritime AI Research & Development",
  description: "iobytes R&D is researching AI for maritime traffic and port operations: arrival forecasting, congestion control, and encounter risk detection.",
  alternates: {
    canonical: withTrailingSlash("/research"),
  },
};

const stageLabels = {
  research: "Research stage",
  prototype: "Prototype",
  pilot: "Pilot",
} as const;

const contributors = Object.values(teamData)
  .flat()
  .filter((member) => researchContributors.includes(member.name));

export default function ResearchPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen">
        <section className="bg-ink text-cream py-24 mb-16">
          <Container>
            <div className="max-w-4xl">
              <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-electric block mb-6">
                Research & Development
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                Fewer Ships <br /> Waiting at <span className="text-electric">Anchor</span>
              </h1>
              <p className="text-xl md:text-2xl text-cream/60 max-w-2xl">
                We are applying the data and automation engineering we ship for enterprises to congested ports and crowded waterways. Every track below is at research stage.
              </p>
            </div>
          </Container>
        </section>

        <Container className="pb-24 space-y-24">
          {researchGroups.map((group) => (
            <section key={group.id} id={group.id} className="scroll-mt-28">
              <SectionHeader
                eyebrow={group.eyebrow}
                headline={group.title}
                subheadline={group.intro}
                className="mb-12"
              />

              <div
                className={cn(
                  "grid grid-cols-1 md:grid-cols-2 gap-6",
                  group.tracks.length > 2 && "lg:grid-cols-3"
                )}
              >
                {group.tracks.map((track) => (
                  <GlassCard key={track.slug} glow padding="comfortable" className="h-full flex flex-col">
                    <div className="flex items-start justify-between mb-8">
                      <div className="p-3 rounded-xl bg-electric/10">
                        <track.icon className="text-electric" size={32} strokeWidth={1.5} aria-hidden="true" />
                      </div>
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-electric">
                        {stageLabels[track.stage]}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-ink mb-3">{track.title}</h3>
                    <p className="text-lg font-semibold text-ink mb-4">{track.outcome}</p>
                    <p className="text-soft-ink leading-relaxed mb-3">{track.problem}</p>
                    <p className="text-soft-ink leading-relaxed">{track.approach}</p>
                  </GlassCard>
                ))}
              </div>
            </section>
          ))}

          {contributors.length > 0 && (
            <section>
              <SectionHeader
                eyebrow="The people behind it"
                headline="Domain depth, not just models"
                subheadline="Maritime operations and operations research expertise from the iobytes team."
                className="mb-12"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contributors.map((member) => (
                  <GlassCard key={member.name} padding="comfortable" hover={false} className="h-full">
                    <h3 className="text-xl font-bold text-ink mb-1">{member.name}</h3>
                    <p className="text-sm font-semibold text-electric mb-4">{member.role}</p>
                    <p className="text-soft-ink leading-relaxed">{member.bio}</p>
                  </GlassCard>
                ))}
              </div>
              <Link
                href="/team/"
                className="mt-8 inline-flex items-center text-sm font-bold text-ink hover:text-electric transition-colors group/link"
              >
                Meet the full team
                <ArrowRight size={16} strokeWidth={1.5} className="ml-2 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </section>
          )}
        </Container>

        <section className="bg-ink text-cream py-24">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-[48px] font-bold tracking-tight mb-6 leading-tight">
                Safer, faster, <span className="text-electric">smarter</span> waterways
              </h2>
              <p className="text-lg md:text-xl text-cream/60 mb-10">
                Shipping is heading toward waterways where every vessel is visible and every port entry is planned. We are building toward that one research question at a time. Port operators, fleet managers, and research partners: help us test it.
              </p>
              <AnimatedButton size="lg" asChild>
                <Link href="/contact/?subject=Research%20Partnership">Explore a Research Partnership</Link>
              </AnimatedButton>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}


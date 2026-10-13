import { existsSync } from "fs";
import path from "path";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container, AnimatedButton } from "@/components/ui";
import { Navbar } from "@/components/layout/Navbar";
import { ResearchHeroDiagram } from "@/components/sections/ResearchHeroDiagram";
import { withTrailingSlash } from "@/lib/seo";
import { researchGroups, appliedResearch, researchContributors } from "@/lib/data/research";
import { teamData } from "@/lib/data/team";
import { cn } from "@/lib/utils";

const Footer = dynamic(() => import("@/components/layout/Footer").then((mod) => mod.Footer));

export const metadata: Metadata = {
  title: "Maritime AI Research & Development",
  description:
    "iobytes R&D is researching AI for maritime traffic and port operations: arrival forecasting, congestion control, and encounter risk detection. Plus the n8n workflow automation we shipped for Amar Bot.",
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
  .filter((member) => researchContributors.includes(member.name))
  .map((member) => ({
    ...member,
    // Static export: resolve at build time whether the headshot exists so a
    // missing file falls back to initials instead of a broken image.
    hasPhoto: existsSync(path.join(process.cwd(), "public", member.photo)),
  }));

const initials = (name: string) =>
  name
    .replace(/^Dr\.\s+/, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

const pageNav = [
  ...researchGroups.map((group) => ({
    href: `#${group.id}`,
    label: group.title,
    note: `${group.tracks.length} tracks`,
  })),
  { href: `#${appliedResearch.id}`, label: "Amar Bot automation", note: "In production" },
  { href: "#people", label: "People", note: `${contributors.length} experts` },
];

const linkClass =
  "group/link inline-flex items-center gap-2 text-sm font-bold transition-colors duration-200 rounded-sm focus-visible:outline-2 focus-visible:outline-electric focus-visible:outline-offset-4";

export default function ResearchPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen selection:bg-electric/30 selection:text-ink">
        {/* Hero */}
        <section className="pt-12 pb-14 md:pt-20 md:pb-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              <div className="lg:col-span-7">
                <h1 className="text-[44px] leading-[0.98] sm:text-6xl md:text-7xl lg:text-[80px] font-black tracking-[-0.03em] text-ink text-balance">
                  Fewer ships waiting at <span className="text-electric">anchor</span>.
                </h1>
                <p className="mt-8 max-w-[58ch] text-lg md:text-xl text-soft-ink leading-relaxed">
                  We are applying the data and automation engineering we ship for enterprises to
                  congested ports, crowded waterways, and the chat inboxes where small merchants
                  sell. The maritime tracks are at research stage. The automation work is in
                  production with Amar Bot.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <AnimatedButton size="lg" asChild>
                    <Link href="/contact/?subject=Research%20Partnership">Partner with the lab</Link>
                  </AnimatedButton>
                  <a href={`#${appliedResearch.id}`} className={cn(linkClass, "text-ink hover:text-electric")}>
                    See what already shipped
                    <ArrowRight
                      size={16}
                      strokeWidth={1.5}
                      className="transition-transform duration-200 group-hover/link:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5">
                <ResearchHeroDiagram className="max-w-[520px] lg:ml-auto" />
              </div>
            </div>
          </Container>
        </section>

        {/* On this page */}
        <nav aria-label="On this page" className="border-y border-warm-gray">
          <Container>
            <ul className="-mx-4 flex gap-x-8 overflow-x-auto px-4 py-4 text-sm sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {pageNav.map((item) => (
                <li key={item.href} className="shrink-0">
                  <a
                    href={item.href}
                    className="inline-flex items-baseline gap-2 py-1 font-semibold text-ink transition-colors duration-200 hover:text-electric rounded-sm focus-visible:outline-2 focus-visible:outline-electric focus-visible:outline-offset-4"
                  >
                    {item.label}
                    <span className="text-xs font-medium text-soft-ink">{item.note}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </nav>

        {/* Research tracks */}
        {researchGroups.map((group) => (
          <section
            key={group.id}
            id={group.id}
            className="scroll-mt-28 border-b border-warm-gray py-20 md:py-28"
          >
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                <div className="lg:col-span-4">
                  <div className="lg:sticky lg:top-28">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-ink text-balance">
                      {group.title}
                    </h2>
                    <p className="mt-5 max-w-[44ch] text-lg text-soft-ink leading-relaxed">
                      {group.intro}
                    </p>
                    <p className="mt-6 text-sm font-medium text-soft-ink">
                      {group.tracks.length} tracks, all at research stage.
                    </p>
                  </div>
                </div>

                <ol className="lg:col-span-8 border-t border-warm-gray">
                  {group.tracks.map((track) => (
                    <li key={track.slug} className="border-b border-warm-gray py-8 md:py-10">
                      <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
                        <div className="flex items-center gap-3.5">
                          <track.icon
                            size={22}
                            strokeWidth={1.5}
                            className="shrink-0 text-ink"
                            aria-hidden="true"
                          />
                          <h3 className="text-xl md:text-2xl font-bold tracking-[-0.01em] text-ink">
                            {track.title}
                          </h3>
                        </div>
                        <span className="shrink-0 rounded-full border border-warm-gray px-3 py-1 text-xs font-semibold text-soft-ink">
                          {stageLabels[track.stage]}
                        </span>
                      </div>
                      <p className="mt-4 max-w-[60ch] text-lg font-semibold text-ink">
                        {track.outcome}
                      </p>
                      <dl className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
                        <div>
                          <dt className="text-sm font-semibold text-ink">Problem</dt>
                          <dd className="mt-1.5 text-soft-ink leading-relaxed">{track.problem}</dd>
                        </div>
                        <div>
                          <dt className="text-sm font-semibold text-ink">Approach</dt>
                          <dd className="mt-1.5 text-soft-ink leading-relaxed">{track.approach}</dd>
                        </div>
                      </dl>
                    </li>
                  ))}
                </ol>
              </div>
            </Container>
          </section>
        ))}

        {/* Applied R&D: Amar Bot */}
        <section
          id={appliedResearch.id}
          className="scroll-mt-28 bg-ink py-20 text-cream md:py-28 selection:bg-electric selection:text-ink"
        >
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-5">
                <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.02em] text-balance">
                  {appliedResearch.title}
                </h2>
                <p className="mt-5 inline-flex items-center gap-2.5 text-sm font-semibold">
                  <span className="size-2.5 rounded-full bg-electric" aria-hidden="true" />
                  In production for Amar Bot
                </p>
                <p className="mt-6 max-w-[52ch] text-lg text-cream/70 leading-relaxed">
                  {appliedResearch.intro}
                </p>

                <dl className="mt-10 grid grid-cols-2 border-t border-cream/15">
                  {appliedResearch.stats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className={cn(
                        "flex flex-col-reverse border-b border-cream/15 py-5",
                        index % 2 === 0 ? "pr-6" : "border-l border-cream/15 pl-6"
                      )}
                    >
                      <dt className="mt-1.5 text-sm text-cream/60 leading-snug">{stat.label}</dt>
                      <dd className="text-4xl font-bold tracking-[-0.03em] text-electric tabular-nums">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <Link
                  href={appliedResearch.caseStudy.href}
                  className={cn(linkClass, "mt-8 text-cream hover:text-electric")}
                >
                  {appliedResearch.caseStudy.label}
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </div>

              <div className="lg:col-span-7">
                <ul className="border-t border-cream/15 lg:border-t-0">
                  {appliedResearch.items.map((item) => (
                    <li key={item.slug} className="border-b border-cream/15 py-8 first:lg:pt-0">
                      <div className="flex items-center gap-3">
                        <item.icon
                          size={20}
                          strokeWidth={1.5}
                          className="shrink-0 text-electric"
                          aria-hidden="true"
                        />
                        <h3 className="text-xl font-bold tracking-[-0.01em]">{item.title}</h3>
                      </div>
                      <p className="mt-3 max-w-[58ch] text-lg font-semibold">{item.outcome}</p>
                      <p className="mt-2 max-w-[65ch] text-cream/65 leading-relaxed">{item.detail}</p>
                    </li>
                  ))}
                  <li className="border-b border-cream/15 py-8">
                    <div className="flex items-center gap-3">
                      <span
                        className="size-5 shrink-0 rounded-full border border-dashed border-electric"
                        aria-hidden="true"
                      />
                      <h3 className="text-xl font-bold tracking-[-0.01em]">Still in the lab</h3>
                    </div>
                    <p className="mt-3 max-w-[65ch] text-cream/65 leading-relaxed">{appliedResearch.nextUp}</p>
                  </li>
                </ul>

                <ul aria-label="Technology stack" className="mt-8 flex flex-wrap gap-2">
                  {appliedResearch.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-cream/20 px-3 py-1 text-xs font-semibold text-cream/80"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* People */}
        {contributors.length > 0 && (
          <section id="people" className="scroll-mt-28 border-b border-warm-gray py-20 md:py-28">
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                <div className="lg:col-span-4">
                  <div className="lg:sticky lg:top-28">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-ink text-balance">
                      Domain depth, not just models
                    </h2>
                    <p className="mt-5 max-w-[44ch] text-lg text-soft-ink leading-relaxed">
                      Maritime operations and operations research expertise from the iobytes team.
                    </p>
                    <Link href="/team/" className={cn(linkClass, "mt-6 text-ink hover:text-electric")}>
                      Meet the full team
                      <ArrowRight
                        size={16}
                        strokeWidth={1.5}
                        className="transition-transform duration-200 group-hover/link:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>

                <ul className="lg:col-span-8 border-t border-warm-gray">
                  {contributors.map((member) => (
                    <li
                      key={member.name}
                      className="grid grid-cols-[64px_1fr] gap-5 border-b border-warm-gray py-8 md:grid-cols-[80px_1fr] md:gap-8"
                    >
                      {member.hasPhoto ? (
                        <Image
                          src={member.photo}
                          alt={member.name}
                          width={80}
                          height={80}
                          className="size-16 rounded-full object-cover md:size-20"
                          style={member.imagePosition ? { objectPosition: member.imagePosition } : undefined}
                        />
                      ) : (
                        <span
                          aria-hidden="true"
                          className="flex size-16 items-center justify-center rounded-full bg-ink text-lg font-bold text-cream md:size-20 md:text-xl"
                        >
                          {initials(member.name)}
                        </span>
                      )}
                      <div>
                        <h3 className="text-xl font-bold text-ink">{member.name}</h3>
                        <p className="mt-1 text-sm font-semibold text-soft-ink">{member.role}</p>
                        <p className="mt-3 max-w-[62ch] text-soft-ink leading-relaxed">{member.bio}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Container>
          </section>
        )}

        {/* CTA */}
        <section className="bg-ink py-20 text-cream md:py-28 selection:bg-electric selection:text-ink">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:items-end">
              <div className="lg:col-span-8">
                <h2 className="text-4xl md:text-6xl font-black leading-[1] tracking-[-0.03em] text-balance">
                  Safer, faster, <span className="text-electric">smarter</span> waterways.
                </h2>
                <p className="mt-6 max-w-[58ch] text-lg md:text-xl text-cream/65 leading-relaxed">
                  Shipping is heading toward waterways where every vessel is visible and every
                  port entry is planned. We are building toward that one research question at a
                  time. Port operators, fleet managers, and research partners: help us test it.
                </p>
              </div>
              <div className="lg:col-span-4 lg:justify-self-end">
                <AnimatedButton size="lg" asChild>
                  <Link href="/contact/?subject=Research%20Partnership">Explore a Research Partnership</Link>
                </AnimatedButton>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

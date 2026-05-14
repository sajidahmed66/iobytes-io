"use client";

import { Container, AnimatedButton } from "@/components/ui";
import { Target, ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTABanner() {
  return (
    <section className="bg-electric py-12">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-8 text-white">
            <div className="shrink-0 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
              <Target size={32} />
            </div>
            <div className="max-w-md">
              <h2 className="text-2xl font-bold tracking-tight mb-2">
                READY TO ENGINEER WHAT&apos;S NEXT?
              </h2>
              <p className="text-white/80 font-medium leading-tight">
                Let&apos;s build the outcomes that move your business forward.
              </p>
            </div>
          </div>

          <AnimatedButton size="lg" asChild className="rounded-sm px-12 bg-white text-electric hover:bg-white/90 shadow-none border-none">
            <Link href="/contact" className="flex items-center gap-2 font-bold uppercase tracking-widest">
              SCHEDULE A STRATEGY CALL <ArrowRight size={18} />
            </Link>
          </AnimatedButton>
        </div>
      </Container>
    </section>
  );
}

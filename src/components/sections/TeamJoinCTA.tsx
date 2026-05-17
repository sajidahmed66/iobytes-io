"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

export function TeamJoinCTA() {
  return (
    <div className="mt-20">
      <GlassCard padding="comfortable" className="bg-ink text-cream border-ink overflow-hidden relative group">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric/10 blur-[120px] rounded-full -mr-64 -mt-64 transition-transform duration-1000 group-hover:scale-110" />
        
        <div className="relative z-10 py-12 md:py-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Join Our Team</h2>
          <p className="text-cream/70 text-lg md:text-xl mb-10">
            We hire engineers who care about outcomes, not just output. If you have a track record of delivering measurable impact, we want to talk.
          </p>
          <Link 
            href="/contact?subject=careers"
            className="inline-flex items-center gap-2 bg-electric text-ink px-8 py-4 rounded-full font-semibold text-lg hover:bg-electric/90 transition-all hover:scale-105 active:scale-95"
          >
            View Open Roles
            <ArrowRight size={20} />
          </Link>
        </div>
      </GlassCard>
    </div>
  );
}

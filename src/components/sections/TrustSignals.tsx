"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui";
import { ShieldCheck, Lock, CheckCircle2, Globe } from "lucide-react";
import { useReducedMotion } from "framer-motion";

const originalLogos = [
  { name: "BAT Bangladesh", src: "/bat-bangladesh-logo.png" },
  { name: "CUET", src: "/cuet_logo.png" },
  { name: "FactoryNext", src: "/factorynext.png" },
  { name: "RR Lifestyle", src: "/RR-LIFESTYLE-PNG.webp" },
  { name: "Agroshift", src: "/agroshift.avif" },
  { name: "ASI Hub", src: "/ais-hub.png" },
  { name: "Kiacom", src: "/kiacom.png" }
];

const securityBadges = [
  { name: "SOC 2", icon: ShieldCheck },
  { name: "ISO", icon: Lock },
  { name: "HIPAA", icon: CheckCircle2 },
  { name: "GDPR", icon: Globe }
];

export function TrustSignals() {
  const shouldReduceMotion = useReducedMotion();
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);

  // Double logos for seamless loop
  const marqueeLogos = [...originalLogos, ...originalLogos];

  return (
    <section className="bg-cream border-b border-warm-gray overflow-hidden">
      <Container className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Logos Column (Scrolling) */}
          <div className="lg:col-span-8 lg:border-r border-warm-gray lg:pr-12">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-soft-ink mb-8">
              Trusted by Enterprise Leaders
            </h4>
            
            <div 
              className="relative w-full overflow-hidden"
              onMouseEnter={() => setIsMarqueePaused(true)}
              onMouseLeave={() => setIsMarqueePaused(false)}
            >
              <div
                className="flex whitespace-nowrap"
                style={{ 
                  display: "flex",
                  width: "fit-content",
                  animation: shouldReduceMotion ? "none" : "marquee 30s linear infinite reverse",
                  animationPlayState: isMarqueePaused ? "paused" : "running",
                }}
              >
                {marqueeLogos.map((logo, index) => (
                  <div
                    key={`${logo.name}-${index}`}
                    className="inline-flex items-center justify-center mx-10 w-32 h-14 relative opacity-75 hover:opacity-100 transition-all duration-300 shrink-0 grayscale-[50%] hover:grayscale-0 hover:scale-105"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Security Column (Static) */}
          <div className="lg:col-span-4 pl-0 lg:pl-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-soft-ink mb-8">
              Security & Compliance
            </h4>
            <div className="flex items-center gap-6 flex-wrap">
              {securityBadges.map((badge) => (
                <div key={badge.name} className="flex flex-col items-center gap-2 group">
                  <div className="w-11 h-11 rounded-full border border-warm-gray bg-white flex items-center justify-center text-soft-ink group-hover:text-electric group-hover:border-electric group-hover:shadow-sm transition-all duration-300">
                    <badge.icon size={18} strokeWidth={1.5} />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-soft-ink group-hover:text-electric transition-colors">
                    {badge.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

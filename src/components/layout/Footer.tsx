"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  solutions: [
    { name: "Enterprise B2B", href: "/solutions/#b2b" },
    { name: "Custom Applications", href: "/solutions/#custom" },
    { name: "Metrics & Data", href: "/solutions/#data" },
    { name: "Scalable Architecture", href: "/solutions/#architecture" },
  ],
  company: [
    { name: "Team", href: "/team/" },
    { name: "Insights", href: "/insights/" },
    { name: "Portfolio", href: "/portfolio/" },
    { name: "Careers", href: "/careers/" },
  ],
  connect: [
    { name: "Contact", href: "/contact/" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/io-bytes", icon: Linkedin },
  ],
};

export function Footer() {
  return (
    <footer className="bg-ink text-cream pt-20 pb-10 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-electric/30 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/iobytes-logo.png" alt="iobytes logo" width={32} height={32} className="object-contain h-8 w-auto invert brightness-0" />
              <span className="text-2xl font-bold tracking-tight">
                iobytes<span className="text-electric">.</span>
              </span>
            </Link>
            <p className="text-cream/60 max-w-xs leading-relaxed">
              Every byte engineered for impact. We design, build, and ship custom software for B2B enterprises.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-electric">Solutions</h4>
            <ul className="space-y-4">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-cream/60 hover:text-cream hover:translate-x-1 transition-all duration-200 inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-electric">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-cream/60 hover:text-cream hover:translate-x-1 transition-all duration-200 inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-electric">Connect</h4>
            <ul className="space-y-4">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target="_blank"
                    className="flex items-center space-x-2 text-cream/60 hover:text-cream hover:translate-x-1 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-electric rounded-sm"
                    aria-label={link.icon ? `Follow us on ${link.name}` : link.name}
                  >
                    {link.icon && <link.icon size={16} aria-hidden="true" />}
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-cream/40">
          <p>(c) {new Date().getFullYear()} iobytes. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy/" className="hover:text-cream transition-colors">Privacy Policy</Link>
            <Link href="/terms/" className="hover:text-cream transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

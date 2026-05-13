import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  solutions: [
    { name: "Enterprise B2B", href: "/solutions#b2b" },
    { name: "Custom Applications", href: "/solutions#custom" },
    { name: "Metrics & Data", href: "/solutions#data" },
    { name: "Scalable Architecture", href: "/solutions#architecture" },
  ],
  company: [
    { name: "Team", href: "/team" },
    { name: "Insights", href: "/insights" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Careers", href: "/careers" },
  ],
  connect: [
    { name: "Contact", href: "/contact" },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "GitHub", href: "https://github.com", icon: Github },
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  ],
};

export function Footer() {
  return (
    <footer className="bg-ink text-cream pt-20 pb-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/iobytes-logo.png" alt="iobytes logo" width={32} height={32} className="object-contain h-8 w-auto invert brightness-0" />
              <span className="text-2xl font-bold tracking-tight">
                iobytes<span className="text-electric">.</span>
              </span>
            </Link>
            <p className="text-cream/60 max-w-xs leading-relaxed">
              The Outcome Engineering Firm. We design, build, and ship custom software for B2B enterprises.
            </p>
          </div>

          {/* Solutions Column */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-electric">Solutions</h4>
            <ul className="space-y-4">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-cream/60 hover:text-cream transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-electric">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-cream/60 hover:text-cream transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-electric">Connect</h4>
            <ul className="space-y-4">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="flex items-center space-x-2 text-cream/60 hover:text-cream transition-colors focus-visible:outline-2 focus-visible:outline-electric rounded-sm"
                    aria-label={link.icon ? `Follow us on ${link.name}` : link.name}
                  >
                    {link.icon && <link.icon size={16} aria-hidden="true" />}
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-cream/40">
          <p>© {new Date().getFullYear()} iobytes. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-cream transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-cream transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

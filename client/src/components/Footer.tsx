/**
 * FOOTER — Midnight Craft Design System
 * Dark footer with brand bars motif, links, and contact info
 */
import { Link } from "wouter";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Web Development", href: "/services/web-development" },
    { label: "Mobile Apps", href: "/services/mobile-apps" },
    { label: "UI/UX Design", href: "/services/ui-ux-design" },
    { label: "Custom Software", href: "/services/custom-software" },
    { label: "E-Commerce", href: "/services/ecommerce" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/work" },
    { label: "Process", href: "/process" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060b16] border-t border-white/5">
      {/* Main Footer */}
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-6 w-fit">
              <img
                src="/logo.png"
                alt="Cactus Digital Media"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Software. Engineered for Growth. We build premium digital products
              that help Nigerian and global businesses scale with confidence.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:admin@cactusdigitalmedia.ng"
                className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors text-sm group"
              >
                <Mail size={15} className="text-emerald-500 shrink-0" />
                admin@cactusdigitalmedia.ng
              </a>
              <a
                href="https://wa.me/2349032353823"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors text-sm"
              >
                <Phone size={15} className="text-emerald-500 shrink-0" />
                +234 903 235 3823
              </a>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin size={15} className="text-emerald-500 shrink-0" />
                Lagos, Nigeria
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-label font-600 text-white text-sm mb-5 tracking-wide">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs font-label">
            © {currentYear} Cactus Digital Media. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <div className="w-[2px] h-3 bg-emerald-500/50 rounded-full" />
            <div className="w-[2px] h-4 bg-emerald-500 rounded-full" />
            <div className="w-[2px] h-3 bg-emerald-500/50 rounded-full" />
            <span className="ml-2 text-slate-500 text-xs font-label">
              Software. Engineered for Growth.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/**
 * PRICING PAGE — Cactus Digital Media
 * Midnight Craft Design System
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Star, Zap, Shield } from "lucide-react";
import Layout from "@/components/Layout";

const plans = [
  {
    name: "Starter",
    tagline: "Perfect for small businesses",
    price: "₦500K",
    priceUSD: "$350",
    period: "one-time",
    description: "A professional website to establish your online presence.",
    features: [
      "5-page responsive website",
      "Mobile-optimized design",
      "Basic SEO setup",
      "Contact form",
      "Google Analytics integration",
      "1 month post-launch support",
      "CMS for content updates",
    ],
    notIncluded: ["Custom animations", "E-commerce functionality", "Mobile app"],
    cta: "Get Started",
    popular: false,
    color: "border-white/8",
  },
  {
    name: "Growth",
    tagline: "For growing businesses",
    price: "₦1.5M",
    priceUSD: "$1,000",
    period: "one-time",
    description: "A full-featured web platform engineered for growth.",
    features: [
      "Up to 15 pages",
      "Custom UI/UX design",
      "Advanced SEO & performance",
      "Blog/CMS integration",
      "Contact forms & lead capture",
      "Analytics dashboard",
      "Social media integration",
      "3 months post-launch support",
      "Performance optimization",
    ],
    notIncluded: ["Mobile app", "Custom backend"],
    cta: "Get Started",
    popular: true,
    color: "border-emerald-500/40",
  },
  {
    name: "Enterprise",
    tagline: "For ambitious companies",
    price: "Custom",
    priceUSD: "Custom",
    period: "project",
    description: "Complex platforms, mobile apps, and custom software solutions.",
    features: [
      "Full custom web application",
      "Mobile app (iOS & Android)",
      "Custom backend & API",
      "Database design & optimization",
      "Advanced security features",
      "CI/CD pipeline setup",
      "Load testing & scaling",
      "6 months post-launch support",
      "Dedicated project manager",
      "SLA guarantee",
    ],
    notIncluded: [],
    cta: "Book Discovery Call",
    popular: false,
    color: "border-white/8",
  },
];

const addons = [
  { name: "Mobile App (Flutter)", price: "₦800K+", description: "iOS & Android app" },
  { name: "E-Commerce Integration", price: "₦300K+", description: "Full online store setup" },
  { name: "UI/UX Design Only", price: "₦200K+", description: "Figma designs & prototypes" },
  { name: "Monthly Maintenance", price: "₦50K/mo", description: "Updates, backups, monitoring" },
  { name: "SEO Package", price: "₦100K/mo", description: "Ongoing SEO optimization" },
  { name: "Custom Integrations", price: "₦150K+", description: "Third-party API integrations" },
];

export default function Pricing() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0a0f1e] overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex items-end gap-[3px] h-5">
                <div className="w-[2px] h-3 bg-emerald-500 rounded-full" />
                <div className="w-[2px] h-5 bg-emerald-500 rounded-full" />
                <div className="w-[2px] h-4 bg-emerald-500 rounded-full" />
              </div>
              <span className="section-label">Transparent Pricing</span>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-800 text-white mb-6">
              Simple, <span className="gradient-text">Honest Pricing</span>
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mx-auto">
              No hidden fees. No surprises. Just clear pricing for premium software engineering.
              All prices are starting points — final quotes are tailored to your project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-[#060b16]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative bg-[#111827] border ${plan.color} rounded-2xl p-7 flex flex-col ${
                  plan.popular ? "ring-1 ring-emerald-500/30" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-emerald-500 text-white text-xs font-label font-700 px-4 py-1 rounded-full flex items-center gap-1">
                      <Star size={11} fill="white" /> Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-display font-800 text-white text-2xl mb-1">{plan.name}</h3>
                  <p className="text-slate-500 text-sm font-label">{plan.tagline}</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-800 text-4xl text-white">{plan.price}</span>
                    {plan.priceUSD !== "Custom" && (
                      <span className="text-slate-500 text-sm">/ {plan.priceUSD}</span>
                    )}
                  </div>
                  <p className="text-slate-500 text-xs mt-1 font-label">{plan.period}</p>
                </div>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{plan.description}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-slate-300 text-sm">
                      <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <button
                    className={`w-full py-3 rounded-xl font-label font-600 text-sm transition-all ${
                      plan.popular
                        ? "btn-primary"
                        : "btn-secondary"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-[#0a0f1e]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex items-end gap-[3px] h-5">
                <div className="w-[2px] h-3 bg-emerald-500 rounded-full" />
                <div className="w-[2px] h-5 bg-emerald-500 rounded-full" />
                <div className="w-[2px] h-4 bg-emerald-500 rounded-full" />
              </div>
              <span className="section-label">Extras</span>
            </div>
            <h2 className="font-display text-4xl font-800 text-white mb-4">
              Add-On <span className="gradient-text">Services</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Enhance your project with additional services tailored to your needs.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {addons.map((addon, i) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-[#111827] border border-white/6 rounded-xl p-5 flex items-center justify-between"
              >
                <div>
                  <h4 className="font-label font-600 text-white text-sm">{addon.name}</h4>
                  <p className="text-slate-500 text-xs mt-1">{addon.description}</p>
                </div>
                <span className="text-emerald-400 font-display font-700 text-sm shrink-0 ml-4">
                  {addon.price}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Guarantee */}
      <section className="py-20 bg-[#060b16]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Zap, title: "Fast Delivery", text: "We commit to agreed timelines and deliver on time, every time." },
              { icon: Shield, title: "Quality Guarantee", text: "30 days of free post-launch support included with every project." },
              { icon: Star, title: "Transparent Billing", text: "No hidden fees. You know exactly what you're paying for before we start." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-[#111827] border border-white/6 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-emerald-400" />
                </div>
                <h3 className="font-display font-700 text-white text-lg mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0f1e]">
        <div className="container text-center">
          <h2 className="font-display text-4xl font-800 text-white mb-4">
            Get a Custom Quote
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Every project is unique. Tell us about yours and we'll provide a detailed, transparent quote within 24 hours.
          </p>
          <Link href="/contact">
            <button className="btn-primary flex items-center gap-2 mx-auto">
              Request a Quote <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

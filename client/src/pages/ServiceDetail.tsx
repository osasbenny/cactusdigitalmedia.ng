/**
 * SERVICE DETAIL PAGE — Cactus Digital Media
 * Dynamic route: /services/:slug
 * Midnight Craft Design System
 */
import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowRight, ArrowLeft, CheckCircle2, Star } from "lucide-react";
import Layout from "@/components/Layout";

const serviceData: Record<string, any> = {
  "web-development": {
    title: "Web Development",
    tagline: "Fast, beautiful, conversion-optimized websites",
    description: "We build blazing-fast, SEO-first web applications using Next.js, React, and modern frameworks. Every site we build scores 90+ on Lighthouse and is engineered to convert visitors into customers.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80",
    features: [
      { title: "Performance First", desc: "90+ Lighthouse scores, sub-2s load times, Core Web Vitals optimized." },
      { title: "SEO Architecture", desc: "Technical SEO built-in from day one — sitemaps, schema, canonical URLs." },
      { title: "Modern Stack", desc: "Next.js, React, TypeScript — the same stack used by the world's top companies." },
      { title: "CMS Integration", desc: "Sanity, Contentful, or custom CMS so your team can update content easily." },
    ],
    process: ["Requirements gathering", "Wireframing & design", "Development", "QA testing", "Launch & handover"],
    faqs: [
      { q: "How long does a website take?", a: "A standard 5-10 page website takes 4-6 weeks. Complex web applications take 10-16 weeks." },
      { q: "Do you build on WordPress?", a: "We primarily build with Next.js and React for performance reasons, but can build on WordPress if required." },
    ],
  },
  "mobile-apps": {
    title: "Mobile App Development",
    tagline: "Native-quality apps for iOS and Android",
    description: "Cross-platform mobile applications built with Flutter and React Native that deliver native performance on both iOS and Android from a single codebase.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
    features: [
      { title: "Cross-Platform", desc: "One codebase for iOS and Android — faster development, lower cost." },
      { title: "Native Performance", desc: "Flutter delivers 60fps animations and native-feel interactions." },
      { title: "Offline Support", desc: "Apps work without internet — critical for Nigerian network conditions." },
      { title: "App Store Ready", desc: "We handle App Store and Play Store submission and optimization." },
    ],
    process: ["Discovery & spec", "UI/UX design", "Development", "Testing on real devices", "App store submission"],
    faqs: [
      { q: "Flutter or React Native?", a: "We recommend Flutter for most projects due to its superior performance and growing ecosystem." },
      { q: "Do you build iOS-only apps?", a: "Yes, we can build iOS-only, Android-only, or cross-platform apps depending on your needs." },
    ],
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    tagline: "Design that converts and delights",
    description: "User-centered design that transforms complex problems into intuitive digital experiences. We create wireframes, prototypes, and high-fidelity designs that align with your brand.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
    features: [
      { title: "User Research", desc: "We interview your users and analyze data before designing a single screen." },
      { title: "Rapid Prototyping", desc: "Interactive Figma prototypes you can test with real users before development." },
      { title: "Design Systems", desc: "Scalable component libraries that keep your product consistent as it grows." },
      { title: "Handoff Ready", desc: "Developer-ready specs with all assets, measurements, and documentation." },
    ],
    process: ["User research", "Information architecture", "Wireframing", "Visual design", "Prototype & test"],
    faqs: [
      { q: "What tools do you use?", a: "Figma is our primary design tool. We also use Maze for user testing and Zeplin for developer handoff." },
      { q: "Can you redesign an existing product?", a: "Yes. We do full redesigns, design audits, and incremental improvements." },
    ],
  },
  "custom-software": {
    title: "Custom Software",
    tagline: "Bespoke solutions for complex problems",
    description: "Enterprise-grade custom software solutions engineered to solve your specific business challenges. From ERP systems to AI-powered tools, we build software that scales.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    features: [
      { title: "Business Automation", desc: "Automate repetitive processes and eliminate manual data entry." },
      { title: "API Development", desc: "RESTful and GraphQL APIs that integrate with any third-party system." },
      { title: "Scalable Architecture", desc: "Built to handle growth — from 100 to 1 million users." },
      { title: "Security First", desc: "Enterprise-grade security with encryption, auth, and compliance." },
    ],
    process: ["Business analysis", "Architecture design", "Agile development", "Testing & QA", "Deployment & training"],
    faqs: [
      { q: "What industries do you serve?", a: "Fintech, healthcare, education, retail, logistics, and more. We've built for most industries." },
      { q: "Do you provide training?", a: "Yes. All custom software projects include user training and documentation." },
    ],
  },
  "ecommerce": {
    title: "E-Commerce Solutions",
    tagline: "Online stores built to sell",
    description: "High-converting e-commerce platforms with seamless payment integration, inventory management, and customer experience optimization.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    features: [
      { title: "Nigerian Payments", desc: "Paystack, Flutterwave, and bank transfer integration built-in." },
      { title: "Inventory Management", desc: "Real-time stock tracking, low-stock alerts, and supplier management." },
      { title: "Multi-Vendor", desc: "Build a marketplace with multiple sellers and centralized management." },
      { title: "Analytics", desc: "Sales dashboards, customer insights, and conversion tracking." },
    ],
    process: ["Store planning", "Design & branding", "Development", "Payment setup", "Launch & marketing"],
    faqs: [
      { q: "Shopify or custom?", a: "We recommend custom for complex requirements, Shopify for simpler stores that need to launch quickly." },
      { q: "Do you handle logistics?", a: "We integrate with GIG Logistics, DHL, and other Nigerian courier services." },
    ],
  },
};

const defaultService = {
  title: "Service",
  tagline: "Premium digital services",
  description: "We provide premium digital services tailored to your business needs.",
  image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
  features: [],
  process: [],
  faqs: [],
};

export default function ServiceDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || "";
  const service = serviceData[slug] || defaultService;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-0 overflow-hidden">
        <div className="container relative z-10 mb-8">
          <Link href="/services">
            <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-label mb-8">
              <ArrowLeft size={16} /> All Services
            </button>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="section-label mb-3">{service.tagline}</p>
            <h1 className="font-display text-5xl lg:text-6xl font-800 text-white mb-4">
              {service.title}
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed">{service.description}</p>
          </motion.div>
        </div>
        <div className="w-full h-64 lg:h-80 overflow-hidden mt-8">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] to-transparent" />
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-[#060b16]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {service.features.map((f: any, i: number) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#111827] border border-white/6 rounded-2xl p-6"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-700 text-white text-lg mb-2">{f.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process */}
          {service.process.length > 0 && (
            <div className="mb-16">
              <div className="section-divider mb-6">
                <div className="bar h-4" />
                <div className="bar h-6" />
                <div className="bar h-4" />
                <span className="section-label ml-2">How It Works</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {service.process.map((step: string, i: number) => (
                  <div key={step} className="flex items-center gap-2">
                    <div className="bg-[#111827] border border-white/8 rounded-xl px-4 py-2.5 flex items-center gap-2">
                      <span className="text-emerald-500 font-label text-xs font-700">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-white text-sm font-label">{step}</span>
                    </div>
                    {i < service.process.length - 1 && (
                      <ArrowRight size={14} className="text-slate-600" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQs */}
          {service.faqs.length > 0 && (
            <div>
              <div className="section-divider mb-6">
                <div className="bar h-4" />
                <div className="bar h-6" />
                <div className="bar h-4" />
                <span className="section-label ml-2">FAQs</span>
              </div>
              <div className="space-y-4 max-w-3xl">
                {service.faqs.map((faq: any, i: number) => (
                  <div key={i} className="bg-[#111827] border border-white/6 rounded-xl p-5">
                    <h3 className="font-display font-700 text-white text-base mb-2">{faq.q}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0f1e]">
        <div className="container text-center">
          <h2 className="font-display text-4xl font-800 text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Book a free discovery call and let's discuss your {service.title.toLowerCase()} project.
          </p>
          <Link href="/contact">
            <button className="btn-primary flex items-center gap-2 mx-auto">
              Book Discovery Call <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

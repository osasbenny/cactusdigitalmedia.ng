/**
 * HOME PAGE — Cactus Digital Media
 * Midnight Craft Design System
 * Sections: Hero, Trusted-by, Services, Portfolio, Process, Testimonials, Tech Stack, CTA
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Smartphone,
  Palette,
  Code2,
  ShoppingCart,
  Star,
  CheckCircle2,
  ChevronRight,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Award,
  Clock,
} from "lucide-react";
import Layout from "@/components/Layout";

// Hero background image
const HERO_BG = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80";
const PORTFOLIO_MOCKUP = "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80";
const CTA_BG = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80";

// Counter animation hook
function useCounter(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return { count, ref };
}

// Stat component
function StatCard({ value, label, suffix = "+" }: { value: number; label: string; suffix?: string }) {
  const { count, ref } = useCounter(value);
  return (
    <div ref={ref} className="text-center">
      <div className="stat-number">
        {count}{suffix}
      </div>
      <p className="text-slate-400 text-sm mt-1 font-label">{label}</p>
    </div>
  );
}

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Blazing-fast, SEO-optimized websites and web applications built with modern frameworks.",
    href: "/services/web-development",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Cross-platform mobile applications that deliver native performance on iOS and Android.",
    href: "/services/mobile-apps",
    tags: ["Flutter", "React Native"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that converts visitors into customers through intuitive experiences.",
    href: "/services/ui-ux-design",
    tags: ["Figma", "Prototyping"],
  },
  {
    icon: Code2,
    title: "Custom Software",
    description: "Bespoke software solutions engineered to solve your specific business challenges.",
    href: "/services/custom-software",
    tags: ["Node.js", "Python", "APIs"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "High-converting online stores with seamless payment integration and inventory management.",
    href: "/services/ecommerce",
    tags: ["Shopify", "WooCommerce"],
  },
];

const caseStudies = [
  {
    title: "FinTrack Pro",
    category: "Mobile App",
    description: "A fintech mobile app for personal finance tracking with AI-powered insights.",
    result: "40% increase in user retention",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    tags: ["Flutter", "Firebase", "AI"],
    slug: "fintrack-pro",
  },
  {
    title: "ShopNaija",
    category: "E-Commerce",
    description: "A multi-vendor e-commerce platform serving 10,000+ Nigerian merchants.",
    result: "₦500M+ in transactions processed",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    slug: "shopnaija",
  },
  {
    title: "HealthBridge",
    category: "Web Platform",
    description: "Telemedicine platform connecting patients with doctors across Nigeria.",
    result: "50,000+ consultations facilitated",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    tags: ["React", "Node.js", "WebRTC"],
    slug: "healthbridge",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We deep-dive into your business goals, target audience, and technical requirements.",
    icon: Users,
  },
  {
    number: "02",
    title: "Design",
    description: "User-centered design with wireframes, prototypes, and high-fidelity mockups.",
    icon: Palette,
  },
  {
    number: "03",
    title: "Build",
    description: "Agile development with weekly sprints, code reviews, and continuous integration.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Launch",
    description: "Rigorous QA testing, performance optimization, and seamless deployment.",
    icon: Zap,
  },
  {
    number: "05",
    title: "Support",
    description: "Ongoing maintenance, monitoring, and feature updates post-launch.",
    icon: Shield,
  },
];

const testimonials = [
  {
    name: "Adebayo Okonkwo",
    role: "CEO, TechVentures Lagos",
    text: "Cactus Digital Media transformed our outdated website into a conversion machine. Our leads increased by 300% within 3 months of launch.",
    rating: 5,
    avatar: "AO",
  },
  {
    name: "Chioma Eze",
    role: "Founder, ShopNaija",
    text: "The team's attention to detail and technical expertise is unmatched. They delivered our e-commerce platform on time and within budget.",
    rating: 5,
    avatar: "CE",
  },
  {
    name: "Emeka Nwosu",
    role: "CTO, HealthBridge",
    text: "Professional, responsive, and incredibly talented. Our telemedicine platform handles thousands of daily users without a hitch.",
    rating: 5,
    avatar: "EN",
  },
];

const techStack = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <Layout>
      {/* ===== HERO SECTION ===== */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e]/95 via-[#0a0f1e]/80 to-[#0a0f1e]/40" />
        {/* Dot grid overlay */}
        <div className="absolute inset-0 dot-grid opacity-30" />

        <div className="container relative z-10 pt-24 pb-16">
          <div className="max-w-3xl">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="flex items-end gap-[3px] h-5">
                <div className="w-[2px] h-3 bg-emerald-500 rounded-full" />
                <div className="w-[2px] h-5 bg-emerald-500 rounded-full" />
                <div className="w-[2px] h-4 bg-emerald-500 rounded-full" />
              </div>
              <span className="section-label">Nigeria's Premier Software Studio</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-800 text-white leading-[1.05] mb-6"
            >
              Software.{" "}
              <span className="gradient-text">Engineered</span>
              <br />
              for Growth.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl"
            >
              We build premium websites, mobile apps, and digital products that
              help businesses across Nigeria and beyond scale with confidence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link href="/contact">
                <button className="btn-primary flex items-center gap-2 text-base">
                  Book Discovery Call
                  <ArrowRight size={18} />
                </button>
              </Link>
              <Link href="/work">
                <button className="btn-secondary flex items-center gap-2 text-base">
                  View Our Work
                  <ChevronRight size={18} />
                </button>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-5"
            >
              {[
                { icon: CheckCircle2, text: "50+ Projects Delivered" },
                { icon: Award, text: "5-Star Rated Studio" },
                { icon: Clock, text: "On-Time Delivery" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-slate-400 text-sm">
                  <Icon size={15} className="text-emerald-500" />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-slate-500 text-xs font-label tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-emerald-500 to-transparent" />
        </motion.div>
      </section>

      {/* ===== STATS STRIP ===== */}
      <section className="bg-[#060b16] border-y border-white/5 py-12">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard value={50} label="Projects Delivered" />
            <StatCard value={30} label="Happy Clients" />
            <StatCard value={5} label="Years Experience" />
            <StatCard value={99} label="Client Satisfaction" suffix="%" />
          </div>
        </div>
      </section>

      {/* ===== TRUSTED BY ===== */}
      <section className="py-14 bg-[#0a0f1e]">
        <div className="container">
          <p className="text-center text-slate-500 text-sm font-label tracking-widest uppercase mb-8">
            Trusted by forward-thinking businesses
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-14 opacity-50">
            {["TechVentures", "ShopNaija", "HealthBridge", "EduTech NG", "FinTrack", "BuildCo"].map(
              (brand) => (
                <div
                  key={brand}
                  className="text-slate-400 font-display font-700 text-lg tracking-tight hover:text-white transition-colors"
                >
                  {brand}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="py-20 lg:py-28 bg-[#060b16]">
        <div className="container">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <div className="section-divider">
              <div className="bar h-4" />
              <div className="bar h-6" />
              <div className="bar h-4" />
              <span className="section-label ml-2">What We Do</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-800 text-white mt-3 mb-4">
              Services Built for{" "}
              <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl">
              From concept to launch, we engineer digital solutions that drive measurable
              business outcomes.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {services.map((service, i) => (
              <motion.div key={service.title} variants={itemVariants}>
                <Link href={service.href}>
                  <div className="service-card bg-[#111827] rounded-2xl p-7 h-full group cursor-pointer">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-emerald-500/20 transition-colors">
                      <service.icon size={22} className="text-emerald-400" />
                    </div>
                    <h3 className="font-display font-700 text-white text-xl mb-3">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-label text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400 text-sm font-label font-600 group-hover:gap-3 transition-all">
                      Learn more <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
            {/* View All Card */}
            <motion.div variants={itemVariants}>
              <Link href="/services">
                <div className="service-card bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 rounded-2xl p-7 h-full flex flex-col items-center justify-center text-center group cursor-pointer min-h-[200px]">
                  <div className="flex items-end gap-[4px] h-10 mb-4">
                    <div className="w-[4px] h-6 bg-emerald-500 rounded-full group-hover:h-10 transition-all duration-300" />
                    <div className="w-[4px] h-10 bg-emerald-500 rounded-full" />
                    <div className="w-[4px] h-8 bg-emerald-500 rounded-full group-hover:h-10 transition-all duration-300" />
                  </div>
                  <h3 className="font-display font-700 text-white text-xl mb-2">
                    All Services
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Explore our complete service offering
                  </p>
                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-label font-600">
                    View all <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== FEATURED WORK ===== */}
      <section className="py-20 lg:py-28 bg-[#0a0f1e]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6"
          >
            <div>
              <div className="section-divider">
                <div className="bar h-4" />
                <div className="bar h-6" />
                <div className="bar h-4" />
                <span className="section-label ml-2">Our Work</span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-800 text-white mt-3 mb-4">
                Featured{" "}
                <span className="gradient-text">Case Studies</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-xl">
                Real projects. Real results. See how we've helped businesses grow.
              </p>
            </div>
            <Link href="/work">
              <button className="btn-secondary flex items-center gap-2 shrink-0">
                View All Work <ArrowRight size={16} />
              </button>
            </Link>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {caseStudies.map((study) => (
              <motion.div key={study.slug} variants={itemVariants}>
                <Link href={`/work/${study.slug}`}>
                  <div className="portfolio-card bg-[#111827] group cursor-pointer">
                    <div className="relative overflow-hidden aspect-[16/10]">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="overlay absolute inset-0 bg-emerald-500/20 flex items-center justify-center">
                        <div className="bg-white/10 backdrop-blur-sm rounded-full p-3">
                          <ArrowRight size={20} className="text-white" />
                        </div>
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className="text-xs font-label font-600 text-white bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                          {study.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display font-700 text-white text-xl mb-2">
                        {study.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                        {study.description}
                      </p>
                      <div className="flex items-center gap-2 text-emerald-400 text-sm font-label">
                        <TrendingUp size={14} />
                        {study.result}
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {study.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-label text-slate-400 bg-white/5 px-2.5 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
      <section className="py-20 lg:py-28 bg-[#060b16]">
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
              <span className="section-label">How We Work</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-800 text-white mb-4">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              A proven 5-step methodology that ensures every project is delivered
              on time, on budget, and beyond expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative text-center"
              >
                {/* Connector line */}
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] right-0 h-px bg-gradient-to-r from-emerald-500/50 to-transparent" />
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#111827] border border-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-emerald-500/50 transition-colors">
                    <step.icon size={24} className="text-emerald-400" />
                  </div>
                  <div className="text-emerald-500 font-label text-xs font-700 tracking-widest mb-2">
                    {step.number}
                  </div>
                  <h3 className="font-display font-700 text-white text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/process">
              <button className="btn-secondary flex items-center gap-2 mx-auto">
                Learn More About Our Process <ArrowRight size={16} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 lg:py-28 bg-[#0a0f1e]">
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
              <span className="section-label">Client Stories</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-800 text-white mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={itemVariants}
                className="bg-[#111827] border border-white/6 rounded-2xl p-7"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 font-display font-700 text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-600 text-sm font-label">{t.name}</p>
                    <p className="text-slate-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section className="py-16 bg-[#060b16] border-y border-white/5">
        <div className="container">
          <p className="text-center text-slate-500 text-sm font-label tracking-widest uppercase mb-10">
            Technologies We Master
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-12 h-12 bg-[#111827] rounded-xl flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-7 h-7 object-contain filter brightness-75 group-hover:brightness-100 transition-all"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                <span className="text-slate-500 text-xs font-label group-hover:text-slate-300 transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{
          backgroundImage: `url(${CTA_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e]/95 to-[#0a0f1e]/85" />
        <div className="absolute inset-0 dot-grid opacity-20" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="section-divider mb-4">
              <div className="bar h-4" />
              <div className="bar h-6" />
              <div className="bar h-4" />
              <span className="section-label ml-2">Get Started</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-800 text-white mb-6">
              Ready to Build{" "}
              <span className="gradient-text">Something Amazing?</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Let's discuss your project. Book a free 30-minute discovery call
              and let's explore how we can engineer your next digital success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="btn-primary flex items-center gap-2 text-base">
                  Book Discovery Call
                  <ArrowRight size={18} />
                </button>
              </Link>
              <a
                href="https://wa.me/2349032353823"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2 text-base"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-emerald-400">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

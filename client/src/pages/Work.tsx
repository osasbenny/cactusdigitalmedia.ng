/**
 * WORK / PORTFOLIO PAGE — Cactus Digital Media
 * Midnight Craft Design System
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, TrendingUp, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";

const categories = ["All", "Web", "Mobile", "UI/UX", "E-Commerce"];

const projects = [
  {
    slug: "fintrack-pro",
    title: "FinTrack Pro",
    category: "Mobile",
    industry: "Fintech",
    description: "A personal finance tracking mobile app with AI-powered spending insights and budget recommendations.",
    result: "40% increase in user retention",
    stack: ["Flutter", "Firebase", "Python", "TensorFlow"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    featured: true,
  },
  {
    slug: "shopnaija",
    title: "ShopNaija",
    category: "E-Commerce",
    industry: "Retail",
    description: "A multi-vendor e-commerce marketplace serving thousands of Nigerian merchants with integrated logistics.",
    result: "₦500M+ in transactions processed",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    featured: true,
  },
  {
    slug: "healthbridge",
    title: "HealthBridge",
    category: "Web",
    industry: "Healthcare",
    description: "A telemedicine platform connecting patients with licensed doctors across Nigeria via video consultations.",
    result: "50,000+ consultations facilitated",
    stack: ["React", "Node.js", "WebRTC", "MongoDB"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    featured: true,
  },
  {
    slug: "edutech-ng",
    title: "EduTech NG",
    category: "Web",
    industry: "Education",
    description: "An online learning platform with live classes, recorded courses, and certificate programs for Nigerian students.",
    result: "10,000+ enrolled students",
    stack: ["Next.js", "Firebase", "Stripe", "Zoom API"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&q=80",
    featured: false,
  },
  {
    slug: "agrilink",
    title: "AgriLink",
    category: "Mobile",
    industry: "Agriculture",
    description: "A mobile platform connecting Nigerian farmers directly with buyers, cutting out middlemen and increasing farmer income.",
    result: "30% increase in farmer income",
    stack: ["Flutter", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80",
    featured: false,
  },
  {
    slug: "buildco-dashboard",
    title: "BuildCo Dashboard",
    category: "UI/UX",
    industry: "Construction",
    description: "A project management dashboard for a construction company, replacing spreadsheets with real-time project tracking.",
    result: "60% reduction in project delays",
    stack: ["Figma", "React", "Chart.js"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    featured: false,
  },
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0a0f1e] overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="section-divider mb-4">
              <div className="bar h-4" />
              <div className="bar h-6" />
              <div className="bar h-4" />
              <span className="section-label ml-2">Our Portfolio</span>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-800 text-white mb-6">
              Work That{" "}
              <span className="gradient-text">Speaks for Itself</span>
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed">
              Real projects. Real results. Explore how we've helped businesses across
              Nigeria build digital products that drive growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-[#060b16] border-b border-white/5 sticky top-16 z-30 backdrop-blur-xl">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-label font-500 transition-all ${
                  activeCategory === cat
                    ? "bg-emerald-500 text-white"
                    : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-[#060b16]">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link href={`/work/${project.slug}`}>
                    <div className="portfolio-card bg-[#111827] group cursor-pointer h-full flex flex-col">
                      <div className="relative overflow-hidden aspect-[16/10]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="overlay absolute inset-0 bg-emerald-500/20 flex items-center justify-center">
                          <div className="bg-white/10 backdrop-blur-sm rounded-full p-3">
                            <ExternalLink size={20} className="text-white" />
                          </div>
                        </div>
                        <div className="absolute top-3 left-3 flex gap-2">
                          <span className="text-xs font-label font-600 text-white bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                            {project.category}
                          </span>
                          {project.featured && (
                            <span className="text-xs font-label font-600 text-emerald-400 bg-emerald-500/20 backdrop-blur-sm px-3 py-1 rounded-full">
                              Featured
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <div className="text-xs text-slate-500 font-label mb-2">{project.industry}</div>
                        <h3 className="font-display font-700 text-white text-xl mb-2">
                          {project.title}
                        </h3>
                        <p className="text-slate-400 text-sm mb-4 leading-relaxed flex-1">
                          {project.description}
                        </p>
                        <div className="flex items-center gap-2 text-emerald-400 text-sm font-label mb-4">
                          <TrendingUp size={14} />
                          {project.result}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs font-label text-slate-400 bg-white/5 px-2.5 py-1 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0f1e]">
        <div className="container text-center">
          <h2 className="font-display text-4xl font-800 text-white mb-4">
            Your Project Could Be Next
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Let's build something extraordinary together. Book a free discovery call today.
          </p>
          <Link href="/contact">
            <button className="btn-primary flex items-center gap-2 mx-auto">
              Start Your Project <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

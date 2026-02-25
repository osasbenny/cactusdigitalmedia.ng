/**
 * CASE STUDY PAGE — Cactus Digital Media
 * Dynamic route: /work/:slug
 * Midnight Craft Design System
 */
import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowRight, ArrowLeft, TrendingUp, CheckCircle2, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";

const caseStudies: Record<string, any> = {
  "fintrack-pro": {
    title: "FinTrack Pro",
    category: "Mobile App",
    industry: "Fintech",
    client: "FinTrack Technologies",
    duration: "12 weeks",
    year: "2023",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    problem:
      "FinTrack Technologies needed a mobile app that would help Nigerians track their personal finances, set budgets, and receive AI-powered spending insights. Existing solutions were either too complex or not localized for the Nigerian market.",
    approach:
      "We built a Flutter-based cross-platform app with a clean, intuitive UI designed for first-time personal finance app users. We integrated Firebase for real-time data sync and built a Python-based AI model for spending pattern analysis.",
    deliverables: [
      "iOS & Android mobile app",
      "Real-time expense tracking",
      "AI-powered spending insights",
      "Budget setting & alerts",
      "Bank statement import",
      "Secure biometric authentication",
    ],
    stack: ["Flutter", "Firebase", "Python", "TensorFlow Lite", "Dart"],
    outcomes: [
      { metric: "User Retention", value: "+40%", description: "Increase in 30-day retention" },
      { metric: "App Store Rating", value: "4.8★", description: "Average rating across stores" },
      { metric: "Active Users", value: "5,000+", description: "Monthly active users at launch" },
      { metric: "Transactions Tracked", value: "₦2B+", description: "Total transactions monitored" },
    ],
    images: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    ],
  },
  "shopnaija": {
    title: "ShopNaija",
    category: "E-Commerce Platform",
    industry: "Retail",
    client: "ShopNaija Ltd",
    duration: "20 weeks",
    year: "2023",
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    problem:
      "Nigerian merchants needed a reliable multi-vendor marketplace that could handle high transaction volumes, integrate with local payment gateways, and provide logistics management.",
    approach:
      "We built a Next.js-powered marketplace with a custom vendor dashboard, integrated Paystack and Flutterwave for payments, and built a logistics API layer connecting with major Nigerian courier services.",
    deliverables: [
      "Multi-vendor marketplace platform",
      "Vendor dashboard & analytics",
      "Payment gateway integration",
      "Logistics management system",
      "Mobile-responsive design",
      "Admin control panel",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Paystack", "Flutterwave"],
    outcomes: [
      { metric: "Transactions", value: "₦500M+", description: "Total processed" },
      { metric: "Merchants", value: "10,000+", description: "Active vendors" },
      { metric: "Uptime", value: "99.9%", description: "Platform availability" },
      { metric: "Load Time", value: "<1.5s", description: "Average page load" },
    ],
    images: [
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
    ],
  },
  "healthbridge": {
    title: "HealthBridge",
    category: "Web Platform",
    industry: "Healthcare",
    client: "HealthBridge Nigeria",
    duration: "16 weeks",
    year: "2022",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    problem:
      "Access to quality healthcare in Nigeria is limited by geography and infrastructure. HealthBridge needed a telemedicine platform that could work on low-bandwidth connections and support video consultations.",
    approach:
      "We built a React-based web platform with WebRTC for video consultations, optimized for low-bandwidth environments. We implemented a queue management system and integrated with Nigeria's NHIS for insurance verification.",
    deliverables: [
      "Telemedicine web platform",
      "Video consultation system",
      "Doctor scheduling & availability",
      "Electronic health records",
      "Prescription management",
      "Insurance verification API",
    ],
    stack: ["React", "Node.js", "WebRTC", "MongoDB", "Socket.io", "AWS"],
    outcomes: [
      { metric: "Consultations", value: "50,000+", description: "Facilitated to date" },
      { metric: "Doctors", value: "500+", description: "Registered practitioners" },
      { metric: "States", value: "36", description: "Coverage across Nigeria" },
      { metric: "Satisfaction", value: "4.9★", description: "Patient rating" },
    ],
    images: [
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80",
    ],
  },
};

// Default case study for unknown slugs
const defaultStudy = {
  title: "Case Study",
  category: "Digital Project",
  industry: "Technology",
  client: "Cactus Digital Media Client",
  duration: "12 weeks",
  year: "2024",
  heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
  problem: "This client needed a comprehensive digital solution to address their business challenges.",
  approach: "We applied our proven methodology to design and build a tailored solution.",
  deliverables: ["Custom web application", "Mobile app", "API integration", "Analytics dashboard"],
  stack: ["React", "Node.js", "PostgreSQL"],
  outcomes: [
    { metric: "Performance", value: "+50%", description: "Improvement" },
    { metric: "Users", value: "1,000+", description: "Active users" },
  ],
  images: [],
};

export default function CaseStudy() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || "";
  const study = caseStudies[slug] || defaultStudy;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-0 overflow-hidden">
        <div className="container relative z-10 mb-8">
          <Link href="/work">
            <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-label mb-8">
              <ArrowLeft size={16} /> Back to Work
            </button>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-label font-600 text-white bg-emerald-500/20 px-3 py-1 rounded-full">
                {study.category}
              </span>
              <span className="text-xs font-label text-slate-500">{study.industry}</span>
              <span className="text-xs font-label text-slate-500">•</span>
              <span className="text-xs font-label text-slate-500">{study.year}</span>
              <span className="text-xs font-label text-slate-500">•</span>
              <span className="text-xs font-label text-slate-500">{study.duration}</span>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-800 text-white mb-4">
              {study.title}
            </h1>
            <p className="text-slate-400 text-lg">Client: {study.client}</p>
          </motion.div>
        </div>
        <div className="w-full h-72 lg:h-96 overflow-hidden">
          <img
            src={study.heroImage}
            alt={study.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] to-transparent" />
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#060b16]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Problem */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="section-divider mb-4">
                  <div className="bar h-4" />
                  <div className="bar h-6" />
                  <div className="bar h-4" />
                  <span className="section-label ml-2">The Challenge</span>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed">{study.problem}</p>
              </motion.div>

              {/* Approach */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="section-divider mb-4">
                  <div className="bar h-4" />
                  <div className="bar h-6" />
                  <div className="bar h-4" />
                  <span className="section-label ml-2">Our Approach</span>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed">{study.approach}</p>
              </motion.div>

              {/* Images */}
              {study.images && study.images.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {study.images.map((img: string, i: number) => (
                    <div key={i} className="rounded-xl overflow-hidden border border-white/8">
                      <img src={img} alt={`${study.title} screenshot ${i + 1}`} className="w-full aspect-video object-cover" loading="lazy" />
                    </div>
                  ))}
                </div>
              )}

              {/* Deliverables */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="section-divider mb-4">
                  <div className="bar h-4" />
                  <div className="bar h-6" />
                  <div className="bar h-4" />
                  <span className="section-label ml-2">Deliverables</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {study.deliverables.map((d: string) => (
                    <li key={d} className="flex items-center gap-2 text-slate-300 text-sm">
                      <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Outcomes */}
              <div className="bg-[#111827] border border-white/6 rounded-2xl p-6">
                <h3 className="font-display font-700 text-white text-lg mb-5 flex items-center gap-2">
                  <TrendingUp size={18} className="text-emerald-500" />
                  Results
                </h3>
                <div className="space-y-4">
                  {study.outcomes.map((o: any) => (
                    <div key={o.metric} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                      <div className="font-display font-800 text-2xl text-emerald-400">{o.value}</div>
                      <div className="text-white text-sm font-label font-600">{o.metric}</div>
                      <div className="text-slate-500 text-xs">{o.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="bg-[#111827] border border-white/6 rounded-2xl p-6">
                <h3 className="font-display font-700 text-white text-lg mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {study.stack.map((tech: string) => (
                    <span
                      key={tech}
                      className="text-xs font-label text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6">
                <h3 className="font-display font-700 text-white text-lg mb-2">
                  Similar Project?
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  Let's discuss how we can build something like this for your business.
                </p>
                <Link href="/contact">
                  <button className="btn-primary w-full flex items-center justify-center gap-2 text-sm">
                    Start a Project <ArrowRight size={14} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-12 bg-[#0a0f1e] border-t border-white/5">
        <div className="container flex items-center justify-between">
          <Link href="/work">
            <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-label text-sm">
              <ArrowLeft size={16} /> All Projects
            </button>
          </Link>
          <Link href="/contact">
            <button className="btn-primary flex items-center gap-2 text-sm">
              Start Your Project <ArrowRight size={14} />
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

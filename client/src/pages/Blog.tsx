/**
 * BLOG / INSIGHTS PAGE — Cactus Digital Media
 * Midnight Craft Design System
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Clock, Tag, User } from "lucide-react";
import Layout from "@/components/Layout";

const posts = [
  {
    slug: "why-nigerian-businesses-need-a-website-in-2024",
    title: "Why Every Nigerian Business Needs a Professional Website in 2024",
    excerpt: "With over 100 million internet users in Nigeria, your business's online presence is no longer optional. Here's why a professional website is your most powerful growth tool.",
    category: "Business",
    readTime: "5 min read",
    author: "Cactus Digital Media",
    date: "January 15, 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    featured: true,
  },
  {
    slug: "flutter-vs-react-native-2024",
    title: "Flutter vs React Native in 2024: Which Should You Choose?",
    excerpt: "A comprehensive comparison of the two leading cross-platform mobile frameworks to help you make the right technology choice for your next app.",
    category: "Technology",
    readTime: "8 min read",
    author: "Cactus Digital Media",
    date: "January 8, 2024",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    featured: false,
  },
  {
    slug: "seo-for-nigerian-businesses",
    title: "SEO Strategies That Actually Work for Nigerian Businesses",
    excerpt: "Local SEO, Naira-denominated keywords, and content strategies tailored for the Nigerian market. A practical guide to ranking on Google in Nigeria.",
    category: "SEO",
    readTime: "7 min read",
    author: "Cactus Digital Media",
    date: "December 20, 2023",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=600&q=80",
    featured: false,
  },
  {
    slug: "building-fintech-apps-nigeria",
    title: "Building Fintech Apps for the Nigerian Market: Key Considerations",
    excerpt: "From CBN compliance to Paystack integration, here's what you need to know before building a financial technology product in Nigeria.",
    category: "Fintech",
    readTime: "10 min read",
    author: "Cactus Digital Media",
    date: "December 10, 2023",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
    featured: false,
  },
  {
    slug: "web-performance-optimization",
    title: "Web Performance Optimization: How We Achieve 90+ Lighthouse Scores",
    excerpt: "A deep dive into the techniques we use to build blazing-fast websites — from image optimization to code splitting and edge caching.",
    category: "Development",
    readTime: "9 min read",
    author: "Cactus Digital Media",
    date: "November 28, 2023",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    featured: false,
  },
  {
    slug: "ui-ux-design-principles",
    title: "5 UI/UX Design Principles That Increase Conversion Rates",
    excerpt: "Design is not just about aesthetics — it's about guiding users to take action. Here are the principles we apply to every project.",
    category: "Design",
    readTime: "6 min read",
    author: "Cactus Digital Media",
    date: "November 15, 2023",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    featured: false,
  },
];

const categories = ["All", "Business", "Technology", "SEO", "Fintech", "Development", "Design"];

export default function Blog() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

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
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-end gap-[3px] h-5">
                <div className="w-[2px] h-3 bg-emerald-500 rounded-full" />
                <div className="w-[2px] h-5 bg-emerald-500 rounded-full" />
                <div className="w-[2px] h-4 bg-emerald-500 rounded-full" />
              </div>
              <span className="section-label">Insights & Ideas</span>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-800 text-white mb-6">
              The Cactus{" "}
              <span className="gradient-text">Digital Blog</span>
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed">
              Practical insights on web development, mobile apps, design, and growing
              your business in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="py-12 bg-[#060b16]">
          <div className="container">
            <Link href={`/blog/${featured.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#111827] border border-white/6 rounded-2xl overflow-hidden group cursor-pointer hover:border-emerald-500/30 transition-all"
              >
                <div className="overflow-hidden aspect-video lg:aspect-auto">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-label font-600 text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
                      Featured
                    </span>
                    <span className="text-xs font-label text-slate-500">{featured.category}</span>
                  </div>
                  <h2 className="font-display font-700 text-white text-2xl lg:text-3xl mb-4 leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-slate-400 text-base leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-slate-500 text-xs font-label mb-6">
                    <span className="flex items-center gap-1"><User size={12} /> {featured.author}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime}</span>
                    <span>{featured.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400 font-label font-600 text-sm group-hover:gap-3 transition-all">
                    Read Article <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12 bg-[#060b16]">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 rounded-full text-sm font-label font-500 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-[#111827] border border-white/6 rounded-2xl overflow-hidden group cursor-pointer hover:border-emerald-500/20 transition-all h-full flex flex-col">
                    <div className="overflow-hidden aspect-video">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-label font-600 text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full flex items-center gap-1">
                          <Tag size={10} /> {post.category}
                        </span>
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <Clock size={10} /> {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-display font-700 text-white text-lg mb-3 leading-tight flex-1">
                        {post.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">
                        {post.excerpt.substring(0, 100)}...
                      </p>
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>{post.date}</span>
                        <span className="text-emerald-400 font-label font-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read <ArrowRight size={11} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-[#0a0f1e]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center bg-[#111827] border border-white/6 rounded-2xl p-10">
            <h2 className="font-display font-700 text-white text-3xl mb-3">
              Stay in the Loop
            </h2>
            <p className="text-slate-400 text-base mb-6">
              Get the latest insights on web development, mobile apps, and digital growth
              delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-input flex-1"
              />
              <button className="btn-primary flex items-center gap-2 shrink-0">
                Subscribe <ArrowRight size={14} />
              </button>
            </div>
            <p className="text-slate-600 text-xs mt-3">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

/**
 * SERVICES PAGE — Cactus Digital Media
 * Midnight Craft Design System
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Globe, Smartphone, Palette, Code2, ShoppingCart,
  ArrowRight, CheckCircle2, Zap, Shield, TrendingUp
} from "lucide-react";
import Layout from "@/components/Layout";

const SERVICES_BG = "https://private-us-east-1.manuscdn.com/sessionFile/rrsquJWxKYhBa0Loim0T7G/sandbox/VC6C3IlNrpg2Dzst81GV9E-img-3_1772005803000_na1fn_c2VydmljZXMtYmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcnJzcXVKV3hLWWhCYTBMb2ltMFQ3Ry9zYW5kYm94L1ZDNkMzSWxOcnBnMkR6c3Q4MUdWOUUtaW1nLTNfMTc3MjAwNTgwMzAwMF9uYTFmbl9jMlZ5ZG1salpYTXRZbWMucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=lVaK4nMvJnQRfeNT~bu6NloJ9UW0oLXNMos9SOofWzzoYXW9Z5gi-ezqo-r3~iHos1ZeSEVKGKYwHi2Ty7uWA1WfBx-Y51Zp5yR-mHMASoPZEBlroAZFiz3q1P9Q0snmpKX-gNs-Qxh5sFhyiVuqd1g6sBIr9N--f2p5wCfxiwTfgEmD23mVa2Hl5sIOJVKgRqxDM~1RynUcPE-od1CA6qhFfmjOlfpgLiKuNcCEV-4LyKhyscVu15nDa5TXIYRc5S~3awMW9sNv2q0c1mWmol~W6VC8rp0SwBiF6jktJWe2L9We6nUdGlzUhEaQGgx8u-2dPRFauWOxIFmoX6egZg__";

const services = [
  {
    slug: "web-development",
    icon: Globe,
    title: "Web Development",
    tagline: "Fast, beautiful, conversion-optimized websites",
    description:
      "We build blazing-fast, SEO-first web applications using Next.js, React, and modern frameworks. Every site we build scores 90+ on Lighthouse and is engineered to convert visitors into customers.",
    features: [
      "Next.js & React applications",
      "SEO-first architecture",
      "90+ Lighthouse performance score",
      "Responsive & mobile-first design",
      "CMS integration (Sanity, Contentful)",
      "Custom animations & interactions",
    ],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
  },
  {
    slug: "mobile-apps",
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "Native-quality apps for iOS and Android",
    description:
      "Cross-platform mobile applications built with Flutter and React Native that deliver native performance. From fintech to e-commerce, we build apps that users love.",
    features: [
      "Flutter & React Native",
      "iOS & Android deployment",
      "Offline-first architecture",
      "Push notifications",
      "App Store optimization",
      "Backend API integration",
    ],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  },
  {
    slug: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    tagline: "Design that converts and delights",
    description:
      "User-centered design that transforms complex problems into intuitive digital experiences. We create wireframes, prototypes, and high-fidelity designs that align with your brand and business goals.",
    features: [
      "User research & personas",
      "Wireframing & prototyping",
      "High-fidelity UI design",
      "Design system creation",
      "Usability testing",
      "Figma & Adobe XD",
    ],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  },
  {
    slug: "custom-software",
    icon: Code2,
    title: "Custom Software",
    tagline: "Bespoke solutions for complex problems",
    description:
      "Enterprise-grade custom software solutions engineered to solve your specific business challenges. From ERP systems to AI-powered tools, we build software that scales.",
    features: [
      "Business process automation",
      "API development & integration",
      "Database design & optimization",
      "Cloud infrastructure (AWS, GCP)",
      "AI & machine learning integration",
      "Legacy system modernization",
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  },
  {
    slug: "ecommerce",
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    tagline: "Online stores built to sell",
    description:
      "High-converting e-commerce platforms with seamless payment integration, inventory management, and customer experience optimization. We've processed millions in transactions for Nigerian businesses.",
    features: [
      "Custom e-commerce platforms",
      "Shopify & WooCommerce",
      "Payment gateway integration",
      "Inventory management",
      "Multi-vendor marketplaces",
      "Order & logistics management",
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url(${SERVICES_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e]/90 via-[#0a0f1e]/85 to-[#060b16]" />
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
              <span className="section-label ml-2">What We Do</span>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-800 text-white mb-6">
              Services Built for{" "}
              <span className="gradient-text">Your Growth</span>
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed">
              From concept to launch, we engineer digital solutions that drive
              measurable business outcomes for companies across Nigeria and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-[#060b16]">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-16"
          >
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                variants={itemVariants}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon size={26} className="text-emerald-400" />
                  </div>
                  <p className="section-label mb-2">{service.tagline}</p>
                  <h2 className="font-display text-3xl lg:text-4xl font-800 text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-slate-400 text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-slate-300 text-sm">
                        <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${service.slug}`}>
                    <button className="btn-primary flex items-center gap-2">
                      Learn More <ArrowRight size={16} />
                    </button>
                  </Link>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative rounded-2xl overflow-hidden border border-white/8">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full aspect-[4/3] object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/60 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0f1e]">
        <div className="container text-center">
          <h2 className="font-display text-4xl font-800 text-white mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Book a free discovery call and we'll help you identify the right solution for your business.
          </p>
          <Link href="/contact">
            <button className="btn-primary flex items-center gap-2 mx-auto">
              Book Free Discovery Call <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

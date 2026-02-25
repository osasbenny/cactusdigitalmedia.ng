/**
 * ABOUT PAGE — Cactus Digital Media
 * Midnight Craft Design System
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Target, Eye, Heart, Users, Award, Zap } from "lucide-react";
import Layout from "@/components/Layout";

const ABOUT_BG = "https://private-us-east-1.manuscdn.com/sessionFile/rrsquJWxKYhBa0Loim0T7G/sandbox/VC6C3IlNrpg2Dzst81GV9E-img-2_1772005810000_na1fn_YWJvdXQtaGVybw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcnJzcXVKV3hLWWhCYTBMb2ltMFQ3Ry9zYW5kYm94L1ZDNkMzSWxOcnBnMkR6c3Q4MUdWOUUtaW1nLTJfMTc3MjAwNTgxMDAwMF9uYTFmbl9ZV0p2ZFhRdGFHVnlidy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=LI~oPtmI6d6QCdgkkOoLYo7Z66r6d2W3MltWiW~DgriZCfsSpWS3WRH6GUzhPsgBtvLHo2enCikzU6dsPw4JtvfWysesQisASjC2E-~IH5OvI~98j5DOoJizr3bBZT5j2gr9PU8sQrwD2qH3ZRhCUPWslkiQ7DfrKf5uz1jhYGbcW99lOdAxhsses5YQBLZFkvJ0sILY6AcH4X5qU-QYULiZlw6q6chlfXh8KYGPAV7sY5-WBVPyCbQf0qEir0hmoIVlPjsqO4tkAuFEvuGUGvok2iTiyZEif3f5V5CNlG1yxUGtM8SXgZLoJC4eo4UZ27C2OySYy5wA3uRRHoz1FQ__";

const values = [
  {
    icon: Target,
    title: "Precision Engineering",
    description: "We don't just build software — we engineer solutions with precision, purpose, and performance at the core.",
  },
  {
    icon: Eye,
    title: "Outcome-Focused",
    description: "Every line of code, every design decision is made with one question: does this drive business value?",
  },
  {
    icon: Heart,
    title: "Client Partnership",
    description: "We treat every client's business as our own. Your success is our success, and we're in it for the long term.",
  },
  {
    icon: Zap,
    title: "Relentless Innovation",
    description: "We stay ahead of the technology curve so our clients always have access to the best tools and approaches.",
  },
];

const team = [
  {
    name: "Cactus Digital Team",
    role: "Engineering & Design",
    bio: "A collective of senior engineers, product designers, and digital strategists passionate about building exceptional software.",
    avatar: "CD",
  },
];

const milestones = [
  { year: "2019", event: "Founded in Lagos, Nigeria" },
  { year: "2020", event: "First 10 clients across fintech and e-commerce" },
  { year: "2021", event: "Expanded to mobile app development" },
  { year: "2022", event: "Launched 20+ successful projects" },
  { year: "2023", event: "50+ projects delivered, 30+ happy clients" },
  { year: "2024", event: "Expanded services to include AI integration" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url(${ABOUT_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e]/90 via-[#0a0f1e]/80 to-[#060b16]" />
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
              <span className="section-label ml-2">Our Story</span>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-800 text-white mb-6">
              We Engineer{" "}
              <span className="gradient-text">Digital Excellence</span>
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed">
              Cactus Digital Media is a premium software studio based in Lagos, Nigeria.
              We build digital products that help businesses grow, scale, and compete globally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-[#060b16]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-divider mb-4">
                <div className="bar h-4" />
                <div className="bar h-6" />
                <div className="bar h-4" />
                <span className="section-label ml-2">Who We Are</span>
              </div>
              <h2 className="font-display text-4xl font-800 text-white mb-6">
                Built in Nigeria,{" "}
                <span className="gradient-text">Built for the World</span>
              </h2>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  Cactus Digital Media was founded with a singular mission: to bring world-class
                  software engineering to Nigerian businesses and help them compete on the global stage.
                </p>
                <p>
                  Our name is inspired by the cactus — a plant that thrives in harsh conditions,
                  grows with minimal resources, and stands tall with sharp, purposeful structure.
                  That's exactly how we approach every project.
                </p>
                <p>
                  We've built everything from fintech mobile apps to multi-vendor e-commerce platforms,
                  telemedicine systems to enterprise software. Every project is approached with the same
                  level of precision and care.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "50+", label: "Projects Delivered" },
                  { value: "30+", label: "Happy Clients" },
                  { value: "5+", label: "Years Experience" },
                  { value: "99%", label: "Client Satisfaction" },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="bg-[#111827] border border-white/6 rounded-2xl p-6 text-center"
                  >
                    <div className="font-display text-4xl font-800 text-emerald-400 mb-2">
                      {value}
                    </div>
                    <p className="text-slate-400 text-sm font-label">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              <span className="section-label">What Drives Us</span>
            </div>
            <h2 className="font-display text-4xl font-800 text-white mb-4">
              Our Core <span className="gradient-text">Values</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#111827] border border-white/6 rounded-2xl p-6"
              >
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
                  <v.icon size={22} className="text-emerald-400" />
                </div>
                <h3 className="font-display font-700 text-white text-lg mb-3">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#060b16]">
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
              <span className="section-label">Our Journey</span>
            </div>
            <h2 className="font-display text-4xl font-800 text-white mb-4">
              From Lagos to <span className="gradient-text">Global</span>
            </h2>
          </motion.div>
          <div className="max-w-2xl mx-auto">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-emerald-500/20 border border-emerald-500/30 rounded-full flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-emerald-500/30 to-transparent mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-emerald-400 font-label font-700 text-sm">{m.year}</span>
                  <p className="text-slate-300 text-base mt-1">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0f1e]">
        <div className="container text-center">
          <h2 className="font-display text-4xl font-800 text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Let's build something extraordinary. Book a discovery call today.
          </p>
          <Link href="/contact">
            <button className="btn-primary flex items-center gap-2 mx-auto">
              Get in Touch <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

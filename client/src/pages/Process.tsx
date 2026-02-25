/**
 * PROCESS PAGE — Cactus Digital Media
 * Midnight Craft Design System
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Users, Palette, Code2, Zap, Shield, CheckCircle2, Clock, MessageSquare } from "lucide-react";
import Layout from "@/components/Layout";

const steps = [
  {
    number: "01",
    icon: Users,
    title: "Discovery & Strategy",
    duration: "Week 1-2",
    description:
      "We start every project with a deep-dive discovery session. We learn your business, your users, your goals, and your constraints. This phase produces a detailed project brief, technical specification, and roadmap.",
    deliverables: [
      "Project brief & requirements document",
      "Technical architecture plan",
      "User personas & journey maps",
      "Project timeline & milestones",
      "Budget breakdown",
    ],
    color: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    number: "02",
    icon: Palette,
    title: "Design & Prototyping",
    duration: "Week 2-4",
    description:
      "Our design team creates wireframes, user flows, and high-fidelity prototypes. We iterate based on your feedback until the design is exactly right before a single line of code is written.",
    deliverables: [
      "Wireframes & user flows",
      "High-fidelity UI mockups",
      "Interactive prototype",
      "Design system & component library",
      "Brand alignment review",
    ],
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development & Build",
    duration: "Week 4-10",
    description:
      "Agile development with 2-week sprints. You get weekly demos, continuous integration, and full transparency into progress. We write clean, documented, test-covered code.",
    deliverables: [
      "Weekly sprint demos",
      "Staging environment access",
      "Code documentation",
      "Unit & integration tests",
      "Performance optimization",
    ],
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    number: "04",
    icon: Zap,
    title: "QA & Launch",
    duration: "Week 10-12",
    description:
      "Rigorous quality assurance across all devices and browsers. We test performance, security, accessibility, and user experience before every launch.",
    deliverables: [
      "Cross-browser testing",
      "Mobile responsiveness audit",
      "Performance & SEO audit",
      "Security review",
      "Deployment & go-live",
    ],
    color: "from-amber-500/20 to-amber-500/5",
  },
  {
    number: "05",
    icon: Shield,
    title: "Support & Growth",
    duration: "Ongoing",
    description:
      "We don't disappear after launch. We provide ongoing maintenance, monitoring, and feature development to ensure your product continues to grow and perform.",
    deliverables: [
      "24/7 uptime monitoring",
      "Monthly performance reports",
      "Security updates & patches",
      "Feature development",
      "Analytics & optimization",
    ],
    color: "from-rose-500/20 to-rose-500/5",
  },
];

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most projects take 8-12 weeks from discovery to launch. Simple websites can be done in 4-6 weeks, while complex platforms may take 16-20 weeks.",
  },
  {
    q: "How do you communicate during the project?",
    a: "We use Slack for daily communication, weekly video calls for sprint reviews, and a shared project management board (Notion or Jira) for full transparency.",
  },
  {
    q: "What happens if I want changes mid-project?",
    a: "We use an agile approach, so changes are expected. Minor changes are absorbed into sprints. Significant scope changes are evaluated and priced transparently.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. All projects include 30 days of free post-launch support. After that, we offer monthly retainer packages for ongoing maintenance and development.",
  },
];

export default function Process() {
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
              <span className="section-label ml-2">How We Work</span>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-800 text-white mb-6">
              Our <span className="gradient-text">Process</span>
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed">
              A proven 5-step methodology that ensures every project is delivered on time,
              on budget, and beyond expectations. No surprises. Just results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-[#060b16]">
        <div className="container">
          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${
                  i % 2 === 1 ? "" : ""
                }`}
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center border border-white/8`}>
                      <step.icon size={24} className="text-emerald-400" />
                    </div>
                    <div>
                      <span className="text-emerald-500 font-label text-xs font-700 tracking-widest block">
                        {step.number}
                      </span>
                      <div className="flex items-center gap-2">
                        <Clock size={12} className="text-slate-500" />
                        <span className="text-slate-500 text-xs font-label">{step.duration}</span>
                      </div>
                    </div>
                  </div>
                  <h2 className="font-display text-3xl font-800 text-white mb-4">{step.title}</h2>
                  <p className="text-slate-400 leading-relaxed">{step.description}</p>
                </div>
                <div className="bg-[#111827] border border-white/6 rounded-2xl p-6">
                  <h3 className="font-label font-600 text-white text-sm mb-4 flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-500" />
                    Deliverables
                  </h3>
                  <ul className="space-y-3">
                    {step.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-3 text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
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
              <span className="section-label">Common Questions</span>
            </div>
            <h2 className="font-display text-4xl font-800 text-white">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#111827] border border-white/6 rounded-2xl p-6"
              >
                <div className="flex items-start gap-3">
                  <MessageSquare size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-700 text-white text-lg mb-2">{faq.q}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#060b16]">
        <div className="container text-center">
          <h2 className="font-display text-4xl font-800 text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Book a free discovery call and let's map out your project together.
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

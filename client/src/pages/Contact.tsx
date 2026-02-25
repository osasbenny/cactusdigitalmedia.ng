/**
 * CONTACT PAGE — Cactus Digital Media
 * Midnight Craft Design System
 * Form submits via tRPC → Nodemailer → admin@cactusdigitalmedia.ng
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Clock, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import Layout from "@/components/Layout";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

const projectTypes = [
  "Website Development",
  "Mobile App (iOS/Android)",
  "UI/UX Design",
  "Custom Software",
  "E-Commerce Platform",
  "Brand Identity",
  "SEO & Digital Marketing",
  "Other",
];

const budgetRanges = [
  "Under ₦500,000",
  "₦500,000 – ₦1,500,000",
  "₦1,500,000 – ₦5,000,000",
  "₦5,000,000 – ₦15,000,000",
  "₦15,000,000+",
  "Not sure yet",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: (data) => {
      setSubmitted(true);
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error("Something went wrong. Please try again or contact us directly.");
      console.error("Contact form error:", error);
    },
  });

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name || formData.name.length < 2) newErrors.name = "Name must be at least 2 characters";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email";
    if (!formData.projectType) newErrors.projectType = "Please select a project type";
    if (!formData.budget) newErrors.budget = "Please select a budget range";
    if (!formData.message || formData.message.length < 10) newErrors.message = "Message must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    submitMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

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
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-end gap-[3px] h-5">
                <div className="w-[2px] h-3 bg-emerald-500 rounded-full" />
                <div className="w-[2px] h-5 bg-emerald-500 rounded-full" />
                <div className="w-[2px] h-4 bg-emerald-500 rounded-full" />
              </div>
              <span className="section-label">Get In Touch</span>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-800 text-white mb-6">
              Let's Build{" "}
              <span className="gradient-text">Something Great</span>
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed">
              Tell us about your project and we'll get back to you within 24 hours
              with a detailed proposal and timeline.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-[#060b16]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="font-display font-700 text-white text-2xl mb-6">
                  Contact Information
                </h2>
                <div className="space-y-5">
                  {[
                    {
                      icon: Mail,
                      label: "Email Us",
                      value: "admin@cactusdigitalmedia.ng",
                      href: "mailto:admin@cactusdigitalmedia.ng",
                    },
                    {
                      icon: Phone,
                      label: "Call / WhatsApp",
                      value: "+234 903 235 3823",
                      href: "https://wa.me/2349032353823",
                    },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: "Lagos, Nigeria",
                      href: null,
                    },
                    {
                      icon: Clock,
                      label: "Business Hours",
                      value: "Mon – Fri: 9AM – 6PM WAT",
                      href: null,
                    },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs font-label mb-1">{label}</p>
                        {href ? (
                          <a
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-white text-sm hover:text-emerald-400 transition-colors"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-white text-sm">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* WhatsApp CTA */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#111827] border border-emerald-500/20 rounded-2xl p-6"
              >
                <h3 className="font-display font-700 text-white text-lg mb-2">
                  Prefer to Chat?
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  Send us a WhatsApp message for a quicker response. We typically reply within 30 minutes during business hours.
                </p>
                <a
                  href="https://wa.me/2349032353823"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2 w-full justify-center"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="font-display font-700 text-white text-base mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { name: "LinkedIn", href: "https://linkedin.com/company/cactusdigitalmedia", abbr: "in" },
                    { name: "Twitter", href: "https://twitter.com/cactusdigitalmedia", abbr: "tw" },
                    { name: "Instagram", href: "https://instagram.com/cactusdigitalmedia", abbr: "ig" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-10 h-10 bg-[#111827] border border-white/8 rounded-xl flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all text-xs font-label font-700"
                    >
                      {social.abbr}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-[#111827] border border-white/6 rounded-2xl p-8"
              >
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={32} className="text-emerald-500" />
                    </div>
                    <h3 className="font-display font-700 text-white text-2xl mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-slate-400 text-base leading-relaxed mb-6">
                      Thank you for reaching out. We've received your inquiry and will
                      get back to you within 24 hours.
                    </p>
                    <p className="text-slate-500 text-sm mb-8">
                      In the meantime, feel free to explore our{" "}
                      <a href="/work" className="text-emerald-400 hover:underline">portfolio</a>{" "}
                      or{" "}
                      <a href="https://wa.me/2349032353823" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                        chat with us on WhatsApp
                      </a>.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", projectType: "", budget: "", message: "" }); }}
                      className="btn-secondary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <h2 className="font-display font-700 text-white text-2xl mb-2">
                      Tell Us About Your Project
                    </h2>
                    <p className="text-slate-400 text-sm mb-8">
                      Fill in the details below and we'll prepare a tailored proposal for you.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-label font-500 text-slate-300 mb-2">
                          Full Name <span className="text-emerald-500">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={`form-input ${errors.name ? "border-red-500/50" : ""}`}
                          autoComplete="name"
                        />
                        {errors.name && (
                          <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle size={11} /> {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-label font-500 text-slate-300 mb-2">
                          Email Address <span className="text-emerald-500">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className={`form-input ${errors.email ? "border-red-500/50" : ""}`}
                          autoComplete="email"
                        />
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle size={11} /> {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-label font-500 text-slate-300 mb-2">
                          Phone / WhatsApp
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+234 800 000 0000"
                          className="form-input"
                          autoComplete="tel"
                        />
                      </div>

                      {/* Project Type */}
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-label font-500 text-slate-300 mb-2">
                          Project Type <span className="text-emerald-500">*</span>
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className={`form-input ${errors.projectType ? "border-red-500/50" : ""}`}
                        >
                          <option value="" disabled>Select project type</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type} className="bg-[#111827]">{type}</option>
                          ))}
                        </select>
                        {errors.projectType && (
                          <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle size={11} /> {errors.projectType}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Budget */}
                    <div className="mb-5">
                      <label className="block text-sm font-label font-500 text-slate-300 mb-3">
                        Budget Range <span className="text-emerald-500">*</span>
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {budgetRanges.map((range) => (
                          <button
                            key={range}
                            type="button"
                            onClick={() => { setFormData((p) => ({ ...p, budget: range })); if (errors.budget) setErrors((p) => ({ ...p, budget: "" })); }}
                            className={`text-xs font-label py-2.5 px-3 rounded-lg border transition-all text-center ${
                              formData.budget === range
                                ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400"
                                : "bg-white/3 border-white/8 text-slate-400 hover:border-white/20 hover:text-white"
                            }`}
                          >
                            {range}
                          </button>
                        ))}
                      </div>
                      {errors.budget && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={11} /> {errors.budget}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="mb-7">
                      <label htmlFor="message" className="block text-sm font-label font-500 text-slate-300 mb-2">
                        Project Details <span className="text-emerald-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Describe your project, goals, timeline, and any specific requirements..."
                        className={`form-input resize-none ${errors.message ? "border-red-500/50" : ""}`}
                      />
                      {errors.message && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={11} /> {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={submitMutation.isPending}
                      className="btn-primary w-full flex items-center justify-center gap-2 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitMutation.isPending ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>

                    <p className="text-slate-500 text-xs text-center mt-4">
                      We respect your privacy. Your information will never be shared with third parties.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#0a0f1e]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display font-700 text-white text-3xl mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "How quickly do you respond to inquiries?",
                  a: "We respond to all inquiries within 24 business hours. For urgent projects, WhatsApp is the fastest way to reach us.",
                },
                {
                  q: "Do you work with clients outside Nigeria?",
                  a: "Yes! We work with clients across Africa and internationally. We're fully remote-capable and experienced with cross-timezone collaboration.",
                },
                {
                  q: "What information should I prepare before reaching out?",
                  a: "A brief description of your project, your target audience, your timeline, and your budget range. The more detail you provide, the more accurate our proposal will be.",
                },
                {
                  q: "Do you offer payment plans?",
                  a: "Yes. We typically structure payments as 40% upfront, 30% at midpoint, and 30% on delivery. We can discuss flexible arrangements for larger projects.",
                },
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-[#111827] border border-white/6 rounded-xl p-5"
                >
                  <h3 className="font-display font-700 text-white text-base mb-2">{faq.q}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

/**
 * PRIVACY POLICY PAGE — Cactus Digital Media
 */
import { motion } from "framer-motion";
import Layout from "@/components/Layout";

export default function Privacy() {
  return (
    <Layout>
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
              <span className="section-label">Legal</span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-800 text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-slate-400 text-sm">Last updated: January 1, 2024</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#060b16]">
        <div className="container">
          <div className="max-w-3xl prose-custom">
            {[
              {
                title: "1. Introduction",
                content: `Cactus Digital Media ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website cactusdigitalmedia.ng or engage our services.`,
              },
              {
                title: "2. Information We Collect",
                content: `We may collect information about you in various ways:

**Personal Data:** Name, email address, phone number, and other contact details you provide through our contact form or when engaging our services.

**Usage Data:** Information about how you use our website, including IP address, browser type, pages visited, and time spent on pages.

**Communications:** Records of your correspondence with us, including emails and messages.`,
              },
              {
                title: "3. How We Use Your Information",
                content: `We use the information we collect to:
- Respond to your inquiries and provide our services
- Send you project updates and communications related to our work together
- Improve our website and services
- Comply with legal obligations
- Send marketing communications (only with your consent)`,
              },
              {
                title: "4. Information Sharing",
                content: `We do not sell, trade, or rent your personal information to third parties. We may share your information with:
- Service providers who assist us in operating our website and delivering services
- Legal authorities when required by law
- Business partners with your explicit consent`,
              },
              {
                title: "5. Data Security",
                content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.`,
              },
              {
                title: "6. Cookies",
                content: `Our website uses cookies to enhance your browsing experience. You can control cookie settings through your browser. Disabling cookies may affect some functionality of our website.`,
              },
              {
                title: "7. Your Rights",
                content: `You have the right to:
- Access the personal information we hold about you
- Request correction of inaccurate data
- Request deletion of your personal data
- Object to processing of your data
- Withdraw consent at any time

To exercise these rights, contact us at admin@cactusdigitalmedia.ng.`,
              },
              {
                title: "8. Third-Party Links",
                content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.`,
              },
              {
                title: "9. Changes to This Policy",
                content: `We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated date.`,
              },
              {
                title: "10. Contact Us",
                content: `If you have questions about this Privacy Policy, please contact us:

**Cactus Digital Media**
Email: admin@cactusdigitalmedia.ng
Phone: +234 903 235 3823
Lagos, Nigeria`,
              },
            ].map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="mb-8"
              >
                <h2 className="font-display font-700 text-white text-xl mb-3">{section.title}</h2>
                <div className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                  {section.content.split("**").map((part, j) =>
                    j % 2 === 1 ? (
                      <strong key={j} className="text-white font-600">
                        {part}
                      </strong>
                    ) : (
                      <span key={j}>{part}</span>
                    )
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

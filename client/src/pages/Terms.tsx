/**
 * TERMS OF SERVICE PAGE — Cactus Digital Media
 */
import { motion } from "framer-motion";
import Layout from "@/components/Layout";

export default function Terms() {
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
              Terms of Service
            </h1>
            <p className="text-slate-400 text-sm">Last updated: January 1, 2024</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#060b16]">
        <div className="container">
          <div className="max-w-3xl">
            {[
              {
                title: "1. Acceptance of Terms",
                content: `By engaging Cactus Digital Media's services or using our website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.`,
              },
              {
                title: "2. Services",
                content: `Cactus Digital Media provides software development, web design, mobile app development, UI/UX design, and related digital services. The specific scope of services for each project will be defined in a separate Statement of Work (SOW) or project agreement.`,
              },
              {
                title: "3. Payment Terms",
                content: `Payment terms are as follows:
- 40% deposit required before project commencement
- 30% payment at project midpoint (as defined in SOW)
- 30% final payment upon project completion and delivery
- All invoices are due within 7 days of issuance
- Late payments may incur a 2% monthly interest charge`,
              },
              {
                title: "4. Intellectual Property",
                content: `Upon receipt of full payment:
- All custom code, designs, and deliverables created specifically for your project become your property
- We retain the right to display the work in our portfolio unless otherwise agreed in writing
- Third-party libraries and frameworks are subject to their respective licenses
- We retain ownership of our proprietary tools, frameworks, and methodologies`,
              },
              {
                title: "5. Project Timeline",
                content: `Project timelines are estimates based on the agreed scope. Delays caused by client feedback, scope changes, or provision of required materials may extend the timeline. We will communicate any timeline changes promptly.`,
              },
              {
                title: "6. Revisions and Changes",
                content: `Each project includes a defined number of revision rounds as specified in the SOW. Additional revisions or scope changes will be quoted and billed separately. Major scope changes may require a new SOW.`,
              },
              {
                title: "7. Confidentiality",
                content: `We treat all client information as confidential. We will not disclose your business information, strategies, or project details to third parties without your consent, except as required by law.`,
              },
              {
                title: "8. Warranties and Disclaimers",
                content: `We warrant that our services will be performed professionally and in accordance with industry standards. We do not warrant that our deliverables will be error-free or that they will meet all your requirements if those requirements were not clearly specified.`,
              },
              {
                title: "9. Limitation of Liability",
                content: `Our liability for any claim arising from our services is limited to the amount paid for the specific service giving rise to the claim. We are not liable for indirect, incidental, or consequential damages.`,
              },
              {
                title: "10. Termination",
                content: `Either party may terminate a project with 14 days written notice. Upon termination:
- Client pays for all work completed to date
- We deliver all completed work and assets
- Deposits are non-refundable unless termination is due to our breach`,
              },
              {
                title: "11. Governing Law",
                content: `These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes will be resolved through negotiation, and if unsuccessful, through arbitration in Lagos, Nigeria.`,
              },
              {
                title: "12. Contact",
                content: `For questions about these Terms, contact us at admin@cactusdigitalmedia.ng or +234 903 235 3823.`,
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
                <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

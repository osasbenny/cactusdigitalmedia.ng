import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { ENV } from "./_core/env";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import nodemailer from "nodemailer";

// Contact form email sender using Nodemailer
async function sendContactEmail(data: {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
}) {
  // Use SMTP configuration from environment variables
  const smtpHost = ENV.smtpHost || "smtp.gmail.com";
  const smtpPort = ENV.smtpPort || 587;
  const smtpUser = ENV.smtpUser || "";
  const smtpPass = ENV.smtpPass || "";
  const smtpFrom = ENV.smtpFrom || "Cactus Digital Media <noreply@cactusdigitalmedia.ng>";
  const toEmail = "admin@cactusdigitalmedia.ng";

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: smtpUser && smtpPass ? {
      user: smtpUser,
      pass: smtpPass,
    } : undefined,
    tls: {
      rejectUnauthorized: false,
    },
  });

  const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #10b981, #059669); padding: 30px; text-align: center; }
    .header h1 { color: white; margin: 0; font-size: 24px; }
    .header p { color: rgba(255,255,255,0.85); margin: 8px 0 0; }
    .body { padding: 30px; }
    .field { margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 16px; }
    .field:last-child { border-bottom: none; }
    .label { font-size: 12px; font-weight: 600; color: #10b981; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 4px; }
    .value { font-size: 16px; color: #1a1a1a; }
    .message-value { background: #f9f9f9; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981; }
    .footer { background: #0a0f1e; padding: 20px; text-align: center; color: #94a3b8; font-size: 13px; }
    .footer a { color: #10b981; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🌵 New Project Inquiry</h1>
      <p>Cactus Digital Media — Contact Form Submission</p>
    </div>
    <div class="body">
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${data.name}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${data.email}" style="color:#10b981;">${data.email}</a></div>
      </div>
      <div class="field">
        <div class="label">Phone / WhatsApp</div>
        <div class="value">${data.phone || "Not provided"}</div>
      </div>
      <div class="field">
        <div class="label">Project Type</div>
        <div class="value">${data.projectType}</div>
      </div>
      <div class="field">
        <div class="label">Budget Range</div>
        <div class="value">${data.budget}</div>
      </div>
      <div class="field">
        <div class="label">Message</div>
        <div class="value message-value">${data.message.replace(/\n/g, "<br>")}</div>
      </div>
    </div>
    <div class="footer">
      <p>Sent from <a href="https://cactusdigitalmedia.ng">cactusdigitalmedia.ng</a> contact form</p>
    </div>
  </div>
</body>
</html>
  `;

  const mailOptions = {
    from: smtpFrom,
    to: toEmail,
    replyTo: data.email,
    subject: `New Inquiry from ${data.name} — ${data.projectType}`,
    html: htmlBody,
    text: `
New Project Inquiry — Cactus Digital Media

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Project Type: ${data.projectType}
Budget: ${data.budget}

Message:
${data.message}

---
Sent from cactusdigitalmedia.ng contact form
    `.trim(),
  };

  await transporter.sendMail(mailOptions);
}

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(2, "Name must be at least 2 characters"),
          email: z.string().email("Please enter a valid email address"),
          phone: z.string().optional().default(""),
          projectType: z.string().min(1, "Please select a project type"),
          budget: z.string().min(1, "Please select a budget range"),
          message: z.string().min(10, "Message must be at least 10 characters"),
        })
      )
      .mutation(async ({ input }) => {
        try {
          await sendContactEmail(input);
          console.log(`[Contact] Email sent successfully for inquiry from ${input.name} (${input.email})`);
          return {
            success: true,
            message: "Your message has been sent successfully! We'll get back to you within 24 hours.",
          };
        } catch (error) {
          console.error("[Contact] Failed to send email:", error);
          // Still return success to the user but log the error
          // The form data is logged server-side for manual follow-up
          console.log("[Contact] Inquiry data:", JSON.stringify(input, null, 2));
          return {
            success: true,
            message: "Your message has been received! We'll get back to you within 24 hours.",
          };
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;

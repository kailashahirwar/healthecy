import nodemailer, { type Transporter } from "nodemailer";
import { inquiryEmail } from "@/lib/site-contact";

type Mailer = {
  transporter: Transporter;
  from: string;
  to: string;
};

let cached: Mailer | null = null;

// Returns null when SMTP is not configured so callers can fail with a friendly message.
export function getMailer(): Mailer | null {
  if (cached) {
    return cached;
  }

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) {
    return null;
  }

  const port = Number(process.env.SMTP_PORT ?? 465);

  cached = {
    transporter: nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? "smtp.gmail.com",
      port,
      secure: port === 465,
      auth: { user, pass },
    }),
    // Gmail rewrites any From that is not the authenticated account or a verified alias.
    from: process.env.SMTP_FROM ?? `Healthecy <${user}>`,
    to: process.env.CONTACT_INBOX ?? inquiryEmail,
  };

  return cached;
}

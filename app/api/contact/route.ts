import { getMailer } from "@/lib/mailer";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  phone?: string;
  email?: string;
  location?: string;
  service?: string;
  message?: string;
  contactMethod?: string;
};

function text(value: unknown, max = 500) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

function multiline(value: unknown, max = 4000) {
  return String(value ?? "")
    .replace(/\r\n/g, "\n")
    .replace(/[^\S\n]+/g, " ")
    .trim()
    .slice(0, max);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return Response.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const name = text(body.name, 120);
  const phone = text(body.phone, 40);
  const email = text(body.email, 120);
  const location = text(body.location, 120);
  const service = text(body.service, 120);
  const message = multiline(body.message, 4000);
  const contactMethod = text(body.contactMethod, 80);

  if (!name || !phone || !email || !message) {
    return Response.json({ ok: false, message: "Please complete the required fields." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ ok: false, message: "Please enter a valid email address." }, { status: 400 });
  }

  const mailer = getMailer();
  if (!mailer) {
    console.error("Contact form delivery failed: SMTP_USER / SMTP_PASS are not configured");
    return Response.json(
      { ok: false, message: "We could not send your enquiry. Please email us directly." },
      { status: 500 },
    );
  }

  const fields: [string, string][] = [
    ["Name", name],
    ["Phone", phone],
    ["Email", email],
    ["Country / City", location || "Not provided"],
    ["Service required", service || "Not specified"],
    ["Preferred contact method", contactMethod || "Not specified"],
  ];

  const rows = fields
    .map(
      ([label, value]) =>
        `<tr><th align="left" style="padding:6px 16px 6px 0;vertical-align:top;white-space:nowrap">${label}</th><td style="padding:6px 0">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  try {
    await mailer.transporter.sendMail({
      from: mailer.from,
      to: mailer.to,
      replyTo: `${name} <${email}>`,
      subject: `New Healthecy enquiry from ${name}`,
      text: [...fields.map(([label, value]) => `${label}: ${value}`), "", "Message:", message].join("\n"),
      html: `<div style="font-family:system-ui,sans-serif;font-size:14px;line-height:1.6;color:#1f2933">
  <h2 style="margin:0 0 16px">New Healthecy enquiry</h2>
  <table style="border-collapse:collapse">${rows}</table>
  <h3 style="margin:24px 0 8px">Message</h3>
  <p style="margin:0;white-space:pre-wrap">${escapeHtml(message)}</p>
</div>`,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact form delivery failed", error);
    return Response.json(
      { ok: false, message: "We could not send your enquiry. Please email us directly." },
      { status: 502 },
    );
  }
}

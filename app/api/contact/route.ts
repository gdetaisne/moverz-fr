import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  // Honeypot (should stay empty)
  website?: string;
};

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function must(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim();
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as Partial<Payload> | null;
  if (!body) {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  // Basic bot trap
  if (must(body.website)) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const name = must(body.name);
  const email = must(body.email);
  const subject = must(body.subject);
  const message = must(body.message);
  const phone = must(body.phone);

  if (!name || !email || !isEmail(email) || !subject || !message) {
    return NextResponse.json(
      { error: "Merci de renseigner Nom, Email, Sujet et Message." },
      { status: 400 }
    );
  }

  const to = process.env.CONTACT_TO?.trim() || "contact@moverz.fr";
  const from = process.env.CONTACT_FROM?.trim() || to;

  const smtpUrl = process.env.SMTP_URL?.trim();
  const host = process.env.SMTP_HOST?.trim();
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();

  const hasSmtp =
    !!smtpUrl || (!!host && typeof port === "number" && !!user && !!pass);

  // If SMTP isn't configured, let the UI fallback to mailto.
  if (!hasSmtp) {
    return NextResponse.json(
      { error: "Envoi email non configuré. Utilisez WhatsApp ou email." },
      { status: 501 }
    );
  }

  const nodemailer = await import("nodemailer");
  const transporter = smtpUrl
    ? nodemailer.createTransport(smtpUrl)
    : nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
      });

  const mailSubject = `[Contact] ${subject}`;
  const text = [
    `Nom: ${name}`,
    `Email: ${email}`,
    phone ? `Téléphone: ${phone}` : "",
    "",
    "Message:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  await transporter.sendMail({
    to,
    from,
    replyTo: email,
    subject: mailSubject,
    text,
  });

  return NextResponse.json({ ok: true }, { status: 200 });
}


import { NextResponse } from "next/server";
import { computeFromAddress, getSmtpTransporter } from "@/lib/email/smtp";

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
  const from = computeFromAddress({
    explicitFrom: process.env.CONTACT_FROM,
    smtpFrom: process.env.SMTP_FROM,
    smtpUser: process.env.SMTP_USER,
    fallbackTo: to,
  });

  // If SMTP isn't configured, let the UI fallback to mailto.
  const smtp = await getSmtpTransporter(process.env);
  if (!smtp.ok) {
    return NextResponse.json(
      { error: "Envoi email non configuré. Utilisez WhatsApp ou email.", missing: smtp.missing },
      { status: 501 }
    );
  }
  const transporter = smtp.transporter;

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

  try {
    await transporter.sendMail({
      to,
      from,
      replyTo: email,
      subject: mailSubject,
      text,
    });
  } catch (err) {
    console.error("[contact] sendMail failed", err);
    return NextResponse.json(
      { error: "Impossible d’envoyer pour le moment. Réessayez plus tard." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}


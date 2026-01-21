import { NextResponse } from "next/server";
import { computeFromAddress, getSmtpTransporter } from "@/lib/email/smtp";

export const runtime = "nodejs";

type Payload = {
  name: string;
  company: string;
  email: string;
  phone?: string;
  message?: string;
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

  const name = must(body.name);
  const company = must(body.company);
  const email = must(body.email);
  const phone = must(body.phone);
  const message = must(body.message);

  if (!name || !company || !email || !isEmail(email)) {
    return NextResponse.json(
      { error: "Merci de renseigner Nom, Entreprise et un email valide." },
      { status: 400 }
    );
  }

  const to = process.env.PRO_CONTACT_TO?.trim() || "lucie@moverz.fr";
  const from = computeFromAddress({
    explicitFrom: process.env.PRO_CONTACT_FROM,
    smtpFrom: process.env.SMTP_FROM,
    smtpUser: process.env.SMTP_USER,
    fallbackTo: to,
  });

  // If SMTP isn't configured, return 501 and let the UI offer a mailto fallback.
  const smtp = await getSmtpTransporter(process.env);
  if (!smtp.ok) {
    return NextResponse.json(
      {
        error: "Envoi email non configuré. Utilisez WhatsApp ou email.",
        missing: smtp.missing,
      },
      { status: 501 }
    );
  }
  const transporter = smtp.transporter;

  const subject = `Demande de démo — ${company} — ${name}`;
  const text = [
    `Nom: ${name}`,
    `Entreprise: ${company}`,
    `Email: ${email}`,
    phone ? `Téléphone: ${phone}` : "",
    "",
    "Message:",
    message || "(non renseigné)",
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await transporter.sendMail({
      to,
      from,
      replyTo: email,
      subject,
      text,
    });
  } catch (err) {
    console.error("[pro-contact] sendMail failed", err);
    return NextResponse.json(
      { error: "Impossible d’envoyer pour le moment. Réessayez plus tard." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}


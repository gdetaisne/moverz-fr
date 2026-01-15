import { NextResponse } from "next/server";

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
  const from = process.env.PRO_CONTACT_FROM?.trim() || to;

  const smtpUrl = process.env.SMTP_URL?.trim();
  const host = process.env.SMTP_HOST?.trim();
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();

  // We require SMTP config in production to truly "send" the email.
  // If missing, return 501 and let the UI offer a mailto fallback.
  const hasSmtp =
    !!smtpUrl || (!!host && typeof port === "number" && !!user && !!pass);

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

  await transporter.sendMail({
    to,
    from,
    replyTo: email,
    subject,
    text,
  });

  return NextResponse.json({ ok: true }, { status: 200 });
}


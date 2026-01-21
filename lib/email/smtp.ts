import type SMTPTransport from "nodemailer/lib/smtp-transport";

type SmtpConfig =
  | { kind: "url"; url: string }
  | {
      kind: "host";
      host: string;
      port: number;
      user: string;
      pass: string;
    };

export type SmtpEnv = {
  SMTP_URL?: string;
  SMTP_HOST?: string;
  SMTP_PORT?: string;
  SMTP_USER?: string;
  SMTP_PASS?: string;
  SMTP_FROM?: string;
};

export type SmtpCheck =
  | { ok: true; config: SmtpConfig; fromFallback?: string }
  | { ok: false; missing: Array<keyof SmtpEnv> };

export function checkSmtpEnv(env: SmtpEnv): SmtpCheck {
  const smtpUrl = env.SMTP_URL?.trim();
  if (smtpUrl) return { ok: true, config: { kind: "url", url: smtpUrl } };

  const host = env.SMTP_HOST?.trim();
  const port = env.SMTP_PORT ? Number(env.SMTP_PORT) : NaN;
  const user = env.SMTP_USER?.trim();
  const pass = env.SMTP_PASS?.trim();

  const missing: Array<keyof SmtpEnv> = [];
  if (!host) missing.push("SMTP_HOST");
  if (!env.SMTP_PORT?.trim()) missing.push("SMTP_PORT");
  if (!user) missing.push("SMTP_USER");
  if (!pass) missing.push("SMTP_PASS");

  if (missing.length) return { ok: false, missing };
  if (!Number.isFinite(port)) return { ok: false, missing: ["SMTP_PORT"] };

  return { ok: true, config: { kind: "host", host, port, user: user!, pass: pass! } };
}

let cachedTransporter:
  | { key: string; transporter: import("nodemailer").Transporter<SMTPTransport.SentMessageInfo> }
  | undefined;

export async function getSmtpTransporter(env: SmtpEnv) {
  const check = checkSmtpEnv(env);
  if (!check.ok) return { ok: false as const, missing: check.missing };

  const nodemailer = await import("nodemailer");
  const key =
    check.config.kind === "url"
      ? `url:${check.config.url}`
      : `host:${check.config.host}:${check.config.port}:${check.config.user}`;

  if (cachedTransporter?.key === key) {
    return { ok: true as const, transporter: cachedTransporter.transporter };
  }

  const transporter =
    check.config.kind === "url"
      ? nodemailer.createTransport(check.config.url)
      : nodemailer.createTransport({
          host: check.config.host,
          port: check.config.port,
          secure: check.config.port === 465,
          auth: { user: check.config.user, pass: check.config.pass },
        });

  cachedTransporter = { key, transporter };
  return { ok: true as const, transporter };
}

export function computeFromAddress(params: {
  explicitFrom?: string;
  smtpFrom?: string;
  smtpUser?: string;
  fallbackTo?: string;
}) {
  return (
    params.explicitFrom?.trim() ||
    params.smtpFrom?.trim() ||
    params.smtpUser?.trim() ||
    params.fallbackTo?.trim() ||
    ""
  );
}


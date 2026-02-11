"use client";
import { useMemo, useState, type FormEvent } from "react";

type ContactSubject =
  | "Devis & déménagement"
  | "Facturation / administratif"
  | "Presse / partenariat"
  | "Autre";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sentViaMailClient, setSentViaMailClient] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Devis & déménagement" as ContactSubject,
    message: "",
    // honeypot
    website: "",
  });

  const mailtoHref = useMemo(() => {
    const subject = `[Contact Moverz] ${form.subject}`;
    const body = [
      `Nom: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Téléphone: ${form.phone}` : "",
      "",
      "Message:",
      form.message || "(non renseigné)",
    ]
      .filter(Boolean)
      .join("\n");

    return `mailto:contact@moverz.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    setIsSent(false);
    setSentViaMailClient(false);

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });

      // If SMTP isn't configured on the server, fallback to user's mail client.
      if (res.status === 501) {
        setSentViaMailClient(true);
        setIsSent(true);
        window.location.href = mailtoHref;
        return;
      }

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as any;
        const message =
          data?.error ||
          "Impossible d’envoyer pour le moment. Utilisez WhatsApp ou email.";
        setError(message);
        return;
      }

      setIsSent(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "Devis & déménagement",
        message: "",
        website: "",
      });
    } catch {
      setError("Impossible d’envoyer pour le moment. Utilisez WhatsApp ou email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSent) {
    return (
      <div className="rounded-2xl border border-brand-turquoise-200/50 bg-gradient-to-br from-brand-turquoise-50 to-brand-accent-50 backdrop-blur-sm p-8 text-center shadow-[0_8px_24px_rgba(107,207,207,0.15)]">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-turquoise to-brand-accent text-white shadow-lg shadow-brand-turquoise/30">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#0F172A] mb-3">Message envoyé</h3>
        <p className="text-gray-600">
          {sentViaMailClient
            ? "Votre client mail vient de s'ouvrir. Envoyez le message pour nous écrire directement."
            : "On revient vers vous sous 24h ouvrées. Si c'est urgent, privilégiez WhatsApp."}
        </p>
        {sentViaMailClient ? (
          <div className="mt-6">
            <a
              className="underline underline-offset-2 text-sm font-bold text-brand-turquoise-600 hover:text-brand-turquoise-700 transition-colors"
              href={mailtoHref}
            >
              Si rien ne s'est ouvert, cliquez ici pour envoyer par email
            </a>
            .
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={form.website}
        onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))}
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[#04163a] mb-2">
            Nom et prénom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-[#04163a] focus:border-brand-turquoise focus:outline-none focus:ring-4 focus:ring-brand-turquoise/20 transition-all"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[#04163a] mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-[#04163a] focus:border-brand-turquoise focus:outline-none focus:ring-4 focus:ring-brand-turquoise/20 transition-all"
            placeholder="votre@email.com"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-[#04163a] mb-2">
            Téléphone (optionnel)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-[#04163a] focus:border-brand-turquoise focus:outline-none focus:ring-4 focus:ring-brand-turquoise/20 transition-all"
            placeholder="+33…"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-[#04163a] mb-2">
            Sujet
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={form.subject}
            onChange={(e) =>
              setForm((f) => ({ ...f, subject: e.target.value as ContactSubject }))
            }
            className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-[#04163a] focus:border-brand-turquoise focus:outline-none focus:ring-4 focus:ring-brand-turquoise/20 transition-all"
          >
            <option>Devis & déménagement</option>
            <option>Facturation / administratif</option>
            <option>Presse / partenariat</option>
            <option>Autre</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-[#04163a] mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          rows={6}
          className="w-full rounded-2xl border border-[#E3E5E8] bg-white px-4 py-3 text-[#04163a] focus:border-[#6BCFCF]/60 focus:outline-none focus:ring-2 focus:ring-[#6BCFCF]/20 transition-all resize-none"
          placeholder="Ex: dates, ville départ/arrivée, volume approximatif, étages, accès, ascenseur…"
        />
      </div>

      {error ? (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}{" "}
          <a className="underline underline-offset-2" href={mailtoHref}>
            Envoyer par email
          </a>
          .
        </div>
      ) : null}
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-brand-turquoise-300 via-brand-turquoise to-brand-turquoise-500 px-8 py-4 text-lg font-bold text-white shadow-glow-turquoise hover:shadow-glow-turquoise-lg hover:scale-[1.03] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 border border-white/20"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-brand-turquoise-200 to-brand-turquoise-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        <span className="relative z-10">{isSubmitting ? "Envoi…" : "Envoyer le message"}</span>
        <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
      <a
        href={mailtoHref}
        className="w-full inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-8 py-4 text-base font-bold text-[#0F172A] hover:border-brand-turquoise-200 hover:bg-gray-50 transition-all"
      >
        Envoyer par email
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>
      <p className="text-xs text-[#6B7280] text-center">
        Pas de démarchage. Si c’est urgent, WhatsApp est plus rapide.
      </p>
    </form>
  );
}


"use client";
import { useMemo, useState, type FormEvent } from "react";

type ContactSubject =
  | "Devis & déménagement"
  | "Arnaques / litige"
  | "Facturation / administratif"
  | "Presse / partenariat"
  | "Autre";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
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

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });

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
      <div className="rounded-3xl border border-[#6BCFCF]/30 bg-gradient-to-br from-[#E6FFFA] to-white p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6BCFCF]/15 text-[#0F172A]">
          <span className="text-2xl" aria-hidden="true">
            ✓
          </span>
        </div>
        <h3 className="text-xl font-bold text-[#0F172A] mb-2">Message envoyé</h3>
        <p className="text-[#1E293B]/70">
          On revient vers vous sous 24h ouvrées. Si c’est urgent, privilégiez WhatsApp.
        </p>
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
            className="w-full rounded-2xl border border-[#E3E5E8] bg-white px-4 py-3 text-[#04163a] focus:border-[#6BCFCF]/60 focus:outline-none focus:ring-2 focus:ring-[#6BCFCF]/20 transition-all"
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
            className="w-full rounded-2xl border border-[#E3E5E8] bg-white px-4 py-3 text-[#04163a] focus:border-[#6BCFCF]/60 focus:outline-none focus:ring-2 focus:ring-[#6BCFCF]/20 transition-all"
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
            className="w-full rounded-2xl border border-[#E3E5E8] bg-white px-4 py-3 text-[#04163a] focus:border-[#6BCFCF]/60 focus:outline-none focus:ring-2 focus:ring-[#6BCFCF]/20 transition-all"
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
            className="w-full rounded-2xl border border-[#E3E5E8] bg-white px-4 py-3 text-[#04163a] focus:border-[#6BCFCF]/60 focus:outline-none focus:ring-2 focus:ring-[#6BCFCF]/20 transition-all"
          >
            <option>Devis & déménagement</option>
            <option>Arnaques / litige</option>
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
        className="w-full group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-[#6BCFCF] via-[#4FB8B8] to-[#3DA5A5] px-8 py-4 text-lg font-semibold text-[#04141f] shadow-[0_8px_30px_rgba(107,207,207,0.35)] hover:shadow-[0_12px_50px_rgba(107,207,207,0.5)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
        <span className="relative">{isSubmitting ? "Envoi…" : "Envoyer le message"}</span>
        <span className="relative text-xl leading-none group-hover:translate-x-1 transition-transform duration-300">→</span>
      </button>
      <p className="text-xs text-[#6B7280] text-center">
        Pas de démarchage. Si c’est urgent, WhatsApp est plus rapide.
      </p>
    </form>
  );
}


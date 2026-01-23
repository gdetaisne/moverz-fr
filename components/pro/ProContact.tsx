"use client";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Calendar, Phone, CheckCircle2, Loader2 } from "lucide-react";
import Image from "next/image";
import { useMemo, useState, type FormEvent } from "react";

export default function ProContact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sentViaMailClient, setSentViaMailClient] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const mailtoHref = useMemo(() => {
    const subject = "Demande de démo — Moverz Pro";
    const body = [
      `Nom: ${form.name}`,
      `Entreprise: ${form.company}`,
      `Email: ${form.email}`,
      `Téléphone: ${form.phone}`,
      "",
      "Contexte / besoin:",
      form.message || "(non renseigné)",
    ].join("\n");

    return `mailto:lucie@moverz.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    setIsSent(false);
    setSentViaMailClient(false);

    try {
      const res = await fetch("/api/pro-contact/", {
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
          "Impossible d’envoyer pour le moment. Essayez WhatsApp ou email.";
        setError(message);
        return;
      }

      setIsSent(true);
      setForm({ name: "", company: "", email: "", phone: "", message: "" });
    } catch {
      setError("Impossible d’envoyer pour le moment. Essayez WhatsApp ou email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSent && sentViaMailClient) {
    return (
      <section id="contact" className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto rounded-3xl border border-[#6BCFCF]/30 bg-gradient-to-br from-[#E6FFFA] to-white p-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6BCFCF]/15 text-[#0F172A]">
              <span className="text-2xl" aria-hidden="true">
                ✓
              </span>
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-2">Presque terminé</h3>
            <p className="text-[#1E293B]/70">
              Votre client mail vient de s’ouvrir. Envoyez le message pour écrire directement à{" "}
              <strong>lucie@moverz.fr</strong>.
            </p>
            <div className="mt-5">
              <a className="underline underline-offset-2 text-sm font-semibold text-[#0F172A]" href={mailtoHref}>
                Si rien ne s’est ouvert, cliquez ici pour envoyer par email
              </a>
              .
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-4">
            Demander une démo
          </h2>
          <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
            15–20 minutes pour comprendre votre process actuel et vous montrer comment Moverz standardise
            les dossiers (preuves + docs) pour chiffrer plus vite.
          </p>
        </motion.div>

        {/* Formulaire + canaux */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="relative overflow-hidden rounded-3xl border border-[#E3E5E8] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#6BCFCF]/70 via-[#2B7A78]/40 to-[#6BCFCF]/70" />
              <div className="p-7 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="h-14 w-14 rounded-2xl overflow-hidden border border-[#E3E5E8]">
                      <Image
                        src="/lucie-profile.jpg"
                        alt="Lucie, responsable partenaire Moverz"
                        width={56}
                        height={56}
                        className="h-14 w-14 object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-[#6BCFCF] border-2 border-white flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-[#0F172A]" />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#0F172A] leading-tight">
                      Lucie{" "}
                      <span className="text-[#6B7280] font-medium">
                        · Responsable partenaire
                      </span>
                    </p>
                    <p className="text-sm text-[#6B7280]">
                      Réponse rapide. Démo orientée ROI (temps, litiges, fiabilité devis).
                    </p>
                  </div>
                </div>

                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="pro-name" className="block text-sm font-semibold text-[#0F172A] mb-2">
                        Nom
                      </label>
                      <input
                        id="pro-name"
                        required
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        className="w-full rounded-2xl border border-[#E3E5E8] bg-white px-4 py-3 text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#6BCFCF]/20 focus:border-[#6BCFCF]/50"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="pro-company" className="block text-sm font-semibold text-[#0F172A] mb-2">
                        Entreprise
                      </label>
                      <input
                        id="pro-company"
                        required
                        value={form.company}
                        onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                        className="w-full rounded-2xl border border-[#E3E5E8] bg-white px-4 py-3 text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#6BCFCF]/20 focus:border-[#6BCFCF]/50"
                        placeholder="Nom de votre société"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="pro-email" className="block text-sm font-semibold text-[#0F172A] mb-2">
                        Email
                      </label>
                      <input
                        id="pro-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        className="w-full rounded-2xl border border-[#E3E5E8] bg-white px-4 py-3 text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#6BCFCF]/20 focus:border-[#6BCFCF]/50"
                        placeholder="vous@entreprise.fr"
                      />
                    </div>
                    <div>
                      <label htmlFor="pro-phone" className="block text-sm font-semibold text-[#0F172A] mb-2">
                        Téléphone (optionnel)
                      </label>
                      <input
                        id="pro-phone"
                        value={form.phone}
                        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                        className="w-full rounded-2xl border border-[#E3E5E8] bg-white px-4 py-3 text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#6BCFCF]/20 focus:border-[#6BCFCF]/50"
                        placeholder="+33 ..."
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="pro-message" className="block text-sm font-semibold text-[#0F172A] mb-2">
                      Message
                    </label>
                    <textarea
                      id="pro-message"
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      className="w-full rounded-2xl border border-[#E3E5E8] bg-white px-4 py-3 text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#6BCFCF]/20 focus:border-[#6BCFCF]/50"
                      rows={4}
                      placeholder="Ex: 40 dossiers/mois, beaucoup de visites techniques, litiges sur le volume..."
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

                  {isSent ? (
                    <div className="rounded-2xl border border-[#6BCFCF]/30 bg-[#6BCFCF]/10 px-4 py-3 text-sm text-[#0F172A]">
                      Message envoyé à <strong>lucie@moverz.fr</strong>. Je reviens vers vous rapidement.
                    </div>
                  ) : null}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0F172A] px-6 py-4 text-sm font-semibold text-white hover:bg-[#1E293B] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Envoi…
                      </>
                    ) : (
                      "Envoyer la demande de démo"
                    )}
                  </button>

                  <p className="text-xs text-[#6B7280] text-center">
                    Le message est envoyé directement à <strong>lucie@moverz.fr</strong>.
                  </p>
                </form>
              </div>
            </div>

            <div className="flex flex-col justify-start">
              {/* Canaux alternatifs - ultra secondaires */}
              <div className="rounded-2xl border border-[#E3E5E8] bg-white p-6">
                <p className="text-xs font-medium text-[#6B7280] mb-4">Autres canaux</p>
                <div className="space-y-2">
                  <a
                    href="https://wa.me/66952824035?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20Moverz%20Pro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#F9FAFB] transition-colors group"
                  >
                    <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#25D366]/10 text-[#25D366]">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-medium text-[#0F172A]">WhatsApp</p>
                    </div>
                  </a>
                  <a
                    href={mailtoHref}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#F9FAFB] transition-colors group"
                  >
                    <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#6BCFCF]/10 text-[#6BCFCF]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-medium text-[#0F172A]">Email</p>
                    </div>
                  </a>
                  <a
                    href="https://calendly.com/lucie-moverz/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#F9FAFB] transition-colors group"
                  >
                    <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#0F172A]/10 text-[#0F172A]">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-medium text-[#0F172A]">Calendly</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


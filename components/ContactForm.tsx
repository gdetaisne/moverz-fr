"use client";
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // For now, just show a success message
    // In production, you would send to an API
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-[#6BCFCF]/40 bg-gradient-to-br from-[#E6FFFA] to-white p-8 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-[#04163a] mb-2">Message envoyé !</h3>
        <p className="text-[#4b5c6b]">
          Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
            className="w-full rounded-2xl border border-[#E3E5E8] bg-white px-4 py-3 text-[#04163a] focus:border-[#6BCFCF]/60 focus:outline-none focus:ring-2 focus:ring-[#6BCFCF]/20 transition-all"
            placeholder="votre@email.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-[#04163a] mb-2">
          Sujet
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full rounded-2xl border border-[#E3E5E8] bg-white px-4 py-3 text-[#04163a] focus:border-[#6BCFCF]/60 focus:outline-none focus:ring-2 focus:ring-[#6BCFCF]/20 transition-all"
          placeholder="L'objet de votre message"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-[#04163a] mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full rounded-2xl border border-[#E3E5E8] bg-white px-4 py-3 text-[#04163a] focus:border-[#6BCFCF]/60 focus:outline-none focus:ring-2 focus:ring-[#6BCFCF]/20 transition-all resize-none"
          placeholder="Votre message..."
        />
      </div>
      
      <button
        type="submit"
        className="w-full group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-[#6BCFCF] via-[#4FB8B8] to-[#3DA5A5] px-8 py-4 text-lg font-semibold text-[#04141f] shadow-[0_8px_30px_rgba(107,207,207,0.35)] hover:shadow-[0_12px_50px_rgba(107,207,207,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
        <span className="relative">Envoyer le message</span>
        <span className="relative text-xl leading-none group-hover:translate-x-1 transition-transform duration-300">→</span>
      </button>
    </form>
  );
}


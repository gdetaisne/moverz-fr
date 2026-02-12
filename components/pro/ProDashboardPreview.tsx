"use client";
import { useState } from "react";
import Image from "next/image";

export default function ProDashboardPreview() {
  const [activeTab, setActiveTab] = useState<"dossiers" | "stats" | "notifications">("dossiers");

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-[#F8F9FA]">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-turquoise/10 px-4 py-2 text-sm font-semibold text-[var(--color-text)]">
            <span className="h-2 w-2 rounded-full bg-brand-turquoise" />
            Dashboard Pro
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text)]">
            Votre outil de gestion quotidien
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)]/70 max-w-3xl mx-auto">
            Interface simple et efficace pour gérer vos dossiers, suivre vos stats et répondre rapidement
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-8">
          {[
            { id: "dossiers", label: "Dossiers", desc: "Gérez vos leads" },
            { id: "stats", label: "Statistiques", desc: "Suivez vos perfs" },
            { id: "notifications", label: "Notifications", desc: "Temps réel" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-[var(--color-bg-dark)] text-white shadow-lg"
                  : "bg-white text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[#0F172A]"
              }`}
            >
              <div className="flex flex-col items-center gap-1">
                <span>{tab.label}</span>
                <span className="text-xs opacity-70">{tab.desc}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Dashboard Preview */}
        <div className="relative">
          {/* Browser chrome */}
          <div className="bg-white rounded-t-2xl border border-[var(--color-border)] p-3 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 bg-[#F8F9FA] rounded-lg px-4 py-1.5 text-sm text-[var(--color-text-secondary)]/60">
              dashboard.moverz.fr
            </div>
          </div>

          {/* Dashboard content */}
          <div className="bg-white rounded-b-2xl border-x border-b border-[var(--color-border)] p-6 md:p-8 shadow-2xl">
            {activeTab === "dossiers" && (
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-[var(--color-text)]">Nouveaux dossiers</h3>
                  <span className="px-3 py-1 rounded-full bg-brand-turquoise/10 text-[var(--color-text)] text-sm font-medium">
                    3 nouveaux aujourd'hui
                  </span>
                </div>

                {/* Dossier cards */}
                {[
                  {
                    id: "#2847",
                    name: "Marie D.",
                    route: "Paris → Lyon",
                    volume: "35m³",
                    date: "15 mars 2025",
                    status: "Nouveau",
                    statusColor: "bg-green-100 text-green-700",
                  },
                  {
                    id: "#2846",
                    name: "Thomas L.",
                    route: "Marseille → Nice",
                    volume: "22m³",
                    date: "20 mars 2025",
                    status: "En cours",
                    statusColor: "bg-brand-turquoise-100 text-brand-turquoise-700",
                  },
                  {
                    id: "#2845",
                    name: "Sophie M.",
                    route: "Toulouse → Bordeaux",
                    volume: "45m³",
                    date: "28 mars 2025",
                    status: "Devis envoyé",
                    statusColor: "bg-orange-100 text-orange-700",
                  },
                ].map((dossier) => (
                  <div
                    key={dossier.id}
                    className="p-4 rounded-xl border border-[var(--color-border)] hover:border-brand-turquoise hover:shadow-md transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-sm font-bold text-[var(--color-text)]">{dossier.id} · {dossier.name}</p>
                        <p className="text-sm text-[var(--color-text-secondary)]/60 mt-1">{dossier.route}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${dossier.statusColor}`}>
                        {dossier.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-[var(--color-text-secondary)]/70">
                      <span>📦 {dossier.volume}</span>
                      <span>📅 {dossier.date}</span>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <button className="flex-1 py-2 rounded-lg bg-[var(--color-bg-dark)] text-white text-sm font-medium hover:bg-[var(--color-bg-dark)] transition-colors">
                        Voir le dossier
                      </button>
                      <button className="px-4 py-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text)] text-sm font-medium hover:bg-[#F8F9FA] transition-colors">
                        Envoyer devis
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "stats" && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-6">Vos performances ce mois</h3>
                
                {/* Stats cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Dossiers reçus", value: "47", trend: "+12%" },
                    { label: "Devis envoyés", value: "38", trend: "+8%" },
                    { label: "Taux de réponse", value: "81%", trend: "+5%" },
                    { label: "Taux de conversion", value: "34%", trend: "+3%" },
                  ].map((stat, i) => (
                    <div key={i} className="p-4 rounded-xl bg-gradient-to-br from-[#F8F9FA] to-white border border-[var(--color-border)]">
                      <p className="text-2xl font-bold text-[var(--color-text)]">{stat.value}</p>
                      <p className="text-xs text-[var(--color-text-secondary)]/60 mt-1">{stat.label}</p>
                      <p className="text-xs text-green-600 font-medium mt-2">{stat.trend}</p>
                    </div>
                  ))}
                </div>

                {/* Chart placeholder */}
                <div className="p-6 rounded-xl border border-[var(--color-border)] bg-gradient-to-br from-white to-[#F8F9FA]">
                  <p className="text-sm font-semibold text-[var(--color-text)] mb-4">Évolution des dossiers</p>
                  <div className="h-48 flex items-end gap-2">
                    {[30, 45, 38, 52, 47, 61, 55].map((height, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-brand-turquoise to-[#A8E8E8] rounded-t-lg transition-all hover:opacity-80" style={{ height: `${height}%` }} />
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-[var(--color-text-secondary)]/60 mt-2">
                    <span>Lun</span>
                    <span>Mar</span>
                    <span>Mer</span>
                    <span>Jeu</span>
                    <span>Ven</span>
                    <span>Sam</span>
                    <span>Dim</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "notifications" && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-6">Notifications temps réel</h3>
                
                {[
                  {
                    type: "new",
                    icon: "🆕",
                    title: "Nouveau dossier #2847",
                    desc: "Paris → Lyon, 35m³, départ 15 mars",
                    time: "Il y a 5 min",
                    color: "border-l-green-500",
                  },
                  {
                    type: "response",
                    icon: "💬",
                    title: "Client a répondu",
                    desc: "Thomas L. a des questions sur votre devis",
                    time: "Il y a 1h",
                    color: "border-l-brand-turquoise",
                  },
                  {
                    type: "won",
                    icon: "✓",
                    title: "Dossier gagné !",
                    desc: "Sophie M. a accepté votre devis (2 450€)",
                    time: "Il y a 3h",
                    color: "border-l-brand-turquoise",
                  },
                  {
                    type: "reminder",
                    icon: "⏰",
                    title: "Rappel",
                    desc: "2 dossiers en attente de réponse depuis 48h",
                    time: "Il y a 5h",
                    color: "border-l-orange-500",
                  },
                ].map((notif, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-xl border-l-4 ${notif.color} bg-white border border-[var(--color-border)] hover:shadow-md transition-all cursor-pointer`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{notif.icon}</span>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-[var(--color-text)]">{notif.title}</p>
                        <p className="text-sm text-[var(--color-text-secondary)]/60 mt-1">{notif.desc}</p>
                        <p className="text-xs text-[var(--color-text-secondary)]/40 mt-2">{notif.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[var(--color-text-secondary)]/70 mb-4">
            Découvrez toutes les fonctionnalités en action
          </p>
          <a
            href="/partenaires/#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-bg-dark)] px-8 py-4 text-base font-semibold text-white hover:bg-[var(--color-bg-dark)] transition-colors"
          >
            <span>Demander une démo</span>
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}


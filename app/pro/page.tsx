"use client";

import { motion } from "framer-motion";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ProPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero - style aligné sur home */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]" />
        
        {/* Animated blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6BCFCF]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#6BCFCF]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Moverz Pro", href: "/pro/" },
            ]}
          />
          
          <div className="mt-12 text-center space-y-8 max-w-4xl mx-auto">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white/90 backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF] animate-pulse" />
              <span>Calculateur IA pour déménageurs</span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Vos clients calculent leur volume<br />
              <span className="text-[#6BCFCF]">en 1 minute</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto"
            >
              Un calculateur IA qui s'intègre sur votre site en 5 minutes. Vos clients prennent des photos, l'IA calcule le volume, vous recevez des dossiers complets. Simple, précis, en marque blanche.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <a
                href="/contact/"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#0F172A] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span>Tester gratuitement 30 jours</span>
                <span className="text-lg leading-none group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                <span>Parler à l'équipe</span>
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="pt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#6BCFCF]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Intégration 5 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#6BCFCF]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>0 dev requis</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#6BCFCF]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Marque blanche 100%</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Le problème (storytelling) */}
      <section className="relative py-20 md:py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-0 w-96 h-96 bg-red-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s' }} />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-600 border border-red-100">
                <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse" />
                <span>Le calvaire actuel</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
                Les visites techniques,<br />c'est fini
              </h2>
              <div className="space-y-4 text-[#6B7280]">
                <p className="leading-relaxed">
                  <strong className="text-[#0F172A]">3 heures par dossier.</strong> Téléphone, déplacement, visite, retour, saisie. À chaque fois.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-[#0F172A]">40% de litiges.</strong> "Vous aviez dit 25 m³, pas 32 !" Le client conteste, vous perdez du temps et de l'argent.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-[#0F172A]">Clients qui partent.</strong> Ils attendent 5 jours votre visite ? Ils vont chez un concurrent entre-temps.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <div className="rounded-2xl border border-red-100 bg-red-50/50 p-8">
                <div className="space-y-5">
                  {[
                    { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", label: "Appel client", time: "10 minutes" },
                    { icon: "M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20", label: "Déplacement", time: "1h aller-retour" },
                    { icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", label: "Visite sur place", time: "45 minutes" },
                    { icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "Saisie + devis", time: "30 minutes" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-[#0F172A]">{item.label}</p>
                        <p className="text-sm text-[#6B7280]">{item.time}</p>
                      </div>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-red-200">
                    <p className="text-xl font-bold text-red-600">Total : 3h par dossier</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* La solution */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#F0F9FF] to-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-0 w-96 h-96 bg-[#6BCFCF]/30 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '7s' }} />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="order-2 md:order-1 relative"
            >
              <div className="rounded-2xl border border-[#6BCFCF]/20 bg-white p-8 shadow-lg">
                <div className="space-y-5">
                  {[
                    { icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z", label: "Client prend 10 photos", time: "2 minutes" },
                    { icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", label: "IA calcule le volume", time: "30 secondes" },
                    { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "Vous recevez le dossier", time: "Instantané" },
                    { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", label: "Vous envoyez le devis", time: "2 minutes" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#6BCFCF]/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#6BCFCF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-[#0F172A]">{item.label}</p>
                        <p className="text-sm text-[#6B7280]">{item.time}</p>
                      </div>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-[#6BCFCF]/20">
                    <p className="text-xl font-bold text-[#6BCFCF]">Total : 5 min pour vous</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="order-1 md:order-2 space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-2 text-sm font-medium text-[#6BCFCF] border border-[#6BCFCF]/20">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF] animate-pulse" />
                <span>La nouvelle façon</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
                Avec Moverz Pro,<br />c'est 5 minutes
              </h2>
              <div className="space-y-4 text-[#6B7280]">
                <p className="leading-relaxed">
                  <strong className="text-[#0F172A]">1. Votre client prend des photos.</strong> L'app le guide pièce par pièce. Salon, cuisine, chambres, cave. 10 photos en 2 minutes.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-[#0F172A]">2. L'IA analyse et calcule.</strong> Volume en m³, inventaire détaillé, photos des accès. Précision 90-95%.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-[#0F172A]">3. Vous recevez le dossier.</strong> Complet, documenté, prêt à chiffrer. Vous envoyez le devis. Terminé.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="relative py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center space-y-4 mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
              Pourquoi les déménageurs adorent Moverz Pro
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              On a pensé à tout pour que vous gagnez du temps et de l'argent
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Intégration en 5 minutes",
                description: "Copier-coller un script sur votre site. Aucune compétence technique. Compatible WordPress, Wix, tout.",
              },
              {
                icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
                title: "Marque blanche 100%",
                description: "Vos couleurs, votre logo, votre domaine. Le client ne voit que votre marque. Moverz est invisible.",
              },
              {
                icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
                title: "Précision 90-95%",
                description: "L'IA a été entraînée sur 50 000+ déménagements. Aussi précise qu'une visite technique.",
              },
              {
                icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
                title: "Photos = preuve",
                description: "Volume contesté le jour J ? Vous montrez les photos. Le client ne peut plus rien dire. -90% de litiges.",
              },
              {
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "ROI immédiat",
                description: "100€/mois pour économiser 8 000€/mois en visites. Rentable dès 2 estimations/mois.",
              },
              {
                icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
                title: "Support humain",
                description: "Une vraie personne répond en moins de 2h. Pas de chatbot, pas de ticket. Juste nous.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group"
              >
                <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8 hover:border-[#6BCFCF]/50 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#F0F9FF] text-[#6BCFCF] group-hover:bg-[#6BCFCF] group-hover:text-white transition-all duration-300 mb-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-0 w-96 h-96 bg-[#6BCFCF] rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s' }} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-2 text-sm font-medium text-[#6BCFCF] border border-[#6BCFCF]/20 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF] animate-pulse" />
                <span>Témoignage</span>
              </div>
            </div>
            
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-center">
              "Avant Moverz, je passais 3h par dossier en visites. J'étais saturé à 50 dossiers/mois. Maintenant l'IA me fait gagner 2h50 par dossier. Je peux en traiter 100+. J'ai doublé mon CA sans embaucher."
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#6BCFCF] to-[#2B7A78] flex items-center justify-center text-lg font-bold">
                TG
              </div>
              <div>
                <p className="font-semibold text-lg">Thomas Girard</p>
                <p className="text-white/70">Déménagements Girard, Marseille</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-[#6BCFCF]">2h50</p>
                <p className="text-sm text-white/70">économisées/dossier</p>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <p className="text-3xl font-bold text-[#6BCFCF]">×2</p>
                <p className="text-sm text-white/70">CA en 6 mois</p>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <p className="text-3xl font-bold text-[#6BCFCF]">0</p>
                <p className="text-sm text-white/70">embauche</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ressources blog */}
      <section className="relative py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center space-y-4 mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
              Guides pour déménageurs
            </h2>
            <p className="text-lg text-[#6B7280]">
              On partage tout ce qu'on sait
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Widget IA volumétrie : comparatif 2025",
                description: "Les 5 solutions pour calculer le volume automatiquement. API, widget, ou développement sur-mesure ?",
                href: "/blog/widget-ia-volumetrie-demenagement-comparatif/",
              },
              {
                title: "Marque blanche : le guide complet",
                description: "Comment intégrer un outil tiers sans perdre votre identité de marque ? Avantages, pièges à éviter.",
                href: "/blog/marque-blanche-demenagement-guide/",
              },
              {
                title: "IA vs visite technique",
                description: "Comparatif précision, temps, coût. L'IA peut-elle vraiment remplacer la visite ?",
                href: "/blog/estimer-volume-demenagement-ia-vs-visite/",
              },
              {
                title: "Réduire les litiges de 90%",
                description: "40% des litiges viennent du volume sous-estimé. Comment l'IA + photos règlent le problème.",
                href: "/blog/demenageur-reduire-litiges-volume/",
              },
              {
                title: "ROI widget volumétrie : calcul 2025",
                description: "Combien économiser en temps commercial avec un widget IA ? Calcul du ROI sur 12 mois.",
                href: "/blog/roi-widget-volumetrie-demenageur/",
              },
            ].map((resource, i) => (
              <motion.a
                key={resource.href}
                href={resource.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group rounded-2xl border border-[#E5E7EB] bg-white p-6 hover:border-[#6BCFCF]/50 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-[#0F172A] mb-3 group-hover:text-[#6BCFCF] transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed mb-4">
                  {resource.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#6BCFCF]">
                  Lire l'article
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#0F172A] to-[#1E293B] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#6BCFCF] rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s' }} />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6BCFCF] rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center space-y-8 text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Prêt à économiser 3h par dossier ?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Testez Moverz Pro gratuitement pendant 30 jours. Aucune carte bancaire requise. On vous aide à tout installer.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="/contact/"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#0F172A] shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span>Démarrer l'essai gratuit</span>
                <span className="text-lg leading-none group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                <span>Parler à l'équipe</span>
              </a>
            </div>

            <p className="text-sm text-white/70 pt-4">
              30 jours d'essai · Sans engagement · Support français
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

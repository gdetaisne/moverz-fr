"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import Chip from "@/components/ui/Chip";
import Card from "@/components/ui/Card";

export default function PourquoiMoverzContent() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Pourquoi Moverz", href: "/pourquoi-moverz/" },
        ]}
        eyebrow="Ce qui nous différencie"
        title={<>Pourquoi choisir <span className="text-[#2B7A78]">Moverz</span> ?</>}
        subtitle="Moverz ne compare pas seulement des devis. Moverz compare des entreprises, leur fiabilité et le risque associé."
        primaryCta={{
          label: "Estimer mon déménagement",
          href: "https://devis.moverz.fr/?source=moverz.fr&from=/pourquoi-moverz/",
        }}
        secondaryCta={{ label: "Voir comment ça marche", href: "/comment-ca-marche/" }}
      />

      {/* Section 1: Le problème */}
      <section className="section section-light">
        <div className="container max-w-5xl">
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
          >
            <Chip tone="light" className="mx-auto">
              Le constat
            </Chip>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] leading-tight">
              Le vrai problème des comparateurs
            </h2>
            <p className="text-lg text-[#1E293B]/70 max-w-2xl mx-auto">
              Sur les 20–30 premiers résultats Google, la plupart des comparateurs ne comparent rien.<br />
              Ils revendent vos coordonnées.
            </p>
          </motion.div>

          {/* Grid des problèmes */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: "📝",
                title: "Lead-gen (45-50%)",
                desc: "Formulaire → vos données vendues aux déménageurs. Aucune comparaison réelle.",
              },
              {
                icon: "📹",
                title: "Courtiers visio (25-30%)",
                desc: "Rendez-vous obligatoire, délais longs, friction élevée. Difficile à scaler.",
              },
              {
                icon: "🏢",
                title: "Réseaux fermés (15-20%)",
                desc: "Comparaison limitée à leurs membres. Pas neutre par définition.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className="h-full p-6">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#1E293B]/70">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Point clé */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-lg text-[#0F172A] font-medium">
              👉 Conséquence : le devis le moins cher n&apos;est pas nécessairement le moins risqué.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Tableau comparatif */}
      <section className="section section-contrast">
        <div className="container max-w-5xl">
          <motion.div
            className="text-center space-y-4 mb-12"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
          >
            <Chip tone="dark" className="mx-auto">
              Comparaison
            </Chip>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Moverz vs les autres
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="overflow-x-auto"
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-4 px-4 text-white/60 font-medium text-sm"></th>
                  <th className="py-4 px-4 text-white/60 font-medium text-sm">Comparateurs classiques</th>
                  <th className="py-4 px-4 text-[#6BCFCF] font-semibold text-sm">Moverz</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { label: "Base de comparaison", classic: "Formulaire déclaratif", moverz: "Photos + vidéo + voice" },
                  { label: "Canal", classic: "Email / formulaire web", moverz: "WhatsApp (asynchrone)" },
                  { label: "Standardisation", classic: "Faible", moverz: "Dossier unique pour tous" },
                  { label: "Vérification entreprises", classic: false, moverz: true },
                  { label: "Données financières", classic: false, moverz: true },
                  { label: "Litiges visibles", classic: false, moverz: true },
                  { label: "Aide au choix", classic: "Limitée (prix)", moverz: "Fiabilité + prix" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/10">
                    <td className="py-4 px-4 text-white/80 font-medium">{row.label}</td>
                    <td className="py-4 px-4 text-white/60">
                      {typeof row.classic === "boolean" ? (
                        row.classic ? (
                          <span className="text-[#6BCFCF]">✓</span>
                        ) : (
                          <span className="text-red-400">✕</span>
                        )
                      ) : (
                        row.classic
                      )}
                    </td>
                    <td className="py-4 px-4 text-white font-medium">
                      {typeof row.moverz === "boolean" ? (
                        row.moverz ? (
                          <span className="text-[#6BCFCF]">✓</span>
                        ) : (
                          <span className="text-red-400">✕</span>
                        )
                      ) : (
                        row.moverz
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Ce qui change avec Moverz */}
      <section className="section section-light">
        <div className="container max-w-5xl">
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
          >
            <Chip tone="light" className="mx-auto">
              Notre approche
            </Chip>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] leading-tight">
              Ce qui change avec Moverz
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="h-8 w-8 text-[#6BCFCF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
                title: "WhatsApp, pas de formulaire",
                desc: "Envoyez photos, vidéos et voice notes en 3 minutes. Pas de rendez-vous, pas de friction.",
              },
              {
                icon: (
                  <svg className="h-8 w-8 text-[#6BCFCF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                title: "Dossier standardisé",
                desc: "Un inventaire structuré, une estimation cohérente. Tous les déménageurs répondent sur la même base.",
              },
              {
                icon: (
                  <svg className="h-8 w-8 text-[#6BCFCF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Entreprises vérifiées",
                desc: "Score financier, litiges, identité légale. Vous voyez ce qu'aucun comparateur ne montre.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className="h-full p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6BCFCF]/10">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">{item.title}</h3>
                  <p className="text-[#1E293B]/70">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Vérification entreprises (différenciation majeure) */}
      <section className="section section-light border-t border-[#E3E5E8]">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <Chip tone="light">Exclusivité Moverz</Chip>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] leading-tight">
                Ce qu&apos;aucun comparateur ne vous montre
              </h2>
              <p className="text-lg text-[#1E293B]/70">
                Nous enrichissons chaque déménageur avec des données financières et juridiques. 
                Vous savez exactement à qui vous avez affaire.
              </p>
              <ul className="space-y-4">
                {[
                  "Score Creditsafe (santé financière)",
                  "Historique des litiges en cours",
                  "Vérification SIREN / identité légale",
                  "Évolution de la note dans le temps",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-5 w-5 text-[#6BCFCF]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-[#1E293B]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Card className="p-8 bg-[#0F172A] border-none">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-sm">Déménageur A</span>
                    <span className="text-[#6BCFCF] font-bold">Score: 82/100</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Santé financière</span>
                      <span className="text-[#6BCFCF]">✓ Solide</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Litiges en cours</span>
                      <span className="text-[#6BCFCF]">0</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">SIREN vérifié</span>
                      <span className="text-[#6BCFCF]">✓</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Assurance RC Pro</span>
                      <span className="text-[#6BCFCF]">✓ Valide</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-xs text-white/50">Données Creditsafe • Mise à jour mensuelle</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Pourquoi personne d'autre ne le fait */}
          <motion.div
            className="mt-16 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-[#1E293B]/70">
              <span className="font-semibold text-[#0F172A]">Pourquoi personne d&apos;autre ne le fait ?</span><br />
              Coût élevé, complexité d&apos;accès aux données, et surtout : conflit d&apos;intérêt. 
              Difficile de noter financièrement un client qui vous paie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Lien Moverz / GSLV EURL */}
      <section className="section section-light border-t border-[#E3E5E8]">
        <div className="container max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <p className="text-lg text-[#1E293B]/70">
              <span className="font-semibold text-[#0F172A]">Moverz</span> est une marque exploitée par{" "}
              <span className="font-semibold text-[#0F172A]">GSLV EURL</span> (SIREN 914499876, RCS La Rochelle).
            </p>
            <p className="text-sm text-[#1E293B]/50">
              Siège social : 5 Rue Jean Coyttar, 17290 Thairé, France
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section section-contrast">
        <div className="container max-w-3xl text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Prêt à comparer intelligemment ?
            </h2>
            <p className="text-lg text-white/75 max-w-2xl mx-auto">
              Envoyez vos photos via WhatsApp. Recevez des devis comparables de déménageurs vérifiés.
            </p>
            <a
              href="https://devis.moverz.fr/?source=moverz.fr&from=/pourquoi-moverz/"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#0F172A] shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>Estimer mon déménagement</span>
              <span className="text-xl leading-none">→</span>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}


"use client";

import { motion } from "framer-motion";
import Chip from "@/components/ui/Chip";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function WhyMoverz() {
  const benefits = [
    {
      title: "Devis comparables",
      description:
        "Photos + IA → même volumétrie, même dossier pour tous. Les déménageurs chiffrent la même base.",
    },
    {
      title: "Moins de surprises",
      description:
        "Les photos captent les détails qui font exploser un prix: étages, accès, objets lourds, volume réel.",
    },
    {
      title: "0 spam",
      description:
        "Dossier anonyme: vous recevez des devis par email. Vous choisissez qui vous contactez, et quand.",
    },
    {
      title: "Pros contrôlés",
      description:
        "Assurances, solvabilité, historique litiges: on filtre. Seuls les pros sérieux reçoivent votre dossier.",
    },
  ];

  return (
    <section className="section section-contrast">
      <div className="halo" />

      <div className="container max-w-6xl space-y-12">
        {/* Header */}
        <motion.div
          className="text-center space-y-5"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          <div className="flex justify-center">
            <Chip tone="dark" className="px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-teal)]" />
              Pourquoi Moverz
            </Chip>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Des devis justes.<br className="hidden md:block" /> Parce que vous montrez la réalité.
          </h2>
          <p className="text-base md:text-lg text-white/75 max-w-3xl mx-auto leading-relaxed">
            Les comparateurs “classiques” envoient vos coordonnées. Résultat: devis flous, incomparables,
            et surprises le jour J. Moverz utilise vos <strong className="text-white">photos</strong> + l’IA
            pour fiabiliser le volume et standardiser le dossier.
          </p>
        </motion.div>

        {/* Storytelling (like /pro): problème -> solution */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-white/10 bg-white/5 text-white backdrop-blur-sm p-8">
            <div className="space-y-4">
              <Chip tone="dark" className="border-white/14 bg-white/8">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                Sans photos
              </Chip>
              <h3 className="text-2xl font-bold">Le chaos</h3>
              <ul className="space-y-3 text-sm text-white/75">
                <li>Devis basés sur des descriptions imprécises (“T2 standard”).</li>
                <li>Surprises: étages, accès, volume réel, objets lourds → surcoûts.</li>
                <li>Comparaison impossible: chacun chiffre une base différente.</li>
              </ul>
            </div>
          </Card>

          <Card className="border-[#6BCFCF]/20 bg-white/5 text-white backdrop-blur-sm p-8">
            <div className="space-y-4">
              <Chip tone="dark" className="border-[#6BCFCF]/25 bg-[#6BCFCF]/10">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-teal)]" />
                Avec photos + IA Moverz
              </Chip>
              <h3 className="text-2xl font-bold">Le dossier propre</h3>
              <ul className="space-y-3 text-sm text-white/75">
                <li>Volume fiabilisé: l’IA comprend pièces + accès.</li>
                <li>Même dossier envoyé aux pros → devis comparables.</li>
                <li>Moins de stress: moins d’aller-retours, moins de litiges.</li>
              </ul>
            </div>
          </Card>
        </div>

        {/* Benefits grid */}
        <div className="grid gap-5 sm:grid-cols-2">
          {benefits.map((b, idx) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: idx * 0.05 }}
            >
              <Card className="border-white/10 bg-white/5 text-white backdrop-blur-sm p-7">
                <div className="space-y-2">
                  <h4 className="text-lg font-bold">{b.title}</h4>
                  <p className="text-sm text-white/75 leading-relaxed">{b.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            href="https://devis.moverz.fr/?source=moverz.fr&from=/why-moverz"
            variant="primary"
            radius="2xl"
            className="px-8 py-4 text-base md:text-lg"
          >
            <span>Comparer 5+ devis gratuitement</span>
            <span className="text-lg leading-none">→</span>
          </Button>
          <p className="mt-3 text-xs text-white/65">
            Astuce: 2–3 photos par pièce + une photo des accès (escaliers/ascenseur) = devis bien plus fiables.
          </p>
        </div>
      </div>
    </section>
  );
}


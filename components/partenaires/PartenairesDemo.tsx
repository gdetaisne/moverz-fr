"use client";
import { motion } from "framer-motion";

export default function PartenairesDemo() {
  // ID de la vidéo démo Moverz Partenaires
  const VIMEO_VIDEO_ID = "1159132225";

  return (
    <section id="demo" className="relative py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-2 text-sm font-medium text-[#0F172A] mb-6">
            <span className="h-2 w-2 rounded-full bg-[#6BCFCF]" />
            Démo vidéo
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#0F172A]">
            Découvrez le process en 1 minute
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Voyez concrètement comment vous recevrez et traiterez les dossiers Moverz
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E3E5E8]"
        >
          {/* 16:9 Aspect Ratio Container */}
          <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
            <iframe
              src={`https://player.vimeo.com/video/${VIMEO_VIDEO_ID}?h=0&title=0&byline=0&portrait=0`}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Démo Moverz Partenaires"
            />
          </div>
        </motion.div>

        {/* Note sous la vidéo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-[#6B7280]">
            💡 <span className="font-medium text-[#0F172A]">Temps de visionnage :</span> 1 minute pour comprendre tout le process
          </p>
        </motion.div>
      </div>

      {/* Script Vimeo pour fonctionnalités avancées (optionnel) */}
      <script src="https://player.vimeo.com/api/player.js" async />
    </section>
  );
}

"use client";

import { FileText, Users, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "../Container";
import { SectionHeader } from "../SectionHeader";
import { Card } from "../Card";
import { VideoExplainer } from "../VideoExplainer";
import { FadeUpSection, StaggerContainer, StaggerItem, hoverLift } from "@/components/motion";

const steps = [
  {
    number: "1",
    icon: FileText,
    title: "Remplissez le formulaire",
    description: "En 3 minutes, décrivez votre déménagement. Vos coordonnées restent privées.",
  },
  {
    number: "2",
    icon: Users,
    title: "Recevez jusqu'à 5 devis",
    description: "Sous 5 à 7 jours, comparez des devis détaillés et comparables.",
  },
  {
    number: "3",
    icon: CheckCircle,
    title: "Choisissez en toute confiance",
    description: "Tous les déménageurs sont vérifiés : assurance, licence, solvabilité.",
  },
];

export function HowItWorksSection() {
  return (
    <FadeUpSection className="bg-[rgb(var(--surface))] py-16 md:py-24">
      <Container>
        <SectionHeader
          title="3 étapes, 3 minutes."
          description="Un processus simple et transparent, sans harcèlement."
          className="mb-12"
        />

        <StaggerContainer className="grid gap-8 md:grid-cols-3 mb-12">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <motion.div
                initial="rest"
                whileHover="hover"
                variants={hoverLift}
              >
                <Card className="relative h-full p-6">
                  {/* Progress connector (except last) */}
                  {step.number !== "3" && (
                    <div className="absolute right-0 top-1/2 hidden h-px w-8 -translate-y-1/2 translate-x-full bg-[rgb(var(--border-2))] md:block" />
                  )}
                  
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[rgb(var(--accent))]/10 text-[rgb(var(--accent-2))]">
                    <step.icon className="h-6 w-6" />
                  </div>
                  
                  <div className="mb-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[rgb(var(--primary))] text-xs font-bold text-[rgb(var(--primary-contrast))]">
                    {step.number}
                  </div>
                  
                  <h3 className="mb-2 text-lg font-semibold text-[rgb(var(--text))]">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm leading-relaxed text-[rgb(var(--text-2))]">
                    {step.description}
                  </p>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Video explicative */}
        <div className="flex justify-center">
          <VideoExplainer
            title="Voir la démo Moverz"
            description="Voir la démo (45s)"
            posterUrl="/logo.png"
            videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
            mode="modal"
            duration="45s"
          />
        </div>
      </Container>
    </FadeUpSection>
  );
}

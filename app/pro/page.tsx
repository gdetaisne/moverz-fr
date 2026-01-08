import ProHero from "@/components/pro/ProHero";
import ProBeforeAfter from "@/components/pro/ProBeforeAfter";
import ProHowItWorks from "@/components/pro/ProHowItWorks";
import ProFeatures from "@/components/pro/ProFeatures";
import ProPricing from "@/components/pro/ProPricing";
import ProTestimonial from "@/components/pro/ProTestimonial";
import ProFAQ from "@/components/pro/ProFAQ";
import ProContact from "@/components/pro/ProContact";
import ProFinalCTA from "@/components/pro/ProFinalCTA";

export default function ProPage() {
  return (
    <main className="min-h-screen bg-white">
      <ProHero />
      <ProBeforeAfter />
      <ProHowItWorks />
      <ProFeatures />
      <ProPricing />
      <ProTestimonial />
      <ProFAQ />
      <ProContact />
      <ProFinalCTA />
    </main>
  );
}

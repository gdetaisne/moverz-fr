import ProHero from "@/components/pro/ProHero";
import ProBeforeAfter from "@/components/pro/ProBeforeAfter";
import ProHowItWorks from "@/components/pro/ProHowItWorks";
import ProDashboardPreview from "@/components/pro/ProDashboardPreview";
import ProFeatures from "@/components/pro/ProFeatures";
import ProPricing from "@/components/pro/ProPricing";
import ProFAQ from "@/components/pro/ProFAQ";
import ProContact from "@/components/pro/ProContact";
import ProFinalCTA from "@/components/pro/ProFinalCTA";
import ProBlogSection from "@/components/pro/ProBlogSection";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { PRO_FAQS } from "@/components/pro/proFaqData";

export default function ProPage() {
  return (
    <main className="min-h-screen bg-white">
      <FAQSchema faqs={[...PRO_FAQS]} />
      <ProHero />
      <ProBeforeAfter />
      <ProHowItWorks />
      <ProDashboardPreview />
      <ProFeatures />
      <ProPricing />
      <ProBlogSection />
      <ProFAQ />
      <ProContact />
      <ProFinalCTA />
    </main>
  );
}

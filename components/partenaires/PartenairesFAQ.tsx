"use client";
import { FAQ, type FAQItem } from "@/components/FAQ";

type PartenairesFAQProps = {
  faqs: FAQItem[];
};

export default function PartenairesFAQ({ faqs }: PartenairesFAQProps) {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#F9FAFB] to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-2 text-sm font-medium text-[#0F172A] mb-6">
            <span className="h-2 w-2 rounded-full bg-[#6BCFCF]" />
            FAQ
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A]">
            Questions fréquentes
          </h2>
        </div>
        <FAQ items={faqs} />
      </div>
    </section>
  );
}

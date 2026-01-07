import { FAQSchema } from "@/components/schema/FAQSchema";

export type FAQItem = { question: string; answer: string };

type FAQProps = {
  title: string;
  faqs: FAQItem[];
  id?: string;
};

export function FAQ({ title, faqs, id = "faq" }: FAQProps) {
  const limited = faqs.slice(0, 8);

  return (
    <section id={id} className="section section-light">
      <FAQSchema faqs={limited} />
      <div className="container max-w-3xl">
        <div className="text-center mb-10 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-1.5 text-xs font-medium text-[#6BCFCF]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
            Questions fréquentes
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">{title}</h2>
        </div>

        <div className="space-y-4">
          {limited.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-[#E5E7EB] bg-white p-5 md:p-6 open:border-[#6BCFCF]/50 open:shadow-sm"
            >
              <summary className="cursor-pointer list-none">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base font-bold text-[#0F172A]">{faq.question}</h3>
                  <span className="mt-0.5 text-[#2B7A78] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </div>
              </summary>
              <p className="mt-3 text-sm md:text-base text-[#6B7280] leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}



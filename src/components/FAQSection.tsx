"use client";

import { useState } from "react";

export interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
}

export default function FAQSection({
  faqs,
  title = "Preguntas frecuentes",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="min-h-screen flex items-center bg-black border-t border-white/10" aria-labelledby="faq-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            <div>
              <h2
                id="faq-heading"
                className="text-3xl lg:text-4xl font-black tracking-tighter text-white leading-tight"
              >
                {title}
              </h2>
              <p className="mt-4 text-white/40 text-sm leading-relaxed">
                Si tienes otras preguntas, escríbenos directamente.
              </p>
            </div>
            <div className="lg:col-span-2">
              <dl className="space-y-0 divide-y divide-white/10">
                {faqs.map((faq, index) => (
                  <div key={index} className="py-5">
                    <dt>
                      <button
                        className="w-full flex items-start justify-between text-left gap-4"
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        aria-expanded={openIndex === index}
                        aria-controls={`faq-answer-${index}`}
                      >
                        <span className="text-white font-medium text-base leading-snug pr-4">
                          {faq.question}
                        </span>
                        <span
                          className={`flex-shrink-0 w-5 h-5 border border-white/20 flex items-center justify-center transition-transform mt-0.5 ${
                            openIndex === index ? "rotate-45" : ""
                          }`}
                          aria-hidden="true"
                        >
                          <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                            <path d="M4.5 1V8M1 4.5H8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                          </svg>
                        </span>
                      </button>
                    </dt>
                    {openIndex === index && (
                      <dd
                        id={`faq-answer-${index}`}
                        className="mt-4 text-white/50 text-sm leading-relaxed"
                      >
                        {faq.answer}
                      </dd>
                    )}
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

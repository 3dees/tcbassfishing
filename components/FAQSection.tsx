'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
  showTitle?: boolean;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  faqs,
  title = "Frequently Asked Questions",
  showTitle = true
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate JSON-LD FAQPage schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-16 bg-navy-900 text-white">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {showTitle && (
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">{title}</h2>
          </div>
        )}

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-navy-700 rounded-lg overflow-hidden bg-navy-800/50 transition-all duration-300"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-navy-800 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-medium text-lg pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                )}
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 py-5 opacity-100' : 'max-h-0 py-0 opacity-0'
                }`}
              >
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

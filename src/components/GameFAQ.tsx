'use client';

import { useEffect, useState, useMemo } from 'react';
import { ChevronDown } from 'lucide-react';
import { getGameFAQs, type GameFAQ as GameFAQType } from '../config/gameFAQs';
import { generateFAQSchema } from '../config/seo';

interface GameFAQProps {
  gameSlug: string;
  gameTitle: string;
}

export default function GameFAQ({ gameSlug, gameTitle }: GameFAQProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Memoize FAQs to prevent unnecessary recalculations
  const faqs = useMemo(() => getGameFAQs(gameSlug), [gameSlug]);

  // Generate and inject FAQ Schema
  useEffect(() => {
    setIsMounted(true);

    if (typeof document === 'undefined') return;

    try {
      const schema = generateFAQSchema(faqs);

      let scriptElement = document.querySelector('script[type="application/ld+json"][data-faq="true"]');
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'application/ld+json');
        scriptElement.setAttribute('data-faq', 'true');
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(schema);
    } catch (error) {
      console.error('Error injecting FAQ schema:', error);
    }
  }, [faqs]);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-4 border-cyan-400">
      <div className="bg-gradient-to-r from-purple-200 to-pink-200 rounded-xl p-4 mb-6 border-2 border-purple-300">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <span className="text-3xl">❓</span>
          Frequently Asked Questions About {gameTitle}
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border-2 border-gray-200 hover:border-cyan-400 transition-all duration-300 overflow-hidden shadow-md"
          >
            <button
              onClick={() => toggleExpand(index)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-lg font-bold text-gray-800 text-left">
                {faq.question}
              </h3>
              <ChevronDown
                className={`w-5 h-5 text-cyan-500 flex-shrink-0 transition-transform duration-300 ${
                  expandedIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>

            {expandedIndex === index && (
              <div className="px-6 py-4 bg-gray-50 border-t-2 border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Additional helpful info */}
      <div className="mt-8 bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
        <h3 className="text-lg font-bold text-blue-900 mb-2">Still have questions?</h3>
        <p className="text-blue-800">
          If you have any other questions about {gameTitle}, feel free to contact our support team or check out our community forums for more tips and tricks.
        </p>
      </div>
    </section>
  );
}


"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "Are my images uploaded to a server?",
    answer: "Absolutely not. All conversions happen entirely on your local device using your browser's native HTML5 Canvas API. Your files never leave your computer, ensuring 100% strict privacy and security.",
  },
  {
    question: "Is there a file size limit?",
    answer: "Because there are no server costs or bandwidth limitations involved, there are no artificial file size caps. However, exceptionally large images may be constrained by your device's available RAM.",
  },
  {
    question: "Is this tool really free?",
    answer: "Yes! This micro-tool is completely free to use with absolutely no hidden costs, subscriptions, or watermarks.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`border rounded-2xl transition-all duration-300 ease-in-out ${
              isOpen ? "bg-white border-blue-200 shadow-md ring-4 ring-blue-50" : "bg-white border-gray-100 hover:border-gray-200 hover:shadow-sm"
            }`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"
              aria-expanded={isOpen}
            >
              <h3 className={`text-lg sm:text-xl font-bold pr-4 transition-colors ${isOpen ? "text-blue-700" : "text-gray-900"}`}>
                {faq.question}
              </h3>
              <div
                className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
                  isOpen ? "bg-blue-100 text-blue-600" : "bg-gray-50 text-gray-400"
                }`}
              >
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

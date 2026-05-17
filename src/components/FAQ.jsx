import React, { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "What is HireIn?",
      answer:
        "HireIn is a local service marketplace where users can find and hire trusted professionals like electricians, plumbers, cleaners, painters, and more.",
    },
    {
      question: "How do I hire a professional?",
      answer:
        "Simply search for a service, compare professionals based on ratings and pricing, and make a secure booking through the platform.",
    },
    {
      question: "Why are contact details hidden?",
      answer:
        "To maintain privacy, security, and platform trust, contact details are only shared after a secure booking is made.",
    },
    {
      question: "How does payment work?",
      answer:
        "Customers only pay a small booking fee through the platform. The remaining amount is paid directly to the service provider after the job is completed.",
    },
    {
      question: "Are the professionals verified?",
      answer:
        "Yes, professionals go through a verification process before offering services on HireIn.",
    },
    {
      question: "Can I choose professionals based on ratings?",
      answer:
        "Absolutely. Users can compare ratings, reviews, experience, and pricing before hiring.",
    },
    {
      question: "What if I am not satisfied with the service?",
      answer:
        "Customers can report issues and share feedback to help us maintain service quality and trust on the platform.",
    },
    {
      question: "Can professionals join HireIn?",
      answer:
        "Yes! Skilled professionals can register, create their profiles, and connect with potential customers through the platform.",
    },
  ];
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full py-20 bg-white px-6 md:px-16 flex flex-col items-center">
      <p className="text-[#e2b808] uppercase tracking-wider font-bold text-sm mb-2">
        Have Questions?
      </p>
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Frequently Asked <span className="text-[#3a8b95]">Questions</span>
      </h2>
      <div className="w-full max-w-3xl space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-gray-100 rounded-2xl bg-gray-50/50 overflow-hidden transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.01)]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-gray-900 hover:text-[#3a8b95] transition-colors duration-200 cursor-pointer"
              >
                <span className="text-base md:text-lg">{faq.question}</span>
                <span
                  className={`ml-4 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45 text-[#e2b808]" : "text-[#3a8b95]"}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0 pointer-events-none"
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100/50 pt-3 bg-white">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

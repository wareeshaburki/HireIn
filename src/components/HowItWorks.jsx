import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Search Services",
      desc: "Browse trusted local professionals based on category, location, ratings, and pricing.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8 text-[#3a8b95]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.603 10.603z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Choose a Professional",
      desc: "Compare profiles, reviews, and experience to find the right service provider.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8 text-[#3a8b95]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Secure Your Booking",
      desc: "Pay a small booking fee to unlock contact details and connect securely.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8 text-[#3a8b95]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Get the Job Done",
      desc: "The provider completes the job, and the remaining payment is made after success.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8 text-[#3a8b95]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full py-24 bg-gray-50 px-6 md:px-16 flex flex-col items-center">
      <p className="text-[#e2b808] uppercase tracking-wider font-bold text-sm mb-2">
        Process Flow
      </p>
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
        How <span className="text-[#3a8b95]">HireIn</span> Works
      </h2>
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 w-full max-w-6xl">
        <div className="hidden md:block absolute top-16 left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-gray-300 z-0"></div>
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="relative flex flex-col items-center flex-1 z-10 group text-center max-w-xs"
          >
            <div className="relative w-24 h-24 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 border border-gray-100 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
              {step.icon}
              <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#e2b808] text-white text-xs font-bold flex items-center justify-center shadow-sm">
                {step.id}
              </span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 group-hover:shadow-[0_10px_30px_rgba(58,139,149,0.08)] h-full min-h-[160px] flex flex-col justify-start">
              <h3 className="font-bold text-lg text-gray-950 mb-2 group-hover:text-[#3a8b95] transition-colors duration-200">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
            {index !== steps.length - 1 && (
              <div className="block md:hidden my-4 h-12 border-l-2 border-dashed border-gray-300"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

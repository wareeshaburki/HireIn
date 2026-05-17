import React from "react";

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <div
      id="contact"
      className="w-full bg-slate-950 text-gray-400 pt-20 pb-10 font-sans"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-16 pb-16 border-b border-gray-900">
        <div className="flex flex-col justify-start">
          <p className="text-[#e2b808] uppercase tracking-wider font-bold text-sm mb-2">
            Get In Touch
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-gray-400 leading-relaxed max-w-md">
            We'd love to hear from you. Whether you have questions, feedback, or
            need urgent support, our team is here to help you seamlessly.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4 bg-slate-900/50 border border-gray-800 p-4 rounded-xl">
            <span className="w-10 h-10 rounded-lg bg-[#3a8b95]/10 flex items-center justify-center text-[#3a8b95] shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </span>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-0.5">
                Customer Support
              </p>
              <a
                href="mailto:support@hirein.pro"
                className="text-white hover:text-[#3a8b95] transition-colors font-medium text-sm md:text-base"
              >
                hireinsupport@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-slate-900/50 border border-gray-800 p-4 rounded-xl">
            <span className="w-10 h-10 rounded-lg bg-[#3a8b95]/10 flex items-center justify-center text-[#3a8b95] shrink-0 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-1.514 2.022a14.94 14.94 0 01-6.505-6.505l2.022-1.514c.362-.272.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v1.75z"
                />
              </svg>
            </span>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">
                Call Directly
              </p>
              <div className="flex flex-col gap-1">
                <a
                  href="tel:+923025716844"
                  className="text-white hover:text-[#3a8b95] transition-colors font-medium text-sm md:text-base"
                >
                  +92 302 5716844
                </a>
                <a
                  href="tel:+923351444470"
                  className="text-white hover:text-[#3a8b95] transition-colors font-medium text-sm md:text-base"
                >
                  +92 335 1444470
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-16 pt-10 text-xs text-gray-600 space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm border-b border-gray-950 pb-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">
              Hire<span className="text-[#3a8b95]">In</span>
            </span>
            <span className="text-gray-500">| Find. Hire. Get It Done.</span>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6 text-xs text-gray-500">
            <button className="hover:text-gray-400 cursor-pointer transition-colors">
              App Permissions
            </button>
            <button className="hover:text-gray-400 cursor-pointer transition-colors">
              Privacy Policy
            </button>
            <button className="hover:text-gray-400 cursor-pointer transition-colors">
              Support Terminology
            </button>
          </div>
        </div>
        <p className="leading-relaxed text-justify text-gray-500/80">
          © {currentYear} HireIn Technology Global FZ-LLC. HireIn is an
          informational digital service and acts exclusively as an on-demand
          marketplace connection tool. HireIn is not a direct transportation,
          taxi, home service, or technical engineering provider. All field
          operations, repairs, logistics, and manual labor services are managed
          and provided directly by autonomous third-party professional partners.
        </p>
      </div>
    </div>
  );
}

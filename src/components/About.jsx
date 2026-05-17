import React from "react";
import Navbar from "./Navbar";

export default function About() {
  return (
    <div className="min-h-screen w-full font-sans flex justify-between items-center">
      <div className="flex justify-between mt-10 items-center px-10 py-10">
        <section className="gap-3 flex flex-col justify-center items-left max-w-[50%]">
          <h1 className="text-4xl font-bold text-[#3a8b95] mb-3">About Us</h1>
          <p className="text-gray-700">
            HireIn is a modern on-demand service marketplace that connects
            customers with trusted local professionals, like plumbers,
            electricians, and cleaners, quickly and securely. It solves a common
            real-world challenge, while customers often struggle to find
            reliable, verified workers and compare transparent prices, skilled
            professionals find it difficult to market themselves and reach
            genuine clients. By bridging this gap, HireIn eliminates the hassle
            of endless searching, providing a simple, secure platform where
            customers can hire with confidence and local service providers can
            easily grow their businesses.
          </p>
          <h2 className="font-bold text-2xl mb-1 text-gray-900">
            What we offer
          </h2>
          <p className="text-gray-500 text-sm">Our platform allows users to</p>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <span className="w-2 h-2 rounded-full bg-[#e2b808] mt-[10px] shrink-0"></span>
              <div>
                <h3 className="font-bold text-xl text-gray-950 leading-tight">
                  Search nearby professionals
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Find the best local experts in your area instantly
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-2 h-2 rounded-full bg-[#e2b808] mt-[10px] shrink-0"></span>
              <div>
                <h3 className="font-bold text-xl text-gray-950 leading-tight">
                  Compare ratings and prices
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Make informed decisions based on real user reviews
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-2 h-2 rounded-full bg-[#e2b808] mt-[10px] shrink-0"></span>
              <div>
                <h3 className="font-bold text-xl text-gray-950 leading-tight">
                  Book services securely
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Your transactions and schedules are completely safe with us
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-2 h-2 rounded-full bg-[#e2b808] mt-[10px] shrink-0"></span>
              <div>
                <h3 className="font-bold text-xl text-gray-950 leading-tight">
                  Connect with verified workers
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  We screen backgrounds so you can hire with confidence
                </p>
              </div>
            </li>
          </ul>
          <h2 className="font-bold text-2xl mt-3 text-gray-900">Our Goal</h2>
          <p className="text-gray-600 leading-relaxed max-w-xl">
            We aim to build a trusted platform where customers can hire with
            confidence and skilled workers can grow their opportunities online.
          </p>
        </section>
        <section className="flex justify-center items-center mt-3">
          <img
            src="/aboutImg.png"
            alt="About image"
            className="w-130 h-auto rounded-xl shadow-[0_0_50px_0px_rgba(58,139,149,0.5)]"
          />
        </section>
      </div>
    </div>
  );
}

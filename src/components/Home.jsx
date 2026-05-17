import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Founder from "./Founder";
import HowItWorks from "./HowItWorks";
import FAQ from "./FAQ";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="min-h-screen w-full font-sans">
      <Navbar />
      <section
        id="home"
        className="relative mt-20 w-full h-[calc(100vh-80px)] bg-cover bg-top flex items-center px-10 md:px-20 bg-[url('/hero.png')]"
      >
        <div className="flex flex-col items-left justify-center">
          <p className="text-[#e2b808] mb-4 text-[12px] uppercase font-bold">
            Trusted. Verified. Reliable.
          </p>
          <h1 className="mb-4 text-5xl font-bold text-black">
            Find Trusted Local <br />
            <span className="text-[#3a8b95]">
              Professionals <br /> Near{" "}
            </span>
            <span className="text-[#e2b808]">You.</span>
          </h1>
          <p className="text-gray-700 text-md font-[30px]">
            Plumbers, ELectricians, Cleaners & more - <br />
            find skilled professionals for every need.{" "}
          </p>
          <div className="flex mt-4 mb-8 gap-4 items-center">
            <button className="bg-[#e2b808] flex gap-2 items-center px-6 text-sm h-12 rounded-2xl text-white ">
              Find Services{" "}
              <img
                className="rounded-full w-8 h-8"
                src="/arrow.png"
                alt="arrow"
              />
            </button>
            <button className="text-sm px-8 border-1 border-[#3a8b95] h-12 text-[#3a8b95] font-semibold rounded-xl hover:bg-[#f0f7f7] transition">
              Become a Pro
            </button>
          </div>
          <div className="flex gap-24 justify-left text-sm items-center">
            <div className="flex flex-col items-center justify-center">
              <img
                src="/verified.jpg"
                alt="Verified"
                className="w-13 h-8 rounded-full"
              />
              <p>Verified</p>
              <p>Professionals</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="/star.png"
                alt="Service"
                className="w-9 h-8 rounded-full"
              />
              <p>Quality</p>
              <p>Service</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="/headset.png"
                alt="Support"
                className="w-10 h-8 rounded-full"
              />
              <p>24/7</p>
              <p>Support</p>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <About />
      </section>
      <section id="founders">
        <Founder />
      </section>
      <section id="howItWorks">
        <HowItWorks/>
      </section>
      <section id="faqs">
        <FAQ/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
    </div>
  );
}

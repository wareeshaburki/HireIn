import React from "react";
import Navbar from "./Navbar";

export default function Founder() {
  return (
    <div className="min-h-screen w-full font-sans">
      <h1 className="text-center font-bold mt-25 text-5xl text-[#3a8b95]">
        Meet The Founders
      </h1>
      <div className="px-30 py-20 mx-10 flex justify-between items-center">
        <section className="flex flex-col justify-center items-center">
          <img
            src="/Wareesha.jpeg"
            alt="Wareesha's image"
            className="w-60 h-auto mb-4 rounded-xl shadow-[0_0_50px_0px_rgba(58,139,149,0.4)]"
          />
          <h1 className="font-bold mb-1">Wareesha Burki</h1>
          <h3 className="text-sm text-gray-600 mb-3">
            Aspiring Full Stack Java Web Developer
          </h3>
          <p className="text-gray-800 text-center">
            Wareesha Burki is a passionate and creative developer with a strong
            interest in building modern, user-friendly, and impactful web
            applications. She focuses on creating digital solutions that combine
            functionality with clean and intuitive design.
          </p>
        </section>
        <section className="flex flex-col justify-center items-center">
          <img
            src="/soban.jpeg"
            alt="Soban's image"
            className="w-60 h-auto mb-4 rounded-xl shadow-[0_0_50px_0px_rgba(58,139,149,0.4)]"
          />
          <h1 className="font-bold mb-1">Soban Munir</h1>
          <h3 className="text-sm text-gray-600 mb-3">Data Engineer</h3>
          <p className="text-gray-800 text-center">
            Soban Munir is a dedicated Data Engineer with an interest in
            scalable systems, data-driven solutions, and modern technologies. He
            is passionate about building efficient platforms that solve
            real-world problems through smart and practical approaches.
          </p>
        </section>
      </div>
    </div>
  );
}

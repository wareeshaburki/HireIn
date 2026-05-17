import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Founders", id: "founders" },
    { name: "How it Works", id: "howItWorks" }, 
    { name: 'FAQs' , id : "faqs"},
    { name: "Contact" , id : 'contact'}
  ];
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-30% 0px -30% 0px", 
      threshold: 0.1,
    };
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);
    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="flex fixed top-0 left-0 w-full h-20 justify-between items-center bg-white px-10 z-50 shadow-sm border-b border-white/20">
      <button
        onClick={() => handleScroll("home")}
        className="flex items-center cursor-pointer"
      >
        <img src="/hire in.png" alt="HireIn logo" className="w-20 h-auto" />
        <h1 className="text-[#3a8b95] text-3xl font-bold">HireIn</h1>
      </button>
      <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
        {navLinks.map((link) => (
          <li key={link.id}>
            <button
              onClick={() => handleScroll(link.id)}
              className={`pb-1 border-b-2 transition duration-200 cursor-pointer ${
                activeSection === link.id
                  ? "text-[#3a8b95] border-[#e2b808]"
                  : "hover:text-[#3a8b95] border-b-2 border-transparent"
              }`}
            >
              {link.name}
            </button>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <Link
          to="/login"
          className="py-2 px-6 border-2 border-[#3a8b95] text-[#3a8b95] font-semibold rounded-xl hover:bg-[#f0f7f7] transition"
        >
          Log In
        </Link>
        <Link
          to="/signup"
          className="py-2 px-6 bg-[#e2b808] text-white font-semibold rounded-xl hover:bg-[#c9a307] shadow-md transition"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

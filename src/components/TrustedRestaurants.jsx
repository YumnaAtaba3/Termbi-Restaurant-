import React from "react";
import logoText from "../assets/about/logoblack.svg"
import taverna from "../assets/about/Taverna.svg"
import meltyway from "../assets/about/melty-way.svg"
import goodtaste from "../assets/about/good-test.svg"
import sparro from "../assets/about/sparro.svg"
import aldenaite from "../assets/about/aldenaite.svg"

export default function TrustedRestaurants() {
  const logos = [
    { src:  taverna, alt: "Taverna" },
    { src: meltyway, alt: "Melty Way" },
    { src: goodtaste, alt: "Good Taste" },
    { src: sparro, alt: "Sparro" },
    { src: aldenaite, alt: "Atlantic Kitchen" },
  ];

  return (
    <section className="py-20 ">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-xl md:text-3xl mb-6 flex flex-wrap items-center justify-center">
  <span className="text-[#272727]">Restaurants already trust in</span>
  <img
    src={logoText}
    alt="logo"
    className="ml-2 mt-1 md:mt-0 h-6 md:h-7 object-contain"
  />
</h2>

       <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
  {logos.map((logo, index) => (
    <img
      key={index}
      src={logo.src}
      alt={logo.alt}
      className="w-40 opacity-80 hover:opacity-100 hover:scale-105 transition-transform transition-opacity duration-200"
    />
  ))}
</div>

      </div>
    </section>
  );
}

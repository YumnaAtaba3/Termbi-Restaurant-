import React from "react";
import heroImage from "../../../assets/hero/heroImage.svg";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[100vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Container for content */}
      <div className="container mx-auto relative z-10 text-white px-6">
        {/* Use flex to align content to left */}
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Get your own <br /> restaurant website
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Termbi’s booking solution for restaurants makes a lot of your daily
            business tasks much easier, so that you can fully focus on your
            guests.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-all">
            Try Now
          </button>
        </div>
      </div>
    </section>
  );
}

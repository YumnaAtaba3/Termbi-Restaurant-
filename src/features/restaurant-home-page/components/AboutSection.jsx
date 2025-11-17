import React from "react";

export default function AboutSection() {
  return (
    <section className="text-center max-w-2xl mx-auto mb-20">
      <h3 className="text-4xl font-bold mb-4"> <span className="text-red-600 font-semibold">About</span> us</h3>

      <p className=" mx-3 text-gray-600 text-lg  leading-relaxed font-semibold">
        Welcome to <span className="text-red-600 font-semibold">Termbi</span>, where culinary
        excellence meets warm hospitality. Our journey began with a passion for
        creating unforgettable dining experiences. 
        At{" "}<span className="text-red-600 font-semibold">Termbi</span>, we believe in using the
        freshest ingredients to craft dishes that delight the senses.
      </p>
    </section>
  );
}

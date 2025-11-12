import React from "react";
import background from "../../../assets/about/about.svg"; 
import logoText from "../../../assets/about/logoblack.svg"

export default function WhyTermbi() {
  return (
    <div className="flex justify-center py-10">
      {/* Fixed-size section */}
      <section
        className="relative flex items-center justify-center overflow-hidden "
        style={{
          width: "1296px",
          height: "550px",
        }}
      >
        {/* Background image */}
        <img
          src={background}
          alt="background decoration"
          className="absolute inset-0 w-full h-full object-cover opacity-80 shadow-lg"
        />

        {/* Centered content */}
      <div className="relative max-w-5xl text-center px-10">
    <h2 className="text-3xl md:text-4xl font-semibold mb-6 flex items-center justify-center">
  <span className="text-red-600 font-semibold">Why</span>
  <img
    src={logoText}
    alt="logo"
    className="ml-2 h-6 md:h-8 object-contain"
  />
</h2>



          <div className="bg-white/85 backdrop-blur-sm  p-8 ">
            <p className="text-gray-700 leading-relaxed text-md md:text-lg  ">
            Termbi's booking tool allows guests to check table availability in real time and then book a table with just a few clicks. Even outside of your business hours. Your effort: Low. Your benefit: Up to 30% more bookings.
 
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed text-lg">
              With Termbi, you are instantly listed on over 100 national and
              international platforms.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

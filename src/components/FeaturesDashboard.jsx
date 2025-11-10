import React from "react";
import dashboardImg from "../assets/dashboard.png";
import logoText from "../assets/about/logoblack.svg"

export default function FeaturesDashboard() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto text-center px-6">
       <h2 className="text-3xl  mb-6 flex flex-wrap items-center justify-center mb-16">
        <img
          src={logoText}
          alt="logo"
          className="mr-4 mt-1 md:mt-0 h-7 object-contain"
        />
         <span className="text-[#272727] font-bold">Features</span>
      </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
          <div>
            <h3 className="text-2xl font-bold mb-4">Dashboard</h3>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={dashboardImg}
              alt="Dashboard preview"
              className="rounded-2xl   w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

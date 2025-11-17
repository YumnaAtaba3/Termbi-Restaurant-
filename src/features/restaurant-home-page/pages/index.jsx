import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import MenuSection from "../components/MenuSection";

export default function RestaurantHome() {
  return (
    <div className="container  w-full min-h-screen bg-white text-gray-800 font-sans  py-10 mt-10 md:mt-5 ">
      <HeroSection />
      <AboutSection />
      <MenuSection />
    </div>
  );
}

import React from "react";
import { Button } from "@mui/material";
import HeroImage from "../../../assets/Component 2.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../../routes";

export default function HeroSection() {

 const navigate = useNavigate();


  return (
    <section className="w-full flex flex-col bg-[#FFFCFC] lg:flex-row items-center justify-between mb-20 gap-10 md:gap-0 pl-10">

      {/* Left Side */}
      <div className="flex-1 text-center lg:text-left space-y-5">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-snug text-black">
          Best <span className="text-red-600">Food</span>, Best{" "}
          <span className="text-red-600">Services</span>!
        </h2>

        <p className="text-gray-900 text-2xl max-w-md font-medium mb-3">
          Sandwiches, Fries & Burger with best taste awaits you.
        </p>

        {/* Location */}
        <div className="flex items-center gap-3 mt-4 justify-center lg:justify-start">
          <LocationOnIcon className="text-red-600 w-8 h-6" />
          <p className="text-gray-900 text-md md:text-xl">
            2256 NW 2nd Ave, Miami, FL, 97214
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-center lg:justify-start mt-2 mb-4">
          <p className="text-gray-900 text-lg font-semibold mr-2">Rating:</p>
          <div className="flex gap-0">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="text-yellow-400 w-6 h-6" />
            ))}
          </div>
          <p className="text-gray-900 text-lg font-semibold ml-2">0.5</p>
        </div>

        {/* Button */}
        <div className="flex justify-center lg:justify-start">
          <Button
            variant="contained"
            color="error"
            className="mt-6 px-6 py-3 rounded-xl shadow-md w-[220px]"
            sx={{ textTransform: "none" }}
          onClick={() => navigate(appRoutes.reserveDetails)}

          >
            Reserve a table
          </Button>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center lg:justify-end">
        <img
          src={HeroImage}
          alt="Restaurant Food"
          className="w-full max-w-[590px] h-auto lg:w-[590px] lg:h-[590px] object-contain"
        />
      </div>

   
    </section>
  );
}

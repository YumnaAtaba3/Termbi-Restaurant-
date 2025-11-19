import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function PricingPackages() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      features: ["Services", "Services", "Services", "Services", "Services"],
    },
    {
      name: "Premium",
      price: "$45",
      period: "/month",
      features: [
        "Reservation",
        "Ordering",
        "Marketing",
        "Services",
        "Services",
        "Services",
        "Services",
      ],
    },
    {
      name: "Enterprise",
      price: "$75",
      period: "/month",
      features: [
        "Services",
        "Services",
        "Services",
        "Services",
        "Services",
        "Services",
        "Services",
      ],
    },
  ];

  return (
    <section className="py-24 bg-white text-center">
      <h2 className="text-2xl md:text-4xl font-semibold mb-12">
        <span className="text-red-600 font-bold">Pricing</span> Packages
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="relative group rounded-3xl shadow-md overflow-hidden transition-all duration-500 bg-white flex flex-col"
            style={{ minHeight: "28rem", minWidth: "10rem" }}
          >
            {/* Background Circle \*/}
            <div
              className="absolute -top-20 -left-5 w-80 h-60 bg-[#FFEDED] rounded-full opacity-100 scale-125 transition-all duration-500 ease-out group-hover:bg-[#F44D4D]"
            />

            {/* Content */}
            <div className="relative z-10 p-10 flex-1 flex flex-col text-gray-800 transition-colors duration-500">
              {/* Plan Name */}
              <h3 className="text-2xl font-semibold mb-6 text-left ml-2 transition-colors duration-500 group-hover:text-white">
                {plan.name}
              </h3>

              {/* Price + Period */}
              <p className="text-2xl font-bold mb-6 text-left ml-2 transition-colors duration-500 group-hover:text-white">
                {plan.price}
                <span className="text-lg font-medium opacity-80 ml-2 transition-colors duration-500 group-hover:text-white">
                  {plan.period}
                </span>
              </p>

              {/* Features */}
              <ul className="space-y-4 my-16 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <CheckCircleOutlineIcon className="text-red-600 w-4 h-4" />
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <div className="mt-auto">
                <button
                  className="w-full py-3 rounded-xl font-semibold transition-all bg-[#FFEDED]
                  text-red-600 group-hover:bg-red-600 group-hover:text-white"
                >
                  Select Plan
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

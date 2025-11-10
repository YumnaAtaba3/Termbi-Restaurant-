import React from "react";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function PricingPackages() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      features: ["Services", "Services", "Services", "Services", "Services"],
      highlight: false,
    },
    {
      name: "Premium",
      price: "$45",
      period: "/month",
      features: ["Reservation", "Ordering", "Marketing", "Services", "Services", "Services", "Services"],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "$75",
      period: "/month",
      features: ["Services", "Services", "Services", "Services", "Services", "Services", "Services"],
      highlight: false,
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
            className="rounded-3xl shadow-md overflow-hidden transition-all duration-300 bg-white flex flex-col"
            style={{ minHeight: "28rem", minWidth: "10rem" }}
          >
            {/* Content area grows to fill space */}
            <div className={`p-10 flex-1 flex flex-col ${plan.highlight ? "text-red-600" : "text-gray-800"}`}>
              
              {/* Name aligned left with margin */}
              <h3 className="text-2xl font-semibold mb-6 text-left ml-2">{plan.name}</h3>

              {/* Price aligned left with margin */}
              <p className="text-2xl font-bold mb-6 text-left ml-2">
                {plan.price}
                <span className="text-lg font-medium opacity-80 ml-2">{plan.period}</span>
              </p>

              {/* Features with more spacing */}
              <ul className="space-y-4 mb-8 text-gray-600 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2">
                   
                      <CheckCircleOutlineIcon className="text-red-600 w-3 h-3" />
                  
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Button stays at the bottom */}
              <div className="mt-auto">
                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all`}
                  style={{
                    backgroundColor: "#FFEDED",
                    color: "#F44D4D",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#F44D4D", e.currentTarget.style.color = "#FFF")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#FFEDED", e.currentTarget.style.color = "#F44D4D")}
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

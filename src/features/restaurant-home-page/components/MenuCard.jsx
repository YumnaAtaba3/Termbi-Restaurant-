import React from "react";
import { Card } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function MenuCard({ title, description, price, image, view, onClick }) {
  
  // --- LIST VIEW ---
  if (view === "list") {
    return (
      <div
        onClick={onClick}
        className="flex items-center justify-between py-4 border-b border-gray-300 cursor-pointer hover:bg-gray-50 transition md:px-16"
      >
        <div className="flex-1 text-left">
          <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
          <p className="text-gray-600 text-sm max-w-md">{description}</p>
        </div>

        <div className="flex items-center gap-4 ml-4">
          <span className="text-xl font-bold text-red-600">{price} $</span>
          <button className="text-red-600 p-2 rounded-md hover:bg-red-600 hover:text-white transition">
            <AddShoppingCartIcon />
          </button>
        </div>

       
      </div>
    );
  }

  // --- CARD VIEW ---
  return (
    <Card
      onClick={onClick}
      className="rounded-2xl overflow-hidden shadow-md border cursor-pointer hover:shadow-xl transition"
    >
      <div className="flex flex-col sm:flex-row bg-[#FFFAFA]">

        <div className="flex-1 p-5 flex flex-col justify-between">
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>

          <div className="flex items-center justify-between mt-6">
            <span className="text-2xl font-bold text-red-600">{price} $</span>
            <button className="text-red-600 p-2 rounded-lg hover:bg-red-600 hover:text-white transition">
              <AddShoppingCartIcon />
            </button>
          </div>
        </div>

       <div className="sm:w-1/2 w-full h-40 sm:h-48 my-5 mr-3">
  <img
    src={image}
    alt={title}
    className="w-full h-full object-cover object-center"
  />
</div>

      </div>
    </Card>
  );
}

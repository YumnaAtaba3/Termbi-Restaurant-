import React, { useState } from "react";
import { Listbox } from "@headlessui/react"; 

export default function DishModal({ dish, onClose }) {
  const productOptions = [
    { name: "Extra sauce", price: 5 },
    { name: "With Mushrooms", price: 5 },
    { name: "With Ketchup", price: 5 },
    { name: "Extra Cream", price: 5 },
  ];

  const [qty, setQty] = useState(1);
  const [selected, setSelected] = useState(productOptions[0]); 

return (
  <div
    className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-3"
    onClick={onClose}
  >
    {/* MODAL BOX */}
    <div
      className="
        bg-[#FFFCFC] rounded-2xl 
        w-full max-w-2xl md:max-w-4xl 
        max-h-[90vh] overflow-y-auto 
        p-4 md:p-6 relative
      "
      onClick={(e) => e.stopPropagation()}
    >

      {/* Close Button */}
      <button
        className="absolute top-3 right-3 text-gray-500 text-2xl hover:text-black"
        onClick={onClose}
      >
        ×
      </button>

      {/* RESPONSIVE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

        {/* IMAGE (mobile smaller) */}
        <img
          src={dish.image}
          alt={dish.title}
          className="
            w-full 
            h-48 sm:h-60 md:h-80 
            object-cover rounded-xl
          "
        />

        {/* RIGHT CONTENT */}
        <div className="text-left">
          <h2 className="text-xl md:text-2xl font-bold">{dish.title}</h2>

          <h3 className="text-red-600 text-xl md:text-2xl font-bold mt-2">
            {dish.price} $
          </h3>

          <p className="text-gray-700 mt-3 text-sm md:text-base">
            {dish.description}
          </p>

          {/* PRODUCT OPTION */}
          <div className="mt-5 w-full md:w-2/3">
            <label className="font-semibold text-sm md:text-base mb-1 block">
              Product Option
            </label>

            <Listbox value={selected} onChange={setSelected}>
              <div className="relative">
                <Listbox.Button className="w-full p-2 border rounded-lg text-left text-sm md:text-base">
                  {selected.name}{" "}
                  {selected.price > 0 && (
                    <span className="text-red-600">+{selected.price}$</span>
                  )}
                </Listbox.Button>

                <Listbox.Options
                  className="
                  absolute mt-1 w-full border rounded-lg bg-white shadow-lg 
                  z-50 max-h-40 overflow-auto
                "
                >
                  {productOptions.map((opt, idx) => (
                    <Listbox.Option
                      key={idx}
                      value={opt}
                      className="p-2 hover:bg-gray-100 flex justify-between cursor-pointer"
                    >
                      <span>{opt.name}</span>
                      {opt.price > 0 && (
                        <span className="text-red-600">+{opt.price}$</span>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
          </div>

          {/* SPECIAL REQUEST */}
          <div className="mt-4">
            <label className="font-semibold text-sm md:text-base">
              Special Request
            </label>
            <input
              className="w-full mt-2 p-2 border rounded-lg"
              placeholder="Tell us if you have allergies, dislikes, etc."
            />
          </div>

          {/* ADD TO CART + QTY */}
          <div className="flex items-center gap-4 mt-6 flex-wrap">

            <button className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition text-sm md:text-base">
              Add to Cart{" "}
              <span className="ml-4 font-semibold">
                {dish.price * qty} $
              </span>
            </button>

            <div className="flex items-center border rounded-lg">
              <button
                className="px-3 py-2 text-lg"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                -
              </button>
              <div className="px-4 font-bold text-red-600">{qty}</div>
              <button
                className="px-3 py-2 text-lg"
                onClick={() => setQty((q) => q + 1)}
              >
                +
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
);
}
import React from "react";

export default function ReserveButton({ onClick }) {
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        className="bg-gray-300 text-black px-24 py-3 rounded-xl shadow hover:bg-gray-400 transition"
      >
        Reserve Now
      </button>
    </div>
  );
}

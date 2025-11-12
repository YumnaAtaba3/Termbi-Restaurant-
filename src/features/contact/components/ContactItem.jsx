import React from "react";

export default function ContactItem({ icon, title, value }) {
  return (
    <div className="flex flex-row items-center justify-center gap-3">
      <img src={icon} alt={title} className="w-8 h-8" />
      <div>
        <p className="font-semibold text-black">{title}</p>
        <span className="text-gray-600 text-sm">{value}</span>
      </div>
    </div>
  );
}

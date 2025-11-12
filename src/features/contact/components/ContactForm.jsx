import React from "react";
import dropdownIcon from "../../../assets/contact-us/dropdown-red.svg";

export default function ContactForm() {
  return (
    <form className="space-y-3 contact-form">
      <input
        type="text"
        required
        placeholder="Name *"
        className="w-full border border-gray-300 rounded-lg p-4 text-sm placeholder-gray-500 focus:ring-2 focus:ring-red-500 outline-none"
      />
      <input
        type="email"
        required
        placeholder="Email *"
        className="w-full border border-gray-300 rounded-lg p-4 text-sm placeholder-gray-500 focus:ring-2 focus:ring-red-500 outline-none"
      />
      <input
        type="tel"
        required
        placeholder="Phone number *"
        className="w-full border border-gray-300 rounded-lg p-4 text-sm placeholder-gray-500 focus:ring-2 focus:ring-red-500 outline-none"
      />

      {/* Select */}
      <div className="relative">
        <select
          className="appearance-none w-full border border-gray-300 rounded-lg p-4 text-sm text-gray-500 focus:ring-2 focus:ring-red-500 outline-none hover:border-red-200"
          defaultValue=""
        >
          <option value="" disabled>
            How did you find us?
          </option>
          <option>Google</option>
          <option>Social Media</option>
          <option>Friend</option>
          <option>Other</option>
        </select>
        <img
          src={dropdownIcon}
          alt="Dropdown Icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 pointer-events-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2.5 rounded-md w-full text-sm transition"
      >
        SEND
      </button>
    </form>
  );
}

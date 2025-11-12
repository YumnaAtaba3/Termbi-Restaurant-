import React from "react";
import contactUs from "../../assets/contact-us/contact-us.svg";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";

export default function Contact() {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="container">
          <h2 className="text-2xl font-bold text-black mb-2">
            Contact <span className="text-red-600">Us</span>
          </h2>
          <p className="text-gray-500 mb-6 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <ContactForm />
          <ContactInfo />
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <img
            src={contactUs}
            alt="Contact Us"
            className="rounded-lg mt-6 shadow-lg max-w-full "
          />
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import logo from "../../assets/header/logo.svg";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [country, setCountry] = useState({ name: "USA", flag: "https://flagcdn.com/us.svg" });

  const countries = [
    { name: "USA", flag: "https://flagcdn.com/us.svg" },
    { name: "Syria", flag: "https://flagcdn.com/sy.svg" },
  ];

  return (
    <header className=" fixed top-0 left-0 w-full z-50 bg-[#272727]  shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <img src={logo} alt="logo" className="w-24 h-10" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center ml-auto text-[15px] font-medium text-white">
          {/* Nav Links */}
          <div className="flex space-x-6">
            <a href="#" className="hover:text-red-500 transition">Home</a>
            <a href="#" className="hover:text-red-500 transition">Services</a>
            <a href="#" className="hover:text-red-500 transition">About us</a>
            <a href="#" className="hover:text-red-500 transition">Contact us</a>
          </div>

          {/* Language Dropdown */}
          <div className="relative ml-8">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center space-x-1 hover:text-red-500 focus:outline-none"
            >
              <img
                src={country.flag}
                alt={country.name}
                className="w-6 h-4 object-cover rounded-sm border border-gray-300"
              />
              <span className="ml-1 border-t-[5px] border-t-gray-600 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent"></span>
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-[#272727] border border-gray-900 shadow-md rounded-md z-50">
                {countries.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => {
                      setCountry(c);
                      setLangOpen(false);
                    }}
                    className="flex items-center w-full px-3 py-2 text-sm hover:bg-gray-600"
                  >
                    <img src={c.flag} alt={c.name} className="w-5 h-3 mr-2" />
                    {c.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Login Button */}
          <button className="ml-6 bg-[#272727] border border-white text-white text-sm px-6 py-2.5 rounded hover:bg-gray-700 transition">
            Log in
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#272727] border-t border-gray-700 px-6 pb-4">
          <nav className="flex flex-col space-y-3 mt-3 text-white text-[15px]">
            <a href="#" className="hover:text-red-500 transition">Home</a>
            <a href="#" className="hover:text-red-500 transition">Services</a>
            <a href="#" className="hover:text-red-500 transition">About us</a>
            <a href="#" className="hover:text-red-500 transition">Contact us</a>
          </nav>

          {/* Language + Login */}
          <div className="flex flex-col mt-4 space-y-4">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center space-x-1 hover:text-red-500 focus:outline-none"
              >
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-6 h-4 object-cover rounded-sm border border-gray-300"
                />
                <span className="ml-1 border-t-[5px] border-t-gray-600 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent"></span>
              </button>

              {langOpen && (
                <div className="absolute left-0 mt-2 w-36 bg-white border border-gray-200 shadow-md rounded-md z-50">
                  {countries.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => {
                        setCountry(c);
                        setLangOpen(false);
                      }}
                      className="flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100"
                    >
                      <img src={c.flag} alt={c.name} className="w-5 h-3 mr-2" />
                      {c.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Login Button */}
            <button className="w-full bg-[#272727] border border-white text-white text-sm py-2.5 rounded hover:bg-gray-700 transition">
              Log in
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

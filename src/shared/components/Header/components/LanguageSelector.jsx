import { useState, useRef, useEffect } from "react";

export default function LanguageSelector() {
  const [langOpen, setLangOpen] = useState(false);
  const [country, setCountry] = useState({ name: "USA", flag: "https://flagcdn.com/us.svg" });
  const countries = [
    { name: "USA", flag: "https://flagcdn.com/us.svg" },
    { name: "Syria", flag: "https://flagcdn.com/sy.svg" },
  ];

  const langRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={langRef}>
      <button onClick={() => setLangOpen(!langOpen)} className="flex items-center space-x-1 hover:text-red-500">
        <img src={country.flag} className="w-6 h-4 rounded-sm" />
        <span className="border-t-[5px] border-t-gray-400 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent"></span>
      </button>
      {langOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-[#272727] border border-gray-600 rounded-md">
          {countries.map((c) => (
            <button
              key={c.name}
              onClick={() => { setCountry(c); setLangOpen(false); }}
              className="flex items-center px-3 py-2 w-full hover:bg-gray-700 text-sm"
            >
              <img src={c.flag} className="w-5 h-3 mr-2" />
              {c.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

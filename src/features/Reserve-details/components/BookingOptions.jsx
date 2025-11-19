import React from "react";

export default function BookingOptions({ options, onSelect }) {
  const [active, setActive] = React.useState(0);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
      {options.map((opt, index) => (
        <div
          key={index}
          className={"p-4 text-center cursor-pointer"  } 
          onClick={() => {
            setActive(index);
            onSelect(opt);
          }}
        >
          <img src={opt.icon} className={`mx-auto cursor-pointer  border rounded-lg 
          ${active === index ? "border-red-600 " : "border-gray-300"}`} alt={opt.label} />

        </div>
      ))}
    </div>
  );
}

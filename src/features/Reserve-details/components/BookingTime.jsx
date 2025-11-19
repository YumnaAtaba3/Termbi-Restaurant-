import React, { useState } from "react";

export default function BookingTime({ time, setTime, selectedOption }) {
  const [openTime, setOpenTime] = useState(false);

  const timeSlots = [
    "08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30",
    "12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30",
    "16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30",
    "20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30"
  ];

  const handleTimeChange = (field, value) => {
    setTime({ ...time, [field]: value });
  };


  if (selectedOption === "restaurant" || selectedOption === "event") {
    return (
<div className="flex items-center gap-4 ">
  <label className="w-30 font-semibold">Booking Time</label>
  <p className="self-center text-sm">From</p>
 <select
  value={time?.from || ""}
  onChange={(e) => handleTimeChange("from", e.target.value)}
  className="border rounded-xl p-3 shadow bg-white appearance-none"
>
  {timeSlots.map((t) => (
    <option key={t} value={t}>{t}</option>
  ))}
</select>
 <p className="self-center text-sm">To</p>
<select
  value={time?.to || ""}
  onChange={(e) => handleTimeChange("to", e.target.value)}
  className="border rounded-xl p-3 shadow bg-white appearance-none"
>
  {timeSlots.map((t) => (
    <option
      key={t}
      value={t}
      disabled={time?.from && t <= time.from}
    >
      {t}
    </option>
  ))}
</select>

</div>

    );
  }


  return (
    <div className="flex items-center gap-6 relative w-full md:w-2/3">
      <label className="w-60 font-semibold mt-1">Booking Time</label>
      <div className="w-full">
        <div
          onClick={() => setOpenTime(!openTime)}
          className="border rounded-xl p-3 shadow cursor-pointer text-gray-500 bg-white"
        >
          {time || "Select Time"}
        </div>
        {openTime && (
          <div
            className="absolute left-36 mt-2 w-[550px] p-4 bg-white shadow-xl border rounded-xl 
                       grid grid-cols-6 gap-3 z-50"
          >
            {timeSlots.map((t) => {
              const isSelected = time === t;
              return (
                <button
                  key={t}
                  onClick={() => {
                    setTime(t);
                    setOpenTime(false);
                  }}
                  className={`py-2 text-sm rounded-lg border transition 
                              ${isSelected 
                                ? "bg-red-500 bg-opacity-80 text-white border-red-500" 
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
                  {t}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

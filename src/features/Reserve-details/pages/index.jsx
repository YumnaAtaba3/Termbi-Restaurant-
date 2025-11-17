import React, { useState } from "react";

export default function ReserveDetails() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-red-600">Reserve Details</h2>

      {/* Booking Options */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
        <div className="p-4 border rounded-2xl shadow hover:shadow-lg transition cursor-pointer text-center">
          <img src="/images/reserve-table.png" alt="Reserve a table" className="mx-auto mb-2" />
          <p className="font-semibold">Reserve a table</p>
        </div>
        <div className="p-4 border rounded-2xl shadow hover:shadow-lg transition cursor-pointer text-center">
          <img src="/images/multiple-tables.png" alt="Reserve multiple tables" className="mx-auto mb-2" />
          <p className="font-semibold">Reserve multiple tables</p>
        </div>
        <div className="p-4 border rounded-2xl shadow hover:shadow-lg transition cursor-pointer text-center">
          <img src="/images/reserve-restaurant.png" alt="Reserve restaurant" className="mx-auto mb-2" />
          <p className="font-semibold">Reserve all restaurant</p>
        </div>
        <div className="p-4 border rounded-2xl shadow hover:shadow-lg transition cursor-pointer text-center">
          <img src="/images/reserve-event.png" alt="Reserve event" className="mx-auto mb-2" />
          <p className="font-semibold">Reserve for Event</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block font-semibold mb-1">Booking Date</label>
          <input
            type="date"
            className="w-full border rounded-xl p-3 shadow"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Booking Time</label>
          <input
            type="time"
            className="w-full border rounded-xl p-3 shadow"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Guests</label>
          <input
            type="number"
            placeholder="Enter number"
            className="w-full border rounded-xl p-3 shadow"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Notes</label>
          <textarea
            placeholder="Enter notes, important details or special request"
            className="w-full border rounded-xl p-3 shadow h-24"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
      </div>

      {/* Submit Button */}
      <button className="bg-gray-300 text-black px-8 py-3 rounded-xl shadow hover:bg-gray-400 transition w-full md:w-auto">
        Reserve Now
      </button>
    </div>
  );
}

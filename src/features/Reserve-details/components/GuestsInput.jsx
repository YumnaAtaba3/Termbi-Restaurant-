import React from "react";

export default function GuestsInput({ guests, setGuests }) {
  return (
    <div className="flex items-center gap-6 w-full md:w-2/3">
      <label className="w-60 font-semibold">Guests</label>
      <input
        type="number"
        placeholder="Enter number"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        className="w-full border rounded-xl p-3 shadow "
      />
    </div>
  );
}

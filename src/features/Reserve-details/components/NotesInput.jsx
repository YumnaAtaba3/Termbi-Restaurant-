
import React from "react";

export default function NotesInput({ notes, setNotes }) {
  return (
    <div>
      <label className="font-semibold block mb-2">Notes</label>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Enter your notes, important details or special request"
        className="w-full border rounded-xl p-4 shadow h-40"
      />
    </div>
  );
}

import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import BookingOptions from "../components/BookingOptions";
import BookingDate from "../components/BookingDate"; 
import BookingTime from "../components/BookingTime"; 
import GuestsInput from "../components/GuestsInput"; 
import NotesInput from "../components/NotesInput";
import ReserveButton from "../components/ReserveButton";

import onetable from "../../../assets/reserve/a table.svg"; 
import tables from "../../../assets/reserve/tables.svg"; 
import allResturant from "../../../assets/reserve/all.svg";
import event from "../../../assets/reserve/Event.svg";

export default function ReserveDetails() {
  const [selectedOption, setSelectedOption] = useState("one table");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [guests, setGuests] = useState("");
  const [notes, setNotes] = useState("");
  const [tableCount, setTableCount] = useState(1);
  const [eventType, setEventType] = useState("");
  const [decoration, setDecoration] = useState("");

  const options = [
    { icon: onetable, label: "one table" },
    { icon: tables, label: "multiple tables" },
    { icon: allResturant, label: "restaurant" },
    { icon: event, label: "event" },
  ];

  const eventTypes = ["Wedding", "Birthday", "Graduation", "Party"];
  const decorations = ["Wedding décor", "Birthday décor", "Graduation décor", "Galaxy décor", "Old Europe décor"];

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="w-full max-w-5xl mx-auto p-6 mt-12">
        <h2 className="text-2xl font-bold mb-4 text-red-600">
          Reserve <span className="text-black">Details</span>
        </h2>

        <BookingOptions
          options={options}
          onSelect={(opt) => setSelectedOption(opt.label)}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-8">

            {/* Date Picker */}
            <BookingDate date={date} setDate={setDate} />

            {/* Time Picker */}
            <BookingTime time={time} setTime={setTime} selectedOption={selectedOption} />

            {/* Multiple tables */}
            {selectedOption === "multiple tables" && (
              <div className="flex items-center gap-6  w-full md:w-2/3">
                <label className="w-60 font-semibold">Tables number</label>
                <select
                  value={tableCount}
                  onChange={(e) => setTableCount(e.target.value)}
                  className="w-full border rounded-xl p-3 shadow bg-white appearance-none"
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} table{i + 1 > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>
            )}


           

            
            {/* Event dropdowns */}
            {selectedOption === "event" && (
              <>
                {/* Type of Event */}
                <div className="flex items-center gap-4 w-full md:w-2/3">
                  <label className="w-60 font-semibold">Type of Event</label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full border rounded-xl p-3 shadow bg-white appearance-none"
                  >
                    <option value="">Select Event</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Decoration */}
                <div className="flex items-center gap-4  w-full md:w-2/3">
                  <label className="w-60 font-semibold">Decoration</label>
                  <select
                    value={decoration}
                    onChange={(e) => setDecoration(e.target.value)}
                    className="w-full border rounded-xl p-3 shadow bg-white appearance-none"
                  >
                    <option value="">Select Decoration</option>
                    {decorations.map((dec) => (
                      <option key={dec} value={dec}>{dec}</option>
                    ))}
                  </select>
                </div>
              </>
            )}

               {/* Guests */}
            <GuestsInput guests={guests} setGuests={setGuests} />
          </div>
          
          {/* RIGHT COLUMN – Notes */}
         <div className="flex flex-col justify-center items-center w-full">
    <div className="w-full max-w-2xl">
      <NotesInput notes={notes} setNotes={setNotes} />
    </div>
  </div>

        </div>

        <ReserveButton
          onClick={() =>
            console.log({
              selectedOption,
              date,
              time,
              guests,
              notes,
              tableCount: selectedOption === "multiple tables" ? tableCount : undefined,
              eventType: selectedOption === "event" ? eventType : undefined,
              decoration: selectedOption === "event" ? decoration : undefined,
            })
          }
        />
      </div>
    </LocalizationProvider>
  );
}

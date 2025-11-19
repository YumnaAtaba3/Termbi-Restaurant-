import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";


export default function BookingDate({ date, setDate }) {
  return (
    <div className="flex items-center gap-6 w-full md:w-2/3">
      <label className="w-60 font-semibold">Booking Date</label>
      <DatePicker
        value={date}
        onChange={(newValue) => setDate(newValue)}
        slotProps={{
          textField: {
            fullWidth: true,
            variant: "outlined", 
            sx: {
              borderRadius: "9rem",
              backgroundColor: "#fff",
              "& .MuiOutlinedInput-root": {
                padding: "0.5rem 1rem", 
              },
            },
          },
        }}
      />
    </div>
  );
}

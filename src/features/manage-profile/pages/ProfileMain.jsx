
import React from "react";
import {
  Avatar,
  Button,
} from "@mui/material";

import userImage from "../../../assets/User.png";

export default function ProfileMain() {
  return (

    <div className="flex-1 bg-white rounded-xl shadow-sm md:ml-8 p-6 md:p-8">
      <h2 className="text-xl font-semibold">Manage Profile</h2>

      {/* Avatar + Name + Change Image */}
      <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-3 md:space-y-0 mt-6">
        <Avatar src={userImage} sx={{ width: 70, height: 70 }} />

        <div className="flex flex-col items-center md:items-start">
          <span className="font-semibold">Ahmad AL-Ahmad</span>
          <button className="text-red-500 text-sm underline">Change Image</button>
        </div>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-20 gap-y-6 mt-11">
        {/* First Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="text"
            defaultValue="Ahmad"
            className="w-full border border-gray-300 rounded-lg px-3 py-2
                       focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            defaultValue="AL-Ahmad"
            className="w-full border border-gray-300 rounded-lg px-3 py-2
                       focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Username */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            defaultValue="@ahmad"
            className="w-full border border-gray-300 rounded-lg px-3 py-2
                       focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="text"
            defaultValue="+44 254 236 5891"
            className="w-full border border-gray-300 rounded-lg px-3 py-2
                       focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            defaultValue="ahmad@gmail.com"
            className="w-full border border-gray-300 rounded-lg px-3 py-2
                       focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </div>

      {/* Save Changes button */}
      <div className="mt-12 md:mt-24 text-center">
        <Button variant="contained" color="error" className="!px-10">
          Save Changes
        </Button>
      </div>
    </div>
  );
}

    

// PlaceOrder.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";

export default function PlaceOrder() {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto p-6 mt-16">
      {/* Breadcrumb */}
      <div className="flex justify-center gap-2 text-sm text-gray-500 mb-10">
        <Link to="/cart" className="hover:text-red-500">Cart</Link>
        <span>›</span>
        <Link to="/checkout" className="hover:text-red-500">Checkout</Link>
        <span>›</span>
        <span className="font-semibold text-black">Place order</span>
        <span>›</span>
        <Link to="/confirm-order" className="hover:text-red-500">Confirm Order</Link>
      </div>

      {/* Page Title */}
      <h1 className="text-center text-3xl font-bold mb-12 text-[#5D5D5D]">
        Your Order is Ready
      </h1>

      {/* Order Summary Card */}
      <div className=" p-8">
        <h2 className="text-red-500 font-semibold text-lg mb-8">
          Order Summary
        </h2>
    
        {/* Table-like layout */}
        <div className="space-y-4 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Order Code</span>
            <span className="text-gray-800">55110022336644 - 55998811</span>
          </div>
  <Divider/>
          <div className="flex justify-between">
            <span className="text-gray-600">Total Price</span>
            <span className="font-semibold text-red-500">540$</span>
          </div>
 <Divider/>
          <div className="flex justify-between">
            <span className="text-gray-600">Name</span>
            <span className="text-gray-800">Customer name</span>
          </div>
 <Divider/>
          <div className="flex justify-between">
            <span className="text-gray-600">Phone</span>
            <span className="text-gray-800">+44 526 584 5364</span>
          </div>
 <Divider/>
          <div className="flex justify-between items-start">
            <span className="text-gray-600">Delivery address</span>
            <span className="text-gray-800 text-right w-48 leading-5">
              Lorem Ipsum has been the industry's standard dummy
            </span>
          </div>
        </div>

        {/* Confirm Button */}
        <button
          onClick={() => navigate("/confirm-order")}
          className="mt-12 w-52 mx-auto block bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 font-semibold"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

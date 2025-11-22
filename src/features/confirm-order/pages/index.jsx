// ConfirmOrder.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function ConfirmOrder() {
  return (
    <div className="text-center mt-16 p-6">
      {/* Breadcrumb */}
      <div className="flex justify-center gap-2 text-sm text-gray-500 mb-10">
        <Link to="/cart" className="hover:text-red-500">Cart</Link>
        <span>›</span>
        <Link to="/checkout" className="hover:text-red-500">Checkout</Link>
        <span>›</span>
        <Link to="/place-order" className="hover:text-red-500">Place order</Link>
        <span>›</span>
        <span className="font-semibold text-black">Confirm Order</span>
      </div>

      <div className="flex justify-center mb-6">
        <div className="w-28 h-28 rounded-full bg-red-100 flex items-center justify-center">
             <div className="w-20 h-20 rounded-full bg-red-200 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center text-white text-4xl">
            ✓
          </div>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-16 text-[#5D5D5D]">Confirmation ordered Successfully</h1>

      <div className="mb-16"><Link
        to="/"
        className="bg-red-500 text-white px-16 py-2  rounded-lg font-semibold hover:bg-red-600"
      >
        Go Home
      </Link></div>
    </div>
  );
}

// Checkout.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto p-6 mt-16">
      
      {/* Breadcrumb */}
      <div className="flex justify-center gap-2 text-sm text-gray-500 mb-10">
        <Link to="/cart" className="hover:text-red-500">Cart</Link>
        <span>›</span>
        <span className="font-semibold text-black">Checkout</span>
        <span>›</span>
        <Link to="/place-order" className="hover:text-red-500">Place order</Link>
        <span>›</span>
        <span className="hover:text-red-500">Confirm Order</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">

        {/* LEFT SECTION — Payment Details + Button */}
        <div className="flex-1">
          {/* Payment Details Box */}
          <div className="border rounded-xl shadow p-6 bg-[#FFFCFC]">
            <h2 className="text-center mb-6 font-semibold">Payment Details</h2>

            <div className="space-y-5  ">
              <div>
                <label className="text-sm font-semibold">Cardholder Name</label>
                <input
                  type="text"
                  className="w-full border rounded p-2 mt-1"
                  placeholder="Enter Cardholder name"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">Card Number</label>
                <input
                  type="text"
                  className="w-full border rounded p-2 mt-1"
                  placeholder="0000-0000-0000-0000"
                />
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="text-sm font-semibold">Expiration Date</label>
                  <input
                    type="text"
                    className="w-full border rounded p-2 mt-1"
                    placeholder="MM/YYYY"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-sm font-semibold">CVV</label>
                  <input
                    type="text"
                    className="w-full border rounded p-2 mt-1"
                    placeholder="123"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Button BELOW the box (not inside it) */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => navigate("/place-order")}
              className="w-full md:w-72 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 font-semibold"
            >
              Place order
            </button>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full lg:w-80 flex flex-col gap-6">

          {/* Order Summary Box */}
          <div className="border rounded-xl shadow p-6 bg-white">
            <h2 className="text-center mb-6 font-semibold">Order Summary</h2>

            <div className="flex justify-between mb-4">
              <span>Total Price</span>
              <span className="text-red-500 font-semibold">510$</span>
            </div>

            <div className="flex justify-between mb-4">
              <span>Delivery</span>
              <span className="text-red-500 font-semibold">30$</span>
            </div>

            <hr />

            <div className="flex justify-between mt-4 font-semibold">
              <span>Grand Total</span>
              <span>540$</span>
            </div>
          </div>

      {/* Choose Payment Method — INDEPENDENT BOX */}
<div className="border rounded-xl shadow p-6 bg-white">
  <h3 className="text-center font-semibold mb-4">Choose Payment Method</h3>

  <div className="flex flex-col gap-3 ml-4">

    <label className="flex items-center gap-3">
      <input type="radio" name="pm" className="accent-red-500" />
      PayPal
    </label>

    <label className="flex items-center gap-3">
      <input type="radio" name="pm" defaultChecked className="accent-red-500" />
      Credit Card
    </label>

    <label className="flex items-center gap-3">
      <input type="radio" name="pm" className="accent-red-500" />
      Google Pay
    </label>

  </div>
</div>


        </div>
      </div>
    </div>
  );
}

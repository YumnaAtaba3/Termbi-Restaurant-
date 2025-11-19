import React, { useState } from "react";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import visaLogo from "../../../assets/payment/visa.svg"; 
import mastercardLogo from "../../../assets/payment/masterCard.svg";
import paypalLogo from "../../../assets/payment/paypal.svg";
import gpayLogo from "../../../assets/payment/G pay.svg";
import payoneerLogo from "../../../assets/payment/payoneer.svg";

const initialCart = [
  {
    id: 1,
    name: "Product Name",
    image:  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60",
    price: 300,
    discount: 20,
    oldPrice: 360,
    quantity: 3,
  },
  {
    id: 2,
    name: "Product Name",
    image:   "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60",
    price: 110,
    discount: 10,
    oldPrice: 120,
    quantity: 1,
  },
  {
    id: 3,
    name: "Product Name",
    image:  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60",
    price: 100,
    discount: 20,
    oldPrice: 130,
    quantity: 1,
  },
];

function Cart() {
  const [cartItems, setCartItems] = useState(initialCart);

  const handleQuantity = (id, type) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "inc" ? item.quantity + 1 : Math.max(item.quantity - 1, 1),
            }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const delivery = 30;
  const grandTotal = totalPrice + delivery;

  return (
    <div className="max-w-5xl mx-auto p-6 mt-10">
      <h1 className="text-2xl font-bold mb-6">Cart</h1>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Cart Items */}
        <div className="flex-1 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="relative flex items-center bg-[#FFFCFC] justify-between border p-4 rounded-lg shadow-sm min-h-[120px]"
            >
              <div className="flex items-center gap-8">
               <input
                 type="checkbox"
                  className="w-5 h-5 accent-red-500"
                    />

                <img src={item.image} alt={item.name} className="w-28 h-28 object-cover rounded" />
                <div>
                  <h2 className="font-semibold">{item.name}</h2>

                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-sm text-[#FFB800]">{item.discount}% OFF</span>
                    <span className="text-sm text-gray-400 line-through">{item.oldPrice}$</span>
                  </div>

                  <p className="text-red-500 font-bold mt-1">${item.price}</p>
                </div>
              </div>
                
              {/* Counter + Delete at right end corner */}
              <div className="flex flex-col items-end gap-8">
                 <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500"
                >
                  <DeleteOutlineOutlinedIcon />
                </button>
                <div className="flex items-center ">
                  <button
                    onClick={() => handleQuantity(item.id, "dec")}
                    className="px-3 py-1 bg-white  border"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantity(item.id, "inc")}
                    className="px-2 py-1 bg-white border "
                  >
                    +
                  </button>
                </div>
               
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col w-full md:w-80 gap-4">
          {/* Order Summary */}
          <div className="border p-4 rounded-lg shadow-sm text-center">
            <h2 className="font-bold text-md mb-6">Order Summary</h2>
            <div className="flex justify-between mb-6">
              <span>Total Price</span>
              <span className="font-bold text-red-500">${totalPrice}</span>
            </div>
            <div className="flex justify-between mb-6">
              <span>Delivery</span>
              <span className="font-bold text-red-500">${delivery}</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between mb-10">
              <span className="font-semibold">Grand Total</span>
              <span className="font-bold text-red-500">${grandTotal}</span>
            </div>
            <button className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600">
              Checkout
            </button>
          </div>

          {/* Payment Options - Independent Div */}
          <div className="border p-4 rounded-lg shadow-sm text-center">
            <p className="mb-4 font-semibold">We Accept</p>
            <div className="flex gap-8 flex-wrap">
              <img src={visaLogo} alt="Visa" className="h-8" />
              <img src={mastercardLogo} alt="MasterCard" className="h-8" />
              <img src={paypalLogo} alt="PayPal" className="h-8" />
              <img src={payoneerLogo} alt="Payoneer" className="h-8" />
              <img src={gpayLogo} alt="Google Pay" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

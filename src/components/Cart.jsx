import React, { useState } from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import {useNavigate} from 'react-router'

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const navigate = useNavigate()

  const allItems = useSelector((state) => state.cart);
  const totalItems = allItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = allItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] md:w-[40vw] sm:w-[60vw] h-full p-5 bg-white flex flex-col 
        ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-700">My Orders</span>
        </div>

        {/* Close Button */}
        <div className="absolute top-3 right-3 group mt-3">
          <span
            onClick={() => setActiveCart(!activeCart)}
            className="text-xl font-bold text-gray-600 p-1 rounded-md cursor-pointer 
            group-hover:bg-red-500 group-hover:text-white transition-all"
          >
            ✖
          </span>
        </div>

        {/* Scrollable Cart Items */}
        <div className="flex-grow overflow-y-auto space-y-4">
          <CartItem />
        </div>

        {/* Content for Items, Total Amount, and Checkout Button */}
        <div className="mt-8">
          {/* Items and Total Amount */}
          <h3 className="text-xl font-semibold text-gray-800">
            Items:{`${totalItems}`}
          </h3>
          <h3 className="text-xl font-semibold text-gray-800 mt-2">
            Total Amount:{`${totalAmount}`}
          </h3>

          {/* Separator */}
          <hr className="my-6 border-gray-300" />

          {/* Checkout Button */}
          <div>
            <button
              onClick={()=> navigate('/success')}
              className="w-full py-3 bg-blue-600 text-white rounded-md font-semibold text-lg 
              hover:bg-blue-700 transition-colors"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`fixed top-4 ${
          activeCart ? "right-[22vw]" : "right-6"
        } rounded-full bg-black text-white shadow-lg text-5xl p-3 hover:bg-orange-600 hover:shadow-xl transition-all duration-300 z-50 ${
          allItems.length > 0
            ? "bg-gradient-to-r from-black to-red-500 animate-ping"
            : ""
        }`}
      />
    </>
  );
};

export default Cart;

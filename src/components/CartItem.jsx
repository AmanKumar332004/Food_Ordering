
import React from "react";
import { MdDelete } from "react-icons/md"; // Import Trash Icon
import { useSelector, useDispatch } from "react-redux";
import { removeItem, incrementQuantity, decrementQuantity } from "../Features/foodSlice";

const CartItem = () => {
  const allItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      {allItems.map((item) => (
        <div
          key={item.id}
          className="flex flex-wrap items-center justify-between bg-white shadow-md rounded-md p-4 w-full sm:max-w-md"
        >
          {/* Item Image */}
          <img
            src={item.img}
            alt={item.name}
            className="w-12 h-12 rounded-full object-cover"
          />

          {/* Details */}
          <div className="flex-1 min-w-[120px] ml-4">
            <h2 className="text-gray-800 font-semibold text-lg">{item.name}</h2>
            <span className="text-green-600 font-bold text-lg">₹{item.price}</span>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center justify-center space-x-2 mt-2 sm:mt-0">
            <button
              onClick={() => dispatch(decrementQuantity(item.id))}
              className="w-8 h-8 flex items-center justify-center border rounded-md text-gray-800 text-xl"
            >
              -
            </button>
            <span className="text-gray-800 text-lg">{item.quantity}</span>
            <button
              onClick={() => dispatch(incrementQuantity(item.id))}
              className="w-8 h-8 flex items-center justify-center border rounded-md text-gray-800 text-lg"
            >
              +
            </button>
          </div>

          {/* Delete Icon */}
          <button
            onClick={() => dispatch(removeItem(item.id))}
            className="ml-4 mt-2 sm:mt-0 text-gray-500 hover:text-red-500"
          >
            <MdDelete size={24} />
          </button>
        </div>
      ))}
    </>
  );
};

export default CartItem;

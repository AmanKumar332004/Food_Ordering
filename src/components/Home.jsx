import React, { useState } from "react";
import CategoryAndCard from "./Category&Card";
import FoodData from "../Data/FoodData";
import Cart from "./Cart";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // search - functionality from Search bar
  const searchedData = searchTerm
    ? FoodData.filter((food) =>
        food.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : FoodData;
  // console.log(searchedData);

  return (
    <>
      <div className="w-full bg-white shadow-md py-4 px-6">
        <div className="flex items-center justify-between lg:justify-center gap-4 lg:gap-0">
          {/* Left Side: Date */}
          <div className="text-gray-700 text-lg font-medium lg:absolute lg:left-10">
            <h3>{new Date().toUTCString().slice(0, 16)}</h3>
          </div>

          {/* Center: Search Bar */}
          <div className="w-full max-w-md flex justify-center">
            <input
              type="search"
              placeholder="Search for a Dish, Snacks & Pizza...etc"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-500 font-semibold "
            />
          </div>
        </div>
      </div>
      <CategoryAndCard searchedData={searchedData} />
      <Cart />
    </>
  );
};

export default Home;

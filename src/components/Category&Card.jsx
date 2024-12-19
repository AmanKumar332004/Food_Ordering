

import React, { useState, useEffect } from "react";
import FoodData from "../Data/FoodData";
import { addItem } from "../Features/foodSlice";
import { useDispatch, useSelector } from "react-redux";

const CategoryAndCard = ({ searchedData }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [data, setData] = useState(FoodData);
  const dispatch = useDispatch();
  const addedItem = useSelector((state) => state.cart);

  useEffect(() => {
    setData(searchedData);
  }, [searchedData]);

  // Active button
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  // Apply filter according to category
  const filterData = (category) => {
    if (category === "All") {
      setData(searchedData);
    } else {
      const filteredData = searchedData.filter(
        (food) => food.category === category
      );
      setData(filteredData);
    }
  };

  const categories = ["All", "Lunch", "Breakfast", "Dinner", "Snacks"];

  return (
    <>
      <div className="w-full max-w-screen-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
        {/* Heading */}
        <h3 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Find the Best Foods
        </h3>

        {/* Buttons Container */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                handleCategoryClick(category);
                filterData(`${category}`);
              }}
              className={`px-6 py-2 text-lg font-semibold rounded-full shadow-md transition duration-300 
            ${
              activeCategory === category
                ? "bg-amber-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      {/* food Cards */}
      <div className="w-full max-w-screen-xl mx-auto p-6">
        {/* Food Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.map((food) => (
            <div
              key={food.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-300 w-full max-w-xs mx-auto"
            >
              {/* Food Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={food.img}
                  alt={food.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Food Details */}
              <div className="p-4">
                {/* Name and Price */}
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-xl font-bold text-gray-800">
                    {food.name}
                  </h3>
                  <span className="text-lg font-semibold text-amber-600">
                    ₹{food.price}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm truncate mb-4">
                  {food.desc}
                </p>

                {/* Rating and Add to Cart */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400 text-lg">★</span>
                    <span className="text-gray-700 font-medium text-sm">
                      {food.rating}
                    </span>
                  </div>
                  <button
                    onClick={() => dispatch(addItem(food.id))}
                    className="bg-amber-500 text-white text-sm px-5 py-2 rounded-full shadow-md hover:bg-amber-600 transition duration-300"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryAndCard;

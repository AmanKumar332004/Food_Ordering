

import { createSlice } from "@reduxjs/toolkit";
import FoodData from "../Data/FoodData";
import toast from 'react-hot-toast';

const initialState = {
  cart: [],
};

export const foodSlice = createSlice({
  name: "Flavaro_App",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const itemToAdd = FoodData.find((food) => food.id === item);
      if (itemToAdd) {
        // checking if the Item is already Present in the Cart 
        const existingItem = state.cart.find((food) => food.id === item);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.cart.push({ ...itemToAdd, quantity: 1 });
          toast.success(`Added ${itemToAdd.name} to Cart`)
        }
      }
    },
    removeItem: (state, action) => {
      const item = action.payload;
      state.cart = state.cart.filter((food) => food.id !== item);
      toast.success(`Removed from Cart`)
    },
    incrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.cart.find((food) => food.id === itemId);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.cart.find((food) => food.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } =
  foodSlice.actions;

export default foodSlice.reducer;

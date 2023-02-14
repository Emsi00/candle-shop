import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: ["Candle", "Candle2"] };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    showCart(state) {
      return { products: [...state.products, "candle"] };
    },
  },
});
export default cartSlice;
export const cartActions = cartSlice.actions;

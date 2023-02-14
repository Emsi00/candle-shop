import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./Slices/LoginSlice";
import cartSlice from "./Slices/CartSlice";

const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});

export default store;

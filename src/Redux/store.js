import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./Slices/LoginSlice";
import cartSlice from "./Slices/CartSlice";
import SoyCandlesSlice from "./Slices/SoyCandlesSlice";

const store = configureStore({
  reducer: { cart: cartSlice.reducer, candles: SoyCandlesSlice.reducer },
});

export default store;

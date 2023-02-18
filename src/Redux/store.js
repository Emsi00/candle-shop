import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./Slices/LoginSlice";
import cartSlice from "./Slices/CartSlice";
import SoyCandlesSlice from "./Slices/SoyCandlesSlice";
import PersonalDataSlice from "./Slices/PersonalDataSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    candles: SoyCandlesSlice.reducer,
    login: loginSlice.reducer,
    personalData: PersonalDataSlice.reducer,
  },
});

export default store;

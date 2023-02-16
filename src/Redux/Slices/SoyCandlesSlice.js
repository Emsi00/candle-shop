import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  candles: [
    {
      name: "Jesienny zapach",
      adrUrl: "candle1.jpg",
      description: "Kolorowy klimat jesiennych spadających liści",
      price: 14.99,
      id: "1",
      alert: false,
    },
    {
      name: "Letni zapach",
      adrUrl: "candle2.jpg",
      description: "Klimat letnich promieni słońca",
      price: 19.99,
      id: "2",
      alert: false,
    },
    {
      name: "Wiosna",
      adrUrl: "candle3.jpg",
      description: "Zapach pierwszych kwitnących wiosennych dni",
      price: 12.99,
      id: "3",
      alert: false,
    },
    {
      name: "Zimowy zapach",
      adrUrl: "candle4.jpg",
      description: "Zapach pierwszych kwitnących wiosennych dni",
      price: 9.99,
      id: "4",
      alert: false,
    },
    {
      name: "Cynamon",
      adrUrl: "candle5.jpg",
      description: "Świąteczny zapach cynamonu",
      price: 13.99,
      id: "5",
      alert: false,
    },
    {
      name: "Słodkość",
      adrUrl: "candle6.jpg",
      description: "Zapach puszystej słodyczy",
      price: 19.99,
      id: "6",
      alert: false,
    },
    {
      name: "Fresh coffe",
      adrUrl: "candle7.jpg",
      description: "Zapach świeżo zmielonej kawy",
      price: 19.99,
      id: "4",
      alert: false,
    },
  ],
};
const SoyCandlesSlice = createSlice({
  name: "Candles",
  initialState,
  reducers: {
    addProductToShop(state, action) {
      return { candles: [...state.candles, action.payload] };
    },
  },
});

export default SoyCandlesSlice;
export const { addProduct } = SoyCandlesSlice.actions;

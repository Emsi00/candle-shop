import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  candles: [
    {
      name: "Jesienny dotyk",
      adrUrl: "candle1.jpg",
      description: "Zapach pierwszych kwitnących wiosennych dni",
      price: 9.99,
      id: "1",
    },
    {
      name: "Letni dotyk",
      adrUrl: "candle1.jpg",
      description: "Zapach pierwszych kwitnących wiosennych dni",
      price: 9.99,
      id: "2",
    },
    {
      name: "Wiosenny dotyk",
      adrUrl: "candle1.jpg",
      description: "Zapach pierwszych kwitnących wiosennych dni",
      price: 9.99,
      id: "3",
    },
    {
      name: "Zimowy dotyk",
      adrUrl: "candle1.jpg",
      description: "Zapach pierwszych kwitnących wiosennych dni",
      price: 9.99,
      id: "4",
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

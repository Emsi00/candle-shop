import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  candles: [
    {
      name: "Jesienny zapach",
      adrUrl: "candle1.jpg",
      description: "Zapach pierwszych kwitnących wiosennych dni",
      price: 9.99,
      id: "1",
    },
    {
      name: "Letni zapach",
      adrUrl: "candle2.jpg",
      description: "Zapach pierwszych kwitnących wiosennych dni",
      price: 9.99,
      id: "2",
    },
    {
      name: "Wiosenny zapach",
      adrUrl: "candle3.jpg",
      description: "Zapach pierwszych kwitnących wiosennych dni",
      price: 9.99,
      id: "3",
    },
    {
      name: "Zimowy zapach",
      adrUrl: "candle4.jpg",
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

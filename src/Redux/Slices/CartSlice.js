import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [] };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      const actionId = action.payload.id;
      const index = state.products.findIndex(({ id }) => id === actionId);
      if (index !== -1) {
        const anotherIdElements = state.products.filter(
          ({ id }) => id !== actionId
        );
        return {
          products: [
            ...anotherIdElements,
            {
              name: state.products[index].name,
              id: state.products[index].id,
              amount: state.products[index].amount + 1,
            },
          ],
        };
      }
      return {
        products: [
          ...state.products,
          {
            name: action.payload.name,
            id: action.payload.id,
            amount: 1,
          },
        ],
      };
    },
  },
});
export default cartSlice;
export const { addProduct } = cartSlice.actions;

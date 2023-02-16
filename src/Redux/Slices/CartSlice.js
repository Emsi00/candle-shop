import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [], totalPrice: 0 };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      console.log(state.totalPrice);
      const index = state.products.findIndex(
        ({ id }) => id === action.payload.id
      );
      if (index === -1) {
        console.log("-1 chuj");
        return {
          products: [
            ...state.products,
            {
              name: action.payload.name,
              id: action.payload.id,
              adrUrl: action.payload.adrUrl,
              amount: 1,
              price: action.payload.price,
            },
          ],
          totalPrice: state.totalPrice + action.payload.price,
        };
      }
      const configuredArray = state.products.map((element, i) => {
        if (i === index) {
          return {
            name: element.name,
            id: element.id,
            adrUrl: element.adrUrl,
            amount: element.amount + 1,
            price: element.price,
          };
        } else return element;
      });
      return {
        products: [...configuredArray],
        totalPrice: state.totalPrice + action.payload.price,
      };
    },
    substractProduct(state, action) {
      console.log(action.payload.price);
      const index = state.products.findIndex(
        ({ id }) => id === action.payload.id
      );
      const configuredArray = state.products.map((element, i) => {
        if (i === index) {
          return {
            name: element.name,
            id: element.id,
            adrUrl: element.adrUrl,
            amount: element.amount - 1,
            price: element.price,
          };
        } else return element;
      });
      const configuredArrayWithAmount = configuredArray.filter(
        ({ amount }) => amount > 0
      );
      console.log(configuredArrayWithAmount);
      return {
        products: [...configuredArrayWithAmount],
        totalPrice: state.totalPrice - state.products[index].price,
      };
    },
  },
});
export default cartSlice;
export const { addProduct, substractProduct } = cartSlice.actions;

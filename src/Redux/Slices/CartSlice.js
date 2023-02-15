import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [] };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addProduct(state, action) {
    // const actionId = action.payload.id;
    // const index = state.products.findIndex(({ id }) => id === actionId);
    // if (index !== -1) {
    //   const anotherIdElements = state.products.filter(
    //     ({ id }) => id !== actionId
    //   );
    //   return {
    //     products: [
    //       ...anotherIdElements,
    //       {
    //         name: state.products[index].name,
    //         id: state.products[index].id,
    //         amount: state.products[index].amount + 1,
    //         adrUrl: state.products[index].adrUrl,
    //       },
    //     ],
    //   };
    // }
    // return {
    //   products: [
    //     ...state.products,
    //     {
    //       name: action.payload.name,
    //       id: action.payload.id,
    //       amount: 1,
    //       adrUrl: action.payload.adrUrl,
    //     },
    //   ],
    // };
    addProduct(state, action) {
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
            },
          ],
        };
      }
      const configuredArray = state.products.map((element, i) => {
        if (i === index) {
          return {
            name: element.name,
            id: element.id,
            adrUrl: element.adrUrl,
            amount: element.amount + 1,
          };
        } else return element;
      });
      return { products: [...configuredArray] };
    },
    substractProduct(state, action) {
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
          };
        } else return element;
      });
      const configuredArrayWithAmount = configuredArray.filter(
        ({ amount }) => amount > 0
      );
      console.log(configuredArrayWithAmount);
      return { products: [...configuredArrayWithAmount] };
    },
  },
});
export default cartSlice;
export const { addProduct, substractProduct } = cartSlice.actions;

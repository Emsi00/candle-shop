import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLogin: false };
const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    showLogin(state) {
      return { isLogin: state.isLogin };
    },
  },
});
export default loginSlice;
export const loginActions = loginSlice.actions;

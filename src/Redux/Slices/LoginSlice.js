import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const initialState = {
  loginData: { email: "admin@test.com", password: "1234" },
  isLogin: false,
};
const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    loginIn(state, action) {
      if (
        state.loginData.email !== action.payload.email ||
        state.loginData.password !== action.payload.password
      ) {
        console.log("Nie poprawne dane");
        return { loginData: { ...state.loginData }, isLogin: false };
      }
      console.log("Poprawne dane");
      return { loginData: { ...state.loginData }, isLogin: true };
    },
  },
});
export default loginSlice;
export const { loginIn } = loginSlice.actions;

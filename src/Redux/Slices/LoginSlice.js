import { createSlice } from "@reduxjs/toolkit";

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
    changePassword(state, action) {
      if (
        state.loginData.password === action.payload.oldPassword &&
        action.payload.newPasswordFirst === action.payload.newPasswordSecond
      ) {
        console.log("Poprawne dane");
        return {
          loginData: {
            email: state.loginData.email,
            password: action.payload.newPasswordFirst,
          },
          isLogin: state.isLogin,
        };
      }
      console.log("Niepoprawne dane");
      return {
        loginData: {
          email: state.loginData.email,
          password: state.loginData.password,
        },
        isLogin: state.isLogin,
      };
    },
    // changeEmail(state, password) {
    //   return;
    // },
  },
});
export default loginSlice;
export const { loginIn, changePassword } = loginSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalData: {
    name: "Mati",
    surname: "Emsi",
    birthDate: "",
    city: "",
    zipCode: "",
    street: "",
    houseNumber: "",
  },
};
const PersonalDataSlice = createSlice({
  name: "personal data",
  initialState,
  reducers: {
    setPersonalData(state, action) {
      console.log(state.personalData.name);
      return { personalData: action.payload };
    },
  },
});

export default PersonalDataSlice;
export const { setPersonalData } = PersonalDataSlice.actions;

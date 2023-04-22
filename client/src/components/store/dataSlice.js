import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    companies: [],
  },
  reducers: {
    getData(state, action) {
      return {
        companies: action.payload,
      };
    },
  },
});
export const { getData } = dataSlice.actions;
export default dataSlice.reducer;

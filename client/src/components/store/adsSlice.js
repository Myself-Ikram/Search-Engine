import { createSlice } from "@reduxjs/toolkit";

const adsSlice = createSlice({
  name: "ads",
  initialState: {
    ads: [],
  },
  reducers: {
    getAds(state, action) {
      return {
        ads: action.payload,
      };
    },
  },
});
export const { getAds } = adsSlice.actions;
export default adsSlice.reducer;

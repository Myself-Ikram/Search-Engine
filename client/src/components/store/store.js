import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import adsSlice from "./adsSlice";
export default configureStore({
  reducer: {
    data: dataSlice,
    ads: adsSlice,
  },
});

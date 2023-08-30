import { configureStore } from "@reduxjs/toolkit";
import generalSlice from "../features/general.slice";
import dataSlice from "../features/data.slice";

export default configureStore({
  reducer: {
    general: generalSlice,
    data: dataSlice,
  },
});

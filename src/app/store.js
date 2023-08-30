import { configureStore } from "@reduxjs/toolkit";
import generalSlice from "../feature/general.slice";

export default configureStore({
  reducer: {
    general: generalSlice,
  },
});

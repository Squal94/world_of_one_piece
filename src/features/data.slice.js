import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    dataImport: [],
  },
  reducers: {
    dataSelected: (state, { payload }) => {
      state.dataImport = payload;
      console.log(state.dataImport);
    },
  },
});

export default dataSlice.reducer;
export const { dataSelected } = dataSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    dataImport: [],
    modalData: {},
    enableModal: false,
  },
  reducers: {
    dataSelected: (state, { payload }) => {
      state.dataImport = payload;
    },
    persoData: (state, { payload }) => {
      state.modalData = payload;
    },
    activeModal: (state, { payload }) => {
      state.enableModal = payload;
    },
  },
});

export default dataSlice.reducer;
export const { dataSelected, persoData, activeModal } = dataSlice.actions;

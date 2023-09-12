import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    dataImport: [],
    modalData: {},
    enableModal: false,
    idSelectedvalue: "",
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
    idSelected: (state, { payload }) => {
      state.idSelectedvalue = payload;
    },
  },
});

export default dataSlice.reducer;
export const { dataSelected, persoData, activeModal, idSelected } =
  dataSlice.actions;

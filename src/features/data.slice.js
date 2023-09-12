import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    dataImport: [],
    modalData: {},
    fruitsData: [],
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
    fruitsImport: (state, action) => {
      state.fruitsData = action.payload;
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
export const {
  dataSelected,
  persoData,
  fruitsImport,
  activeModal,
  idSelected,
} = dataSlice.actions;

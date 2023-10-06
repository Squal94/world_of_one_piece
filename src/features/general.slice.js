import { createSlice } from "@reduxjs/toolkit";

export const generalSlice = createSlice({
  name: "general",
  initialState: {
    scrollPosition: "",
    content: "",
    imgSize: "",
    toolbar: false,
  },
  reducers: {
    scrollPosition: (state, { payload }) => {
      switch (payload) {
        case "reduceNav":
          state.scrollPosition = "reduceNav";
          break;
        default:
          state.scrollPosition = "initial";
      }
    },
    contentSelected: (state, { payload }) => {
      state.content = payload.toLowerCase();
    },
    imgSize: (state, { payload }) => {
      state.imgSize = payload;
    },
    navToogle: (state, { payload }) => {
      state.toolbar = payload;
    },
  },
});

export default generalSlice.reducer;
export const { scrollPosition, contentSelected, imgSize, navToogle } =
  generalSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
// import HomeContent from "../components/sliderPages/HomeContent";
// import Story from "../components/sliderPages/Story";
// import Equipage from "../components/sliderPages/Equipage";

export const generalSlice = createSlice({
  name: "general",
  initialState: {
    scrollPosition: "",
    content: "",
    innerContent: "",
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
  },
});

export default generalSlice.reducer;
export const { scrollPosition, contentSelected } = generalSlice.actions;

// contentSelected: (state, { payload }) => {
//   switch (payload) {
//     case "home":
//       state.content = <HomeContent />;
//       break;
//     case "story":
//       state.content = <Story />;
//       break;
//     case "equipage":
//       state.content = <Equipage />;
//       break;
//     default:
//       state.content = <HomeContent />;
//   }
// },

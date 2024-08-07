import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDevMode: false,
};

export const exploreDevSlice = createSlice({
  name: "devMode",
  initialState,
  reducers: {
    setDevMode: (state, { payload }) => {
      state.isDevMode = payload;
    },
  },
});

export const { setDevMode } = exploreDevSlice.actions;
const exploreDevSliceReducer = exploreDevSlice.reducer;
export default exploreDevSliceReducer;

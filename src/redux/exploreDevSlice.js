import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDevMode: false,
  isSidebarOpen: false,
  desktopSideBar: true,
};

export const exploreDevSlice = createSlice({
  name: "devMode",
  initialState,
  reducers: {
    setDevMode: (state, { payload }) => {
      state.isDevMode = payload;
    },
    setSidebarOpen: (state, { payload }) => {
      state.isSidebarOpen = payload;
    },
    setDesktopSideBar: (state, { payload }) => {
      state.desktopSideBar = payload;
    },
  },
});

export const { setDevMode, setSidebarOpen, setDesktopSideBar } = exploreDevSlice.actions;
const exploreDevSliceReducer = exploreDevSlice.reducer;
export default exploreDevSliceReducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sideBg: "#83b3ef1f",
  mainBg: "#FFFFFF",
  textColor: "#444746",
  hungerColor: "#2d7efd",
};

export const customizeSlice = createSlice({
  name: "customizeSec",
  initialState,
  reducers: {
    customizeInventory: (state, { payload }) => {
      Object.assign(state, payload);
    },
    restoreToDefault: (state) => {
      state.sideBg = "#83b3ef1f";
      state.mainBg = "#FFFFFF";
      state.textColor = "#444746";
      state.armorColor = "#0000FF";
    },
  },
});

export const { customizeInventory, restoreToDefault } = customizeSlice.actions;
const customizeSliceReducer = customizeSlice.reducer;
export default customizeSliceReducer;

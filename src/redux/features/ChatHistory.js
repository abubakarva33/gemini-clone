
import { createSlice } from "@reduxjs/toolkit";
import run from "../../config/gemini";

const initialState = {
  lastRes: "",
  loading: false,
};

export const chatHistorySlice = createSlice({
  name: "chatHistory",
  initialState,
  reducers: {
    lastResponse: {
      reducer: async (state, { payload }) => {
        state.loading = true;
        state.lastRes = await run(payload);
        state.lastRes && (state.loading = false);
        console.log(state.lastRes);
      },
    },
  },
});

export const { lastResponse } = chatHistorySlice.actions;
const chatHistorySliceReducer = chatHistorySlice.reducer;
export default chatHistorySliceReducer;

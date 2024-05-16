import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lastRes: { user: "", res: "" },
  resHistory: [],
};

export const chatHistorySlice = createSlice({
  name: "chatHistory",
  initialState,
  reducers: {
    setRes: (state, { payload }) => {
      state.lastRes = { user: payload.user, res: payload.res };
      state.resHistory.push({ user: payload.user, res: payload.res });
    },
  },
});

export const { setRes } = chatHistorySlice.actions;
const chatHistorySliceReducer = chatHistorySlice.reducer;
export default chatHistorySliceReducer;

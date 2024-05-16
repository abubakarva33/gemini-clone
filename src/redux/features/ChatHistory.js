import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: {},
  lastRes: { user: "", res: "", id: undefined },
  resHistory: [],
};

export const chatHistorySlice = createSlice({
  name: "chatHistory",
  initialState,
  reducers: {
    setRes: (state, { payload }) => {
      const id = payload.id || new Date().getTime();
      state.lastRes = {
        user: payload.user,
        res: payload.res,
        id,
      };

      const ids = Object.keys(state.history);
      if (ids.includes(id)) {
        state.history[id]?.push(payload);
      } else {
        state.history[id] = [payload];
      }
    },
  },
});

export const { setRes } = chatHistorySlice.actions;
const chatHistorySliceReducer = chatHistorySlice.reducer;
export default chatHistorySliceReducer;

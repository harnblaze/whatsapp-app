import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipientNumber: "",
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    createChat: (state, action) => {
      state.recipientNumber = action.payload;
    },
  },
});

export const { createChat } = chatSlice.actions;

export default chatSlice.reducer;

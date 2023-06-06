import { createSlice } from "@reduxjs/toolkit";
import { IMessage } from "../../types/message";

const initialState = {
  entities: [] as IMessage[],
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      const { recipientNumber, messageText } = action.payload;
      const newMessage: IMessage = {
        sender: "Me",
        recipient: recipientNumber,
        text: messageText,
      };
      state.entities.push(newMessage);
    },
  },
});

export const { sendMessage } = messageSlice.actions;

export default messageSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChat } from "../../types/chat";

const initialState = {
  chats: [] as unknown as IChat[],
};

export type sendMessagePayloadActionType = {
  recipientNumber: string;
  messageText: string;
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    createChat: (state, action: PayloadAction<string>) => {
      const newChat: IChat = {
        recipientNumber: action.payload,
        messages: [],
      };
      state.chats.push(newChat);
    },
    sendMessage: (
      state,
      action: PayloadAction<sendMessagePayloadActionType>
    ) => {
      const { recipientNumber, messageText } = action.payload;
      const chat = state.chats.find(
        (chat) => chat.recipientNumber === recipientNumber
      );
      if (chat) {
        const newMessage = {
          sender: "Me",
          text: messageText,
        };
        chat.messages.push(newMessage);
      }
    },
  },
});

export const { createChat, sendMessage } = chatSlice.actions;

export default chatSlice.reducer;

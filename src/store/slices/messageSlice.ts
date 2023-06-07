import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMessage } from "../../types/message";
import { AppDispatch } from "../index";
import { toast } from "react-hot-toast";
import GreenAPI from "../../services/greenAPI";

const initialState = {
  entities: [] as IMessage[],
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    createMessage: (state, action: PayloadAction<IMessage>) => {
      state.entities.push(action.payload);
    },
  },
});

export const sendMessage =
  (
    recipientNumber: string,
    messageText: string,
    idInstance: string,
    apiTokenInstance: string
  ) =>
  async (dispatch: AppDispatch) => {
    const sending = toast.loading("sending...");
    try {
      const response = await GreenAPI.sendMessage(
        recipientNumber,
        messageText,
        idInstance,
        apiTokenInstance
      );
      console.log(response);
      dispatch(
        createMessage({
          recipient: recipientNumber,
          text: messageText,
          sender: "Me",
          idMessage: response.idMessage,
        })
      );
    } catch {
      toast.error("Failed to send message");
    } finally {
      toast.dismiss(sending);
    }
  };

export const { createMessage } = messageSlice.actions;

export default messageSlice.reducer;

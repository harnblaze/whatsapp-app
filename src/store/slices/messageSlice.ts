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
    try {
      const data = await GreenAPI.sendMessage(
        recipientNumber,
        messageText,
        idInstance,
        apiTokenInstance
      );
      if (data) {
        dispatch(
          createMessage({
            recipient: recipientNumber,
            text: messageText,
            sender: "Me",
            idMessage: data.idMessage,
          })
        );
      } else {
        toast.error("Failed to send message");
      }
    } catch {
      toast.error("Failed to send message");
    }
  };

export const getMessage =
  (idInstance: string, apiTokenInstance: string, recipientNumber: string) =>
  async (dispatch: AppDispatch) => {
    try {
      const data = await GreenAPI.getNotification(idInstance, apiTokenInstance);
      if (data) {
        const receiptId = data.receiptId;
        await GreenAPI.deleteNotification(
          idInstance,
          apiTokenInstance,
          receiptId
        );
        if (
          data.body?.senderData?.chatId === `${recipientNumber}@c.us` &&
          data.body?.messageData?.typeMessage === "textMessage"
        ) {
          dispatch(
            createMessage({
              recipient: recipientNumber,
              text: data.body.messageData.textMessageData.textMessage,
              sender: data.body.senderData.sender,
              idMessage: data.body.idMessage,
            })
          );
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to get message");
    }
  };

export const { createMessage } = messageSlice.actions;

export default messageSlice.reducer;

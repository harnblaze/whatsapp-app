import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../index";
import { toast } from "react-hot-toast";
import GreenAPI from "../../services/greenAPI";

const initialState = {
  recipientNumber: "",
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    createChat: (state, action: PayloadAction<string>) => {
      state.recipientNumber = action.payload;
    },
  },
});

export const { createChat } = chatSlice.actions;

export const addChat =
  (recipientNumber: string, idInstance: string, apiTokenInstance: string) =>
  async (dispatch: AppDispatch) => {
    const checking = toast.loading("Checking phone number...");
    try {
      const data = await GreenAPI.checkRecipient(
        recipientNumber,
        idInstance,
        apiTokenInstance
      );
      if (data.existsWhatsapp) {
        dispatch(createChat(recipientNumber));
      } else {
        toast.error("Wrong phone number");
      }
    } catch {
      toast.error("Wrong phone number");
    } finally {
      toast.dismiss(checking);
    }
  };

export default chatSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
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
    createChat: (state, action) => {
      state.recipientNumber = action.payload;
    },
  },
});

export const { createChat } = chatSlice.actions;

export const addChat =
  (recipientNumber: string, idInstance: string, apiTokenInstance: string) =>
  async (dispatch: AppDispatch) => {
    const loading = toast.loading("Loading...");
    try {
      const data = await GreenAPI.checkRecipient(
        recipientNumber,
        idInstance,
        apiTokenInstance
      );
      console.log(data);
    } catch {
      toast.error("Failed to check phone number");
    } finally {
      toast.dismiss(loading);
    }
  };

export default chatSlice.reducer;

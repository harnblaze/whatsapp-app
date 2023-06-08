import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../index";
import GreenAPI from "../../services/greenAPI";
import { toast } from "react-hot-toast";

const initialState = {
  isAuth: false,
  idInstance: "",
  apiTokenInstance: "",
};

export type userStateType = typeof initialState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<Omit<userStateType, "isAuth">>
    ) => {
      state.idInstance = action.payload.idInstance;
      state.apiTokenInstance = action.payload.apiTokenInstance;
      state.isAuth = true;
    },
  },
});

export const { setCredentials } = userSlice.actions;

export const signIn =
  (idInstance: string, apiTokenInstance: string) =>
  async (dispatch: AppDispatch) => {
    const loading = toast.loading("Loading...");
    try {
      const data = await GreenAPI.authorization(idInstance, apiTokenInstance);
      if (
        data.stateInstance === "authorized" ||
        data.stateInstance === "starting"
      ) {
        await dispatch(setCredentials({ idInstance, apiTokenInstance }));
      } else {
        toast.error("Failed to login");
      }
    } catch {
      toast.error("Failed to login");
    } finally {
      toast.dismiss(loading);
    }
  };

export default userSlice.reducer;

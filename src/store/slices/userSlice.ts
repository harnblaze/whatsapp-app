import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../index";
import GreenAPI from "../../services/greenAPI";

const initialState = {
  idInstance: "" as string,
  apiTokenInstance: "" as string,
};

export type userStateType = typeof initialState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<userStateType>) => {
      state.idInstance = action.payload.idInstance;
      state.apiTokenInstance = action.payload.apiTokenInstance;
    },
  },
});

export const { setCredentials } = userSlice.actions;

export const signIn =
  (idInstance: string, apiTokenInstance: string) =>
  async (dispatch: AppDispatch) => {
    const data = await GreenAPI.authorization(idInstance, apiTokenInstance);
    if (data.stateInstance === "authorized") {
      dispatch(setCredentials({ idInstance, apiTokenInstance }));
    }
  };

export default userSlice.reducer;

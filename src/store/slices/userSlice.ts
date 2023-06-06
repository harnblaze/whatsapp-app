import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

export default userSlice.reducer;

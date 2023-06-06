import { combineReducers, configureStore } from "@reduxjs/toolkit";
import chatReducer from "./slices/chatSlice";
import userReducer from "./slices/userSlice";

const rootReducer = combineReducers({
  user: userReducer,
  chat: chatReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

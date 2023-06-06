import { combineReducers, configureStore } from "@reduxjs/toolkit";
import chatReducer from "./slices/chatSlice";
import userReducer from "./slices/userSlice";
import messageReducer from "./slices/messageSlice";

const rootReducer = combineReducers({
  user: userReducer,
  chat: chatReducer,
  message: messageReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

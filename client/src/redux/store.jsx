import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import socketSlice from "./socketSlice";
import  messageSlice  from "./messageSlice";
import  themeSlice  from "./themeSlice";
export default configureStore({
  reducer: {
    theme:themeSlice,
    user: userSlice,
    socket: socketSlice,
    message: messageSlice
  },
});

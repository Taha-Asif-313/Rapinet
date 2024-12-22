import { createSlice } from "@reduxjs/toolkit";

export const socketSlice = createSlice({
  name: "socket",
  initialState: {
    socketId: "",
  },
  reducers: {
    setSocketId: (state, action) => {
      state.socketId = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSocketId } = socketSlice.actions;

export default socketSlice.reducer;

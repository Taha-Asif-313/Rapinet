import { createSlice } from "@reduxjs/toolkit";
const storeUser = JSON.parse(localStorage.getItem("userData"));
export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    authUser: null,
    selectedUser: null,
    otherUsers: [],
    onlineUsers: null,
  },
  reducers: {
    setauthUser: (state, action) => {
      state.authUser = action.payload;
    },
    setselectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    setotherUsers: (state, action) => {
      state.otherUsers = action.payload;
    },
    setonlineUsers: (state, action) => {
      state.onlineUsers = action.payload;
    },
    logIn: (state) => {
      state.isLogin = true;
    },
    logOutPannel: (state) => {
      state.isLogin = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  logIn,
  logOutPannel,
  setauthUser,
  setselectedUser,
  setonlineUsers,
  setotherUsers,
} = userSlice.actions;

export default userSlice.reducer;

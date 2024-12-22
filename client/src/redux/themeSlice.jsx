import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkTheme: true,
  },
  reducers: {
    setisDarkTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setisDarkTheme } = themeSlice.actions;

export default themeSlice.reducer;

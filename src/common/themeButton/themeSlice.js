import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice ({
  name: "theme",
  initialState: {
    isThemeDark: false,
  },
  reducers: {
    toggleTheme: state => {
      state.isThemeDark = !state.isThemeDark;
    },
  }
});

export const toggleTheme = themeSlice.actions;

const selectThemeState = state => state.theme;

export const selectIsThemeDark = selectThemeState.isThemeDark;

export default themeSlice.reducer;
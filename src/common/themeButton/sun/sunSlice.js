import { createSlice } from "@reduxjs/toolkit";

const sunSlice = createSlice({
  name: "sun",
  initialState: {
    isMoveRight: false,
  },
  reducers: {
    toggleSun: state => {
      state.isMoveRight = !state.isMoveRight;
    },
  }
});

export const { toggleSun } = sunSlice.actions;

const selectSunState = state => state.sun;

export const selectIsMoveRight = state => selectSunState(state).isMoveRight;

export default sunSlice.reducer;
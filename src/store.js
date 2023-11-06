import { configureStore } from "@reduxjs/toolkit";
import sunReducer from "./common/themeButton/sun/sunSlice";

const store = configureStore ({
  reducer: {
    sun: sunReducer,
  },
});

export default store;
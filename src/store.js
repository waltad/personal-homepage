import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./common/themeButton/themeSlice";

const store = configureStore ({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
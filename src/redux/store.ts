import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlices";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

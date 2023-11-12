// store.ts
import { configureStore } from "@reduxjs/toolkit";
import contentModalReducer from "./slices/contentModalSlices";
import signalModalReducer from "./slices/signalModalSlice";

export const store = configureStore({
  reducer: {
    contentModal: contentModalReducer,
    signalModal: signalModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

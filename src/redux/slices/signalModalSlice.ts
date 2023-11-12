import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSignalModalOpen: false,
};

const signalModalSlice = createSlice({
  name: "signal-modal",
  initialState,
  reducers: {
    openSignalModal: (state, action) => {
      state.isSignalModalOpen = true;
    },
    closeSignalModal: (state, action) => {
      state.isSignalModalOpen = false;
    },
  },
});

export const { openSignalModal, closeSignalModal }: any =
  signalModalSlice.actions;
export default signalModalSlice.reducer;

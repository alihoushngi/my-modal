import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "content-modal",
  initialState,
  reducers: {
    openContentModal: (state, action) => {
      state.isOpen = true;
    },
    closeContentModal: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { openContentModal, closeContentModal }: any = modalSlice.actions;
export default modalSlice.reducer;

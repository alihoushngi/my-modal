import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isContentModalOpen: false,
};

const contentModalSlice = createSlice({
  name: "content-modal",
  initialState,
  reducers: {
    openContentModal: (state, action) => {
      state.isContentModalOpen = true;
    },
    closeContentModal: (state, action) => {
      state.isContentModalOpen = false;
    },
  },
});

export const { openContentModal, closeContentModal }: any =
  contentModalSlice.actions;
export default contentModalSlice.reducer;

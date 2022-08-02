import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Modal } from "semantic-ui-react";
import { RootState } from "./store";

type Modal = {
  modalTypes: string;
  modalProps: {};
};

export const modalSlice = createSlice({
  name: "modal",
  initialState: null as null | {
    modalTypes: "TestModal" | "LoginForm";
    modalProps: {};
  },
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{
        modalTypes: "TestModal" | "LoginForm";
        modalProps: {};
      }>
    ) => {
      return {
        ...state,
        modalTypes: action.payload.modalTypes,
        modalProps: action.payload.modalProps,
      };
    },
    closeModal: () => {
      return null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;

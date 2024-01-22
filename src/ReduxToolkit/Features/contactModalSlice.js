import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAddModal: false,
  isEditModal: false,
  isDeletModal: false,
};

const contactModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    addOpenModal:(state) => {
        state.isAddModal = true;
    },
    addCloseModal:(state) => {
        state.isAddModal = false;
    },
    editOpenModal:(state) => {
        state.isEditModal = true;
    },
    editCloseModal:(state) => {
        state.isEditModal = false;
    },
    deletOpenModal:(state) => {
        state.isDeletModal = true;
    },
    deletCloseModal:(state) => {
        state.isDeletModal = false;
    },
  },
});

export const { addOpenModal, addCloseModal, editOpenModal, editCloseModal, deletOpenModal, deletCloseModal } = contactModalSlice.actions;
export default contactModalSlice.reducer;

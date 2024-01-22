import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../Features/contactModalSlice";

const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

export default store;

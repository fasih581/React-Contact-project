import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../Features/contactModalSlice";
import getSliceReducer from "../Features/Api/get.Slice";
import createContactReducer from "../Features/Api/createContact"

const store = configureStore({
  reducer: {
    modal: modalReducer,
    getMethod: getSliceReducer,
    postMethod: createContactReducer,
  },
});

export default store;


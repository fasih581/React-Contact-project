import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../Features/contactModalSlice";
import SliceReducer from "../Features/Api/Slice";
// import createContactReducer from "../Features/Api/createContact"
// import updateContactReducer from "../Features/Api/updateContact"

const store = configureStore({
  reducer: {
    modal: modalReducer,
    data: SliceReducer,
    // postMethod: createContactReducer,
    // updateMethod: updateContactReducer,
  },
});

export default store;
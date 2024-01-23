import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const createContact = createAsyncThunk("createContact", async (data) => {
  console.log("Request Payload:", data);
  try {
    const response = await axios.post("http://localhost:3001/contact", data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
});



const initialState = {
    isLoading: false,
    conatactData: [],
    isError: false,
};

const createContactSlice = createSlice({
  name: "createContacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createContact.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(createContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.conatactData.push(action.payload);
      state.isError = false;
      console.log("Server Response:", action.payload);
    });
    

    builder.addCase(createContact.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

  },
});

export default createContactSlice.reducer;
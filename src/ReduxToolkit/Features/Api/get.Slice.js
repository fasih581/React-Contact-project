import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk("getData", async ({ page, limit, search }) => {
  try {
    const response = await axios.get(`http://localhost:3001/contact?page=${page}&limit=${limit}&search=${search}`);
    return response.data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
});



const getSlice = createSlice({
  name: "getmethod",
  reducers: {},
  initialState: {
    isLoading: false,
    data: [],
    error: false,
    pageCount: 1,
    limit: 3, 
  },
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.contacts;
      state.pageCount = action.payload.pageCount;
      state.limit = action.payload.limit;
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.isLoading = false; // Set isLoading to false on rejection as well
      state.error = true;
    });
  },
});


export default getSlice.reducer;

// const getSlice = createSlice({
//   name: "getmethod",
//   reducers: {},
//   initialState: {
//     isLoading: false,
//     data: [],
//     error: false,
//   },
//   extraReducers: (builder) => {
//     builder.addCase(getData.pending, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(getData.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.data = action.payload.contacts;
//     });
//     builder.addCase(getData.rejected, (state, action) => {
//       state.error = true;
//     });
//   },
// });

// export default getSlice.reducer;


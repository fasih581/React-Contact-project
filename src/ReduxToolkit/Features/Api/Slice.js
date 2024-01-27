// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // GET All  contact
// export const getData = createAsyncThunk(
//   "getData",
//   async ({ page, limit, search}) => {
//     console.log("API LIMIT", limit);
//     try {
//       const response = await axios.get(
//         `http://localhost:3001/contact?page=${page}&limit=${limit}&search=${search}`
//       );
//       console.log("API response LIMIT", limit);
//       console.log("RES DATA", response);
//       return response.data;
//     } catch (error) {
//       console.error("Error", error);
//       throw error;
//     }
//   }
// );

// // GET:Id Single contact
// export const getContactById = createAsyncThunk(
//   "getContactById",
//   async ({ id }) => {
//     try {
//       console.log("Received ID:", id);

//       const response = await axios.get(`http://localhost:3001/contact/${id}`);
//       console.log("API Response:", response.data);

//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   }
// );

// // CREATE Contact
// export const createContact = createAsyncThunk("createContact", async (data) => {
//   console.log("Request Payload:", data);
//   try {
//     const response = await axios.post("http://localhost:3001/contact", data);
//     return response.data;
//   } catch (error) {
//     console.error("Error:", error);
//     throw error;
//   }
// });

// // UPDATE Contact
// export const updateContacts = createAsyncThunk(
//   "updateContacts",
//   async ({ id, data }) => {
//     try {
//       const response = await axios.put(
//         `http://localhost:3001/contact/${id}`,
//         data
//       );
//       console.log("edit", response.data);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   }
// );

// // delete contact
// export const deleteContact = createAsyncThunk("deleteContact", async (id) => {
//   try {
//     const response = await axios.delete(`http://localhost:3001/contact/${id}`);
//     console.log(response.data);
//     return id;
//   } catch (error) {
//     throw error;
//   }
// });

// const Slice = createSlice({
//   name: "data",
//   reducers: {},
//   initialState: {
//     isLoading: false,
//     data: [],
//     error: false,
//     pageCount: 1,
//     limit: 5,
//     search: "",
//   },
//   extraReducers: (builder) => {
//     builder
//     .addCase(getData.pending, (state) => {
//       state.isLoading = true;
//     })
//     .addCase(getData.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.data = action.payload.contacts;
//       state.pageCount = action.payload.pageCount;
//       state.limit = action.payload.limit;
//     })
//     .addCase(getData.rejected, (state) => {
//       state.isLoading = false;
//       state.error = true;
//     });
//     // builder.addCase(getData.pending, (state, action) => {
//     //   state.isLoading = true;
//     // });
//     // // builder.addCase(getData.fulfilled, (state, action) => {
//     // //   state.isLoading = false;
//     // //   state.data = action.payload.contacts;
//     // //   state.pageCount = Math.ceil(action.payload.metadata[0].pageCount); // Ensure pageCount is rounded up
//     // //   state.limit = action.payload.limit;
//     // // });
//     // builder.addCase(getData.rejected, (state, action) => {
//     //   state.isLoading = false;
//     //   state.error = true;
//     // });
    
//     // builder.addCase(getData.fulfilled, (state, action) => {
//     //   state.isLoading = false;
//     //   state.data = action.payload.contacts;
//     //   state.pageCount = Math.ceil(action.payload.pageCount); // Ensure pageCount is rounded up
//     //   state.limit = action.payload.limit;
//     // });

//     // GET:Id Single Contact
//     builder.addCase(getContactById.fulfilled, (state, action) => {
//       state.isLoading = false;
//     });

//     // CREATE Contact
//     builder.addCase(createContact.pending, (state) => {
//       state.isLoading = true;
//     });

//     builder.addCase(createContact.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.data = action.payload;
//       state.error = false;
//       console.log("Server Response:", action.payload);
//     });

//     builder.addCase(createContact.rejected, (state) => {
//       state.isLoading = false;
//       state.error = true;
//     });

//     // UPDATE Contact
//     builder
//       .addCase(updateContacts.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(updateContacts.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.data = action.payload;
//       })
//       .addCase(updateContacts.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       });

//     // delete contact
//     builder.addCase(deleteContact.pending, (state) => {
//       state.isLoading = true;
//       state.error = "";
//     });
//     builder.addCase(deleteContact.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.data = state.data.filter(
//         (contact) => contact._id !== action.payload
//       );
//     });
//     builder.addCase(deleteContact.rejected, (state, action) => {
//       state.isLoading = false;
//       state.error = "Some error occurred";
//     });
//   },
// });

// export default Slice.reducer;



import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// GET All  contact
export const getData = createAsyncThunk(
  "getData",
  async ({ page, limit, search}) => {
  
    try {
      const response = await axios.get(
        `http://localhost:3001/contact?page=${page}&limit=${limit}&search=${search}`
      );
      
      return response.data;
    } catch (error) {
      console.error("Error", error);
      throw error;
    }
  }
);

// GET:Id Single contact
export const getContactById = createAsyncThunk(
  "getContactById",
  async ({ id }) => {
    try {
      console.log("Received ID:", id);
      const response = await axios.get(`http://localhost:3001/contact/${id}`);
      console.log("API Response:", response.data);

      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// CREATE Contact
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

// UPDATE Contact
export const updateContacts = createAsyncThunk(
  "updateContacts",
  async ({ id, data }) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/contact/${id}`,
        data
      );
      console.log("edit", response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// delete contact
export const deleteContact = createAsyncThunk("deleteContact", async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3001/contact/${id}`);
    console.log(response.data);
    return id;
  } catch (error) {
    throw error;
  }
});

const Slice = createSlice({
  name: "data",
  reducers: {},
  initialState: {
    isLoading: false,
    data: [],
    error: false,
    totalCount: 0,
    page:1,
    limit: 5,
    search: "",
  },
  extraReducers: (builder) => {
    builder
    .addCase(getData.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.contacts;
      state.pageCount = action.payload.pageCount;
    })
    .addCase(getData.rejected, (state) => {
      state.isLoading = false;
      state.error = "Some error occurred";
    });

    // GET:Id Single Contact
    builder.addCase(getContactById.fulfilled, (state, action) => {
      state.isLoading = false;
    });

    // CREATE Contact
    builder.addCase(createContact.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(createContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = false;
      console.log("Server Response:", action.payload);
    });

    builder.addCase(createContact.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });

    // UPDATE Contact
    builder
      .addCase(updateContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(updateContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });

    // delete contact
    builder.addCase(deleteContact.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = state.data.filter(
        (contact) => contact._id !== action.payload
      );
    });
    builder.addCase(deleteContact.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "Some error occurred";
    });
  },
});

export default Slice.reducer;

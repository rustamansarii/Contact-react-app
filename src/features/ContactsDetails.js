import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// create action
export const createContact = createAsyncThunk(
  "createContact",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://65966bc96bb4ec36ca02930b.mockapi.io/contact-app",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
//read action
export const showUser=createAsyncThunk("showUser",async(arge,{rejectWithValue})=>{
    const response = await fetch("https://65966bc96bb4ec36ca02930b.mockapi.io/contact-app")
    try {
        const result =  await  response.json();
        console.log(result);
        return result ;
    } catch (error) {
        return rejectWithValue(error);
    }
})

//delele action
export const deleteUser=createAsyncThunk("deleteUser",async(id,{rejectWithValue})=>{
  const response = await fetch(`https://65966bc96bb4ec36ca02930b.mockapi.io/contact-app/${id}`,{method:"DELETE"})
  try {
      const result =  await  response.json();
      console.log(result);
      return result ;
  } catch (error) {
      return rejectWithValue(error);
  }
})

// update action
export const UpdatesingleUser = createAsyncThunk(
  "updateContact",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://65966bc96bb4ec36ca02930b.mockapi.io/contact-app/${data.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const ContactsDetails = createSlice({
  name: "contactsDetail",
  initialState: {
    user: [],
    loading: false,
    error: null,
    searchData:[],
  },
  reducers: {
    searchUser:(state,action)=>{
      state.searchData=action.payload;
      console.log(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createContact.pending, (state) => {
        // Since the loading state is a boolean, you can directly set it without causing serialization issues
        state.loading = true;
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.loading = false;
        state.user.push(action.payload);
      })
      .addCase(createContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //showuser
      .addCase(showUser.pending, (state) => {
        // Since the loading state is a boolean, you can directly set it without causing serialization issues
        state.loading = true;
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user=action.payload;
      })
      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
         //deleteuser
         .addCase(deleteUser.pending, (state) => {
          // Since the loading state is a boolean, you can directly set it without causing serialization issues
          state.loading = true;
        })
        .addCase(deleteUser.fulfilled, (state, action) => {
          state.loading = false;
          const {id}=action.payload;
          if(id){
            state.user=state.user.filter((ele)=>ele.id !== id)
          }
          // state.user=action.payload;
          console.log("delete"+action.payload)
        })
        .addCase(deleteUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        //udate
        .addCase(UpdatesingleUser.pending, (state) => {
          // Since the loading state is a boolean, you can directly set it without causing serialization issues
          state.loading = true;
        })
        .addCase(UpdatesingleUser.fulfilled, (state, action) => {
          state.loading = false;
          state.user.push(action.payload);
        })
        .addCase(UpdatesingleUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
  },
});

export default ContactsDetails.reducer;
export const {searchUser}=ContactsDetails.actions;

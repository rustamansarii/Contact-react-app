import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//create action
export const createContact = createAsyncThunk(
  "createContact",
  async (data, { rejectWithValue }) => {
    const reponse = await fetch(
      "https://65966bc96bb4ec36ca02930b.mockapi.io/contact-app",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await reponse.json();
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
  },
  reducers: {},
  extraReducers: {
    [createContact.pending]: (state) => {
      state.loading = true;
    },
    [createContact.fulfilled]: (state, action) => {
      state.loading = false;
      state.user.push(action.payload);
    },
    [createContact.rejected]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
  },
});
export default ContactsDetails.reducer;

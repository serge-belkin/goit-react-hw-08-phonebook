import { createSlice } from "@reduxjs/toolkit";
import { contactsAsyncThunk, addContacts, deleteContacts } from "./operations";

export const contactsInitstate = {
    contacts: [],
    isLoading: false,
    error: null,
    query: "",
}

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitstate,
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        }
    },
    extraReducers: {
    [contactsAsyncThunk.pending]: handlePending,
     [contactsAsyncThunk.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.error = null;
      state.contacts = payload;
        },
    [contactsAsyncThunk.rejected]: handleRejected,
    [addContacts.pending]: handlePending,
    [addContacts.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(payload);
        },
    [addContacts.rejected]: handleRejected,
    [deleteContacts.pending]: handlePending,
    [deleteContacts.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.error = null;
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== payload.id) 
        },
    [deleteContacts.rejected]: handleRejected,
    },
});

export const { setQuery } = contactsSlice.actions;

export default contactsSlice.reducer;

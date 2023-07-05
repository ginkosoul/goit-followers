import { createSlice } from "@reduxjs/toolkit";
import { getUsersThunk, updateUserThunk } from "./operations";
import { toast } from "react-hot-toast";
import { FILTER } from "../../defaults";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    items: [],
    page: 0,
    filter: FILTER.ALL,
    loading: false,
  },
  reducers: {
    nextPage: (state) => {
      state.page = state.page + 1;
    },
    resetPage: (state) => {
      state.page = 0;
    },
    updateFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getUsersThunk.pending, pending)
      .addCase(getUsersThunk.fulfilled, getUsersFulfilled)
      .addCase(getUsersThunk.rejected, rejected)
      .addCase(updateUserThunk.pending, pending)
      .addCase(updateUserThunk.fulfilled, updateUserFulfilled)
      .addCase(updateUserThunk.rejected, rejected),
});

function getUsersFulfilled(state, { payload }) {
  state.loading = false;
  state.items = payload;
}

function updateUserFulfilled(state, { payload }) {
  state.loading = false;
  state.items = state.items.map((e) => (e.id === payload.id ? payload : e));
}

function rejected(state, { payload }) {
  state.loading = false;
  toast.error(`Error:${payload.message}`);
}

function pending(state) {
  state.loading = true;
}

export const { nextPage, updateFilter, resetPage } = userSlice.actions;

export const usersReducer = userSlice.reducer;

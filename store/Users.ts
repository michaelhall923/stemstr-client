import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./Store";
import { HYDRATE } from "next-redux-wrapper";

// Type for User
export interface User {
  pk: string; // hex
  npub: string;
  name?: string;
  username?: string;
  display_name?: string;
  about?: string;
  picture?: string;
  website?: string;
  banner?: string;
  nip05?: string;
  lud06?: string;
  lud16?: string;
}

// Type for our state
export interface UsersState {
  users: Array<User>;
}

// Initial state
const initialState: UsersState = {
  users: [],
};

// Actual Slice
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.users,
      };
    },
  },
});

export const { addUser } = usersSlice.actions;

export const selectUsers = (state: AppState) => state.users.users;

export default usersSlice.reducer;

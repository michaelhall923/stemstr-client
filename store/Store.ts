import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { usersSlice } from "./Users";
import { createWrapper } from "next-redux-wrapper";
import { authSlice } from "./Auth";

const makeStore = () =>
  configureStore({
    reducer: {
      [usersSlice.name]: usersSlice.reducer,
      [authSlice.name]: authSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const reduxWrapper = createWrapper<AppStore>(makeStore);

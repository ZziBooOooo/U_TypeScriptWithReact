import { configureStore } from "@reduxjs/toolkit";
import { sessionSlice } from "./session-slice.ts";

export const store = configureStore({
  reducer: {
    session: sessionSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

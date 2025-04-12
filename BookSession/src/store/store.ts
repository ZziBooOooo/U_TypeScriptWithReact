import { configureStore } from "@reduxjs/toolkit";
import { sessionSlice } from "./session-slice.ts";

export const store = configureStore({
  reducer: {
    session: sessionSlice.reducer,
  },
});

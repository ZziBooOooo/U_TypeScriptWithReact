import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Session = {
  id: string;
  title: string;
  summary: string;
  description: string;
  date: string;
  image: string;
  duration: number;
};

type BookItem = {
  id: string;
  name: string;
  email: string;
  title: string;
  summary: string;
  date: string;
};
type BookState = {
  bookLists: BookItem[];
};

const initialState: BookState = {
  bookLists: [],
};

export const sessionSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addSession(
      state,
      action: PayloadAction<{
        id: string;
        name: string;
        email: string;
        title: string;
        summary: string;
        date: string;
      }>
    ) {
      const itemIndex = state.bookLists.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
        state.bookLists.push({ ...action.payload });
      } else {
        return;
      }
    },

    deleteSession(state, action: PayloadAction<{ id: string }>) {
      const itemIndex = state.bookLists.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.bookLists.splice(itemIndex, 1);
      }
    },
  },
});

export const { addSession, deleteSession } = sessionSlice.actions;

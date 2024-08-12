import { configureStore } from "@reduxjs/toolkit";
import booksSliceReducer from "../features/booksSlice";

export const store = configureStore({
  reducer: { bookList: booksSliceReducer },
});

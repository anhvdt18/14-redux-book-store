import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../apiService";

export const newBooksList = createAsyncThunk(
  "bookList/newBookList",
  async (state) => {
    let url = `/books?_page=${state.pageNum}&_limit=${state.limit}`;
    if (state.query) url += `&q=${state.query}`;
    const response = await api.get(url);
    return response.data;
  }
);

const initialState = {
  books: [],
  pageNum: 1,
  totalPages: 10,
  limit: 10,
  loading: false,
  query: "",
  errorMessage: "",
};

export const booksSlice = createSlice({
  name: "bookList",
  initialState,
  reducers: {
    setStates(state, action) {
      state.pageNum = action.payload;
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(newBooksList.fulfilled, (state, action) => {
      state.books = action.payload;
    });
  },
});

// export const { setPageNums } = booksSlice.actions;
// export const selectBooks = (state) => state.bookList.books;
export default booksSlice.reducer;

//         id: payload.id,
//         imageLink: payload.imageLink,
//         title: payload.title,
//         author: payload.author,
//         year: payload.year,
//         country: payload.country,
//         pages: payload.pages,
//         language: payload.language,

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Book from '../entities/Book';
import { APIClient } from '../services/api-client';

interface LibraryState {
  books: Book[];
  searchQuery: string;
  loading: boolean;
}

const initialState: LibraryState = {
  books: [],
  searchQuery: '',
  loading: false,
};

const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    // loadingBooks(state) {
    //   state.loading = true;
    // },
  },
  extraReducers: (builder) =>
    builder
      .addCase(updateBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload; //TODO?: ? action.payload : [];
      })
      .addCase(updateBooks.rejected, (_, action) => {
        //TODO: throw error to REAct Router or display the error to user by storing it here in Slice(BETTER?)
        console.error(action.error.message);
      }),
});

const apiClient = new APIClient('/search.json');

export const updateBooks = createAsyncThunk(
  'library/updateBooks',
  async function (query: string) {
    const { books } = apiClient.getSearchResult(query);
    return books;
  }
);

export default librarySlice.reducer;

import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LIMIT } from '../constants';
import Book from '../entities/Book';
import searchService from '../services/search-service';
import { RootState } from '../store';

interface LibraryState {
  books: Book[];
  autocomplete: Book[];
  searchQuery: string;
  loading: boolean;
}

const initialState: LibraryState = {
  books: [],
  autocomplete: [],
  searchQuery: '',
  loading: false,
};

const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    updateAutocomplete(state, action: PayloadAction<Book[]>) {
      state.autocomplete = action.payload;
    },
    closeAutocomplete(state) {
      state.autocomplete = [];
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(updateBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload ? action.payload : [];
      })
      .addCase(updateBooks.rejected, (_, action) => {
        throw new Error(action.error.message);
      }),
});

export const updateBooks = createAsyncThunk(
  'library/updateBooks',
  async function (query: string) {
    const books = searchService.getSearchResult({
      params: { q: query, limit: LIMIT },
    });
    return books;
  }
);

export const getSearchBooks = (state: RootState) => state.library.books;

export const getAutocomplete = (state: RootState) => state.library.autocomplete;

export const getSearchLoadingState = (state: RootState) =>
  state.library.loading;

export const { updateAutocomplete, closeAutocomplete } = librarySlice.actions;
export default librarySlice.reducer;

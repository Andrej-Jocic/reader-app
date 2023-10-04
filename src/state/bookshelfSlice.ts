import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import Book from '../entities/Book';
import { RootState } from '../store';

interface BookshelfState {
  bookmarkedBookIds: string[];
  bookmarkedBooks: Book[];
}

const initialState: BookshelfState = {
  bookmarkedBookIds: [],
  bookmarkedBooks: [],
};

interface toggleBookmarkAction {
  id: string;
}

const bookshelfSlice = createSlice({
  name: 'bookshelf',
  initialState,
  reducers: {
    toggleBookmark(state, action: PayloadAction<toggleBookmarkAction>) {
      const index = state.bookmarkedBookIds.indexOf(action.payload.id);

      if (index === -1) {
        // If the ID is not in the array, add it
        state.bookmarkedBookIds.push(action.payload.id);
      } else {
        // If the ID is already in the array, remove it
        state.bookmarkedBookIds.splice(index, 1);
      }
    },
    toogleBook(state, action: PayloadAction<Book>) {
      const index = state.bookmarkedBooks.findIndex(
        (book) => book.id === action.payload.id
      );

      if (index === -1) {
        // If the object with the same ID doesn't exist, add it to the array
        state.bookmarkedBooks.push(action.payload);
      } else {
        // If the object with the same ID exists, remove it from the array
        state.bookmarkedBooks.splice(index, 1);
      }
    },
  },
});

export const getBookmarkedBookIds = (state: RootState) =>
  state.bookshelf.bookmarkedBookIds;

export const getBookmarkedBooks = (state: RootState) =>
  state.bookshelf.bookmarkedBooks;

export const { toggleBookmark, toogleBook } = bookshelfSlice.actions;
export default bookshelfSlice.reducer;
